import { EmailIcon } from "@chakra-ui/icons";
import {
  Button,
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
    // if(!Boolean(val))return;
    setMobileNumber(val);
  };
  const getOTP = (e) => {
    e.preventDefault();
    const fullMobileNumber = `${countryCode}${mobileNumber}`
    console.log({fullMobileNumber})
    const appVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          console.log({ response });
        },
      },
      auth
    );
    signInWithPhoneNumber(auth, fullMobileNumber, appVerifier)
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
            <Input type="tel" placeholder="phone number" value={mobileNumber} onChange={handleNumberChange} />
          </InputGroup>
          <Button
            leftIcon={<EmailIcon />}
            colorScheme="teal"
            variant="solid"
            className="w-full mt-4"
            onClick={getOTP}
            disabled={expandForm}
          >
            {expandForm ?"OTP sent!!" :"Get OTP"}
          </Button>
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
            <Button
              colorScheme="teal"
              variant="solid"
              className="w-full mt-4"
              onClick={verifyOTP}
            >
              Verify
            </Button>
          </>
        )}
      </div>
    </Modal>
  );
};

export default LoginModal;
