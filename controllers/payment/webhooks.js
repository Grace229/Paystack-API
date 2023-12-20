const crypto = require("crypto");
const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;


const paystackWebHook = async (req, res, next) => {
  const signature = req.headers["x-paystack-signature"];
  const calculatedSignature = crypto
    .createHmac("sha512", paystackSecretKey)
    .update(JSON.stringify(req.body))
    .digest("hex");
  if (signature !== calculatedSignature) {
    return res.status(401).send("Unauthorized");
  }
if(req.body.event == "charge.success") {
  console.log(req.body)

console.log(order)
}
  res.status(200).json({
    success: true,
  });
};
module.exports = paystackWebHook;

