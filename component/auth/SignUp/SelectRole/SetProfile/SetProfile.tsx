// app/onboarding/page.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';

type Step = 1 | 2 | 3;

interface FormData {
  // Step 1
  displayName: string;
  location: string;
  bio: string;
  profilePicture: File | null;

  // Step 2
  genres: string[];
  skills: string[];
  website: string;
  socialLinks: string;

  // Step 3
  title: string;
  description: string;
  workFile: File | null;
}

// Move ProgressBar outside the main component
const ProgressBar = ({ step }: { step: Step }) => (
  <div className="w-full">
    <div className="flex items-center justify-between text-xs text-zinc-500 mb-1.5">
      <span>Step {step} of 3</span>
      <span>{Math.round((step / 3) * 100)}%</span>
    </div>
    <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
      <div
        className="h-full bg-red-600 transition-all duration-500"
        style={{ width: `${(step / 3) * 100}%` }}
      />
    </div>
  </div>
);

export default function OnboardingPage() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    // Step 1
    displayName: '',
    location: '',
    bio: '',
    profilePicture: null,

    // Step 2
    genres: [],
    skills: [],
    website: '',
    socialLinks: '',

    // Step 3
    title: '',
    description: '',
    workFile: null,
  });

  const updateForm = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleArrayItem = (field: 'genres' | 'skills', item: string) => {
    setFormData((prev) => {
      const arr = prev[field];
      return {
        ...prev,
        [field]: arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item],
      };
    });
  };

  const canContinue = (): boolean => {
    if (step === 1) return formData.displayName.trim() !== '';
    if (step === 2) return true; // optional fields
    if (step === 3) return formData.title.trim() !== '';
    return false;
  };

  const handleNext = (): void => {
    if (step < 3) setStep((s) => (s + 1) as Step);
    // else → submit to backend / redirect to dashboard
  };

  const handleBack = (): void => {
    if (step > 1) setStep((s) => (s - 1) as Step);
  };

  const handleFileChange = (field: 'profilePicture' | 'workFile') => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    updateForm(field, file);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="p-6 md:p-10">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center text-xl font-black">
            S
          </div>
          <span className="text-2xl font-black tracking-tight">PARTST</span>
        </div>

        <ProgressBar step={step} />
      </div>

      <div className="flex-1 flex items-start justify-center px-6 pb-16 pt-6">
        <div className="w-full max-w-2xl">
          {step === 1 && (
            <>
              <h1 className="text-3xl md:text-4xl font-black mb-3">Set up your profile</h1>
              <p className="text-zinc-400 mb-10">
                Tell us about yourself to help others discover you
              </p>

              <div className="space-y-7">
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Display Name</label>
                  <input
                    type="text"
                    placeholder="How you want to be known"
                    value={formData.displayName}
                    onChange={(e) => updateForm('displayName', e.target.value)}
                    className="w-full px-5 py-4 bg-zinc-900 border border-zinc-800 rounded-xl focus:border-red-600 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="City, Country"
                    value={formData.location}
                    onChange={(e) => updateForm('location', e.target.value)}
                    className="w-full px-5 py-4 bg-zinc-900 border border-zinc-800 rounded-xl focus:border-red-600 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Bio</label>
                  <textarea
                    placeholder="Tell us about your creative journey and what you're looking for..."
                    value={formData.bio}
                    onChange={(e) => updateForm('bio', e.target.value)}
                    maxLength={500}
                    rows={5}
                    className="w-full px-5 py-4 bg-zinc-900 border border-zinc-800 rounded-xl focus:border-red-600 outline-none resize-none"
                  />
                  <p className="text-xs text-zinc-600 mt-1.5 text-right">
                    {formData.bio.length}/500 characters
                  </p>
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Profile Picture</label>
                  <div className="border-2 border-dashed border-zinc-700 rounded-xl p-10 text-center hover:border-zinc-500 transition-colors cursor-pointer">
                    <div className="mx-auto w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
                      <span className="text-2xl">↑</span>
                    </div>
                    <p className="text-zinc-400">
                      {formData.profilePicture ? formData.profilePicture.name : 'Click to upload or drag and drop'}
                    </p>
                    <p className="text-xs text-zinc-600 mt-1">PNG, JPG up to 10MB</p>
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleFileChange('profilePicture')}
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="text-3xl md:text-4xl font-black mb-3">Your creative identity</h1>
              <p className="text-zinc-400 mb-10">
                Select genres and skills to help match you with the right people
              </p>

              <div className="space-y-9">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Genres (Select up to 5)</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {['Pop', 'Hip-Hop', 'R&B', 'Rock', 'Electronic', 'Jazz', 'Country', 'Alternative', 'Soul', 'Indie'].map(
                      (g) => (
                        <button
                          key={g}
                          onClick={() => toggleArrayItem('genres', g)}
                          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                            formData.genres.includes(g)
                              ? 'bg-red-600 text-white'
                              : 'bg-zinc-900 border border-zinc-700 hover:border-zinc-500'
                          }`}
                        >
                          {g}
                        </button>
                      )
                    )}
                  </div>
                  <p className="text-xs text-zinc-600 mt-2">
                    {formData.genres.length}/5 selected
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Skills & Expertise (Select all that apply)</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {['Mixing', 'Mastering', 'Songwriting', 'Composition', 'Vocals', 'Guitar', 'Piano', 'Drums', 'Production', 'Engineering'].map(
                      (s) => (
                        <button
                          key={s}
                          onClick={() => toggleArrayItem('skills', s)}
                          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                            formData.skills.includes(s)
                              ? 'bg-red-600 text-white'
                              : 'bg-zinc-900 border border-zinc-700 hover:border-zinc-500'
                          }`}
                        >
                          {s}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Website / Portfolio (Optional)</label>
                  <input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={formData.website}
                    onChange={(e) => updateForm('website', e.target.value)}
                    className="w-full px-5 py-4 bg-zinc-900 border border-zinc-800 rounded-xl focus:border-red-600 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Social Media Links (Optional)</label>
                  <input
                    type="text"
                    placeholder="Instagram, SoundCloud, etc."
                    value={formData.socialLinks}
                    onChange={(e) => updateForm('socialLinks', e.target.value)}
                    className="w-full px-5 py-4 bg-zinc-900 border border-zinc-800 rounded-xl focus:border-red-600 outline-none"
                  />
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h1 className="text-3xl md:text-4xl font-black mb-3">Upload your first work</h1>
              <p className="text-zinc-400 mb-10">
                Showcase your talent with your best work
              </p>

              <div className="space-y-7">
                <div className="border-2 border-dashed border-zinc-700 rounded-xl p-12 text-center hover:border-zinc-500 transition-colors cursor-pointer">
                  <div className="mx-auto w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
                    <span className="text-3xl">↑</span>
                  </div>
                  <p className="text-lg font-medium mb-1">Upload your work</p>
                  <p className="text-zinc-500 mb-4">
                    {formData.workFile ? formData.workFile.name : 'Audio, video, or images up to 100MB'}
                  </p>
                  <button className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm">
                    Choose File
                  </button>
                  <input 
                    type="file" 
                    accept="audio/*,video/*,image/*" 
                    className="hidden" 
                    onChange={handleFileChange('workFile')}
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Title</label>
                  <input
                    type="text"
                    placeholder="Name of your work"
                    value={formData.title}
                    onChange={(e) => updateForm('title', e.target.value)}
                    className="w-full px-5 py-4 bg-zinc-900 border border-zinc-800 rounded-xl focus:border-red-600 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Description</label>
                  <textarea
                    placeholder="Tell us about this piece..."
                    value={formData.description}
                    onChange={(e) => updateForm('description', e.target.value)}
                    rows={4}
                    className="w-full px-5 py-4 bg-zinc-900 border border-zinc-800 rounded-xl focus:border-red-600 outline-none resize-none"
                  />
                </div>

                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 text-sm text-zinc-400">
                  <strong className="text-zinc-300 block mb-1">Pro tip:</strong>
                  Your first upload will be featured on your profile. Make it count!
                </div>
              </div>
            </>
          )}

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="flex-1 py-4 px-6 bg-zinc-900 border border-zinc-700 rounded-xl hover:bg-zinc-800 transition-all text-sm md:text-base"
              >
                ← Back
              </button>
            )}

            <button
              onClick={() => setStep(2)}
              className="flex-1 py-4 px-6 bg-zinc-900 border border-zinc-700 rounded-xl hover:bg-zinc-800 transition-all text-sm md:text-base"
            >
              Skip for now
            </button>

            <button
              onClick={handleNext}
              disabled={!canContinue()}
              className={`
                flex-1 py-4 px-8 font-semibold rounded-xl transition-all text-base md:text-lg
                ${canContinue()
                  ? 'bg-red-600 hover:bg-red-700 shadow-red-900/30'
                  : 'bg-red-900/50 cursor-not-allowed opacity-60'}
              `}
            >
            <Link  href="/auth/sign-in" >
              {step === 3 ? 'Complete Setup' : 'Continue'}
            </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}