import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBwA3SE-J0MzFqjy_tvpqO1glaI6LH_Frc",
  authDomain: "vue-translate-app-c9ee0.firebaseapp.com",
  databaseURL: "https://vue-translate-app-c9ee0.firebaseio.com",
  projectId: "vue-translate-app-c9ee0",
  storageBucket: "vue-translate-app-c9ee0.appspot.com",
  messagingSenderId: "499969999242"
};


const fire = firebase.initializeApp(config);
export default fire;