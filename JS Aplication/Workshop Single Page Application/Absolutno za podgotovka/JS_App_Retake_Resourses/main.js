const userModel = firebase.auth();
const db = firebase.firestore();

const app = Sammy("#root", function () {
  this.use("Handlebars", "hbs");

    //Home router

  this.get("#/home", function (context) {
    db.collection('offers')
    .get()
    .then(response => {
        context.offers = response.docs.map((offer) => {return {id: offer.id, ...offer.data()}})
        extendContext(context)
      .then(function () {
        this.partial("./templates/home.hbs");
      })
    })
    .catch(errorHandler);
  });


  //User rauters

  this.get("#/register", function (context) {
    extendContext(context)
      .then(function () {
        this.partial("./templates/register.hbs");
      })
      
  });

  this.get("#/login", function (context) {
    extendContext(context)
      .then(function () {
        this.partial("./templates/login.hbs");
      })
      .catch(errorHandler);
  });

  this.get('#/logout', function () {
    userModel
      .signOut()
      .then(() => {
          clearUserData();
          this.redirect('#/home')
      })
      .catch(errorHandler)
  })

  this.post("#/register", function (context) {
    const { email, password, rePassword } = context.params;

    if (password !== rePassword) {
      return;
    }

    userModel
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        this.redirect("#/login");
      })
      .catch(errorHandler);
  });

  this.post("#/login", function (context) {
    const {email, password} = context.params;
    
    userModel
    .signInWithEmailAndPassword(email, password)
          .then(userData => {
              saveUserData(userData);
              this.redirect('#/home')
          })
          .catch(errorHandler)

  });

  //Offers routers


  this.get("#/create-offer", function (context) {
    extendContext(context).then(function () {
      this.partial("./templates/createOffer.hbs");
    });
  });

  this.post('#/create-offer', function (context) {
    const {productName, price, description, imageUrl, brand} = context.params;

    db.collection('offers')
        .add({
            productName,
            price,
            description,
            imageUrl,
            brand,
            salesman: getUserData().uid,
            clients: []
        })
        .then(createdProducts => {
            this.redirect('#/home')
        })
        .catch(errorHandler)
  })
 
  this.get("#/edit-offer/:id", function (context) {
    extendContext(context).then(function () {
      this.partial("./templates/editOffer.hbs");
    });
  });
  
  this.get("#/details/:offerId", function (context) {

    const {offerId} = context.params;

    db.collection('offers')
        .doc(offerId)
        .get()
        .then(response => {
            const {uid} = getUserData();
            const actualOfferData = response.data();

            let imTheSalesMan = actualOfferData.salesman === uid;
            let userIndex = actualOfferData.clients.indexOf(uid)
            console.log(userIndex)
            let imInTheClientList = userIndex > -1;
            console.log(imInTheClientList)
            context.offer = {...actualOfferData, imTheSalesMan, id:offerId, imInTheClientList}

            extendContext(context).then(function () {
                this.partial("./templates/details.hbs");
              });
        })
  });

  this.get('#/delete/:offerId', function (context) {
    const {offerId} = context.params;

    db.collection('offers')
      .doc(offerId)
      .delete()
        .then(() => {
            this.redirect('#/home')
        })
        .catch(errorHandler)
  });

  this.get('#/edit/:offerId', function (context) {
    const {offerId} = context.params;
    
    db.collection('offers')
        .doc(offerId)
        .get()
        .then(response => {
            context.offer = {id:offerId, ...response.data()}
        extendContext(context)
                .then(function () {
                 this.partial('./templates/editOffer.hbs')
                })
        })


  });

  this.post('#/edit/:offerId', function (context) {
    const {offerId, productName, price, description, brand, imageUrl} = context.params;

    db.collection('offers')
      .doc(offerId)
      .get()
      .then(response => {
          return db.collection('offers')
                  .doc(offerId)
                  .set({
                      ...response.data(),
                      productName,
                      price,
                      description,
                      brand,
                      imageUrl
                  })
      })
      .then(res => {
          this.redirect(`#/details/${offerId}`)
      })
      .catch(errorHandler)

  });

  this.get('#/buy/:offerId', function (context) {
    const { offerId } = context.params;
    const { uid } = getUserData();
    console.log('yes')
    db.collection('offers')
      .doc(offerId)
      .get()
      .then(response => {
          const offerData = { ...response.data() }
          offerData.clients.push(uid)

      return db.collection('offers')
          .doc(offerId)
          .set(offerData)
    })
    .then(() => {
        this.redirect(`#/details/${offerId}`)
    })
    .catch(errorHandler)
  });

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

function saveUserData (userData) {
    const {
        user : {email, uid},
    } = userData;
    localStorage.setItem('user', JSON.stringify({ email,uid }))
}

function clearUserData() {
    this.localStorage.removeItem('user')
}