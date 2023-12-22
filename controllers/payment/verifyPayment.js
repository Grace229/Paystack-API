const { verifyPayment } = require("../../paystack");

const VerifyPayment = async (req, res) => {
  try {
    let { reference } = req.body;
    let promise = verifyPayment(reference);

    promise.then(
      (response) => {
        let data = response.data
        console.log(response.data)
        return res.status(200).json({
          success: true,
          msg: "payment verified successfully",
         data
        });
      },
      (error) => console.log(`Error: ${error.message.response}`)
    );
  } catch (err) {
    return res.status(500).json({ msg: "Transaction Failed" });
  }
};
module.exports = VerifyPayment;
