const express = require("express");
const router = express.Router();
const getPaymentWindow = require("../../controllers/payment/initialize");
const paystackWebHook = require("../../controllers/payment/webhooks");
const VerifyPayment = require("../../controllers/payment/verifyPayment")



router.route("/initialize-payment").post(getPaymentWindow);
router.route("/verify-payment").post(VerifyPayment);


router.route("/webhook").post(paystackWebHook);

module.exports = router;
