// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA390Ah5mPz7CYLZD25TbhcKfJfF9maod4",
    authDomain: "books-exercise-remote-database.firebaseapp.com",
    databaseURL: "https://books-exercise-remote-database.firebaseio.com",
    projectId: "books-exercise-remote-database",
    storageBucket: "books-exercise-remote-database.appspot.com",
    messagingSenderId: "449539188152",
    appId: "1:449539188152:web:d2d3b0c9781b794c34db4d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  console.log(firebase.auth())
