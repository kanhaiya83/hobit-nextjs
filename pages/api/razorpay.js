const Razorpay = require("razorpay");
const shortid = require("shortid");

export default async function handler(req, res) {
  if(req.method ==="GET"){
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    razorpay.payments.all().then((response) => {
      res.send("success") 
    }).catch((error) => {
      console.log(error)
    })
  }
  if (req.method === "POST") {
    const { amount, currency } = req.body;
    if (!amount || !currency) {
      return res.send({ success: false, message: "Invalid input!" });
    }
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const payment_capture = 1;
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.send({
        success:true,
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send({success:false,message:"Some error occurred!"});
    }
  } 
}

