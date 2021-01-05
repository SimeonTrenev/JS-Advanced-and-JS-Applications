const userModel = firebase.auth();
const db = firebase.firestore();

const app = Sammy('#root', function () {
    this.use('Handlebars', 'hbs');

    //Home routes

    this.get('#/home', function(context) {
        extendContext(context)
            .then(function() {
                this.partial('./templates/home.hbs')
            })
            .catch(errorHandler)
    })

    //User routes

    this.get('#/register', function(context) {
        extendContext(context)
            .then(function () {
                this.partial('./templates/register.hbs')
            })
            .catch(errorHandler)
    })

    this.get('#/login', function(context) {
        extendContext(context)
            .then(function() {
                this.partial('./templates/login.hbs')
            })
    })

    this.post('#/register', function(context) {
        const {username, password,repeatPassword} = context.params;
        
        if(password !== repeatPassword || username.length < 3 || password.length < 3){
            return;
        }

        userModel.createUserWithEmailAndPassword(username, password)
                .then(response => {
                    alert('User registration successful')
                    this.redirect('#/home')
                })
                .catch(errorHandler)

    })

    this.post('#/login', function(context) {
        const {username, password} = context.params;
        let usernameField = document.getElementById('inputUsername')
        let passwordField = document.getElementById('inputPassword')

        userModel.signInWithEmailAndPassword(username, password)
                .then(userData => {
                    saveUserData(userData)
                    setTimeout(function(){ alert("Hello"); }, 1000)
                    usernameField.value = ''
                    passwordField.value = ''
                })
                .catch(errorHandler)
    })

    this.get('#/logout', function(context) {
        userModel.signOut()
                .then(() => {
                    cleaUserData();
                    alert('Logout successful.')
                })
                .catch(errorHandler)
    })

    //Dashboard routes

    this.get('#/dashboards', function(context) {
        extendContext(context)
            .then(function() {
                this.partial('./templates/dashboards.hbs')
            })
    })

});

(() => {
app.run('#/home') 
})();

function extendContext(context) {
    const user = getUserData();

    context.isLoggedIn = Boolean(user)
    context.username = user ? user.username : '';

    return context.loadPartials({
        header : './partial/header.hbs',
        footer : './partial/footer.hbs'
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
        user : {username, uid}
    } = userData;

    localStorage.setItem('user', JSON.stringify({username, uid}))
}

function cleaUserData() {
    this.localStorage.removeItem('user')
}