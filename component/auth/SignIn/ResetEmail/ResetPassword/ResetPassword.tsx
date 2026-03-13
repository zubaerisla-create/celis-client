// app/reset-password/page.tsx

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import LogoContainer from '@/component/ReUsableComponent/LogoContainer/LogoContainer';

export default function ResetPassword() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Back link with arrow icon */}
      <div className="p-4 sm:p-6 md:p-10">
        <Link
          href="/auth/sign-in"
          className="inline-flex items-center gap-1.5 sm:gap-2 text-zinc-400 hover:text-white transition-colors text-xs sm:text-sm font-medium group"
        >
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to login</span>
        </Link>
      </div>

      {/* Main centered content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="w-full max-w-md">
          {/* Logo - using LogoContainer */}
          <div className="flex justify-center mb-6 sm:mb-8 md:mb-10">
            <LogoContainer />
          </div>

          {/* Title */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-2 sm:mb-3">
              Reset Password
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 px-2">
              Enter the OTP sent to your email and set a new password
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* Email (usually pre-filled from reset link or previous step) */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-medium text-zinc-300 mb-1.5 sm:mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                required
                readOnly // or remove readOnly if user needs to edit
                className="
                  w-full px-4 sm:px-5 py-3 sm:py-4 
                  bg-zinc-900/70 border border-zinc-700 
                  rounded-lg sm:rounded-xl text-zinc-400 placeholder-zinc-600 text-sm sm:text-base
                  focus:outline-none cursor-not-allowed
                "
                defaultValue="you@example.com"
              />
            </div>

            {/* OTP */}
            <div>
              <label
                htmlFor="otp"
                className="block text-xs sm:text-sm font-medium text-zinc-300 mb-1.5 sm:mb-2"
              >
                OTP Code
              </label>
              <input
                type="text"
                id="otp"
                placeholder="Enter 6-digit code"
                maxLength={6}
                pattern="[0-9]{6}"
                inputMode="numeric"
                required
                className="
                  w-full px-4 sm:px-5 py-3 sm:py-4 
                  bg-zinc-900 border border-zinc-700 
                  rounded-lg sm:rounded-xl text-white placeholder-zinc-500 text-sm sm:text-base
                  focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9]
                  transition-all tracking-widest text-center text-base sm:text-xl
                "
              />
              <p className="text-[10px] sm:text-xs text-zinc-500 mt-1 sm:mt-1.5">
                Didn't receive code?{' '}
                <button className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent hover:from-[#D63F99] hover:to-[#730CCF] font-medium">
                  Resend
                </button>
              </p>
            </div>

            {/* New Password */}
            <div>
              <label
                htmlFor="newPassword"
                className="block text-xs sm:text-sm font-medium text-zinc-300 mb-1.5 sm:mb-2"
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                placeholder="Enter new password"
                required
                className="
                  w-full px-4 sm:px-5 py-3 sm:py-4 
                  bg-zinc-900 border border-zinc-700 
                  rounded-lg sm:rounded-xl text-white placeholder-zinc-500 text-sm sm:text-base
                  focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9]
                  transition-all
                "
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-xs sm:text-sm font-medium text-zinc-300 mb-1.5 sm:mb-2"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm new password"
                required
                className="
                  w-full px-4 sm:px-5 py-3 sm:py-4 
                  bg-zinc-900 border border-zinc-700 
                  rounded-lg sm:rounded-xl text-white placeholder-zinc-500 text-sm sm:text-base
                  focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9]
                  transition-all
                "
              />
            </div>

            {/* Submit */}
            <Link href="/auth/sign-in">
              <button
                type="submit"
                className="
                  w-full py-3 sm:py-4 px-4 sm:px-6 mt-2 sm:mt-4
                  bg-gradient-to-r from-[#E54FA9] to-[#831CDF]
                  hover:from-[#D63F99] hover:to-[#730CCF]
                  text-white font-bold text-base sm:text-lg
                  rounded-lg sm:rounded-xl transition-all
                  shadow-lg shadow-[#831CDF]/30
                  active:scale-[0.98]
                  disabled:opacity-60 disabled:cursor-not-allowed
                "
              >
                Reset Password
              </button>
            </Link>
          </form>

          {/* Back to login */}
          <p className="text-center text-zinc-400 text-xs sm:text-sm mt-6 sm:mt-8 md:mt-10">
            Remember your password?{' '}
            <Link href="/auth/sign-in" className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent hover:from-[#D63F99] hover:to-[#730CCF] font-medium">
              Log in
            </Link>
          </p>

          {/* Legal footer */}
          <p className="text-center text-zinc-600 text-[10px] sm:text-xs mt-8 sm:mt-10 md:mt-12">
            By resetting your password, you agree to our{' '}
            <Link href="/terms" className="text-zinc-400 hover:text-zinc-300 underline underline-offset-2 hover:decoration-[#E54FA9] transition-colors">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-zinc-400 hover:text-zinc-300 underline underline-offset-2 hover:decoration-[#E54FA9] transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}