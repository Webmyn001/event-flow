import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function SubscriptionGate() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Hardcoded demo email — replace with real logged-in user email
  const email = "user@example.com";

  useEffect(() => {
    const checkSubscription = async () => {
      try {
        // ✅ Call premium-content route with email in query
        const res = await axios.get(`${API_URL}/api/premium-content?email=${email}`);
        
        if (res.data.success && res.data.status === "active") {
          // 🔥 If subscription is active, redirect user
          navigate("/dashboard");
        } else {
          setError("❌ Your subscription has expired");
        }
      } catch (err) {
        console.error("Subscription check failed:", err.response?.data || err.message);
        setError("❌ Your subscription has expired");
      } finally {
        setLoading(false);
      }
    };

    checkSubscription();
  }, [email, navigate]);

  if (loading) return <p>Checking your subscription...</p>;

  return (
    <div className="p-6 max-w-md mx-auto mt-10 bg-white rounded-lg shadow">
      {error ? (
        <p className="text-red-600 font-bold">{error}</p>
      ) : (
        <p className="text-green-600">Redirecting...</p>
      )}
    </div>
  );
}

export default SubscriptionGate;
