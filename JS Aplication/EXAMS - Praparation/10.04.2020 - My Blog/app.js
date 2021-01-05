const userModel = firebase.auth();
const db = firebase.firestore();

const app = Sammy('#root', function () {
    this.use('Handlebars', 'hbs');
    
    //Home router
    this.get('#/home', function (context) {

        db.collection('posts')
            .get()
            .then(response => {
                if(Boolean(getUserData())){
                context.posts = response.docs.map(post => {return {id: post.id, ...post.data(), isIAmACreator: post.data().creator ===
                getUserData().uid}})
                }
                extendContext(context)

                    .then(function() {
                    this.partial('./templates/home.hbs')
                });
            })
            .catch(errorHandler)
        
    })
    //User router
    this.get('#/register', function(context){
        extendContext(context)
            .then(function() {
                this.partial('./templates/register.hbs')
            })
    })

    this.post('#/register', function(context) {
        const {email, password, repeatPassword} = context.params;
        console.log(email)
        if(password !== repeatPassword){
            return;
        }

        userModel
        .createUserWithEmailAndPassword(email,password)
        .then(response => {
            this.redirect('#/login')
        })
        .catch(errorHandler)

    })

    this.get('#/login', function(context) {
        extendContext(context)
            .then(function() {
                this.partial('./templates/login.hbs')
            })
            .catch(errorHandler)
    })

    this.post('#/login', function(context) {
        const {email, password} = context.params;

        userModel.signInWithEmailAndPassword(email, password)
            .then(userData => {
                saveUserData(userData)
                this.redirect('#/home')
            })
            .catch(errorHandler)
    })

    this.get('#/logout', function(context) {
        userModel
        .signOut()
        .then(() => {
            clearUserData();
            this.redirect('#/home')
        })
        .catch(errorHandler)
    })

    //Posts router

    // this.get('#/create', function(context) {
    //     extendContext(context)
    //         .then(function() {
    //             this.partial('./templates/createForm.hbs')
    //         })
    // })

    this.post('#/create', function(context) {
        const {title, category, content} = context.params;

        db.collection('posts')
            .add({
                title,
                category,
                content,
                creator : getUserData().uid
            })
            .then(ress =>{
                this.redirect('#/home')
            })
            .catch(errorHandler)
    })

    this.get('#/edit/:postId', function(context) {
        const {postId} = context.params;

        db.collection('posts')
            .doc(postId)
            .get()
            .then(response => {
                context.post = {id: postId, ...response.data()}
                extendContext(context)
                    .then(function() {
                        this.partial('./templates/edit.hbs')
                    })
                    .catch(errorHandler)
            })
    })

    this.post('#/edit/:postId', function(context) {
        const {postId, title, category, content} = context.params;
        

        db.collection('posts')
            .doc(postId)
            .get()
            .then(response => {
                return db.collection('posts')
                            .doc(postId)
                            .set({
                                ...response.data(),
                                title,
                                category,
                                content
                            })
            })
            .then(ress => {
                this.redirect('#/home')
            })
            .catch(errorHandler)
    })

    this.get('#/details/:postId', function(context) {
        const {postId} = context.params;

        db.collection('posts')
            .doc(postId)
            .get()
            .then(response => {
                const {uid} = getUserData;

                const currentPost = response.data();
                const isIAmACreator = currentPost.creator === uid;

                context.post = {...currentPost, id: postId, isIAmACreator}

                extendContext(context)
                    .then(function () {
                        this.partial('./templates/details.hbs')
                    })
                    // .catch(errorHandler)
            })
    })

    this.post('#/details/:postId', function(context) {
        const {postId, title, category, content} = context.params;

        db.collection('posts')
            .doc(postId)
            .get()
            .then(reponse => {
                return db.collection('posts')
                            .doc(postId)
                            .set({
                                ...response.data(),
                                title,
                                category,
                                content
                            })
            })
            .then(ress => {
                this.redirect(`#/details/${postId}`)
            })
            // .catch(errorHandler)

    })
    
    this.get('#/delete/:postId', function(context) {
        const {postId} = context.params;

        db.collection('posts')
            .doc(postId)
            .delete()
            .then(response => {
                this.redirect('#/home')
            })
            .catch(errorHandler)
    })


});

(() => {
app.run('#/home')
})();

function extendContext(context){
    const user = getUserData();
    
    context.isLoggedIn = Boolean(user);
    context.userEmail = user ? user.email : '';

    return context.loadPartials({
        header: './partials/header.hbs'
    })
}

function getUserData() {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null;
}

function errorHandler(err){
    alert(err)
}

function saveUserData(userData){
    const {
        user : {email, uid}
    } = userData;

    localStorage.setItem('user', JSON.stringify({ email, uid}))
}

function clearUserData() {
    this.localStorage.removeItem('user')
}