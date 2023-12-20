const crypto = require("crypto");
const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;

const paystackWebHook = async (req, res, next) => {
    const response = req.body.event;
    //validate event
    const hash = crypto
      .createHmac("sha512", paystackSecretKey)
      .update(JSON.stringify(req.body))
      .digest("hex");
       if (
      hash == req.headers["x-paystack-signature"] &&
      response === "charge.success"
    ) {
      console.log("charge successful!")
    }
    if (
        hash == req.headers["x-paystack-signature"] &&
        response === "charge.failed"
      ) {
        console.log("charge failed!")
      }
    res.sendStatus(200);
};
module.exports = paystackWebHook;
