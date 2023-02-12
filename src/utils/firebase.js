import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { successToast } from './toast';
const config = {
  apiKey: "AIzaSyAC3TjQ4_Wkzct5wgP6hJk2yoX-kY68rAI",
  authDomain: "hobitapp-22cb6.firebaseapp.com",
  databaseURL: "https://hobitapp-22cb6.firebaseio.com",
  projectId: "hobitapp-22cb6",
  storageBucket: "hobitapp-22cb6.appspot.com",
  messagingSenderId: "337979726950",
  appId: "1:337979726950:web:9b5945f198cb6097eea1a7",
  measurementId: "G-8ME2CGF0DP"
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
