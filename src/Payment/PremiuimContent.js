import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:9292/api/v1/sub";

function PremiumContentPage() {
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const email = "user@example.com"; // replace with logged-in user email / auth token

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const res = await axios.get(`${API_URL}/premium-content`, {
          headers: { "x-user-email": email },
        });

        setSubscription(res.data);
      } catch (err) {
        console.error("Error fetching subscription:", err.response?.data || err.message);
        setError(err.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchSubscription();
  }, [email]);

  // Redirect or show message if expired
  useEffect(() => {
    if (subscription?.status === "expired") {
      alert("Your subscription has expired. Please renew to access premium content.");
      navigate("/subscription"); // redirect user to subscription/renewal page
    }
  }, [subscription, navigate]);

  if (loading) return <p>Loading premium content...</p>;
  if (error) return <p className="text-red-500">❌ {error}</p>;

  if (!subscription) return null;

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto mt-10 text-center">
      <h1 className="text-2xl font-bold mb-4">📦 Premium Content</h1>
      <p className="mb-2">{subscription.message}</p>
      <p className="text-sm text-gray-600">Plan: {subscription.plan}</p>
      <p className="text-sm text-gray-600">
        Expires at: {new Date(subscription.expiresAt).toLocaleString()}
      </p>
      <p className={`font-semibold ${subscription.status === "active" ? "text-green-600" : "text-red-600"}`}>
        Status: {subscription.status.toUpperCase()}
      </p>
    </div>
  );
}

export default PremiumContentPage;
