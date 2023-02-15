import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { successToast } from "./toast";
import { firebaseConfig } from "../../config/firebase";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { getDatabase } from "firebase/database";
const app = firebase.initializeApp(firebaseConfig);
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  callbacks: {
    signInSuccess: () => {
      successToast("Logged in successfully!!");
    },
  },
  signInOptions: [
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      defaultCountry: "IN",
      whitelistedCountries: ["CA", "AE", "IN"],
    },
  ],
};
export const auth = firebase.auth();
export const storage = getStorage(app);
export const db = getDatabase();

export const logout = () => {
  return auth
    .signOut()
    .then(() => {
      console.log("Logout success!!");
    })
    .catch((e) => {
      console.log(e);
    });
};
const LoginComponent = () => {
  return (
    <>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </>
  );
};
export const uploadFile =  ({ file,folderName, setPercent,onComplete }) => {
  if (!file) {
    alert("Please upload an image first!");
  }

  const storageRef = ref(storage, `/campaign-site-assets/${folderName}/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const _percent = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setPercent(_percent);
    },
    (err) => console.log(err),
     () => {
      const url =  getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        onComplete(url)
      });
    }
  );
};
export default LoginComponent;
