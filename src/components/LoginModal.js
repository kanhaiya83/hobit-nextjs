import {phone} from 'phone';

import {
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
} from "@chakra-ui/react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState } from "react";
import Modal from "react-modal";
import { useAuthContext } from "../context/authContext";
import { auth } from "../utils/firebase";
import GradientButton from "./GradientButton";
import { warnToast } from '../utils/toast';
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "400px",
    width: "100%",
    border: "none",
    padding: "0",
  },
  overlay: {
    backgroundColor: "rgb(52 52 52 / 75%)",
    zIndex:1000
  },
};
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#__next");
const LoginModal = () => {
  const { isAuthModalOpen: isOpen, setIsAuthModalOpen: setIsOpen,setIsAuthenticated } =
    useAuthContext();
    const [countryCode, setCountryCode] = useState("+91");
    const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  // form ui states
  const [expandForm, setExpandForm] = useState(false);

  function closeModal() {
    setIsOpen(false);
    setCountryCode("+91")
    setMobileNumber("")
    setOtp("")
    setExpandForm(false)
    
  }

  const handleOTPChange = (e) => {
    const val = e.target.value;
    setOtp(val);
  };
  const handleNumberChange = (e) => {
    const val = e.target.value;
    setMobileNumber(val);
  };
  const getOTP = (e) => {
    e.preventDefault();
    if(expandForm)return;
    const fullMobileNumber = `${countryCode}${mobileNumber}`
    const phoneValidation = phone(fullMobileNumber)
    console.log({phoneValidation})
    if(!phoneValidation.isValid){
    return warnToast("Please enter a valid mobile number!!")
    }
    if(!window.appVerifier){
    window.appVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          console.log({ response });
        },
      },
      auth
    );
  }
  signInWithPhoneNumber(auth, fullMobileNumber, window.appVerifier)
      .then((confirmationResult) => {
        setExpandForm(true)
        window.confirmationResult = confirmationResult;
      })
      .catch((e) => {
        console.log(e); 
      });
  };
  const verifyOTP = () => {
    window.confirmationResult
      .confirm(otp)
      .then((result) => {
        const user = result.user;
        setIsAuthenticated(true)
        console.log(user);
        closeModal()
      })
      .catch((error) => {
        console.log("error", error);
        // ...
      });
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Login Modal"
    >
      <div class="w-full bg-white text-black py-6 px-4 rounded">
        <h2 className="text-4xl text-slate-800 font-semibold text-center mb-4">
          Login
        </h2>

        <Select
          value={countryCode}
          onChange={(e) => {
            setCountryCode(e.target.value);
          }}
        >
          <option value="+91">India</option>
          <option value="+1">Canada</option>
          <option value="+971">United Arab Emirates</option>
        </Select>
        <form className="flex flex-col items-start my-8" onSubmit={getOTP}>
          <InputGroup>
            <InputLeftAddon>{countryCode}</InputLeftAddon>
            <Input type="tel" placeholder="Phone number" value={mobileNumber} onChange={handleNumberChange} />
          </InputGroup>
          <GradientButton
            applyClasses="mt-4 py-4 mt-4 bg-primary-color"
            onClick={getOTP}
            disabled={expandForm}
          >
            {expandForm ?"OTP sent!!" :"Get OTP"}
          </GradientButton>
        </form>
        {expandForm && (
          <>
            <Input
              type="text"
              name="opt"
              className="text-black"
              value={otp}
              maxLength="6"
              onChange={handleOTPChange}
              placeholder="OTP"
            />
            <GradientButton
            applyClasses="mt-4 py-4 mt-4 bg-primary-color"
            onClick={verifyOTP}
            >
              Verify
            </GradientButton>
          </>
        )}
      </div>
    </Modal>
  );
};

export default LoginModal;
