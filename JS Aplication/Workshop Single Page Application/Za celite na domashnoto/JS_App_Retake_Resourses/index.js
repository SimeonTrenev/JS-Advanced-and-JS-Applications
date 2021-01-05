const userModel = firebase.auth();
const db = firebase.firestore();

const app = Sammy("#root", function () {
  this.use("Handlebars", "hbs");

  //Home routes

  this.get("#/home", function (context) {
    db.collection("offers")
      .get()
      .then((response) => {
        context.offers = response.docs.map((offer) => {return { id: offer.id, ...offer.data() }})
        extendContext(context).then(function () {
          this.partial("./templates/home.hbs");
        });
      })
      .catch(errorHandler);
  });

  //User routes

  this.get("#/register", function (context) {
    extendContext(context).then(function () {
      this.partial("./templates/register.hbs");
    });
  });

  this.get("#/login", function (context) {
    extendContext(context).then(function () {
      this.partial("./templates/login.hbs");
    });
  });

  this.get("#/logout", function (context) {
    userModel
      .signOut()
      .then(() => {
        clearUserData();
        this.redirect("#/home");
      })
      .catch(errorHandler);
  });

  this.post("/register", function (context) {
    const { email, password, repassword } = context.params;

    if (password !== repassword) {
      return;
    }

    userModel
      .createUserWithEmailAndPassword(email, password)
      .then((userData) => {
        this.redirect("#/login");
      })
      .catch(errorHandler);
  });

  this.post("/login", function (context) {
    const { email, password } = context.params;

    userModel
      .signInWithEmailAndPassword(email, password)
      .then((userData) => {
        saveUserData(userData);
        this.redirect("#/home");
      })
      .catch(errorHandler);
  });

  //Offers routes

  this.get("#/create-offer", function (context) {
    extendContext(context).then(function () {
      this.partial("./templates/createOffer.hbs");
    });
  });

  this.post("#/create-offer", function (context) {
    const { productName, price, imageUrl, description, brand } = context.params;

    db.collection("offers")
      .add({
        productName,
        price,
        imageUrl,
        description,
        brand,
        salesman: getUserData().uid,
        clients: []
      })
      .then((createdProduct) => {
        this.redirect("#/home");
      })
      .catch(errorHandler);
  });

  this.get("#/edit-offer/:id", function (context) {
    extendContext(context).then(function () {
      this.partial("./templates/editOffer.hbs");
    });
  });

  this.get("#/details/:offerId", function (context) {
    const { offerId } = context.params;

    db.collection("offers")
      .doc(offerId)
      .get()
      .then((response) => {
        const { uid } = getUserData();
        
        let actualOfferData = response.data();
        
        let imTheSalesman = actualOfferData.salesman === uid
        console.log(actualOfferData)
        let userIndex = actualOfferData.clients.indexOf(uid)

        let imInTheClientsList = userIndex > -1;

        context.offer = {...actualOfferData, imTheSalesman, id: offerId, imInTheClientsList};

        extendContext(context)
            .then(function () {
          this.partial("./templates/details.hbs");
        });
      });
  });

  this.get('#/delete/:offerId', function (context) {
    const { offerId } = context.params;


    db.collection('offers')
      .doc(offerId)
      .delete()
        .then(() => {
          this.redirect('#/home')
        })
        .catch(errorHandler)
  })

  this.get('#/edit/:offerId', function (context) {
    const { offerId } = context.params
    
    db.collection('offers')
    .doc(offerId)
    .get()
    .then((response) => {
     context.offer = { id: offerId, ...response.data() };
     extendContext(context)
        .then(function () {
          this.partial('./templates/editOffer.hbs')
        })
    })
    
  })

  this.post('#/edit/:offerId', function (context) {
    const { offerId, productName, price, brand, description, imageUrl } = context.params;

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
                brand,
                description,
                imageUrl,
      })
    })
    .then(res => {
      this.redirect(`#/details/${offerId}`)
    })
    .catch(errorHandler)

    
  })

  this.get('#/buy/:offerId', function (context) {
    const { offerId } = context.params;
    const { uid } = getUserData();

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

function errorHandler(error) {
  alert(error);
}

function saveUserData(userData) {
  const {
    user: { email, uid },
  } = userData;
  localStorage.setItem("user", JSON.stringify({ email, uid }));
}

function getUserData() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

function clearUserData() {
  this.localStorage.removeItem("user");
}
