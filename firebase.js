//this page initializes our firebase database, using the info from our firebase console.

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA7nwQppRQc25sJyGeDboX6Hk0rKK9qz6w",
    authDomain: "doze-cf23c.firebaseapp.com",
    databaseURL: "https://doze-cf23c.firebaseio.com",
    projectId: "doze-cf23c",
    storageBucket: "doze-cf23c.appspot.com",
    messagingSenderId: "381284347715",
    appId: "1:381284347715:web:483d1ec16c57c012e2c9f6"
  };

  //finish the initialization, exporting it as firebase, which will be referenced later on
  firebase.initializeApp(firebaseConfig);
  export default firebase;