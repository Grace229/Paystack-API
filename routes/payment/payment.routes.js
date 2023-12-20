const express = require("express");
const router = express.Router();
const getPaymentWindow = require("../../controllers/payment/initialize");
const paystackWebHook = require("../../controllers/payment/webhooks");



router.route("/initialize-payment").post(getPaymentWindow);

router.route("/webhook").post(paystackWebHook);

module.exports = router;
