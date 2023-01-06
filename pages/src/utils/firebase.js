import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCM6v2a9F-CeZLN4OmbZp-O0Qec7YMuS9w",
    authDomain: "pankaj-landing-page.firebaseapp.com",
    projectId: "pankaj-landing-page",
    storageBucket: "pankaj-landing-page.appspot.com",
    messagingSenderId: "939914453906",
    appId: "1:939914453906:web:70a31bac85011d9d46174b",
    measurementId: "G-ECCN9RJV1W"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const logout= ()=>{
  return signOut(auth).then(
    ()=>{
      console.log("Logout success!!")
    }
  ).catch(e=>{
    console.log(e);
  })
}
export default app;