const axios = require('axios')
exports.initializePayment = async (form) => {
  console.log(process.env.PAYSTACK_SECRET_KEY)
  const options = {
    url: "https://api.paystack.co/transaction/initialize",
    headers: {
      authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
    method: "POST",  
    data: form,
  };
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.request(options);
      resolve(response.data);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

exports.tranferMoneySingle = async (form) => {
  const options = {
    url: "https://api.paystack.co/transfer",
    headers: {
      authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    data: form,
  };
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.request(options);
      resolve(response.data);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
exports.tranferMoneyBulk = async (form) => {
  // console.log(form);
  // const convertedArray = form.replace(/'/g, '"');
  // console.log("convertedArray", convertedArray);
  const options = {
    url: "https://api.paystack.co/transfer/bulk",
    headers: {
      authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    data: form,
  };
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.request(options);
      resolve(response.data);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
exports.getAllPaystackTransferDone = async (recipient) => {
  const options = {
    url: "https://api.paystack.co/transfer",
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
    },
  };
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.request(options);
      resolve(response.data);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
exports.verifyRecipientCode = async (recipient) => {
  const options = {
    url:
      "https://api.paystack.co/transferrecipient/" +
      encodeURIComponent(recipient),
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
    },
  };
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.request(options);
      resolve(response.data);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
exports.verifyPayment = async (ref) => {
  const options = {
    url:
      "https://api.paystack.co/transaction/verify/" + encodeURIComponent(ref),
    headers: {
      authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
    method: "GET",
  };
  return new Promise(async (resolve, reject) => {
    try {
      const data = await axios.request(options);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
exports.getNigerianBanks = async () => {
  const options = {
    url: "https://api.paystack.co/bank",
    headers: {
      authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
    },
    method: "GET",
  };
  return new Promise(async (resolve, reject) => {
    try {
      const data = await axios.request(options);
      resolve(data);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
exports.createUserRecipientCode = async (account) => {
  // console.log(account);
  const options = {
    url: "https://api.paystack.co/transferrecipient",
    data: account,
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
    method: "POST",
  };
  return new Promise(async (resolve, reject) => {
    try {
      const data = await axios.request(options);
      resolve(data);
    } catch (error) {
      // console.log(error);
      reject(error);
    }
  });
};
// verify bank account numbers
exports.verifyBankAccountNumbers = async (account) => {
  const options = {
    url: `https://api.paystack.co/bank/resolve?account_number=${account.number}&bank_code=${account.bank}`,
    headers: {
      authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
    },
    method: "GET",
  };
  return new Promise(async (resolve, reject) => {
    try {
      const data = await axios.request(options);
      resolve(data);
    } catch (error) {
      // console.log(error);
      reject(error);
    }
  });
};