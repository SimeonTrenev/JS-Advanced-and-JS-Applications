const userModel = firebase.auth();
const db = firebase.firestore();

const app = Sammy('#root', function () {

    this.use('Handlebars', 'hbs');
    //Home routing

    this.get('#/home', function (context) {

        db.collection('articles')
            .get()
            .then((response) => {
                const result = {
                    js: [],
                    python: [],
                    csharp : [],
                    java: []
                };

                const category = {
                    'JavaScript' : 'js',
                    'Python' : 'python',
                    'C#' : 'csharp',
                    'Java' : 'java'
                };
                if(Boolean(getUserData())){
                const articlesData = response.docs.map(article => {return { id: article.id, ...article.data(), isIAmACreator: article.data().creator ===
                    getUserData().email }});

                for(let categ of articlesData){
                    
                    result[category[categ.category]].push(categ);
                }
                
                
                context.articles = result;
            }

                extendContext(context)
                    .then(function () {
                    this.partial('./templates/home.hbs')
                });
             })
             .catch(errorHandler)
    });

    //User routing

    this.get('#/login', function (context) {

        extendContext(context)
            .then(function () {
                this.partial('./templates/login.hbs')
            })
            .catch(errorHandler)
        
    })

    this.post('#/login', function (context) {
        const {email, password} = context.params;

        userModel.signInWithEmailAndPassword(email, password)
            .then(userData => {
                saveUserData(userData)
                this.redirect('#/home')
            })
            .catch(errorHandler)
    })

    this.get('#/register', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('./templates/register.hbs')
            })
        
    })

    this.post('#/register', function (context) {
        const {email, password, repPass} = context.params;

        if(password !== repPass){
            return;
        }

        userModel.createUserWithEmailAndPassword(email, password)
            .then(response => {
                this.redirect('#/login')
            })
            .catch(errorHandler)

    })

    this.get('#/logout', function (context) {
        userModel
        .signOut()
        .then(() => {
           clearUserData();
           this.redirect('#/login')
       })
       .catch(errorHandler)
    })

    //Library routing

    this.get('#/create', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('./templates/createArticle.hbs')
            })
        
    })

    this.post('#/create', function (context) {
        const {title, category, content} = context.params;
       
        
        db.collection('articles')
            .add({
                title,
                category,
                content,
                creator: getUserData().email,
            })
            .then(() => {
                this.redirect('#/home')
            })
            .catch(errorHandler)
    })

    this.get('#/edit/:articleId', function (context) {
        const {articleId} = context.params;

        db.collection('articles')
            .doc(articleId)
            .get()
            .then(response => {
                context.article = {id: articleId, ...response.data()}
                extendContext(context)
                    .then(function() {
                        this.partial('./templates/edit.hbs')
                    })
                    
            })
            .catch(errorHandler)
    })

    this.post('#/edit/:articleId', function (context) {
        const {articleId, title, content, category} = context.params;

        db.collection('articles')
            .doc(articleId)
            .get()
            .then(response => {
                return db.collection('articles')
                        .doc(articleId)
                        .set({
                            ...response.data(),
                            title,
                            content,
                            category
                        })
            })
            .then(ress => {
                this.redirect('#/home')
            })
            .catch(errorHandler)
    })

    this.get('#/details/:articleId', function (context) {
        const {articleId} = context.params;
        
        db.collection('articles')
            .doc(articleId)
            .get()
            .then(response => {
                const {email} = getUserData();

                const actualArticle = response.data();
                const isIAmACreator = actualArticle.creator === email;
                console.log(isIAmACreator)
                context.article = {...actualArticle, isIAmACreator, id: articleId}

                extendContext(context)
                    .then(function () {
                        this.partial('./templates/details.hbs')
                    })
            })

    })

    this.post('#/details/:articleId', function(context) {
        const {articleId, title, category, content} = context.params;

        db.collection('articles')
                .doc(articleId)
                .get()
                .then(response => {
                    return db.collection('articles')
                                .doc(articleId)
                                .set({
                                    ...response.data(),
                                    title,
                                    category,
                                    content
                                })
                })
                .then(ress => {
                    this.redirect(`#/details/${articleId}`)
                })
    })

    this.get('#/delete/:articleId', function (context) {
        const {articleId} = context.params;

        db.collection('articles')
            .doc(articleId)
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
  context.userEmail = user ? user.email : "";
  
    return  context.loadPartials({
        header: './parsials/header.hbs',
        footer: './parsials/footer.hbs'
    })
}

function getUserData() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

function errorHandler(error) {
    alert(error)
}

function saveUserData(userData) {
    const {
        user : { email, uid }
    } = userData;
    localStorage.setItem('user', JSON.stringify({ email, uid }))
}

function clearUserData() {
    window.localStorage.removeItem('user')
}