import React from "react";

function Dashboard() {
  return (
    <div className="p-6 max-w-lg mx-auto mt-10 bg-gray-100 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">🎉 Welcome to your Dashboard</h1>
      <p>This page is only visible to users with an active subscription.</p>
    </div>
  );
}

export default Dashboard;
