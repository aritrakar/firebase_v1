var firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");

var firebaseConfig = {
    apiKey: '',
    authDomain: '',
    projectId: ''
}

firebase.initializeApp(firebaseConfig)

var db = firebase.firestore()