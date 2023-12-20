const paymentRouter = require("./payment/payment.routes");

const routers = (app) => {
  app.use("/api/v1/payment", paymentRouter);

};

module.exports = routers;
