import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import axios from "axios";

export default function Payment() {
  const fwConfig = {
    public_key: "FLWPUBK_TEST-ec84603d310ebb74874cb52aa4563352-X",
    tx_ref: Date.now(),
    amount: 1000,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "customer@example.com",
      phone_number: "07012345678",
      name: "John Doe",
    },
    customizations: {
      title: "My Shop",
      description: "Payment for test product",
      logo: "https://flutterwave.com/images/logo-colored.svg",
    },
    callback: async (response) => {
      console.log("Flutterwave Response:", response);
      closePaymentModal(); // close modal programmatically

      try {
        // Send transaction_id to backend for verification
        const res = await axios.post("http://localhost:5000/api/verify-payment", {
          transaction_id: response.transaction_id,
        });
        console.log("Verification Response:", res.data);
        alert("Payment verified successfully!");
      } catch (error) {
        alert("Verification failed!");
        console.error(error);
      }
    },
    onClose: () => {
      console.log("Payment modal closed");
    },
    text: "Pay with Flutterwave",
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <FlutterWaveButton {...fwConfig} className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500 transition-all" />
    </div>
  );
}
