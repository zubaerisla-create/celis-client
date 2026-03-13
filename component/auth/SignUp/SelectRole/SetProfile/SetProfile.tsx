// app/onboarding/page.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Upload, Check, X } from 'lucide-react';
import LogoContainer from '@/component/ReUsableComponent/LogoContainer/LogoContainer';

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
        className="h-full transition-all duration-500"
        style={{ 
          width: `${(step / 3) * 100}%`,
          background: 'linear-gradient(to right, #E54FA9, #831CDF)'
        }}
      />
    </div>
  </div>
);

export default function OnboardingPage() {
  const router = useRouter();
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
    if (step < 3) {
      setStep((s) => (s + 1) as Step);
    } else {
      // Step 3 complete - submit to backend
      console.log('Form submitted:', formData);
      // After successful submission, redirect to dashboard
      router.push('/home');
    }
  };

  const handleBack = (): void => {
    if (step > 1) setStep((s) => (s - 1) as Step);
  };

  const handleFileChange = (field: 'profilePicture' | 'workFile') => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    updateForm(field, file);
  };

  const handleSkip = () => {
    if (step === 3) {
      // Skip to dashboard
      router.push('/home');
    } else {
      // Skip current step
      setStep((s) => (s + 1) as Step);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="p-4 sm:p-6 md:p-10">
        <div className="flex items-center gap-2 mb-4 sm:mb-6 md:mb-8">

<LogoContainer/>         
        </div>

        <ProgressBar step={step} />
      </div>

      <div className="flex-1 flex items-start justify-center px-4 sm:px-6 pb-12 sm:pb-16 pt-4 sm:pt-6">
        <div className="w-full max-w-2xl">
          {step === 1 && (
            <>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 sm:mb-3">Set up your profile</h1>
              <p className="text-sm sm:text-base text-zinc-400 mb-6 sm:mb-8 md:mb-10">
                Tell us about yourself to help others discover you
              </p>

              <div className="space-y-5 sm:space-y-6 md:space-y-7">
                <div>
                  <label className="block text-xs sm:text-sm text-zinc-400 mb-1.5 sm:mb-2">Display Name</label>
                  <input
                    type="text"
                    placeholder="How you want to be known"
                    value={formData.displayName}
                    onChange={(e) => updateForm('displayName', e.target.value)}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-zinc-900 border border-zinc-800 rounded-lg sm:rounded-xl focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] outline-none transition-all text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-zinc-400 mb-1.5 sm:mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="City, Country"
                    value={formData.location}
                    onChange={(e) => updateForm('location', e.target.value)}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-zinc-900 border border-zinc-800 rounded-lg sm:rounded-xl focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] outline-none transition-all text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-zinc-400 mb-1.5 sm:mb-2">Bio</label>
                  <textarea
                    placeholder="Tell us about your creative journey and what you're looking for..."
                    value={formData.bio}
                    onChange={(e) => updateForm('bio', e.target.value)}
                    maxLength={500}
                    rows={4}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-zinc-900 border border-zinc-800 rounded-lg sm:rounded-xl focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] outline-none resize-none transition-all text-sm sm:text-base"
                  />
                  <p className="text-[10px] sm:text-xs text-zinc-600 mt-1 text-right">
                    {formData.bio.length}/500 characters
                  </p>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-zinc-400 mb-1.5 sm:mb-2">Profile Picture</label>
                  <div className="border-2 border-dashed border-zinc-700 rounded-lg sm:rounded-xl p-6 sm:p-8 md:p-10 text-center hover:border-[#E54FA9] transition-colors cursor-pointer group">
                    <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-gradient-to-r group-hover:from-[#E54FA9]/20 group-hover:to-[#831CDF]/20 transition-colors">
                      <Upload className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-zinc-400 group-hover:text-[#E54FA9] transition-colors" />
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400">
                      {formData.profilePicture ? (
                        <span className="text-[#E54FA9]">{formData.profilePicture.name}</span>
                      ) : (
                        'Click to upload or drag and drop'
                      )}
                    </p>
                    <p className="text-[10px] sm:text-xs text-zinc-600 mt-1">PNG, JPG up to 10MB</p>
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 sm:mb-3">Your creative identity</h1>
              <p className="text-sm sm:text-base text-zinc-400 mb-6 sm:mb-8 md:mb-10">
                Select genres and skills to help match you with the right people
              </p>

              <div className="space-y-6 sm:space-y-7 md:space-y-9">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Genres (Select up to 5)</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Pop', 'Hip-Hop', 'R&B', 'Rock', 'Electronic', 'Jazz', 'Country', 'Alternative', 'Soul', 'Indie'].map(
                      (g) => (
                        <button
                          key={g}
                          onClick={() => toggleArrayItem('genres', g)}
                          className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                            formData.genres.includes(g)
                              ? 'bg-gradient-to-r from-[#E54FA9] to-[#831CDF] text-white shadow-lg shadow-[#831CDF]/30'
                              : 'bg-zinc-900 border border-zinc-700 hover:border-[#E54FA9] hover:text-[#E54FA9]'
                          }`}
                        >
                          {g}
                        </button>
                      )
                    )}
                  </div>
                  <p className="text-[10px] sm:text-xs text-zinc-600 mt-2">
                    {formData.genres.length}/5 selected
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Skills & Expertise (Select all that apply)</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Mixing', 'Mastering', 'Songwriting', 'Composition', 'Vocals', 'Guitar', 'Piano', 'Drums', 'Production', 'Engineering'].map(
                      (s) => (
                        <button
                          key={s}
                          onClick={() => toggleArrayItem('skills', s)}
                          className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                            formData.skills.includes(s)
                              ? 'bg-gradient-to-r from-[#E54FA9] to-[#831CDF] text-white shadow-lg shadow-[#831CDF]/30'
                              : 'bg-zinc-900 border border-zinc-700 hover:border-[#E54FA9] hover:text-[#E54FA9]'
                          }`}
                        >
                          {s}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-zinc-400 mb-1.5 sm:mb-2">Website / Portfolio (Optional)</label>
                  <input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={formData.website}
                    onChange={(e) => updateForm('website', e.target.value)}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-zinc-900 border border-zinc-800 rounded-lg sm:rounded-xl focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] outline-none transition-all text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-zinc-400 mb-1.5 sm:mb-2">Social Media Links (Optional)</label>
                  <input
                    type="text"
                    placeholder="Instagram, SoundCloud, etc."
                    value={formData.socialLinks}
                    onChange={(e) => updateForm('socialLinks', e.target.value)}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-zinc-900 border border-zinc-800 rounded-lg sm:rounded-xl focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] outline-none transition-all text-sm sm:text-base"
                  />
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 sm:mb-3">Upload your first work</h1>
              <p className="text-sm sm:text-base text-zinc-400 mb-6 sm:mb-8 md:mb-10">
                Showcase your talent with your best work
              </p>

              <div className="space-y-5 sm:space-y-6 md:space-y-7">
                <div className="border-2 border-dashed border-zinc-700 rounded-lg sm:rounded-xl p-6 sm:p-8 md:p-10 text-center hover:border-[#E54FA9] transition-colors cursor-pointer group">
                  <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-zinc-800 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:bg-gradient-to-r group-hover:from-[#E54FA9]/20 group-hover:to-[#831CDF]/20 transition-colors">
                    <Upload className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-zinc-400 group-hover:text-[#E54FA9] transition-colors" />
                  </div>
                  <p className="text-sm sm:text-base font-medium mb-1">
                    {formData.workFile ? (
                      <span className="text-[#E54FA9]">{formData.workFile.name}</span>
                    ) : (
                      'Upload your work'
                    )}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-500 mb-3 sm:mb-4">
                    Audio, video, or images up to 100MB
                  </p>
                  <button className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-zinc-800 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] rounded-lg text-xs sm:text-sm transition-all">
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
                  <label className="block text-xs sm:text-sm text-zinc-400 mb-1.5 sm:mb-2">Title</label>
                  <input
                    type="text"
                    placeholder="Name of your work"
                    value={formData.title}
                    onChange={(e) => updateForm('title', e.target.value)}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-zinc-900 border border-zinc-800 rounded-lg sm:rounded-xl focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] outline-none transition-all text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-zinc-400 mb-1.5 sm:mb-2">Description</label>
                  <textarea
                    placeholder="Tell us about this piece..."
                    value={formData.description}
                    onChange={(e) => updateForm('description', e.target.value)}
                    rows={3}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-zinc-900 border border-zinc-800 rounded-lg sm:rounded-xl focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] outline-none resize-none transition-all text-sm sm:text-base"
                  />
                </div>

                <div className="bg-gradient-to-r from-[#E54FA9]/10 to-[#831CDF]/10 border border-[#E54FA9]/30 rounded-lg sm:rounded-xl p-4 sm:p-5 text-xs sm:text-sm">
                  <strong className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent block mb-1">Pro tip:</strong>
                  <span className="text-zinc-400">Your first upload will be featured on your profile. Make it count!</span>
                </div>
              </div>
            </>
          )}

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="flex-1 py-3 sm:py-4 px-4 sm:px-6 bg-zinc-900 border border-zinc-700 rounded-lg sm:rounded-xl hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] hover:border-transparent transition-all text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back
              </button>
            )}

            <button
              onClick={handleSkip}
              className="flex-1 py-3 sm:py-4 px-4 sm:px-6 bg-zinc-900 border border-zinc-700 rounded-lg sm:rounded-xl hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] hover:border-transparent transition-all text-xs sm:text-sm md:text-base"
            >
              {step === 3 ? 'Skip to Dashboard' : 'Skip for now'}
            </button>

            <button
              onClick={handleNext}
              disabled={!canContinue()}
              className={`
                flex-1 py-3 sm:py-4 px-4 sm:px-6 font-semibold rounded-lg sm:rounded-xl transition-all text-xs sm:text-sm md:text-base
                flex items-center justify-center gap-2 group
                ${canContinue()
                  ? 'bg-gradient-to-r from-[#E54FA9] to-[#831CDF] hover:from-[#D63F99] hover:to-[#730CCF] shadow-lg shadow-[#831CDF]/30 cursor-pointer'
                  : 'bg-gradient-to-r from-[#E54FA9]/50 to-[#831CDF]/50 cursor-not-allowed opacity-60'}
              `}
            >
              {step === 3 ? 'Complete Setup' : 'Continue'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}