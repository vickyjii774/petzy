import React from "react";

const PaymentSuccess = () => {

    // read esewa ?data=... param
    const urlParams = new URLSearchParams(window.location.search);
    const dataParam = urlParams.get("data");
    let decoded = dataParam ? JSON.parse(atob(dataParam)) : null;

    const finalAmount = decoded?.total_amount;

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50 flex items-center justify-center p-4">
            <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md w-full border-4 border-yellow-400 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-cyan-600 to-teal-600"></div>
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-white text-3xl">✓</div>
                </div>
                <div className="text-yellow-500 text-lg mb-2 font-bold">🐾 Payment Successful! 🐾</div>
                <h1 className="text-3xl font-bold text-cyan-900 mb-3">Thank You!</h1>
                <p className="text-slate-600 mb-4 text-lg">Your pet products order has been confirmed.</p>
                <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-4 rounded-xl mb-6 border-2 border-cyan-300">
                    <p className="text-cyan-900 font-bold text-xl">Total: Rs. {finalAmount}</p>
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
};

export default PaymentSuccess;
