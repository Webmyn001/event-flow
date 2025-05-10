import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  FiMessageSquare, 
  FiCheckCircle, 
  FiStar, 
  FiPackage, 
  FiDollarSign,
  FiUser,
  FiAlertTriangle
} from 'react-icons/fi';

const TransactionPage = ({ isSeller = false }) => {
  const { itemId } = useParams();
  
  // State management
  const [transactions, setTransactions] = useState([
    {
      id: "1",
      item: {
        title: "MacBook Pro 2020",
        price: "₦280,000",
        status: "active",
        listedAt: "2024-03-01"
      },
      buyer: {
        name: "Temi Adebayo",
        avatar: "https://example.com/buyer-avatar.jpg",
        rating: 4.8
      },
      seller: {
        name: "Sarah Johnson",
        avatar: "https://example.com/seller-avatar.jpg",
        rating: 4.9
      },
      messages: [],
      unread: 2
    }
  ]);

  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [condition, setCondition] = useState('');
  const [validationError, setValidationError] = useState('');
  const [issues, setIssues] = useState(''); // Added issues state

  // Load transaction on mount
  useEffect(() => {
    const transaction = transactions.find(t => t.id === itemId);
    setSelectedTransaction(transaction);
  }, [itemId, transactions]);

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedTransaction) {
      const updatedTransaction = {
        ...selectedTransaction,
        messages: [
          ...selectedTransaction.messages,
          {
            text: newMessage,
            sender: isSeller ? 'seller' : 'buyer',
            timestamp: new Date().toLocaleTimeString()
          }
        ],
        unread: isSeller ? 0 : selectedTransaction.unread
      };

      setSelectedTransaction(updatedTransaction);
      setNewMessage('');
    }
  };

  const handleConfirmDelivery = () => {
    if (!condition) {
      setValidationError('Please select the item condition');
      return;
    }

    if (condition === 'damaged' && !issues.trim()) {
      setValidationError('Please describe the damage issues');
      return;
    }

    const updatedTransactions = transactions.map(t => 
      t.id === itemId ? { 
        ...t, 
        item: { 
          ...t.item, 
          status: 'sold',
          condition,          // Include condition in item data
          issues: condition === 'damaged' ? issues : null 
        }
      } : t
    );

    setTransactions(updatedTransactions);
    setShowConfirmation(false);
    setSelectedTransaction(prev => ({
      ...prev,
      item: { 
        ...prev.item, 
        status: 'sold',
        condition,
        issues: condition === 'damaged' ? issues : null
      }
    }));
    
    // Reset form states
    setCondition('');
    setIssues('');
    setValidationError('');
  };

  return (
    <div className={`flex h-screen bg-gray-50 ${isSeller ? 'items-start' : ''}`}>
      {/* Seller Sidebar */}
      {isSeller && (
        <div className="w-1/3 border-r bg-white">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Your Transactions</h2>
          </div>
          <div className="overflow-y-auto">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                onClick={() => setSelectedTransaction(transaction)}
                className={`p-4 border-b cursor-pointer hover:bg-blue-50 ${
                  selectedTransaction?.id === transaction.id ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{transaction.item.title}</h3>
                    <p className="text-sm text-gray-600">{transaction.buyer.name}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <FiStar className="text-yellow-400" />
                      <span className="text-sm">{transaction.buyer.rating}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      transaction.item.status === 'active' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {transaction.item.status}
                    </span>
                    {transaction.unread > 0 && (
                      <span className="ml-2 bg-red-500 text-white px-2 rounded-full text-xs">
                        {transaction.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className={`${isSeller ? 'flex-1 p-6' : 'w-full p-4'}`}>
        {selectedTransaction ? (
          <div className="h-full flex flex-col">
            {/* Transaction Header */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <div className="flex justify-between items-center flex-wrap gap-4">
                <div>
                  <h1 className="text-2xl font-bold">{selectedTransaction.item.title}</h1>
                  <div className="flex items-center gap-2 mt-2">
                    <FiDollarSign className="text-green-600" />
                    <span className="text-xl font-bold">{selectedTransaction.item.price}</span>
                    <span className="mx-2">•</span>
                    <FiPackage className="text-blue-600" />
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      selectedTransaction.item.status === 'active' 
                        ? 'bg-yellow-100 text-yellow-600' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {selectedTransaction.item.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img 
                    src={isSeller ? selectedTransaction.buyer.avatar : selectedTransaction.seller.avatar} 
                    alt={isSeller ? "Buyer" : "Seller"} 
                    className="w-10 h-10 rounded-full" 
                  />
                  <div>
                    <p className="font-medium">
                      {isSeller ? selectedTransaction.buyer.name : selectedTransaction.seller.name}
                    </p>
                    <div className="flex items-center gap-1">
                      <FiStar className="text-yellow-400" />
                      <span className="text-sm">
                        {isSeller ? selectedTransaction.buyer.rating : selectedTransaction.seller.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Section */}
            <div className="flex-1 bg-white rounded-xl shadow-sm p-6">
              <div className="h-[calc(100vh-300px)] overflow-y-auto mb-4 border rounded-lg p-4">
                {selectedTransaction.messages.map((msg, index) => (
                  <div 
                    key={index}
                    className={`mb-3 ${msg.sender === (isSeller ? 'seller' : 'buyer') ? 'text-right' : ''}`}
                  >
                    <div className={`inline-block p-3 rounded-lg max-w-[80%] ${
                      msg.sender === (isSeller ? 'seller' : 'buyer') 
                        ? 'bg-blue-100 ml-auto' 
                        : 'bg-gray-100'
                    }`}>
                      <p>{msg.text}</p>
                      <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>

              {selectedTransaction.item.status === 'active' ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1 p-2 border rounded-lg"
                    placeholder="Type your message..."
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Send
                  </button>
                </div>
              ) : (
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <FiCheckCircle className="text-2xl text-green-600 mx-auto mb-2" />
                  <p className="font-medium">Transaction Completed</p>
                  <p className="text-gray-600">
                    {isSeller ? 
                      "This item was marked as sold" : 
                      "Thank you for confirming the delivery!"
                    }
                  </p>
                </div>
              )}
            </div>

            {/* Delivery Confirmation Button */}
            {!isSeller && selectedTransaction.item.status === 'active' && (
              <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
                <button
                  onClick={() => setShowConfirmation(true)}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 flex items-center justify-center gap-2"
                >
                  <FiCheckCircle className="text-xl" />
                  Confirm Item Received
                </button>
              </div>
            )}
          </div>
        ) : isSeller ? (
          <div className="h-full flex items-center justify-center text-gray-500">
            Select a transaction from the list
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            Loading transaction...
          </div>
        )}

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl p-6 max-w-md w-full">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FiAlertTriangle className="text-yellow-500" />
                Confirm Delivery
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block mb-2 font-medium">Item Condition:</label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  >
                    <option value="">Select Condition</option>
                    <option value="excellent">Excellent - As described</option>
                    <option value="good">Good - Minor issues</option>
                    <option value="damaged">Damaged - Significant issues</option>
                  </select>
                </div>

                {condition === 'damaged' && (
                  <div>
                    <label className="block mb-2 font-medium">Describe the issues:</label>
                    <textarea
                      value={issues}
                      onChange={(e) => setIssues(e.target.value)}
                      className="w-full p-2 border rounded-lg"
                      rows="3"
                      placeholder="Describe any problems with the item..."
                    />
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    id="confirmReceived" 
                    className="w-4 h-4"
                    required
                  />
                  <label htmlFor="confirmReceived" className="text-sm">
                    I confirm I have received the physical item
                  </label>
                </div>

                {validationError && (
                  <p className="text-red-500 text-sm">{validationError}</p>
                )}

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => {
                      setShowConfirmation(false);
                      setValidationError('');
                      setIssues('');
                    }}
                    className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmDelivery}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionPage;