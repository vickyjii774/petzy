import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import axios from 'axios';
const api = axios.create({ baseURL: import.meta.env.VITE_BACKEND_URL });

const Order = () => {
  const { cart, getCartTotal } = useContext(CartContext);


  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    deliveryNotes: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const deliveryFee = 50;
  const subtotal = getCartTotal();
  const total = subtotal + deliveryFee;

  // Fetch logged-in customer profile
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await api.get("/customers/profile", {
          headers: { Authorization: `Bearer ${token}` }
        });
        const customer = res.data.customer;
        setCustomerInfo({
          name: customer.firstname + ' ' + customer.lastname,
          phone: customer.phone,
          email: customer.email,
          address: '',
          deliveryNotes: ''
        });
      } catch (error) {
        console.error("Failed to load profile:", error);
      }
    };

    fetchProfile();
  }, []);

  // ✅ Handle order placement
  const handlePlaceOrder = async () => {
    if (!cart.length) {
      alert("Your cart is empty!");
      return;
    }

    if (!customerInfo.address.trim()) {
      alert("Please enter your delivery address!");
      return;
    }

    setLoading(true);
    try {
      // Send order to backend first
      const res = await api.post("/orders/place", {
        items: cart.map(item => ({
          foodid: item.foodid,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        address: customerInfo.address,
        deliveryNotes: customerInfo.deliveryNotes,
        paymentMethod,
        totalAmount: total
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });

      console.log("Order placed successfully:", res.data);

      // ✅ eSewa redirect for online payment
      if (paymentMethod === "esewa") {
        const payRes = await api.post("/esewa/pay", {
          orderId: res.data.order._id,
          total_amount: total,
          product_code: "EPAYTEST",
          success_url: `${import.meta.env.VITE_FRONTEND_URL}/payment-success`,
          failure_url: `${import.meta.env.VITE_FRONTEND_URL}/payment-failed`
        });
        document.write(payRes.data);
        return;
      }

      // ✅ Cash on Delivery flow
      setOrderPlaced(true);
    } catch (error) {
      console.error("Order placement error:", error);
      alert("Failed to place order.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Show success message after COD
  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50 flex items-center justify-center p-4">
        <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md w-full border-4 border-yellow-400 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-cyan-600 to-teal-600"></div>
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="text-white text-3xl">✓</div>
          </div>
          <div className="text-yellow-500 text-lg mb-2 font-bold">🐾 Thank You! 🐾</div>
          <h1 className="text-3xl font-bold text-cyan-900 mb-3">Order Confirmed!</h1>
          <p className="text-slate-600 mb-4 text-lg">Your pet products are being prepared with care.</p>
          <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-4 rounded-xl mb-6 border-2 border-cyan-300">
            <p className="text-cyan-900 font-bold text-xl">Total: Rs. {total}</p>
            <p className="text-sm text-slate-600 mt-1">Estimated delivery: 2-3 business days</p>
          </div>
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-6 py-3 rounded-full font-bold hover:from-cyan-700 hover:to-teal-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  // ✅ Main checkout screen
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-teal-50">
      <div className="relative max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="text-cyan-600 text-xl mb-4 font-semibold">🐾 Final Step • Complete Your Order</div>
          <h1 className="text-5xl font-bold text-cyan-900 mb-4">
            Complete Your <span className="text-teal-600">Pet Order</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Almost ready! Your pet products will be delivered to your doorstep
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left side - customer info & payment */}
          <div className="lg:col-span-2 space-y-8">
            {/* Customer Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-4 border-cyan-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-cyan-600 to-teal-600"></div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full flex items-center justify-center">
                  <div className="text-white font-bold text-lg">👤</div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-cyan-900">Customer Information</h2>
                  <p className="text-slate-600">Your registered details</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-4 rounded-xl border-2 border-cyan-200">
                  <label className="text-sm font-semibold text-cyan-700 mb-2 block">👤 Name</label>
                  <p className="text-cyan-900 font-bold text-lg">{customerInfo.name || 'Guest'}</p>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-4 rounded-xl border-2 border-cyan-200">
                  <label className="text-sm font-semibold text-cyan-700 mb-2 block">📱 Phone</label>
                  <p className="text-cyan-900 font-bold text-lg">{customerInfo.phone || 'N/A'}</p>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-cyan-700">📍 Address</label>
                    <textarea
                      name="address"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-cyan-200 rounded-xl focus:ring-2 focus:ring-cyan-500 bg-cyan-50 resize-none"
                      rows={3}
                      placeholder="Enter your delivery address"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-cyan-700">🚚 Delivery Notes (Optional)</label>
                    <textarea
                      name="deliveryNotes"
                      value={customerInfo.deliveryNotes}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, deliveryNotes: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-cyan-200 rounded-xl focus:ring-2 focus:ring-cyan-500 bg-cyan-50 resize-none"
                      rows={2}
                      placeholder="Any special instructions?"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-4 border-teal-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full flex items-center justify-center">
                  <div className="text-white font-bold text-lg">💳</div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-cyan-900">Payment Method</h2>
                  <p className="text-slate-600">Choose your preferred payment option</p>
                </div>
              </div>

              <div className="space-y-4">
                <label className="flex items-center p-6 border-2 border-cyan-200 rounded-xl cursor-pointer bg-gradient-to-r from-cyan-50 to-teal-50 hover:shadow-lg">
                  <input
                    type="radio"
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 text-cyan-600"
                  />
                  <div className="ml-6">
                    <div className="font-bold text-cyan-900 text-lg">💰 Cash on Delivery</div>
                    <div className="text-slate-600">Pay when your order arrives</div>
                  </div>
                </label>

                <label className="flex items-center p-6 border-2 border-cyan-200 rounded-xl cursor-pointer bg-gradient-to-r from-cyan-50 to-teal-50 hover:shadow-lg">
                  <input
                    type="radio"
                    value="esewa"
                    checked={paymentMethod === 'esewa'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 text-cyan-600"
                  />
                  <div className="ml-6">
                    <div className="font-bold text-cyan-900 text-lg">📱 eSewa Online Payment</div>
                    <div className="text-slate-600">Pay securely with eSewa</div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right side - order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-4 border-cyan-300 sticky top-8">
              <h2 className="text-2xl font-bold text-cyan-900 mb-4">Order Summary</h2>
              {cart.length === 0 ? (
                <p className="text-cyan-600 text-center">Your cart is empty</p>
              ) : (
                <>
                  {cart.map((item) => (
                    <div key={item.foodid} className="flex justify-between items-center py-2 border-b border-cyan-200">
                      <span className="text-slate-700">{item.name} × {item.quantity}</span>
                      <span className="text-cyan-700 font-semibold">Rs. {item.price * item.quantity}</span>
                    </div>
                  ))}
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-slate-700"><span>Subtotal:</span><span>Rs. {subtotal}</span></div>
                    <div className="flex justify-between text-slate-700"><span>Delivery:</span><span>Rs. {deliveryFee}</span></div>
                    <div className="flex justify-between font-bold text-2xl text-cyan-900 border-t border-cyan-200 pt-2"><span>Total:</span><span className="text-teal-600">Rs. {total}</span></div>
                  </div>

                  <button
                    onClick={handlePlaceOrder}
                    disabled={loading}
                    className="w-full mt-6 bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-4 rounded-full font-bold hover:from-cyan-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
                  >
                    {loading ? 'Processing...' : `Place Order (Rs. ${total})`}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
