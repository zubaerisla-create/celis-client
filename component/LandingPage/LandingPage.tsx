// app/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LandingPage() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Top Navigation with Animation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1 sm:gap-2"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight">
              <span className="text-red-600">S</span>PARTST
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-4 lg:gap-8 text-sm font-medium">
            {["Features", "How It Works", "Pricing"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                whileHover={{ scale: 1.1, color: "#f87171" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:text-red-400 transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <motion.a
             
              whileHover={{ scale: 1.1 }}
              className="text-xs sm:text-sm font-medium hover:text-red-400 transition-colors whitespace-nowrap"
            >
             <Link href="/auth/sign-in">
              Sign In
             </Link>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap"
            >
             <Link href="/auth/sign-up" >
              Join Free
             </Link>
            </motion.a>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <main className="pt-20 sm:pt-24 sm:pb-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
          >
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Small tagline */}
              <motion.div 
                variants={fadeInUp}
                className="inline-block mb-4 sm:mb-6 px-3 sm:px-5 py-1.5 sm:py-2 bg-zinc-900/70 border border-zinc-700 rounded-full text-xs sm:text-sm font-medium tracking-wide text-red-300"
              >
                The Professional Network for Music Creators
              </motion.div>

              {/* Main headline */}
              <motion.h1 
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight mb-4 sm:mb-8"
              >
                Where Music
                <br className="hidden sm:block" />
                Meets <span className="text-red-500">Vision</span>.
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                variants={fadeInUp}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-300 max-w-3xl mx-auto lg:mx-0 mb-6 sm:mb-8 lg:mb-12 leading-relaxed"
              >
                The premium platform connecting songwriters, producers, visual artists,
                and industry executives, in a curated, professional environment.
              </motion.p>

              {/* CTA buttons */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row lg:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 lg:mb-16"
              >
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 hover:bg-red-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold transition-all shadow-lg shadow-red-900/30"
                >
                  Join as Creative
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-red-600 text-red-400 hover:bg-red-950/50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold transition-all"
                >
                  Join as Industry
                </motion.a>
              </motion.div>

              {/* Avatars Section */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row lg:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6"
              >
                {/* Avatars row */}
                <div className="flex items-center justify-center -space-x-3 sm:-space-x-4">
                  {[
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
                  ].map((src, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, zIndex: 50 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 sm:border-4 border-black shadow-xl shadow-black/40"
                    >
                      <Image
                        src={src}
                        alt={`Avatar ${index + 1}`}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                        priority={index < 2}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Text */}
                <motion.p 
                  variants={fadeInUp}
                  className="text-zinc-400 text-sm sm:text-base md:text-lg font-medium text-center lg:text-left"
                >
                  Trusted by <span className="text-white font-semibold">10,000+</span> professionals
                </motion.p>
              </motion.div>
            </div>

            {/* Right Cards Section - Hidden on mobile, visible on larger screens */}
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:block relative w-full max-w-[500px] xl:max-w-[620px] h-[400px] xl:h-[420px] perspective-1000"
            >
              {/* Background subtle glows */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-48 xl:w-64 h-48 xl:h-64 bg-orange-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-56 xl:w-72 h-56 xl:h-72 bg-purple-600/10 rounded-full blur-3xl" />
              </div>

              {/* Card 1 - Sarah */}
              <motion.div
                whileHover={{ rotate: -2, scale: 1.03, zIndex: 20 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute inset-0 m-auto w-[260px] xl:w-[300px] bg-gradient-to-br from-zinc-950 to-black border border-zinc-800/80 rounded-2xl overflow-hidden shadow-2xl shadow-black/70 backdrop-blur-sm transform rotate-[-5deg] translate-x-[-15%] translate-y-[8%] z-10"
              >
                <div className="p-4 xl:p-5">
                  <div className="flex items-center gap-3 mb-3 xl:mb-4">
                    <div className="relative">
                      <div className="w-10 xl:w-12 h-10 xl:h-12 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-amber-400 flex items-center justify-center shadow-lg shadow-orange-900/40">
                        <span className="text-lg xl:text-xl font-bold text-white drop-shadow-md">S</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm xl:text-base leading-tight">Sarah C</h3>
                      <span className="inline-block px-2 py-0.5 mt-1 text-xs font-semibold text-orange-300 bg-orange-950/60 rounded-full">
                        Songwriter
                      </span>
                    </div>
                  </div>
                  <p className="text-zinc-300 text-xs leading-relaxed mb-3 italic">
                    Looking for a producer on a dark pop track — Weekend, Banks vibe.
                  </p>
                  <div className="mb-3">
                    <div className="relative h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: "26%" }}
                        transition={{ duration: 1, delay: 1 }}
                        className="absolute h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-zinc-500 mt-1">
                      <span>0:42</span>
                      <span>3:15</span>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="px-2 py-0.5 text-xs font-medium bg-purple-950/50 text-purple-300 rounded-full border border-purple-800/40">
                      Hip Hop
                    </span>
                    <span className="px-2 py-0.5 text-xs font-medium bg-purple-950/50 text-purple-300 rounded-full border border-purple-800/40">
                      R&B
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - Alex */}
              <motion.div
                whileHover={{ rotate: 1, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute inset-0 m-auto w-[280px] xl:w-[320px] bg-gradient-to-br from-zinc-950 to-black border border-zinc-700/90 rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(139,92,246,0.15)] backdrop-blur-md transform rotate-[4deg] translate-x-[10%] translate-y-[-5%] z-20"
              >
                <div className="p-4 xl:p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative">
                      <div className="w-12 xl:w-14 h-12 xl:h-14 rounded-full bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-900/50 ring-2 ring-purple-500/30">
                        <span className="text-lg xl:text-xl font-bold text-white drop-shadow-md">A</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-base xl:text-lg leading-tight">Alex Rivera</h3>
                      <span className="inline-block px-2 py-0.5 mt-1 text-xs font-semibold text-blue-300 bg-blue-950/60 rounded-full">
                        Producer
                      </span>
                    </div>
                  </div>
                  <p className="text-zinc-200 text-xs leading-relaxed mb-3">
                    Looking for a vocalist on dark pop track — Weekend, Banks vibe
                  </p>
                  <div className="flex gap-1.5 mb-4">
                    <span className="px-2 py-1 text-xs font-medium bg-purple-950/60 text-purple-200 rounded-full border border-purple-700/50">
                      Hip Hop
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-purple-950/60 text-purple-200 rounded-full border border-purple-700/50">
                      R&B
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2.5 px-4 bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-900/40 transition-all duration-300 active:scale-95 text-sm"
                  >
                    Connect
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Gradient orbs / background effect */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-red-600/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-80 lg:h-96 bg-purple-600/10 rounded-full blur-3xl"
          />
        </div>
      </main>

      {/* Features Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        id="features" 
        className="bg-black text-white py-12 sm:py-16 md:py-20  px-4 sm:px-6 lg:px-8 "
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-2 sm:mb-3 md:mb-4">
              <span className="text-red-600">Features</span> That Matter
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-zinc-400 font-medium px-4">
              Everything you need to succeed in the music industry.
            </p>
          </motion.div>

          {/* Role Cards - Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {[
              { icon: "✍️", title: "Songwriters", items: ["Protect your IP", "Find producers", "Pitch to artists"] },
              { icon: "♪", title: "Producers", items: ["Sell beats securely", "Collaborate with artists", "Manage splits"] },
              { icon: "🎨", title: "Visual Artists", items: ["Create cover art", "Build visualizers", "Connect with labels"] },
              { icon: "⭐", title: "A&R / Labels", items: ["Scout verified talent", "Manage rosters", "Private briefs"] }
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, borderColor: "#525252" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-zinc-950/80 border border-zinc-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-zinc-600 transition-all"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-zinc-800/50 flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6"
                >
                  <span className="text-xl sm:text-2xl md:text-3xl">{card.icon}</span>
                </motion.div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-5">{card.title}</h3>
                <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base text-zinc-300">
                  {card.items.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-1.5 sm:gap-2"
                    >
                      <span className="text-green-500 text-xs sm:text-sm md:text-base">✔</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        id="how-it-works" 
        className="bg-black text-white py-12 sm:py-16 md:py-20  px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-8 sm:mb-12 md:mb-16 ">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-2 sm:mb-3 md:mb-4">
<Link href="/" >
              How <span className="text-red-600">SPARTST</span> Works

</Link>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-zinc-400 font-medium px-4">
              A streamlined workflow designed for professional collaboration.
            </p>
          </motion.div>

          {/* 3-Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-20 lg:mb-32">
            {[
              { number: "01", icon: "♫", title: "Create Your Lookbook", desc: "Showcase your best work in a professional, curated portfolio designed for industry viewing.", color: "red" },
              { number: "02", icon: "🔍", title: "Discover & Connect", desc: "Use AI-powered matching to find collaborators that fit your specific style, genre, and goals.", color: "purple" },
              { number: "03", icon: "💼", title: "Collaborate & Earn", desc: "Manage projects, split sheets, and agreements securely within our workspace.", color: "red" }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`bg-zinc-950/70 border border-zinc-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 hover:border-red-900/50 transition-all duration-300 group ${
                  index === 1 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl bg-${step.color}-900/30 flex items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-black`}>
                    {step.number}
                  </div>
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-${step.color}-600/20 flex items-center justify-center`}
                  >
                    <span className={`text-${step.color}-500 text-base sm:text-lg md:text-xl lg:text-2xl`}>{step.icon}</span>
                  </motion.div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1.5 sm:mb-2 md:mb-3">{step.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        id="pricing" 
        className="  md:py-20  px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-24">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-2 sm:mb-3 md:mb-4">
              Simple, <span className="text-red-600">Transparent</span> Pricing
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-zinc-400">
              Start for free, upgrade as you grow.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              { name: "Ignite", price: "Free", features: ["Basic Profile", "2GB Storage", "3 Active Projects", "Community Support"], popular: false },
              { name: "Launch", price: "$10.99", features: ["Verified Badge", "50GB Storage", "Unlimited Projects", "Priority Support", "Advanced Analytics"], popular: true },
              { name: "Excel", price: "$21.99", features: ["Everything in Launch", "1TB Storage", "Legal Templates", "Brief Priority"], popular: false }
            ].map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: plan.popular ? 1.05 : 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`relative bg-zinc-950/70 border ${
                  plan.popular 
                    ? 'border-2 border-red-800/50 shadow-2xl shadow-red-950/30 md:scale-105 lg:scale-110 z-10 hover:border-red-700' 
                    : 'border-zinc-800 hover:border-zinc-600'
                } rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col h-full transition-all`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-3 sm:px-4 py-1 rounded-full uppercase tracking-wide shadow-lg whitespace-nowrap"
                  >
                    Most Popular
                  </motion.div>
                )}

                <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 ${
                  plan.popular ? 'mt-4 sm:mt-5 md:mt-6' : ''
                }`}>
                  {plan.name}
                </h3>
                <p className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4">
                  {plan.price}
                  <span className="text-sm sm:text-base font-normal text-zinc-400">
                    {plan.price !== 'Free' ? '/mo' : ''}
                  </span>
                </p>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow text-xs sm:text-sm md:text-base text-zinc-300">
                  {plan.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-1.5 sm:gap-2"
                    >
                      <span className="text-green-500 text-sm sm:text-base">✔</span> {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-auto ${
                    plan.popular 
                      ? 'bg-red-600 hover:bg-red-700 shadow-lg shadow-red-900/40' 
                      : 'border border-zinc-700 hover:bg-zinc-900'
                  } text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-5 rounded-xl transition-all text-xs sm:text-sm md:text-base`}
                >
                  {plan.name === 'Ignite' ? 'Get Started' : plan.name === 'Launch' ? 'Start Free Trial' : 'Upgrade'}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="border-t border-zinc-800 bg-black py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 md:gap-10 text-xs sm:text-sm text-zinc-400">
          <div className="col-span-2 sm:col-span-3 md:col-span-1">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3 md:mb-4"
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-black">
                <span className="text-red-600">S</span>PARTST
              </span>
            </motion.div>
            <p className="leading-relaxed text-xs">
              Empowering the next generation of music professionals.
            </p>
          </div>

          {[
            { title: "Product", links: ["Features", "Pricing", "Download"] },
            { title: "Company", links: ["About", "Blog", "Careers"] },
            { title: "Legal", links: ["Privacy", "Terms", "Security"] }
          ].map((section, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <h4 className="text-white font-semibold mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">
                {section.title}
              </h4>
              <ul className="space-y-1 sm:space-y-1.5 md:space-y-2">
                {section.links.map((link, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a 
                      href={link === 'Features' ? '#features' : link === 'Pricing' ? '#pricing' : '#'} 
                      className="hover:text-white transition text-xs"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={fadeInUp}
          className="max-w-7xl mx-auto mt-8 sm:mt-10 md:mt-12 lg:mt-16 pt-4 sm:pt-5 md:pt-6 lg:pt-8 border-t border-zinc-800 text-center text-xs text-zinc-500"
        >
          © 2024 SPARTST INC. All rights reserved.
        </motion.div>
      </motion.footer>
    </div>
  );
}