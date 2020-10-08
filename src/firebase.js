import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC1c_f0TvgRQRwYE27hzeEHwi6t-VmqciY",
    authDomain: "app-contact-37c25.firebaseapp.com",
    databaseURL: "https://app-contact-37c25.firebaseio.com",
    projectId: "app-contact-37c25",
    storageBucket: "app-contact-37c25.appspot.com",
    messagingSenderId: "629863866005",
    appId: "1:629863866005:web:7f58e8a5c8185554cf059c",
    measurementId: "G-4VMHLR14JT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const fireBase=firebase.database();
  export{
      fireBase
  }
 
  // ABDEL MOUSTAKIL :pour recuper les données de firebise
  /* firebase.database().ref().once('value').then((snapshot)=>{
      console.log(snapshot.val()); 
  });*/