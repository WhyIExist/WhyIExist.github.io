import '@firebase/messaging'
import firebase from 'firebase'
var config = {
    messagingSenderId: "576012749581",
};
firebase.initializeApp(config);
const messaging = firebase.messaging()
