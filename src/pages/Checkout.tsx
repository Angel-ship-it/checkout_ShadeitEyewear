import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useCartStore } from '../store/cartStore';
import { useAuthStore } from '../store/authStore';
import { CreditCard, Phone, Wallet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type PaymentMethod = 'card' | 'mpesa' | 'paypal';

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [loading, setLoading] = useState(false);
  const { items, clearCart } = useCartStore();
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + price * item.quantity;
  }, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      clearCart();
      navigate('/thank-you');
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Checkout</h1>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Payment Methods */}
              <div className="md:col-span-2 space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                  <div className="space-y-4">
                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-indigo-500 transition-all duration-300 hover:shadow-md">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="mr-3"
                      />
                      <CreditCard className="w-6 h-6 mr-3 text-indigo-600" />
                      <span>Credit/Debit Card</span>
                    </label>

                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-indigo-500 transition-all duration-300 hover:shadow-md">
                      <input
                        type="radio"
                        name="payment"
                        value="mpesa"
                        checked={paymentMethod === 'mpesa'}
                        onChange={() => setPaymentMethod('mpesa')}
                        className="mr-3"
                      />
                      <Phone className="w-6 h-6 mr-3 text-green-600" />
                      <span>M-Pesa</span>
                    </label>

                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-indigo-500 transition-all duration-300 hover:shadow-md">
                      <input
                        type="radio"
                        name="payment"
                        value="paypal"
                        checked={paymentMethod === 'paypal'}
                        onChange={() => setPaymentMethod('paypal')}
                        className="mr-3"
                      />
                      <Wallet className="w-6 h-6 mr-3 text-blue-600" />
                      <span>PayPal</span>
                    </label>
                  </div>
                </div>

                {/* Payment Forms */}
                {paymentMethod === 'card' && (
                  <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVC
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                    </div>
                  </form>
                )}

                {paymentMethod === 'mpesa' && (
                  <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+255 XXX XXX XXX"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      You will receive an M-Pesa prompt on your phone to complete the payment.
                    </p>
                  </form>
                )}

                {paymentMethod === 'paypal' && (
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <p className="text-gray-600 mb-4">
                      You will be redirected to PayPal to complete your payment securely.
                    </p>
                    <img 
                      src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
                      alt="PayPal"
                      className="mx-auto h-12"
                    />
                  </div>
                )}
              </div>

              {/* Order Summary */}
              <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">{item.name} × {item.quantity}</span>
                      <span className="font-medium">${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span className="text-indigo-600">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-indigo-600 text-white py-3 rounded-full hover:bg-indigo-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Complete Payment'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}