require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

//Payment route
app.post("/payment", cors(), async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "USD",
      description: "Gum Company",
      payment_method: id,
      confirm: true,
    });

    //console.log("payment: ", payment);
    res.json({
      message: "Payment succesful",
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.json({
      message: "Payment faild",
      success: false,
    });
  }
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
