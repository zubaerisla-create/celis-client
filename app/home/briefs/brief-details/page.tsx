"use client";

import { Upload, Music, FileText, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RnbVocalistSubmission() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
         <button
      onClick={() => router.back()}
      className="text-sm text-rose-500 hover:text-rose-400 transition"
    >
      <span className="text-base md:text-base font-bold">
        Back
      </span>
    </button>
          
            <h1 className="text-3xl md:text-4xl font-bold"> Looking for R&B Vocalist</h1>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-zinc-400">Atlantic Records</span>
              <span className="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-full">
                Major Label
              </span>
              <span className="text-sm text-rose-500 font-medium">Paid</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-zinc-400">5 days left</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Overview */}
            <section className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-zinc-300 leading-relaxed">
                Atlantic Records is seeking an experienced R&B vocalist for an upcoming album project with one of our established artists. This is a professional opportunity with competitive compensation and industry exposure.
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                We're looking for someone with a soulful voice, professional recording setup, and experience in contemporary R&B. The selected vocalist will work on 3-4 tracks for the album, with potential for future collaborations.
              </p>
            </section>

            {/* Requirements */}
            <section className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-5">Requirements</h2>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
                  Professional recording quality (home studio or professional studio access)
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
                  Minimum 3 years of R&B/Soul singing experience
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
                  Available for revisions and potential studio sessions
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
                  Portfolio of previous R&B work required
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
                  Ability to interpret and deliver emotion-led performances
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
                  Comfortable with NDA and professional contracts
                </li>
              </ul>
            </section>

            {/* Deliverables */}
            <section className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-5">Deliverables</h2>
              <ul className="space-y-3 text-zinc-300">
                <li>• Lead vocals for 3–4 tracks (stems and comped takes)</li>
                <li>• Backing vocals / harmonies where needed</li>
                <li>• Up to 2 rounds of revisions (24-hour turnaround minimum)</li>
                <li>• All vocal files in WAV format (24-bit/48kHz minimum)</li>
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Details Card */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 sticky top-6">
              <h3 className="text-xl font-semibold mb-5">Key Details</h3>

              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-zinc-500">Compensation</div>
                  <div className="font-medium">$2,000 – $5,000</div>
                </div>

                <div>
                  <div className="text-zinc-500">Genre</div>
                  <div>R&B / Soul / Contemporary</div>
                </div>

                <div>
                  <div className="text-zinc-500">Deadline</div>
                  <div className="font-medium text-rose-400">February 27, 2026</div>
                </div>

                <div>
                  <div className="text-zinc-500">Posted</div>
                  <div>February 17, 2026</div>
                </div>

                <div>
                  <div className="text-zinc-500">Applications</div>
                  <div>47 applications</div>
                </div>
              </div>
            </div>

            {/* Upload / Submission Area */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Submit Your Application</h3>

              <div className="space-y-6">
                {/* Upload Zone */}
                <div className="border-2 border-dashed border-zinc-700 rounded-lg p-8 text-center">
                  <Upload className="mx-auto mb-3 text-zinc-500" size={32} />
                  <p className="text-zinc-400 mb-1">Click to upload or drag & drop</p>
                  <p className="text-xs text-zinc-600">
                    Audio files (WAV/MP3) up to 100MB
                  </p>
                </div>

                {/* Vocal Letter */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-sm resize-none focus:outline-none focus:border-zinc-500"
                    placeholder="Tell us why you're the right fit for this project. Include your experience, vocal style, and why you want to work with Atlantic..."
                  />
                </div>

                {/* Portfolio */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Portfolio Links (Optional)
                  </label>
                  <input
                    type="text"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-sm placeholder-zinc-600"
                    placeholder="SoundCloud, Spotify, YouTube, etc."
                  />
                </div>

                <button className="w-full bg-rose-600 hover:bg-rose-700 text-white font-medium py-3.5 rounded-lg transition-colors">
                  Submit Application
                </button>

                <p className="text-xs text-zinc-600 text-center">
                  By submitting, you agree to the submission terms and acknowledge that you may be required to sign an NDA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}