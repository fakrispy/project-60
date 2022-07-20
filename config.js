import * as firebase from 'firebase'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCJwQmMbzGLs8htssVdcJbqOSS4FaOi2OA",
    authDomain: "school-attendence-app-52a21.firebaseapp.com",
    databaseURL: "https://school-attendence-app-52a21-default-rtdb.firebaseio.com",
    projectId: "school-attendence-app-52a21",
    storageBucket: "school-attendence-app-52a21.appspot.com",
    messagingSenderId: "429284180006",
    appId: "1:429284180006:web:0704ada3af44e01e9466e7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase.database()