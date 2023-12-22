const { initializePayment } = require("../../paystack");

const getPaymentWindow = async (req, res) => {
  try {
    let { productAmount, email } = req.body;
    console.log(email)
    let payment = productAmount * 100;
    const user_data = {
      email,
      amount: payment,
    };
    let promise = initializePayment(user_data);

    promise.then(
      (response) => {
        console.log(response)
        let checkout_url = response.data.authorization_url;
        let reference = response.data.reference;
        return res.status(201).json({
          success: true,
          msg: "payment initialize successfully",
          checkout_url,
          reference
        });
      },
      (error) => console.log(`Error: ${error.message.response}`)
    );
  } catch (err) {
    return res.status(500).json({ msg: "Failed to initialize payment" });
  }
};
module.exports = getPaymentWindow;
