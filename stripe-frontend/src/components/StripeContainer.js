import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51J0iikIrLFDnBNthegghs01KMgmIAlJYbHQouWEmc0idhPsphnxd4oSuUk0NnuHfQ1HGigAOAKtSQTFThT8fLSEQ000rg1cGPl";

export default function StripeContainer() {
  const stripeTestPromise = loadStripe(PUBLIC_KEY);

  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
