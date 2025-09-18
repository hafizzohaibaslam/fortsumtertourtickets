"use server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const stripeCreateIntent = async (amount: number) => {
  const intent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });
  return { clientSecret: intent.client_secret };
};

export default stripeCreateIntent;
