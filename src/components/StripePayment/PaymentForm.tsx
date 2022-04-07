import React, { useCallback, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { stripePromise } from "@utils";
import { Loader } from "../Loader";
import { CreateModal } from "../Modal";

import * as types from "@interface/models";
import { getPaymentRedirectUrl } from "@utils";

function StripePaymentContainer({
  appointment,
}: {
  appointment: types.Appointment;
}) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Handle Form submission
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!stripe || !elements) return;

      setIsLoading(true);

      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: getPaymentRedirectUrl(appointment),
        },
      });

      setIsLoading(false);
      if (result && result.error) setMessage(result.error.message!);
    },
    [stripe, elements, appointment]
  );

  return (
    <div className="w-full py-10 px-3 flex flex-col justify-center items-center">
      <form className="p-4 w-full" onSubmit={handleSubmit}>
        <PaymentElement />
        <button
          type="submit"
          disabled={isLoading || !stripe || !elements}
          className=" p-2 mt-5 border rounded bg-primary text-white transition hover:bg-accent "
        >
          {isLoading ? <Loader /> : "Pay now"}
        </button>
        {message && <div>{message}</div>}
      </form>
    </div>
  );
}

export function StripePaymentForm({
  paymentIntentSecret,
  appointment,
}: StripePaymentFormProps) {
  const [options] = useState({
    clientSecret: paymentIntentSecret,
    appearance: { theme: "stripe" },
  } as any);
  return (
    <div>
      <Elements options={options} stripe={stripePromise}>
        <StripePaymentContainer appointment={appointment} />
      </Elements>
    </div>
  );
}

export const StripePaymentFormModal = (props: StripePaymentFormProps) => {
  return new Promise<boolean>((res, rej) => {
    const modalArgs = { args: { dismiss: () => {} } };

    const args = CreateModal<StripePaymentFormProps>(StripePaymentForm, props);

    modalArgs.args = args;
    args.dismissPromise.then(() => res(false));
  });
};

type StripePaymentFormProps = {
  paymentIntentSecret: string;
  appointment: types.Appointment;
};
