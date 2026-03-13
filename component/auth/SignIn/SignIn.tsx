// app/login/page.tsx

import Image from 'next/image';
import Link from 'next/link';
import logo from "../../../public/logo.png"
import LogoContainer from '@/component/ReUsableComponent/LogoContainer/LogoContainer';

export default function SignIn() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Back link */}
      <div className="p-6 md:p-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to home
        </Link>
      </div>

      {/* Main content - centered */}
      <div className="flex-1 flex items-center justify-center px-6 pb-20">
        {/* Logo - now properly sized without taking full width */}
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-8">
            <LogoContainer/>
          </div>

          {/* Title */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black tracking-tight mb-3">
              Welcome back
            </h1>
            <p className="text-zinc-400 text-lg">
              Log in to your SPARTST account
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email */}
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
                className="
                  w-full px-5 py-4 
                  bg-zinc-900 border border-zinc-700 
                  rounded-xl text-white placeholder-zinc-500
                  focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9]
                  transition-all
                "
                defaultValue="you@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-zinc-300"
                >
                  Password
                </label>
                <Link
                  href="/auth/sign-in/reset-email"
                  className="text-sm bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent hover:from-[#D63F99] hover:to-[#730CCF] transition-colors font-medium"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="
                  w-full px-5 py-4 
                  bg-zinc-900 border border-zinc-700 
                  rounded-xl text-white placeholder-zinc-500
                  focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9]
                  transition-all
                "
              />
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="remember"
                className="w-5 h-5 rounded border-zinc-700 bg-zinc-900 text-[#E54FA9] focus:ring-[#E54FA9] focus:ring-offset-0"
              />
              <label htmlFor="remember" className="text-sm text-zinc-300">
                Remember me for 30 days
              </label>
            </div>

            {/* Submit */}
            <Link href="/home">
              <button
                type="submit"
                className="
                  w-full py-4 px-6 
                  bg-gradient-to-r from-[#E54FA9] to-[#831CDF]
                  hover:from-[#D63F99] hover:to-[#730CCF]
                  text-white font-bold text-lg
                  rounded-xl transition-all
                  shadow-lg shadow-[#831CDF]/30
                  active:scale-[0.98]
                "
              >
                Log In
              </button>
            </Link>
          </form>

          {/* Sign up link */}
          <p className="text-center text-zinc-400 mt-8">
            Don&apos;t have an account?{' '}
            <Link href="/auth/sign-up" className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent hover:from-[#D63F99] hover:to-[#730CCF] font-medium">
              Sign up
            </Link>
          </p>

          {/* Footer text */}
          <p className="text-center text-zinc-600 text-sm mt-12">
            By logging in, you agree to our{' '}
            <Link href="/terms" className="text-zinc-400 hover:text-zinc-300 underline underline-offset-2 hover:decoration-[#E54FA9]">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-zinc-400 hover:text-zinc-300 underline underline-offset-2 hover:decoration-[#E54FA9]">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}