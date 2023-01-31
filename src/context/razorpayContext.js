import React, { useContext } from "react";
import useRazorpay from "react-razorpay";
import { auth } from "../utils/firebase";
import { errorToast, successToast, warnToast } from "../utils/toast";
import { useAuthContext } from "./authContext";
import logoImage from "./../../public/images/logo.png"
const razorpayContext = React.createContext({handlePayment:()=>{},pageData:{}});

export const useRazorpayContext = () => useContext(razorpayContext);

export const RazorpayContextProvider = ({ children,pageData }) => {
    const {setHasEnrolled,slot} = useAuthContext()

  const Razorpay = useRazorpay();
  const handlePayment = async (paymentData) => {
    const {course,currency,amount} = paymentData;
    if(!slot){
        return warnToast("Please select a slot!")
    }
    try {
      const response = await fetch("/api/razorpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: amount, currency: currency }),
      }).then((t) => t.json());
      console.log(response);
      var options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        name: "Hobit",
        currency: response.currency,
        amount: response.amount,
        order_id: response.id,
        image: logoImage,
        notes: {
          course: course,
          uid: auth.currentUser.uid,
          mobile:auth.currentUser.phoneNumber,
          slot:slot
        },
        handler: function (response) {
          successToast("Payment successful!!");
          setHasEnrolled(true);
        },
        prefill: {
          contact: auth.currentUser.phoneNumber,
        },
        theme: {
          color: "#8B53FF",
        },
      };
      const rzpay = new Razorpay(options);
    rzpay.open();
    } catch (e) {
      errorToast("Some error occurred!!");
      console.log(e);
    }
  }
  return (
    <razorpayContext.Provider value={{handlePayment,pageData}}>
      {children}
    </razorpayContext.Provider>
  );
};
