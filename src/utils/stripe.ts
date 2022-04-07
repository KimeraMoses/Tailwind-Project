import { loadStripe } from "@stripe/stripe-js";

const STRIPE_PUBLIC_KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY as string;
export const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

export async function getPaymentIntentStatus(intentSecret: string) {
  const stripe = (await stripePromise)!;
  const { paymentIntent, error } = await stripe.retrievePaymentIntent(
    intentSecret
  );
  if (error) throw error;
  else return paymentIntent!.status;
}
