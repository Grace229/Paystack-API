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
      return res.status(200).json({
        success: true,
        msg: 'Charge Successful',
    })
    }
    if (
        hash == req.headers["x-paystack-signature"] &&
        response === "charge.failed"
      ) {
        return res.status(500).json({ success: false, msg: 'payment failed' });
      }
    res.sendStatus(200);
};
module.exports = paystackWebHook;
