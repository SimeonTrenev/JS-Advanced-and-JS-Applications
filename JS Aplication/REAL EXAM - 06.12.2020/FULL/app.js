const userModel = firebase.auth();
const db = firebase.firestore();

const app = Sammy("#container", function () {
  this.use("Handlebars", "hbs");

  //Home router
  this.get('#/home', function(context) {

    db.collection('destinations')
      .get()
      .then(response => {
        context.destinations = response.docs.map(destination => {return {id: destination.id, ...destination.data()}})
        extendContext(context)
          .then(function() {
          this.partial('./templates/home.hbs')
          });
      })
      .catch(errorHandler)

    
  })
  //User router
  this.get('#/register', function(context) {
      extendContext(context)
        .then(function() {
          this.partial('./templates/register.hbs')
        })
  })

  this.get('#/login', function(context) {
    extendContext(context)
        .then(function() {
          this.partial('./templates/login.hbs')
        })
  })

  this.post('#/register', function(context){
      const {email, password, rePassword} = context.params;

      if(password !== rePassword || password === '' || email === ''){
        return;
      }

      let emailField = document.getElementById('email')
      let passwordField = document.getElementById('password')
      let rePasswordField = document.getElementById('rePassword')


      userModel
        .createUserWithEmailAndPassword(email, password)
        .then(response => {
          setTimeout(function(){ alert("User registration successful."); }, 1000);
          emailField.value = '';
          passwordField.value = '';
          rePasswordField.value = '';
          this.redirect('#/home')
        })
        .catch(errorHandler)
  })

  this.post('#/login', function(context) {
    const {email, password} = context.params;

    let emailField = document.getElementById('email')
    let passwordField = document.getElementById('password')
    

    userModel
      .signInWithEmailAndPassword(email, password)
      .then(userData => {
        saveUserData(userData)
        setTimeout(function(){ alert("Login successful."); }, 1000);
        emailField.value = '';
        passwordField.value = '';
        
        this.redirect('#/home')
      })
      .catch(errorHandler)
  })

  this.get('#/logout', function(context) {
    userModel
      .signOut()
      .then(() => {
        clearUserData();
        setTimeout(function(){ alert("Logout successful."); }, 1000);
        this.redirect('#/login')
      })
      .catch(errorHandler)
  })

  //Destinations router

  this.get('#/create', function(context) {
      extendContext(context)
        .then(function() {
          this.partial('./templates/create.hbs')
        })
  })

  this.post('#/create', function(context) {
    const {destination, city, duration, departureDate, imgUrl} = context.params;

    if(destination === '' || city === '' || duration === '' || departureDate === '' || imgUrl === '') {
      return;
    }

    if(duration < 1 || duration > 100){
      return
    }

    db.collection('destinations')
        .add({
          destination,
          city,
          duration,
          departureDate,
          imgUrl,
          creator : getUserData().uid
        })
        .then(response => {
          this.redirect('#/home')
        })
        .catch(errorHandler)
  })

  this.get('#/edit/:destinationId', function(context){
      const {destinationId} = context.params;

      db.collection('destinations')
        .doc(destinationId)
        .get()
        .then(response => {
          context.destination = {id: destinationId, ...response.data()}
            extendContext(context)
              .then(function() {
                this.partial('./templates/edit.hbs')
              })
        })
  })

  this.post('#/edit/:destinationId', function(context) {
      const {destinationId , destination, city, duration,departureDate,  imgUrl} = context.params;
      
      db.collection('destinations')
        .doc(destinationId)
        .get()
        .then(response => {
          return db.collection('destinations')
                  .doc(destinationId)
                  .set({
                    ...response.data(),
                    destination,
                    city,
                    duration,
                    departureDate,
                    imgUrl
                  })
        })
        .then(ress => {
          setTimeout(function(){ alert('Successfully edited destination.'); }, 1000);
          this.redirect(`#/details/${destinationId}`)
        })
        .catch(errorHandler)

  })

  this.get('#/details/:destinationId', function(context) {
    const {destinationId} = context.params;

    db.collection('destinations')
        .doc(destinationId)
        .get()
        .then(response => {
          const {uid} = getUserData();

          let actualDestination = response.data();

          let isIAmACreator = actualDestination.creator === uid;

          context.destination = {...actualDestination, isIAmACreator, id: destinationId};

          extendContext(context)
            .then(function() {
              this.partial('./templates/details.hbs')
            });
        })
  })

  this.get('#/dashboardDetails', function(context) {
     db.collection('destinations')
      .get()
      .then(response => {
        const {uid} = getUserData();
       
        context.destinations = [];

        response.forEach(dest => {
          if(uid === dest.data().creator){
            context.destinations.push({id: dest.id, ...dest.data()})
            }
        })
        
        extendContext(context)
          .then(function() {
          this.partial('./templates/dashboardDetails.hbs')
          });
    })
    .catch(errorHandler)
  })

  this.get('#/delete/:destinationId', function(context) {
    const {destinationId} = context.params;

    db.collection('destinations')
      .doc(destinationId)
      .delete()
      .then(response => {
        setTimeout(function(){ alert('Destination deleted.'); }, 1000);
        this.redirect('#/dashboardDetails')
      })
      .catch(errorHandler)
  })





});

(() => {
  app.run("#/home");
})();

function extendContext(context) {
  const user = getUserData();

  context.isLoggedIn = Boolean(user);
  context.userEmail = user ? user.email : "";

  return context.loadPartials({
    header: "./partials/header.hbs",
    footer: "./partials/footer.hbs",
  });
}

function getUserData() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

function errorHandler(err) {
  alert(err);
}

function saveUserData(userData) {
  const {
    user: { email, uid },
  } = userData;
  localStorage.setItem("user", JSON.stringify({ email, uid }));
}

function clearUserData() {
  window.localStorage.removeItem("user");
}


