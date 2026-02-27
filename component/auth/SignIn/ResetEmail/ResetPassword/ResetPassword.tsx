// app/reset-password/page.tsx

import Link from 'next/link';

export default function ResetPassword() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Back link */}
      <div className="p-6 md:p-10">
        <Link
          href="/auth/sign-in"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium"
        >
          ← Back to login
        </Link>
      </div>

      {/* Main centered content */}
      <div className="flex-1 flex items-center justify-center px-6 pb-20">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-2xl font-black">
                S
              </div>
              <span className="text-3xl font-black tracking-tight">PARTST</span>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black tracking-tight mb-3">
              Reset Password
            </h1>
            <p className="text-zinc-400 text-lg">
              Enter the OTP sent to your email and set a new password
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email (usually pre-filled from reset link or previous step) */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-300 mb-2"
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
                  w-full px-5 py-4 
                  bg-zinc-900/70 border border-zinc-700 
                  rounded-xl text-zinc-400 placeholder-zinc-600
                  focus:outline-none cursor-not-allowed
                "
                defaultValue="you@example.com"
              />
            </div>

            {/* OTP */}
            <div>
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-zinc-300 mb-2"
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
                  w-full px-5 py-4 
                  bg-zinc-900 border border-zinc-700 
                  rounded-xl text-white placeholder-zinc-500
                  focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600
                  transition-all tracking-widest text-center text-xl
                "
              />
              <p className="text-xs text-zinc-500 mt-1.5">
                Did not receive code? <button className="text-red-500 hover:text-red-400">Resend</button>
              </p>
            </div>

            {/* New Password */}
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                placeholder="Enter new password"
                required
                className="
                  w-full px-5 py-4 
                  bg-zinc-900 border border-zinc-700 
                  rounded-xl text-white placeholder-zinc-500
                  focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600
                  transition-all
                "
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm new password"
                required
                className="
                  w-full px-5 py-4 
                  bg-zinc-900 border border-zinc-700 
                  rounded-xl text-white placeholder-zinc-500
                  focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600
                  transition-all
                "
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                w-full py-4 px-6 mt-4
                bg-red-600 hover:bg-red-700 
                text-white font-bold text-lg
                rounded-xl transition-all
                shadow-lg shadow-red-900/30
                active:scale-[0.98]
                disabled:opacity-60 disabled:cursor-not-allowed
              "
            >
            <Link href="/auth/sign-in" >
            
              Reset Password
            </Link>
            </button>
          </form>

          {/* Back to login */}
          <p className="text-center text-zinc-400 mt-10">
            Remember your password?{' '}
            <Link href="/auth/sign-in" className="text-red-500 hover:text-red-400 font-medium">
              Log in
            </Link>
          </p>

          {/* Legal footer */}
          <p className="text-center text-zinc-600 text-sm mt-12">
            By resetting your password, you agree to our{' '}
            <Link href="/terms" className="text-zinc-400 hover:text-zinc-300 underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-zinc-400 hover:text-zinc-300 underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}