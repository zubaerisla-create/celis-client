// app/signup/page.tsx  (আপডেটেড ভার্সন)

import Image from 'next/image';
import Link from 'next/link';
import logo from "../../../public/logo.png"

export default function SignUp() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row">
      {/* Left side - Form (compact version) */}
      <div className="flex-1 flex flex-col justify-center px-6 py-10 lg:py-0 lg:px-10 xl:px-16">
        {/* Back link */}
        <div className="mb-8">
            <Link href="/">
            
             back
            
            </Link>
        </div>

        {/* Logo */}
    <div className="flex items-center gap-3 pb-6 border-b border-zinc-800">
  {/* Logo Container with Light background for black logo */}
  <div className="relative">
    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-zinc-100 to-white flex items-center justify-center shadow-lg shadow-black/5 border border-zinc-200/50">
      <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center">
        <Image
          height={28} 
          width={28} 
          src={logo} 
          alt="Spartst Logo"
          className="object-contain"
          style={{ 
            filter: 'brightness(0) saturate(100%)', // এইটা লোগোকে ব্ল্যাক করবে
          }}
        />
      </div>
    </div>

   
  </div>

  {/* Text Section */}
  <div>
    <div className="flex items-center gap-2">
      <h2 className="text-white font-bold text-2xl tracking-tight">SPARTST</h2>
    
    </div>
    <p className="text-zinc-400 text-xs font-medium flex items-center gap-1.5 mt-0.5">

      SPACE FOR ART
    </p>
  </div>
</div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-black mb-2">
          Create Account
        </h1>
        <p className="text-zinc-400 text-base mb-8">
          Join the creative pros platform
        </p>

        {/* Form - compact */}
        <form className="space-y-5 max-w-md">
          {/* Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm text-zinc-400 mb-1.5">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First name"
                className="w-full px-4 py-3.5 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all text-sm"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm text-zinc-400 mb-1.5">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last name"
                className="w-full px-4 py-3.5 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all text-sm"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm text-zinc-400 mb-1.5">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3.5 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm text-zinc-400 mb-1.5">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Strong password"
              className="w-full px-4 py-3.5 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all text-sm"
            />
            <p className="text-xs text-zinc-600 mt-1.5">
              Min 8 chars with numbers & symbols
            </p>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm text-zinc-400 mb-1.5">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
              className="w-full px-4 py-3.5 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all text-sm"
            />
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2.5 text-sm">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-red-600 focus:ring-red-600"
            />
            <label htmlFor="terms" className="text-zinc-300">
              Agree to{' '}
              <Link href="/terms" className="text-red-500 hover:text-red-400">
                Terms
              </Link>{' '}
              &{' '}
              <Link href="/privacy" className="text-red-500 hover:text-red-400">
                Privacy
              </Link>
            </label>
          </div>

          {/* Button */}
        <Link  href="/auth/sign-up/select-role" >
        
          <button
            type="submit"
            className="
              w-full py-3.5 px-6 mt-3
              bg-red-600 hover:bg-red-700 
              text-white font-semibold text-base
              rounded-xl transition-all shadow-red-900/30
              active:scale-[0.98]
            "
          >
            Create Account
          </button>
        </Link>

          {/* Login link */}
          <p className="text-center text-zinc-400 text-sm mt-5">
            Have account?{' '}
            <Link href="/auth/sign-in" className="text-red-500 hover:text-red-400">
              Log in
            </Link>
          </p>

          {/* Social divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-black text-zinc-500">or</span>
            </div>
          </div>

          {/* Social buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3.5 bg-zinc-900 border border-zinc-700 rounded-xl hover:bg-zinc-800 text-sm">
              <span className="text-lg">G</span> Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3.5 bg-zinc-900 border border-zinc-700 rounded-xl hover:bg-zinc-800 text-sm">
              <span className="text-lg"></span> Apple
            </button>
          </div>
        </form>
      </div>

      {/* Right side - same as before (no change needed) */}
      <div className="hidden lg:flex lg:flex-1 lg:flex-col lg:justify-center lg:bg-gradient-to-br lg:from-zinc-950 lg:to-black lg:p-12 xl:p-24 border-l border-zinc-800">
        <div className="max-w-lg">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 text-red-500">
            Join Thousands of Creative Professionals
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed mb-10">
            SPARTST connects songwriters, producers, visual artists, and industry professionals in one premium platform.
          </p>

          <ul className="space-y-6 text-zinc-200">
            <li className="flex items-start gap-4">
              <span className="text-red-500 text-2xl">•</span>
              <div>
                <strong className="block text-lg">AI-Powered Matching</strong>
                <span className="text-zinc-400">Find collaborators that complement your creative vision</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-red-500 text-2xl">•</span>
              <div>
                <strong className="block text-lg">Industry Access</strong>
                <span className="text-zinc-400">Connect directly with A&R executives and labels</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-red-500 text-2xl">•</span>
              <div>
                <strong className="block text-lg">Professional Tools</strong>
                <span className="text-zinc-400">Portfolio building, project management, and licensing</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}