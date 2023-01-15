import logoImage from "./../../public/images/logo.png";
import { errorToast, successToast } from "./toast";
const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};
export const makePayment = async (data) => {
  try {
    // const res = await initializeRazorpay();

    if (!window.Razorpay) {
      errorToast("Some error occurred!")
      return;
    }
    const response = await fetch("/api/razorpay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ amount: data.amount, currency: data.currency }),
    }).then((t) => t.json());
    console.log(response);
    var options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      name: "Hobit",
      currency: response.currency,
      amount: response.amount,
      order_id: response.id,
      image: logoImage,
      notes:{
        "batch":"Zumba"
      },
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        successToast("Payment successful!!")

      },
      prefill: {
        name: "Manu Arora",
        email: "manuarorawork@gmail.com",
        contact: "9999999999",
      },
      theme:{
        color:"#8B53FF"
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  } catch (e) {
    console.log(e);
  }
};
