// app/login/page.tsx

import Image from 'next/image';
import Link from 'next/link';
import logo from "../../../public/logo.png"

export default function SignIn() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Back link */}
      <div className="p-6 md:p-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium"
        >
          ← Back to home
        </Link>
      </div>

      {/* Main content - centered */}
      <div className="flex-1 flex items-center justify-center px-6 pb-20">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center justify-center mb-10">
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
                  focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600
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
                  className="text-sm text-red-500 hover:text-red-400 transition-colors"
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
                  focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600
                  transition-all
                "
              />
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="remember"
                className="w-5 h-5 rounded border-zinc-700 bg-zinc-900 text-red-600 focus:ring-red-600"
              />
              <label htmlFor="remember" className="text-sm text-zinc-300">
                Remember me for 30 days
              </label>
            </div>

            {/* Submit */}
        <Link href="/home" >
        
            <button
              type="submit"
              className="
                w-full py-4 px-6 
                bg-red-600 hover:bg-red-700 
                text-white font-bold text-lg
                rounded-xl transition-all
                shadow-lg shadow-red-900/30
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
            <Link href="/auth/sign-up" className="text-red-500 hover:text-red-400 font-medium">
              Sign up
            </Link>
          </p>

          {/* Footer text */}
          <p className="text-center text-zinc-600 text-sm mt-12">
            By logging in, you agree to our{' '}
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