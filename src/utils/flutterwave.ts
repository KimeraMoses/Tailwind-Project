import { Appointment } from "@interface/models";

import { getPaymentRedirectUrl } from "@utils";

const FRONTEND_URL = process.env.REACT_APP_PUBLIC_URL;
const FLUTTERWAVE_PUBLIC_KEY = process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY;

declare const FlutterwaveCheckout: any;

export const MakeFlutterwavePayment = (appointment: Appointment) => {
  const payment_options = "";

  return new Promise((res, rej) => {
    FlutterwaveCheckout({
      public_key: FLUTTERWAVE_PUBLIC_KEY,
      tx_ref: appointment._id,
      amount: appointment.amount,
      currency: appointment.consultation.currency,
      country:
        appointment.account?.address?.country ||
        appointment.doctor.clinic?.address?.country ||
        appointment.doctor?.address?.country,
      payment_options,
      redirect_url: getPaymentRedirectUrl(appointment),
      customer: {
        email: appointment.account.email,
        phone_number: `${appointment.account}`,
        name: `${appointment.account.firstName} ${appointment.account.lastName}`,
      },
      onclose: (data: any) => {
        console.log(data);
      },
      callback: (data: any) => {
        console.log(data);
      },
      customizations: {
        title: "MedAtlas",
        description: `Payment for your doctor appointment`,
        logo: `${FRONTEND_URL}/icon.png`,
      },
    });
  });
};
