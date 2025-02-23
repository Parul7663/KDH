import { firebase } from "googleapis/build/src/apis/firebase";
const config={
    apiKey: "AIzaSyD6DsiPuJ0qU0h6sknCt0VqGTLGlFR9tUY",
    authDomain: "kapoor-di-hatti-d15fb.firebaseapp.com",
    projectId: "kapoor-di-hatti-d15fb",
    storageBucket: "kapoor-di-hatti-d15fb.appspot.com",
    messagingSenderId: "693389259222",
    appId: "1:693389259222:web:1fa3ce20cd6d6a9ac1f477"
}
firebase.initializeApp(config);
export default firebase