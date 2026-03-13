// components/UpgradePlans.tsx   or   app/upgrade/page.tsx
"use client";

import { useState } from "react";
import { Check, Crown, Rocket, Zap, ChevronRight } from "lucide-react";

const plans = [
  {
    name: "Ignite",
    icon: Zap,
    monthly: 0,
    annual: 0,
    description: "Start your creative journey",
    isCurrent: true,
    features: [
      "Basic profile creation – Forever Free",
      "Upload up to 5 works",
      "Browse marketplace",
      "Submit to 3 briefs per month",
      "Basic discovery features",
      "Community forums access",
    ],
  },
  {
    name: "Launch",
    icon: Rocket,
    monthly: 10.99,
    annual: 10.99 * 12 * 0.8, // 20% discount
    description: "Elevate your creative presence",
    popular: true,
    features: [
      "Everything in Ignite",
      "Unlimited work uploads",
      "Priority in discovery",
      "Submit to unlimited briefs",
      "Advanced analytics",
      "Verified badge",
      "Direct messaging",
      "Portfolio customization",
      "Early access to new features",
    ],
  },
  {
    name: "Excel",
    icon: Crown,
    monthly: 21.99,
    annual: 21.99 * 12 * 0.8, // 20% discount
    description: "Professional industry presence",
    features: [
      "Everything in Launch",
      "AI-powered collaborator matching",
      "Premium support (24/7)",
      "Custom profile URL",
      "Exclusive industry events",
      "Advanced revenue analytics",
      "White-label portfolio",
      "API access",
      "Dedicated account manager",
    ],
  },
];

const faqs = [
  { q: "Can I switch plans anytime?", a: "Yes — upgrades are immediate, downgrades apply at the end of the current billing period." },
  { q: "What happens when I downgrade?", a: "You keep premium features until the end of your paid period, then move to the lower tier." },
  { q: "Do you offer refunds?", a: "Refunds are available within 7 days if premium features haven't been heavily used." },
  { q: "How does the annual discount work?", a: "Pay once per year and get 20% off the monthly rate — equivalent to 2 months free." },
];

export default function UpgradePlans() {
  const [isAnnual, setIsAnnual] = useState(false);

  const getPrice = (plan: typeof plans[0]) => {
    const p = isAnnual ? plan.annual : plan.monthly;
    return p === 0 ? "0" : p.toFixed(2);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
              Upgrade
            </span>{" "}
            Your Plan
          </h1>
          <p className="text-xl text-gray-400">
            Choose the plan that fits your creative ambitions
          </p>
        </div>

        {/* Toggle Monthly / Annual */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-900 rounded-full p-1.5 border border-gray-800 shadow-xl">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-7 py-3 rounded-full text-base font-medium transition-all duration-300 ${
                !isAnnual
                  ? "bg-gradient-to-r from-[#E54FA9] to-[#831CDF] text-white shadow-lg shadow-[#831CDF]/30"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-7 py-3 rounded-full text-base font-medium flex items-center gap-2.5 transition-all duration-300 ${
                isAnnual
                  ? "bg-gradient-to-r from-[#E54FA9] to-[#831CDF] text-white shadow-lg shadow-[#831CDF]/30"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Annual
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2.5 py-1 rounded-full font-semibold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-7 lg:gap-9 mb-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? "border-[#E54FA9]/50 shadow-2xl shadow-[#831CDF]/30 scale-[1.03] z-10"
                  : "border-gray-800 hover:border-[#E54FA9]/30"
              } bg-gradient-to-b from-gray-900 via-black to-black`}
            >
              {plan.popular && (
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] text-white text-sm font-bold px-6 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="p-8 pt-12">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#E54FA9]/20 to-[#831CDF]/20 flex items-center justify-center">
                    <plan.icon className="w-7 h-7 text-[#E54FA9]" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
                      {plan.name}
                    </h2>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>
                </div>

                <div className="mb-9">
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-extrabold tracking-tight">
                      ${getPrice(plan)}
                    </span>
                    <span className="text-2xl text-gray-400">/mo</span>
                  </div>

                  {isAnnual && plan.monthly > 0 && (
                    <div className="mt-2 text-[#E54FA9] text-lg font-medium">
                      ${(plan.monthly * 12).toFixed(0)} billed annually
                    </div>
                  )}

                  {plan.monthly === 0 && (
                    <div className="mt-2 text-gray-400 text-lg">Forever Free</div>
                  )}
                </div>

                <ul className="space-y-3.5 mb-10">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-200 text-[15px]">
                      <Check className="w-5 h-5 text-[#E54FA9] mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                    plan.isCurrent
                      ? "bg-gray-800 text-gray-500 cursor-default border border-gray-700"
                      : plan.popular
                      ? "bg-gradient-to-r from-[#E54FA9] to-[#831CDF] hover:from-[#D63F99] hover:to-[#730CCF] text-white shadow-xl shadow-[#831CDF]/40 active:scale-[0.98]"
                      : "bg-gray-800 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] border border-gray-700 text-white hover:shadow-lg hover:shadow-[#831CDF]/30 active:scale-[0.98]"
                  }`}
                  disabled={plan.isCurrent}
                >
                  {plan.isCurrent ? "Current Plan" : `Upgrade to ${plan.name}`}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
              Frequently Asked
            </span>{" "}
            Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details
                key={i}
                className="group bg-gray-900 border border-gray-800 rounded-xl hover:border-[#E54FA9]/30 transition-all"
              >
                <summary className="flex justify-between items-center px-7 py-5 cursor-pointer hover:bg-gradient-to-r hover:from-[#E54FA9]/5 hover:to-[#831CDF]/5 transition-colors text-lg font-medium">
                  <span className="group-hover:text-[#E54FA9] transition-colors">
                    {item.q}
                  </span>
                  <ChevronRight className="w-6 h-6 transition-transform group-open:rotate-90 text-[#E54FA9]" />
                </summary>
                <div className="px-7 pb-7 pt-2 text-gray-300 border-t border-gray-800">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400">
            Have questions?{" "}
            <button className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent hover:from-[#D63F99] hover:to-[#730CCF] font-medium">
              Contact our support team
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}