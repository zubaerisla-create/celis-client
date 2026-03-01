// app/create-brief/page.tsx
"use client";

import { useState } from "react";
import { Plus, Calendar, X } from "lucide-react";

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
         <button onClick={() => window.history.back()}>
             <a href="#" className="text-zinc-400 hover:text-zinc-200 text-sm flex items-center gap-1 mb-2">
            ← Back to Briefs
          </a>
         </button>
          <h1 className="text-3xl font-bold">Create Industry Brief</h1>
          <p className="text-zinc-400 mt-1">Post an opportunity for the SPARTST community</p>
        </div>

        <form className="space-y-10">
          {/* Basic Information */}
          <section className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 lg:p-8">
            <h2 className="text-xl font-semibold mb-6">Basic Information</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Brief Title <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="Looking for R&B Vocalist"
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-500"
                  placeholder="e.g. Looking for R&B Vocalist"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Company/Organization <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Company Type <span className="text-rose-500">*</span>
                </label>
                <select className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-500">
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
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-sm placeholder-zinc-600 focus:outline-none focus:border-zinc-500 resize-y"
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">
                Budget/Compensation <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. $2,000 – $5,000 or 40% split"
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-500"
              />
            </div>
          </section>

          {/* Project Details */}
          <section className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 lg:p-8">
            <h2 className="text-xl font-semibold mb-6">Project Details</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Looking For (Roles) <span className="text-rose-500">*</span>
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
                      className={`px-3.5 py-1.5 text-sm rounded-full border transition-colors ${
                        roles.includes(role)
                          ? "bg-rose-600/20 border-rose-600/50 text-rose-300"
                          : "bg-zinc-800 border-zinc-700 hover:border-zinc-500"
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
                      className={`px-3.5 py-1.5 text-sm rounded-full border transition-colors ${
                        genres.includes(genre)
                          ? "bg-rose-600/20 border-rose-600/50 text-rose-300"
                          : "bg-zinc-800 border-zinc-700 hover:border-zinc-500"
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
                    Brief Type <span className="text-rose-500">*</span>
                  </label>
                  <select className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm">
                 
                    <option>Paid</option>
                       <option>Revenue Share</option>
                    <option>Collaboration</option>
                    <option>  Exposure </option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Submission Deadline <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-500"
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Requirements */}
          <section className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 lg:p-8">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-semibold">Requirements</h2>
              <button
                type="button"
                onClick={addRequirement}
                className="flex items-center gap-1.5 text-sm bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 rounded-lg border border-zinc-700"
              >
                <Plus size={16} /> Add Requirement
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
                    className="flex-1 bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-500"
                  />
                  {requirements.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeRequirement(index)}
                      className="text-zinc-500 hover:text-rose-400"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Deliverables */}
          <section className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 lg:p-8">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-semibold">Deliverables</h2>
              <button
                type="button"
                onClick={addDeliverable}
                className="flex items-center gap-1.5 text-sm bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 rounded-lg border border-zinc-700"
              >
                <Plus size={16} /> Add Deliverable
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
                    className="flex-1 bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-500"
                  />
                  {deliverables.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeDeliverable(index)}
                      className="text-zinc-500 hover:text-rose-400"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Additional Settings */}
          <section className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 lg:p-8">
            <h2 className="text-xl font-semibold mb-6">Additional Settings</h2>

            <div className="space-y-4">
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 accent-rose-600" defaultChecked />
                <span className="text-sm">Allow direct messages from applicants</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 accent-rose-600" defaultChecked />
                <span className="text-sm">Send email notifications for new submissions</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 accent-rose-600" />
                <span className="text-sm">Feature this brief (costs Excel tokens)</span>
              </label>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6 border-t border-zinc-800">
            <button
              type="button"
              className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg border border-zinc-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-6 py-3 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg border border-zinc-600 transition-colors"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white font-medium rounded-lg transition-colors shadow-lg shadow-rose-950/30"
            >
              Publish Brief
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}