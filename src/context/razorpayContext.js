import React, { useContext } from "react";
import useRazorpay from "react-razorpay";
import { auth } from "../utils/firebase";
import { errorToast, successToast, warnToast } from "../utils/toast";
import { useAuthContext } from "./authContext";
import logoImage from "./../../public/images/logo.png";
import axios from "axios";
const http = axios.create({
  baseURL: "https://asia-southeast1-hobitapp-22cb6.cloudfunctions.net/",
  headers: {
    Authorization:
      "Bearer acd4cfd7157c9af0922acf9a826591a16655ed43697cb016d0effbe5954d02ba",
  },
});
const razorpayContext = React.createContext({
  handlePayment: () => {},
  pageData: {},
});

export const useRazorpayContext = () => useContext(razorpayContext);

export const RazorpayContextProvider = ({ children, pageData }) => {
  const { setHasEnrolled, slot ,user} = useAuthContext();

  const Razorpay = useRazorpay();
  const handlePayment = async (paymentData) => {
    const {  amount,productUID,campaignId,slot} = paymentData;
    if (!slot) {
      document.getElementById("slot-picker")?.scrollIntoView();
      return warnToast("Please select a slot!");
    }
    if(!productUID,campaignId,amount)return;
    try {
     const createdOrder = await  http
        .post(`createOrder`, {
          UID:productUID,
          userUID: user.uid,
          type: "Live",
          OS: "android",
          campaign:{
            isCampaignPurchase:true,
            campaignId
          }
        })
        const order_id = createdOrder.data?.data?.id
        var options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
          name: "Hobit",
          currency: "INR",
          order_id,
          image: "https://s3.amazonaws.com/rzp-mobile/images/rzp.png",
          description:productUID,
          handler:async function (response) {
            const paymentDetails = {
              customerId: user.uid,
              productId: productUID,
              paymentOption: $.paymentMethod,
              type: "Live",
              amount: amount,
              paymentId: response.razorpay_payment_id,
            };
            const paymentResponse =await http.post(`paymentRazorpay`, { paymentDetails, slot })



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
  };
  return (
    <razorpayContext.Provider value={{ handlePayment, pageData }}>
      {children}
    </razorpayContext.Provider>
  );
};
