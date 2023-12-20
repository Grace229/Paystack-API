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
        let checkout_url = response.data.authorization_url;
        return res.status(201).json({
          success: true,
          msg: "payment initialize successfully",
          checkout_url,
        });
      },
      (error) => console.log(`Error: ${error.message.response}`)
    );
  } catch (err) {
    return res.status(500).json({ msg: err.message.data });
  }
};
module.exports = getPaymentWindow;
