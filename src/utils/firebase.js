import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { successToast } from './toast';
const config = {
  apiKey: "AIzaSyCM6v2a9F-CeZLN4OmbZp-O0Qec7YMuS9w",
  authDomain: "pankaj-landing-page.firebaseapp.com",
  projectId: "pankaj-landing-page",
  storageBucket: "pankaj-landing-page.appspot.com",
  messagingSenderId: "939914453906",
  appId: "1:939914453906:web:70a31bac85011d9d46174b",
  measurementId: "G-ECCN9RJV1W"
};
firebase.initializeApp(config);
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  callbacks:{signInSuccess:()=>{
    successToast("Logged in successfully!!");
  }},
  signInOptions: [{
    provider:firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    defaultCountry:"IN",
    whitelistedCountries:["CA","AE","IN"]
  }
  ],
};
export const auth  = firebase.auth();
export const logout= ()=>{
  return auth.signOut().then(

    ()=>{
      console.log("Logout success!!")
    }
  ).catch(e=>{
    console.log(e);
  })
}
const LoginComponent = () => {
    
  return (
    <>
     
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </>
  );
};

export default LoginComponent;
