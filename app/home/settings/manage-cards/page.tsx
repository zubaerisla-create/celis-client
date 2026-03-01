// app/payments/page.tsx  (or wherever you want this page)
"use client";

import { useState } from "react";
import { ArrowLeft, CreditCard, Trash2, X } from "lucide-react";

interface Card {
  id: string;
  brand: "Visa" | "Mastercard" | string;
  last4: string;
  expiry: string;
  isDefault?: boolean;
}

const mockCards: Card[] = [
  {
    id: "card_1",
    brand: "Visa",
    last4: "4242",
    expiry: "12/25",
    isDefault: true,
  },
  {
    id: "card_2",
    brand: "Mastercard",
    last4: "5555",
    expiry: "08/26",
    isDefault: false,
  },
];

export default function PaymentMethodsPage() {
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddCard = () => {
    setShowAddModal(true);
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
  };

  const handleSubmitCard = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would call Stripe / payment API
    console.log("Add new card submitted");
    setShowAddModal(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="mb-10">
          <a
            href="/home/settings"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-200 mb-4"
          >
            <ArrowLeft size={18} />
            Back to Payments
          </a>
          <h1 className="text-3xl font-bold">Payment Methods</h1>
          <p className="text-zinc-400 mt-1">
            Manage your payment methods for purchases and payouts
          </p>
        </div>

        {/* Add Card Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={handleAddCard}
            className="bg-rose-600 hover:bg-rose-700 px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-rose-950/30"
          >
            + Add Card
          </button>
        </div>

        {/* Card List */}
        <div className="space-y-4">
          {mockCards.map((card) => (
            <div
              key={card.id}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex items-center justify-between hover:border-zinc-700 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded flex items-center justify-center">
                  <CreditCard size={20} className="text-zinc-400" />
                </div>
                <div>
                  <div className="font-medium">
                    {card.brand} •••• {card.last4}
                  </div>
                  <div className="text-sm text-zinc-500">
                    Expires {card.expiry}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {card.isDefault && (
                  <span className="text-xs bg-emerald-950 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-900/50">
                    Default
                  </span>
                )}

                {!card.isDefault && (
                  <button className="text-xs bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 rounded border border-zinc-700 text-zinc-300">
                    Set Default
                  </button>
                )}

                <button className="text-rose-400 hover:text-rose-300 opacity-70 group-hover:opacity-100 transition-opacity">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}

          {mockCards.length === 0 && (
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10 text-center text-zinc-500">
              No payment methods added yet.
            </div>
          )}
        </div>
      </div>

      {/* Add Card Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl w-full max-w-md">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-zinc-800">
              <h2 className="text-xl font-semibold">Add Payment Method</h2>
              <button
                onClick={handleCloseModal}
                className="text-zinc-400 hover:text-white p-1 rounded-full hover:bg-zinc-800"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmitCard} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-zinc-500 placeholder-zinc-600"
                  maxLength={19}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-zinc-500 placeholder-zinc-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-zinc-500 placeholder-zinc-600"
                    maxLength={5}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-zinc-500 placeholder-zinc-600"
                    maxLength={4}
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-rose-600 hover:bg-rose-700 py-3 rounded-lg font-medium transition-colors"
                >
                  Add Card
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 bg-zinc-800 hover:bg-zinc-700 py-3 rounded-lg border border-zinc-700 font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}