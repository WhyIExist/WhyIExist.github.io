import '@firebase/messaging'
import firebase from 'firebase'
var config = {
    messagingSenderId: "576012749581",
};
firebase.initializeApp(config);
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    console.log(' Received background message ', payload);
    var sender = JSON.parse(payload.data.message);
    var notificationTitle = 'CometChat Pro Notification';
    var notificationOptions = {
        body: payload.data.alert,
        icon: sender.data.entities.sender.entity.avatar,
    };
    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    );
});
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    //handle click event onClick on Web Push Notification
});
