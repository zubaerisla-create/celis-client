// app/payments/payouts/page.tsx   (or wherever you want this route)
"use client";

import { useState } from "react";
import { ArrowLeft, CheckCircle2, Clock, DollarSign, X } from "lucide-react";

interface Payout {
  id: string;
  amount: number;
  requested: string;
  processed?: string;
  status: "Completed" | "Approved" | "Pending";
}

const mockPayouts: Payout[] = [
  {
    id: "p1",
    amount: 450,
    requested: "Feb 10, 2026",
    processed: "Feb 12, 2026",
    status: "Completed",
  },
  {
    id: "p2",
    amount: 320,
    requested: "Feb 18, 2026",
    processed: "Feb 20, 2026",
    status: "Approved",
  },
  {
    id: "p3",
    amount: 156,
    requested: "Feb 22, 2026",
    status: "Pending",
  },
];

export default function PayoutsPage() {
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [payoutAmount, setPayoutAmount] = useState<number>(0);

  const availableBalance = 156;
  const minPayout = 50;
  const processingFeePercent = 2.5;

  const handleRequestPayout = () => {
    setShowRequestModal(true);
  };

  const handleCloseModal = () => {
    setShowRequestModal(false);
    setPayoutAmount(0);
  };

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (payoutAmount < minPayout || payoutAmount > availableBalance) {
      alert("Invalid amount");
      return;
    }
    // Here you would call your payout API
    console.log(`Requesting payout of $${payoutAmount}`);
    setShowRequestModal(false);
    setPayoutAmount(0);
  };

  const feeAmount = (payoutAmount * processingFeePercent) / 100;
  const netAmount = payoutAmount - feeAmount;

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
          <h1 className="text-3xl font-bold">Payouts</h1>
          <p className="text-zinc-400 mt-1">
            Request payouts and track your earnings
          </p>
        </div>

        {/* Available Balance Card */}
        <div className="bg-gradient-to-br from-rose-950/70 to-rose-900/40 border border-rose-900/50 rounded-xl p-6 mb-10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_80%,#ef4444_0%,transparent_60%)]" />

          <div className="relative">
            <h2 className="text-xl font-semibold mb-3">Available Balance</h2>
            <div className="flex items-end gap-3 mb-4">
              <span className="text-5xl md:text-6xl font-bold text-white">
                ${availableBalance}
              </span>
            </div>

            <p className="text-sm text-rose-300 mb-6">
              Minimum payout: ${minPayout}
            </p>

            <button
              onClick={handleRequestPayout}
              disabled={availableBalance < minPayout}
              className="bg-rose-600 hover:bg-rose-700 disabled:bg-rose-900/50 disabled:cursor-not-allowed px-6 py-3 rounded-lg font-medium shadow-lg shadow-rose-950/40 transition-colors"
            >
              Request Payout
            </button>
          </div>
        </div>

        {/* Payout History */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
          <div className="p-6 border-b border-zinc-800">
            <h2 className="text-xl font-semibold">Payout History</h2>
          </div>

          <div className="divide-y divide-zinc-800">
            {mockPayouts.map((payout) => (
              <div
                key={payout.id}
                className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-zinc-950/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {payout.status === "Completed" && (
                    <CheckCircle2 className="text-emerald-500" size={28} />
                  )}
                  {payout.status === "Approved" && (
                    <DollarSign className="text-blue-400" size={28} />
                  )}
                  {payout.status === "Pending" && (
                    <Clock className="text-amber-400" size={28} />
                  )}

                  <div>
                    <div className="text-xl font-bold">${payout.amount}</div>
                    <div className="text-sm text-zinc-500">
                      Requested {payout.requested}
                      {payout.processed && ` • Processed ${payout.processed}`}
                    </div>
                  </div>
                </div>

                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    payout.status === "Completed"
                      ? "bg-emerald-950 text-emerald-400 border border-emerald-900/50"
                      : payout.status === "Approved"
                      ? "bg-blue-950 text-blue-400 border border-blue-900/50"
                      : "bg-amber-950 text-amber-400 border border-amber-900/50"
                  }`}
                >
                  {payout.status}
                </div>
              </div>
            ))}

            {mockPayouts.length === 0 && (
              <div className="p-10 text-center text-zinc-500">
                No payout history yet.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Request Payout Modal */}
      {showRequestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl w-full max-w-md">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-zinc-800">
              <h2 className="text-xl font-semibold">Request Payout</h2>
              <button
                onClick={handleCloseModal}
                className="text-zinc-400 hover:text-white p-1 rounded-full hover:bg-zinc-800"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmitRequest} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Amount (USD) you would like to request for payout
                </label>
                <input
                  type="number"
                  value={payoutAmount}
                  onChange={(e) => setPayoutAmount(Number(e.target.value))}
                  min={minPayout}
                  max={availableBalance}
                  step="0.01"
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-lg font-medium focus:outline-none focus:border-zinc-500 placeholder-zinc-600"
                  placeholder="0.00"
                />
                <div className="mt-2 text-sm text-zinc-500">
                  Available: ${availableBalance.toFixed(2)}
                </div>
              </div>

              <div className="text-sm text-zinc-400 bg-zinc-950/70 border border-zinc-800 rounded-lg p-4">
                Payouts are typically processed within 3-5 business days after
                approval. A 2.5% processing fee will be deducted.
                {payoutAmount > 0 && (
                  <div className="mt-3 text-white">
                    <div>Fee: ${feeAmount.toFixed(2)}</div>
                    <div className="font-medium">You will receive: ${netAmount.toFixed(2)}</div>
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="submit"
                  disabled={payoutAmount < minPayout || payoutAmount > availableBalance}
                  className="flex-1 bg-rose-600 hover:bg-rose-700 disabled:bg-rose-900/50 disabled:cursor-not-allowed py-3 rounded-lg font-medium transition-colors"
                >
                  Request ${payoutAmount.toFixed(2)}
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