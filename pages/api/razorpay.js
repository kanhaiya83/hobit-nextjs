const Razorpay = require("razorpay");
const shortid = require("shortid");

export default async function handler(req, res) {
  const razorpayInstance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
  });
  if(req.method ==="GET"){
   const {uid,amount} = req.query;
   const {items : payments}=await razorpayInstance.payments.all()
   const successPayments = payments.filter(payment=>payment.status ==="captured");
    const foundPayment = successPayments.find(payment=>{
     return payment?.notes?.uid === uid;
    })
    if(!foundPayment){
      return res.send({success:false,successPayments})
    }
    const {course} = foundPayment.notes;
    return res.send({success:true,course:foundPayment.notes.course})
  }
  if (req.method === "POST") {
    const { amount, currency } = req.body;
    if (!amount || !currency) {
      return res.send({ success: false, message: "Invalid input!" });
    }
    const payment_capture = 1;
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpayInstance.orders.create(options);
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

