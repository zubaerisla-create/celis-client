// app/create-brief/page.tsx
"use client";

import { useState } from "react";
import { Plus, Calendar, X } from "lucide-react";
import Link from "next/link";

export default function CreateIndustryBriefPage() {
  const [roles, setRoles] = useState<string[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [requirements, setRequirements] = useState<string[]>([""]);
  const [deliverables, setDeliverables] = useState<string[]>([""]);

  const availableRoles = [
    "Songwriter",
    "Producer",
    "Visual Artist",
    "Choreographer",
    "Vocalist",
    "Mixer",
    "Engineer",
  ];

  const availableGenres = [
    "Pop",
    "Hip-Hop",
    "R&B",
    "Rock",
    "Electronic",
    "Jazz",
    "Country",
    "Alternative",
    "Soul",
    "Indie",
  ];

  const addRequirement = () => setRequirements([...requirements, ""]);
  const addDeliverable = () => setDeliverables([...deliverables, ""]);

  const updateRequirement = (index: number, value: string) => {
    const newReqs = [...requirements];
    newReqs[index] = value;
    setRequirements(newReqs);
  };

  const updateDeliverable = (index: number, value: string) => {
    const newDels = [...deliverables];
    newDels[index] = value;
    setDeliverables(newDels);
  };

  const removeRequirement = (index: number) =>
    setRequirements(requirements.filter((_, i) => i !== index));

  const removeDeliverable = (index: number) =>
    setDeliverables(deliverables.filter((_, i) => i !== index));

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="mb-10">
          <button onClick={() => window.history.back()} className="group">
            <span className="text-zinc-400 hover:text-[#E54FA9] text-sm flex items-center gap-1 mb-2 transition-colors">
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Briefs
            </span>
          </button>
          <h1 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
              Create
            </span>{' '}
            Industry Brief
          </h1>
          <p className="text-zinc-400 mt-1">Post an opportunity for the SPARTST community</p>
        </div>

        <form className="space-y-10">
          {/* Basic Information */}
          <section className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 lg:p-8 hover:border-[#E54FA9]/30 transition-all">
            <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
              Basic Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Brief Title <span className="text-[#E54FA9]">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="Looking for R&B Vocalist"
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all"
                  placeholder="e.g. Looking for R&B Vocalist"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Company/Organization <span className="text-[#E54FA9]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Company Type <span className="text-[#E54FA9]">*</span>
                </label>
                <select className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all">
                  <option value="">Select type</option>
                  <option>Major Label</option>
                  <option>Independent Label</option>
                  <option>Production Company</option>
                  <option>Talent Agency</option>
                  <option>Artist Management</option>
                  <option>Independent Artist</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">Overview</label>
              <textarea
                rows={5}
                placeholder="Describe what you're looking for in detail..."
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-sm placeholder-zinc-600 focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all resize-y"
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">
                Budget/Compensation <span className="text-[#E54FA9]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. $2,000 – $5,000 or 40% split"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all"
              />
            </div>
          </section>

          {/* Project Details */}
          <section className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 lg:p-8 hover:border-[#E54FA9]/30 transition-all">
            <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
              Project Details
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Looking For (Roles) <span className="text-[#E54FA9]">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableRoles.map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() =>
                        setRoles((prev) =>
                          prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
                        )
                      }
                      className={`px-3.5 py-1.5 text-sm rounded-full border transition-all ${
                        roles.includes(role)
                          ? "bg-gradient-to-r from-[#E54FA9]/20 to-[#831CDF]/20 border-[#E54FA9]/50 text-[#E54FA9]"
                          : "bg-zinc-800 border-zinc-700 hover:border-[#E54FA9] hover:text-[#E54FA9]"
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Genres</label>
                <div className="flex flex-wrap gap-2">
                  {availableGenres.map((genre) => (
                    <button
                      key={genre}
                      type="button"
                      onClick={() =>
                        setGenres((prev) =>
                          prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
                        )
                      }
                      className={`px-3.5 py-1.5 text-sm rounded-full border transition-all ${
                        genres.includes(genre)
                          ? "bg-gradient-to-r from-[#E54FA9]/20 to-[#831CDF]/20 border-[#E54FA9]/50 text-[#E54FA9]"
                          : "bg-zinc-800 border-zinc-700 hover:border-[#E54FA9] hover:text-[#E54FA9]"
                      }`}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Brief Type <span className="text-[#E54FA9]">*</span>
                  </label>
                  <select className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all">
                    <option>Paid</option>
                    <option>Revenue Share</option>
                    <option>Collaboration</option>
                    <option>Exposure</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Submission Deadline <span className="text-[#E54FA9]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all"
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Requirements */}
          <section className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 lg:p-8 hover:border-[#E54FA9]/30 transition-all">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-semibold bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
                Requirements
              </h2>
              <button
                type="button"
                onClick={addRequirement}
                className="flex items-center gap-1.5 text-sm bg-zinc-800 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] px-3 py-1.5 rounded-lg border border-zinc-700 hover:border-transparent transition-all group"
              >
                <Plus size={16} className="group-hover:text-white" />
                <span className="group-hover:text-white">Add Requirement</span>
              </button>
            </div>

            <div className="space-y-4">
              {requirements.map((req, index) => (
                <div key={index} className="flex gap-3">
                  <input
                    type="text"
                    value={req}
                    onChange={(e) => updateRequirement(index, e.target.value)}
                    placeholder={`Requirement ${index + 1}`}
                    className="flex-1 bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all"
                  />
                  {requirements.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeRequirement(index)}
                      className="text-zinc-500 hover:text-[#E54FA9] transition-colors"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Deliverables */}
          <section className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 lg:p-8 hover:border-[#E54FA9]/30 transition-all">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-semibold bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
                Deliverables
              </h2>
              <button
                type="button"
                onClick={addDeliverable}
                className="flex items-center gap-1.5 text-sm bg-zinc-800 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] px-3 py-1.5 rounded-lg border border-zinc-700 hover:border-transparent transition-all group"
              >
                <Plus size={16} className="group-hover:text-white" />
                <span className="group-hover:text-white">Add Deliverable</span>
              </button>
            </div>

            <div className="space-y-4">
              {deliverables.map((del, index) => (
                <div key={index} className="flex gap-3">
                  <input
                    type="text"
                    value={del}
                    onChange={(e) => updateDeliverable(index, e.target.value)}
                    placeholder={`Deliverable ${index + 1}`}
                    className="flex-1 bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all"
                  />
                  {deliverables.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeDeliverable(index)}
                      className="text-zinc-500 hover:text-[#E54FA9] transition-colors"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Additional Settings */}
          <section className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 lg:p-8 hover:border-[#E54FA9]/30 transition-all">
            <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
              Additional Settings
            </h2>

            <div className="space-y-4">
              <label className="flex items-center gap-3 group">
                <input type="checkbox" className="w-4 h-4 accent-[#E54FA9]" defaultChecked />
                <span className="text-sm group-hover:text-[#E54FA9] transition-colors">Allow direct messages from applicants</span>
              </label>
              <label className="flex items-center gap-3 group">
                <input type="checkbox" className="w-4 h-4 accent-[#E54FA9]" defaultChecked />
                <span className="text-sm group-hover:text-[#E54FA9] transition-colors">Send email notifications for new submissions</span>
              </label>
              <label className="flex items-center gap-3 group">
                <input type="checkbox" className="w-4 h-4 accent-[#E54FA9]" />
                <span className="text-sm group-hover:text-[#E54FA9] transition-colors">Feature this brief (costs Excel tokens)</span>
              </label>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6 border-t border-zinc-800">
            <button
              type="button"
              className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg border border-zinc-700 transition-all hover:border-[#E54FA9]/30"
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-6 py-3 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg border border-zinc-600 transition-all hover:border-[#E54FA9]/30"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] hover:from-[#D63F99] hover:to-[#730CCF] text-white font-medium rounded-lg transition-all shadow-lg shadow-[#831CDF]/30 active:scale-[0.98]"
            >
              Publish Brief
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}