// // Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');




const firebaseConfig = {
  apiKey: "AIzaSyBGvZaDY-6HZe9BwDch3ILx45VYf-0bXAE",
  authDomain: "push-noti-6f2cd.firebaseapp.com",
  projectId: "push-noti-6f2cd",
  storageBucket: "push-noti-6f2cd.appspot.com",
  messagingSenderId: "6874637774",
  appId: "1:6874637774:web:aaf3a2a371fbd515dc379f",
  measurementId: "G-MB7Z9WWRN3"
};


firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});



// importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");

// const firebaseConfig = {
//   apiKey: "AIzaSyBGvZaDY-6HZe9BwDch3ILx45VYf-0bXAE",
//   authDomain: "push-noti-6f2cd.firebaseapp.com",
//   projectId: "push-noti-6f2cd",
//   storageBucket: "push-noti-6f2cd.appspot.com",
//   messagingSenderId: "6874637774",
//   appId: "1:6874637774:web:aaf3a2a371fbd515dc379f",
//   measurementId: "G-MB7Z9WWRN3"
// };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();
// messaging.setBackgroundMessageHandler(function(payload) {
//      const promiseChain = clients
//           .matchAll({
//                type: "window",
//                includeUncontrolled: true,
//           })
//           .then((windowClients) => {
//                for (let i = 0; i < windowClients.length; i++) {
//                     const windowClient = windowClients[i];
//                     windowClient.postMessage(payload);
//                }
//           })
//           .then(() => {
//                return registration.showNotification("my notification title");
//           });
//      return promiseChain;
// });
// self.addEventListener("notificationclick", function(event) {
//      console.log(event);
// });