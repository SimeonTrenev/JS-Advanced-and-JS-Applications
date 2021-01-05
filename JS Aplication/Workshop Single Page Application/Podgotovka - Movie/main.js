let userModel = firebase.auth();
let db = firebase.firestore();

const app = Sammy('#container', function () {
    this.use('Handlebars', 'hbs')

    //Home router

    this.get('#/home', function (context) {

        db.collection('movies')
            .get()
            .then(response =>{
                context.movies = response.docs.map(movie => {return {id : movie.id, ...movie.data() }})
                extendContext(context)
            .then(function () {
                this.partial('./templates/home.hbs')
            });
        })
        .catch(errorHandler)
        
    })

    //User router

    this.get('#/register', function (context) {
        extendContext(context)
            .then(function() {
                this.partial('./templates/register.hbs')
            })
            .catch(errorHandler)
    })

    this.get('#/login', function (context) {
        extendContext(context)
            .then(function () {
                this.partial('./templates/login.hbs')
            })
            .catch(errorHandler)
    })
    
    this.post('#/register', function(context) {
        const {email, password, repeatPassword} = context.params;

        if(password !== repeatPassword || password.length < 6 || email === ''){
            return;
        }

        userModel.createUserWithEmailAndPassword(email, password)
            .then(response => {
                alert('Successful registration!')
                this.redirect('#/login')
            })
            .catch(errorHandler)
    })

    this.post('#/login', function (context) {
        const {email, password} = context.params;

        userModel.signInWithEmailAndPassword(email, password)
            .then(userData => {
                saveUserData(userData)
                alert('Login successful.')
                this.redirect('#/home')
            })
            .catch(errorHandler)
    })

    this.get('#/logout', function (context) {
        userModel.signOut()
            .then(userData =>{
                clearUserData(userData)
                alert('Successful logout')
                this.redirect('#/login')
            })
    })


    //Movie router

    this.get('#/add-movie', function (context) {
        extendContext(context)
            .then(function() {
                this.partial('./templates/addMovie.hbs')
            })
    })

    this.post('#/add-movie', function (context) {
        const {title, imageUrl, description} = context.params;

        db.collection('movies')
            .add({
                title,
                imageUrl,
                description,
                creator: getUserData().uid,
                peopleLiked: [],
                likes: 0
            })
            .then(ress => {
                alert('Created successfully!')
                this.redirect('#/home')
            })
            .catch(errorHandler)
    })

    this.get('#/details/:movieId', function (context) {

        const {movieId} = context.params;

        db.collection('movies')
            .doc(movieId)
            .get()
            .then(response => {
                
                const {uid} = getUserData();

                let actualMovie = response.data();
                let isImACreator = actualMovie.creator === uid;
                let index = actualMovie.peopleLiked.indexOf(uid);

                let isImInTheLikedList = index > -1

                
                context.movie = {...actualMovie, id:movieId, isImACreator, isImInTheLikedList}
                
                extendContext(context)
                .then(function() {
                    this.partial('./templates/details.hbs')
                }) 
            })
            .catch(errorHandler)  
    })

    // this.get('#/edit-movie/:id', function(context) {
    //     extendContext(context)
    //         .then(function () {
    //             this.partial('./templates/editMovie.hbs')
    //         })
    // })

    this.get('#/edit/:movieId', function(context) {
        const {movieId} = context.params;
        
        db.collection('movies')
            .doc(movieId)
            .get()
            .then(response => {
                
                context.movie = { id: movieId, ...response.data() }

                extendContext(context)
                    .then(function() {
                    this.partial('./templates/editMovie.hbs')
            }) 
        })
        .catch(errorHandler)

        
    })

    this.post('#/edit/:movieId', function (context) {
        const {movieId, title, imageUrl, description} = context.params;

        db.collection('movies')
            .doc(movieId)
            .get()
            .then(response => {
                return db.collection('movies')
                        .doc(movieId)
                        .set({
                            ...response.data(),
                            title,
                            imageUrl,
                            description
                        })  
            })
            .then(ress => {
             alert('Eddited successfully!')
             this.redirect(`#/details/${movieId}`)               
            })
            .catch(errorHandler)
    })

    this.get('#/delete/:movieId', function(context) {
        const {movieId} = context.params;

        db.collection('movies')
            .doc(movieId)
            .delete()
            .then(response => {
                alert('Deleted successfully')
                this.redirect('#/home')
            })
            .catch(errorHandler)
    })

    this.get('#/like/:movieId', function (context) {
        const {movieId} = context.params;
        const {uid} = getUserData();

        db.collection('movies')
            .doc(movieId)
            .get()
            .then(response => {
                const movieData = { ...response.data() }
                movieData.peopleLiked.push(uid)
                movieData.likes++;
                
                return db.collection('movies')
                        .doc(movieId)
                        .set(movieData)
            })
            .then(response => {
                alert('Liked successfully')
                this.redirect(`#/details/${movieId}`)
            })
            .catch(errorHandler)
    })

    

});

(() => {
app.run('#/home');
})();

function extendContext(context) {
const user = getUserData();

context.isLoggedIn = Boolean(user);
context.userEmail = user ? user.email : "";

return context.loadPartials({
    navigation: './partials/navigation.hbs',
    footer: './partials/footer.hbs'
    })
}

function getUserData() {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null;
}

function errorHandler(error){
    alert(error)
}

function saveUserData(userData) {
    const {
        user: {email, uid}
    } = userData;
    localStorage.setItem('user', JSON.stringify({ email, uid }))
}

function clearUserData() {
    this.localStorage.removeItem('user')
}