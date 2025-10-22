import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:9292/api/v1/sub";

const PLANS = [
  { name: "Free", amount: 0, currency: "NGN" },
  { name: "Naira Plan", amount: 5000, currency: "NGN" },
  { name: "Dollar Plan", amount: 5000, currency: "USD" }, // fixed currency
  { name: "Pound Plan", amount: 4000, currency: "GBP" }, // fixed currency
];

function Test() {
  const email = "user@example.com"; // TODO: replace with actual logged-in user email

  // Free plan subscription
  const handleFreePlan = async (plan) => {
    try {
      const res = await axios.post(`${API_URL}/verify-payment`, {
        txId: "FREE_PLAN",
        plan: plan.name,
        amount: 0,
        currency: plan.currency,
        email,
      });
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert("Subscription failed");
    }
  };

  // Flutterwave config for paid plans
  const getFlutterwaveConfig = (plan) => ({
    public_key: "FLWPUBK_TEST-ec84603d310ebb74874cb52aa4563352-X", // test key
    tx_ref: `tx-${Date.now()}`,
    amount: plan.amount,
    currency: plan.currency,
    payment_options: "card,ussd,banktransfer",
    customer: {
      email,
      phonenumber: "+2348012345678",
      name: "John Doe",
    },
    customizations: {
      title: `${plan.name} Subscription`,
      description: `Payment for ${plan.name}`,
    },
    callback: async (response) => {
      closePaymentModal(); // closes Flutterwave modal
      console.log("Flutterwave callback response:", response);

      const txId = response.transaction_id;

      try {
        const res = await axios.post(`${API_URL}/verify-payment`, {
          txId,
          plan: plan.name,
          amount: plan.amount,
          currency: plan.currency,
          email,
        });
        alert(res.data.message);
      } catch (err) {
        console.error("Backend error:", err.response?.data || err.message);
        alert("Payment verification failed");
      }
    },
    onClose: () => {},
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Choose Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
            <p className="mb-4">
              {plan.amount === 0
                ? "Free"
                : `${plan.currency} ${plan.amount.toLocaleString()}`}
            </p>

            {plan.amount === 0 ? (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => handleFreePlan(plan)}
              >
                Subscribe
              </button>
            ) : (
              <FlutterWaveButton
                {...getFlutterwaveConfig(plan)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;
