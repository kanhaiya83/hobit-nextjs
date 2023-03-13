import React, {useContext, useEffect} from "react";
import useRazorpay from "react-razorpay";
import {useRouter} from "next/router";
import {child, get, ref} from "firebase/database";
import {auth, db} from "../utils/firebase";
import {errorToast, successToast} from "../utils/toast";
import {useAuthContext} from "./authContext";
import axios from "axios";
import {getProductUID, parseSlot} from "../utils";
import fbq from "../utils/fbq";
import gtag from "../utils/gtag";

const http = axios.create({
    baseURL: "https://asia-southeast1-hobitapp-22cb6.cloudfunctions.net/",
    headers: {
        Authorization:
            "Bearer acd4cfd7157c9af0922acf9a826591a16655ed43697cb016d0effbe5954d02ba",
    },
});
const razorpayContext = React.createContext({
    handlePayment: () => {
    },
    pageData: {},
});

export const useRazorpayContext = () => useContext(razorpayContext);

export const RazorpayContextProvider = ({ children, pageData }) => {
  const { user, slot,setHasEnrolled, isAuthenticated, setIsAuthModalOpen } = useAuthContext();
  const router = useRouter();
  const productUID = getProductUID(pageData.campaign_id, pageData.startDate);
  const campaignId = pageData.campaign_id;
  const amount = pageData.price;
  const Razorpay = useRazorpay();
  useEffect(() => {
    if(!user)return;
    const dbRef = ref(db);
    get(child(dbRef, `MyLive/${user.uid}/${productUID}`))
      .then((snapshot) => {
        console.log("Checking if course already bought")
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setHasEnrolled(true)
          successToast("You have already enrolled! Redirecting to main site!")
           setTimeout(() => {
                router.push("https://hobit.in/my-stuff");
              }, 4000);

        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productUID, router, setHasEnrolled, user]);
  const handlePayment = async (paymentData) => {
    if (!isAuthenticated) {
      return setIsAuthModalOpen(true);
    }
    // if (!slot) {
    //   document.getElementById("slot-picker")?.scrollIntoView();
    //   return warnToast("Please select a slot!");
    // }
    if (!productUID || !campaignId || !amount) {
      console.log("Error while initiating payment:", {
        productUID,
        campaignId,
        amount,
      });
    }
    try {
      const createdOrder = await http.post(`createOrder`, {
        UID: productUID,
        userUID: user.uid,
        type: "Live",
        OS: "android",
        campaign: {
          isCampaignPurchase: true,
          campaignId,
        },
      });
      console.log("order creation response", createdOrder);
      const order_id = createdOrder.data?.data?.id;
      var options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        name: "Hobit",
        currency: "INR",
        order_id,
        image: "https://s3.amazonaws.com/rzp-mobile/images/rzp.png",
        description: productUID,
        handler: async function (response) {
          const paymentDetails = {
            customerId: user.uid,
            productId: productUID,
            type: "Live",
            discountCode: "",
            amount: amount,
            paymentId: response.razorpay_payment_id,
          };
          console.log("Payment details:", paymentDetails);
          try {
            const paymentResponse = await http.post(`paymentRazorpay`, {
              details: paymentDetails,
              timeSlot: parseSlot(slot),
              isCampaignPurchase:true
            });
            console.log("Order success response:", paymentResponse);
            console.log(paymentResponse.data, paymentResponse.data.status);
            if (paymentResponse.data?.status) {
              successToast(
                "Payment successful!Please login at hobit.in to access your course",
                { autoClose: 4000 }
              );
                fbq("track", "Purchase", {
                  currency: "INR",
                    value: amount,
                });
                gtag('event', 'conversion', {
                'send_to': 'AW-11109113326/Sg2ICISkx48YEO67nrEp',
                'transaction_id': response.razorpay_payment_id,
              });
              router.push({
                pathname: "/thankyou",
                query: {
                    productUID,
                    amount,
                    campaignId
                }
              });
            } else {
              errorToast("Some error occurred while making payment!!");
            }
          } catch (e) {
            console.log("Error while payment", e);
          }
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
      // Validate
      try {
        const r = await http.post(`validateOrder`, {
          id: order_id,
          userUID: user.uid,
        });
        console.log("Order validation response:", r);
      } catch (error) {}
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
