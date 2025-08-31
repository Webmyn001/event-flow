// ConfirmationPage.jsx
const ConfirmationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <div className="text-green-500 text-6xl mb-6">✓</div>
        <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for your booking. Your delivery has been scheduled and a confirmation email has been sent.
        </p>
        <p className="text-sm text-gray-500">
          Tracking number: SS-{Math.random().toString(36).substr(2, 9).toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default ConfirmationPage;
