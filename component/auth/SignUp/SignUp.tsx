// app/signup/page.tsx (আপডেটেড ভার্সন)

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import logo from "../../../public/logo.png"
import LogoContainer from '@/component/ReUsableComponent/LogoContainer/LogoContainer';

export default function SignUp() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row">
      {/* Left side - Form (compact version) */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 py-8 sm:py-10 lg:py-0 lg:px-8 xl:px-16">
        {/* Back link with arrow icon */}
        <div className="mb-6 sm:mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm sm:text-base font-medium group"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to home</span>
          </Link>
        </div>

        {/* Logo - properly centered */}
        <div className="flex items-center gap-3 pb-4 sm:pb-6 border-b border-zinc-800">
          <LogoContainer/>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mt-4 sm:mt-6 mb-1 sm:mb-2">
          Create Account
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 mb-6 sm:mb-8">
          Join the creative pros platform
        </p>

        {/* Form - compact */}
        <form className="space-y-4 sm:space-y-5 max-w-md">
          {/* Name */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label htmlFor="firstName" className="block text-xs sm:text-sm text-zinc-400 mb-1 sm:mb-1.5">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First name"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 bg-zinc-900 border border-zinc-700 rounded-lg sm:rounded-xl text-white placeholder-zinc-500 focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all text-xs sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-xs sm:text-sm text-zinc-400 mb-1 sm:mb-1.5">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last name"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 bg-zinc-900 border border-zinc-700 rounded-lg sm:rounded-xl text-white placeholder-zinc-500 focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all text-xs sm:text-sm"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm text-zinc-400 mb-1 sm:mb-1.5">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 bg-zinc-900 border border-zinc-700 rounded-lg sm:rounded-xl text-white placeholder-zinc-500 focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all text-xs sm:text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-xs sm:text-sm text-zinc-400 mb-1 sm:mb-1.5">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Strong password"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 bg-zinc-900 border border-zinc-700 rounded-lg sm:rounded-xl text-white placeholder-zinc-500 focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all text-xs sm:text-sm"
            />
            <p className="text-[10px] sm:text-xs text-zinc-600 mt-1 sm:mt-1.5">
              Min 8 chars with numbers & symbols
            </p>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-xs sm:text-sm text-zinc-400 mb-1 sm:mb-1.5">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 bg-zinc-900 border border-zinc-700 rounded-lg sm:rounded-xl text-white placeholder-zinc-500 focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all text-xs sm:text-sm"
            />
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 w-3.5 sm:w-4 h-3.5 sm:h-4 rounded border-zinc-700 bg-zinc-900 text-[#E54FA9] focus:ring-[#E54FA9] focus:ring-offset-0"
            />
            <label htmlFor="terms" className="text-zinc-300">
              Agree to{' '}
              <Link href="/terms" className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent hover:from-[#D63F99] hover:to-[#730CCF]">
                Terms
              </Link>{' '}
              &{' '}
              <Link href="/privacy" className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent hover:from-[#D63F99] hover:to-[#730CCF]">
                Privacy
              </Link>
            </label>
          </div>

          {/* Button */}
          <Link href="/auth/sign-up/select-role">
            <button
              type="submit"
              className="
                w-full py-2.5 sm:py-3.5 px-4 sm:px-6 mt-2 sm:mt-3
                bg-gradient-to-r from-[#E54FA9] to-[#831CDF]
                hover:from-[#D63F99] hover:to-[#730CCF]
                text-white font-semibold text-sm sm:text-base
                rounded-lg sm:rounded-xl transition-all shadow-lg shadow-[#831CDF]/30
                active:scale-[0.98]
              "
            >
              Create Account
            </button>
          </Link>

          {/* Login link */}
          <p className="text-center text-zinc-400 text-xs sm:text-sm mt-4 sm:mt-5">
            Have account?{' '}
            <Link href="/auth/sign-in" className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent hover:from-[#D63F99] hover:to-[#730CCF] font-medium">
              Log in
            </Link>
          </p>

          {/* Social divider */}
          <div className="relative my-4 sm:my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800"></div>
            </div>
            <div className="relative flex justify-center text-[10px] sm:text-xs">
              <span className="px-2 sm:px-3 bg-black text-zinc-500">or continue with</span>
            </div>
          </div>

          {/* Social buttons */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <button className="flex items-center justify-center gap-1 sm:gap-2 py-2.5 sm:py-3.5 bg-zinc-900 border border-zinc-700 rounded-lg sm:rounded-xl hover:bg-zinc-800 text-xs sm:text-sm transition-colors">
              <span className="text-base sm:text-lg">G</span> 
              <span className="hidden xs:inline">Google</span>
            </button>
            <button className="flex items-center justify-center gap-1 sm:gap-2 py-2.5 sm:py-3.5 bg-zinc-900 border border-zinc-700 rounded-lg sm:rounded-xl hover:bg-zinc-800 text-xs sm:text-sm transition-colors">
              <span className="text-base sm:text-lg"></span> 
              <span className="hidden xs:inline">Apple</span>
            </button>
          </div>
        </form>
      </div>

      {/* Right side - with updated gradient colors */}
      <div className="hidden lg:flex lg:flex-1 lg:flex-col lg:justify-center lg:bg-gradient-to-br lg:from-zinc-950 lg:to-black lg:p-12 xl:p-24 border-l border-zinc-800">
        <div className="max-w-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
              Join Thousands
            </span>
            <br />
            of Creative Professionals
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
            SPARTST connects songwriters, producers, visual artists, and industry professionals in one premium platform.
          </p>

          <ul className="space-y-4 sm:space-y-6 text-zinc-200">
            <li className="flex items-start gap-3 sm:gap-4">
              <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent text-xl sm:text-2xl">•</span>
              <div>
                <strong className="block text-base sm:text-lg">AI-Powered Matching</strong>
                <span className="text-xs sm:text-sm text-zinc-400">Find collaborators that complement your creative vision</span>
              </div>
            </li>
            <li className="flex items-start gap-3 sm:gap-4">
              <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent text-xl sm:text-2xl">•</span>
              <div>
                <strong className="block text-base sm:text-lg">Industry Access</strong>
                <span className="text-xs sm:text-sm text-zinc-400">Connect directly with A&R executives and labels</span>
              </div>
            </li>
            <li className="flex items-start gap-3 sm:gap-4">
              <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent text-xl sm:text-2xl">•</span>
              <div>
                <strong className="block text-base sm:text-lg">Professional Tools</strong>
                <span className="text-xs sm:text-sm text-zinc-400">Portfolio building, project management, and licensing</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}