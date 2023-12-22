const crypto = require("crypto");
const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;


const paystackWebHook = async (req, res, next) => {
  const response = req.body.event;
  const signature = req.headers["x-paystack-signature"];
  const calculatedSignature = crypto
    .createHmac("sha512", paystackSecretKey)
    .update(JSON.stringify(req.body))
    .digest("hex");
  if (signature !== calculatedSignature) {
    return res.status(401).send("Unauthorized");
  }
if(response == "charge.success") {
  console.log(req.body)
  return res.status(200).json({
    success: true,
    msg: 'Charge Successful',
    response
    
})

}
  if (
    calculatedSignature == req.headers["x-paystack-signature"] &&
      response === "charge.failed"
    ) {
      return res.status(500).json({ success: false, msg: 'payment failed' });
    }
  res.sendStatus(200);
};
module.exports = paystackWebHook;

