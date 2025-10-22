import React, { useState } from "react";

/**
 * Simple payment page:
 * - choose provider (Flutterwave)
 * - click "Pay" -> calls backend /api/payments/make-payment/:planId
 * - receives link and opens it in new tab
 */

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const planId = "demo-plan-1"; // arbitrary for demo
  const backendBase = "http://localhost:4000";

  const handlePay = async () => {
    setLoading(true);
    setResult(null);
    try {
      const body = { provider: "FLUTTERWAVE", userId: "frontend-test-user" };
      const resp = await fetch(`${backendBase}/api/payments/make-payment/${planId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await resp.json();
      setResult(data);
      if (data?.data?.link) {
        window.open(data.data.link, "_blank");
      } else if (data?.data?.initResponse?.link) {
        window.open(data.data.initResponse.link, "_blank");
      } else {
        alert("No checkout link returned. Inspect response.");
      }
    } catch (e) {
      console.error(e);
      alert("Payment initialization failed; check backend console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">Demo Payment Page</h1>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Plan</label>
        <div className="p-4 border rounded bg-slate-50">
          Demo Plan — ₦50,000 (example)
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-medium">Provider</label>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded border bg-indigo-600 text-white" onClick={handlePay} disabled={loading}>
            {loading ? "Initializing..." : "Pay with Flutterwave"}
          </button>
        </div>
      </div>

      <div className="mt-4">
        <pre className="text-xs bg-slate-100 p-3 rounded">{JSON.stringify(result, null, 2)}</pre>
      </div>
    </div>
  );
}
