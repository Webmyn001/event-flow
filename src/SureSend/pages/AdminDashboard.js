// AdminDashboard.jsx
const AdminDashboard = () => {
  const stats = [
    { label: "Total Deliveries", value: "1,234" },
    { label: "Pending Orders", value: "23" },
    { label: "Completed Today", value: "45" }
  ];

  const recentOrders = [
    { id: 1, from: "123 Main St", to: "456 Oak Ave", status: "Delivered" },
    { id: 2, from: "789 Pine Rd", to: "321 Elm St", status: "In Transit" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-8">Admin Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600">{stat.label}</p>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-600">
              <th>Order ID</th>
              <th>From</th>
              <th>To</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id}>
                <td className="py-2">{order.id}</td>
                <td>{order.from}</td>
                <td>{order.to}</td>
                <td>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    order.status === "Delivered" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
