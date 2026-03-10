// app/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  PenTool, 
  Music, 
  Palette, 
  Star, 
  Sparkles,
  Search,
  Briefcase,
  CheckCircle,
  TrendingUp,
  Shield,
  Users,
  Camera,
  Headphones,
  Mic2,
  Disc3,
  Rocket,
  Zap,
  Infinity,
  Globe,
  ChevronRight
} from "lucide-react";

import logo from "../../public/logo.png"

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
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md  border-b border-zinc-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 flex items-center justify-between">
       
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 sm:gap-2"
            >
              <a href="#" className="flex items-center gap-1 sm:gap-2">
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
              </a>
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
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-xs sm:text-sm font-medium hover:text-red-400 transition-colors whitespace-nowrap"
            >
              <Link href="/auth/sign-in">
                Sign In
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap"
            >
              <Link href="/auth/sign-up">
                Join Free
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <main className="pt-24 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-4  relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center  gap-6 sm:gap-8 lg:gap-12"
          >
            {/* Left Content */}
            <div className="flex-1 text-center pt-8 lg:text-left w-full">
              {/* Small tagline */}
              <motion.div 
                variants={fadeInUp}
                className="inline-block mb-3 sm:mb-4 md:mb-6 px-3 sm:px-5  py-1.5 sm:py-2 bg-zinc-900/70 border border-zinc-700 rounded-full text-xs sm:text-sm font-medium tracking-wide text-red-300"
              >
                The Professional Network for Music Creators
              </motion.div>

              {/* Main headline */}
              <motion.h1 
                variants={fadeInUp}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black tracking-tight leading-tight mb-3 sm:mb-4 md:mb-6 lg:mb-8"
              >
                Where Music
                <br className="hidden sm:block" />
                Meets <span className="text-red-500">Vision</span>.
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                variants={fadeInUp}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-300 max-w-3xl mx-auto lg:mx-0 mb-4 sm:mb-6 md:mb-8 lg:mb-12 leading-relaxed px-2 sm:px-0"
              >
                The premium platform connecting songwriters, producers, visual artists,
                and industry executives, in a curated, professional environment.
              </motion.p>

              {/* CTA buttons */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col xs:flex-row sm:flex-row lg:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12 lg:mb-16 justify-center lg:justify-start px-4 xs:px-0"
              >
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 hover:bg-red-700 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-bold transition-all shadow-lg shadow-red-900/30 w-full xs:w-auto"
                >
                  Join as Creative
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-red-600 text-red-400 hover:bg-red-950/50 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-bold transition-all w-full xs:w-auto"
                >
                  Join as Industry
                </motion.a>
              </motion.div>

              {/* Avatars Section */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col xs:flex-row sm:flex-row lg:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6"
              >
                {/* Avatars row */}
                <div className="flex items-center justify-center -space-x-2 xs:-space-x-3 sm:-space-x-4">
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
                      className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border-2 sm:border-4 border-black shadow-xl shadow-black/40"
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
                  className="text-zinc-400 text-xs xs:text-sm sm:text-base md:text-lg font-medium text-center lg:text-left"
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
              className="hidden lg:block relative w-full max-w-[400px] xl:max-w-[500px] 2xl:max-w-[620px] h-[350px] xl:h-[400px] 2xl:h-[420px] perspective-1000 mt-8 lg:mt-0"
            >
              {/* Background subtle glows */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-40 xl:w-48 2xl:w-64 h-40 xl:h-48 2xl:h-64 bg-orange-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-48 xl:w-56 2xl:w-72 h-48 xl:h-56 2xl:h-72 bg-purple-600/10 rounded-full blur-3xl" />
              </div>

              {/* Card 1 - Sarah */}
              <motion.div
                whileHover={{ rotate: -2, scale: 1.03, zIndex: 20 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute inset-0 m-auto w-[220px] xl:w-[260px] 2xl:w-[300px] bg-gradient-to-br from-zinc-950 to-black border border-zinc-800/80 rounded-2xl overflow-hidden shadow-2xl shadow-black/70 backdrop-blur-sm transform rotate-[-5deg] translate-x-[-15%] translate-y-[8%] z-10"
              >
                <div className="p-3 xl:p-4 2xl:p-5">
                  <div className="flex items-center gap-2 xl:gap-3 mb-2 xl:mb-3">
                    <div className="relative">
                      <div className="w-8 xl:w-9 2xl:w-10 h-8 xl:h-9 2xl:h-10 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-amber-400 flex items-center justify-center shadow-lg shadow-orange-900/40">
                        <span className="text-sm xl:text-base 2xl:text-lg font-bold text-white drop-shadow-md">S</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xs xl:text-sm 2xl:text-base leading-tight">Sarah C</h3>
                      <span className="inline-block px-1.5 xl:px-2 py-0.5 mt-0.5 text-[10px] xl:text-xs font-semibold text-orange-300 bg-orange-950/60 rounded-full">
                        Songwriter
                      </span>
                    </div>
                  </div>
                  <p className="text-zinc-300 text-[10px] xl:text-xs leading-relaxed mb-2 xl:mb-3 italic">
                    Looking for a producer on a dark pop track — Weekend, Banks vibe.
                  </p>
                  <div className="mb-2 xl:mb-3">
                    <div className="relative h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: "26%" }}
                        transition={{ duration: 1, delay: 1 }}
                        className="absolute h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                      />
                    </div>
                    <div className="flex justify-between text-[10px] xl:text-xs text-zinc-500 mt-1">
                      <span>0:42</span>
                      <span>3:15</span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <span className="px-1.5 xl:px-2 py-0.5 text-[10px] xl:text-xs font-medium bg-purple-950/50 text-purple-300 rounded-full border border-purple-800/40">
                      Hip Hop
                    </span>
                    <span className="px-1.5 xl:px-2 py-0.5 text-[10px] xl:text-xs font-medium bg-purple-950/50 text-purple-300 rounded-full border border-purple-800/40">
                      R&B
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - Alex */}
              <motion.div
                whileHover={{ rotate: 1, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute inset-0 m-auto w-[240px] xl:w-[280px] 2xl:w-[320px] bg-gradient-to-br from-zinc-950 to-black border border-zinc-700/90 rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(139,92,246,0.15)] backdrop-blur-md transform rotate-[4deg] translate-x-[10%] translate-y-[-5%] z-20"
              >
                <div className="p-3 xl:p-4 2xl:p-5">
                  <div className="flex items-center gap-2 xl:gap-3 mb-2 xl:mb-3">
                    <div className="relative">
                      <div className="w-9 xl:w-10 2xl:w-12 h-9 xl:h-10 2xl:h-12 rounded-full bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-900/50 ring-2 ring-purple-500/30">
                        <span className="text-sm xl:text-base 2xl:text-lg font-bold text-white drop-shadow-md">A</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xs xl:text-sm 2xl:text-base leading-tight">Alex Rivera</h3>
                      <span className="inline-block px-1.5 xl:px-2 py-0.5 mt-0.5 text-[10px] xl:text-xs font-semibold text-blue-300 bg-blue-950/60 rounded-full">
                        Producer
                      </span>
                    </div>
                  </div>
                  <p className="text-zinc-200 text-[10px] xl:text-xs leading-relaxed mb-2 xl:mb-3">
                    Looking for a vocalist on dark pop track — Weekend, Banks vibe
                  </p>
                  <div className="flex gap-1 mb-3 xl:mb-4">
                    <span className="px-1.5 xl:px-2 py-0.5 xl:py-1 text-[10px] xl:text-xs font-medium bg-purple-950/60 text-purple-200 rounded-full border border-purple-700/50">
                      Hip Hop
                    </span>
                    <span className="px-1.5 xl:px-2 py-0.5 xl:py-1 text-[10px] xl:text-xs font-medium bg-purple-950/60 text-purple-200 rounded-full border border-purple-700/50">
                      R&B
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-1.5 xl:py-2 2xl:py-2.5 px-3 xl:px-4 bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold rounded-lg xl:rounded-xl shadow-lg shadow-purple-900/40 transition-all duration-300 active:scale-95 text-[10px] xl:text-xs 2xl:text-sm"
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
            
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-32 xs:w-40 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-32 xs:h-40 sm:h-48 md:h-64 lg:h-80 xl:h-96 bg-red-600/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ 
              duration: 10,
             
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/4 right-1/4 w-32 xs:w-40 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-32 xs:h-40 sm:h-48 md:h-64 lg:h-80 xl:h-96 bg-purple-600/10 rounded-full blur-3xl"
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
        className="bg-black text-white py-10 xs:py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-6 xs:mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-2 sm:mb-3 md:mb-4">
              <span className="text-red-600">Features</span> That Matter
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-zinc-400 font-medium px-2 sm:px-4">
              Everything you need to succeed in the music industry.
            </p>
          </motion.div>

          {/* Role Cards - Features with Lucide Icons */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {[
              { icon: PenTool, title: "Songwriters", items: ["Protect your IP", "Find producers", "Pitch to artists"] },
              { icon: Music, title: "Producers", items: ["Sell beats securely", "Collaborate with artists", "Manage splits"] },
              { icon: Palette, title: "Visual Artists", items: ["Create cover art", "Build visualizers", "Connect with labels"] },
              { icon: Star, title: "A&R / Labels", items: ["Scout verified talent", "Manage rosters", "Private briefs"] }
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, borderColor: "#525252" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-zinc-950/80 border border-zinc-800 rounded-lg xs:rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 hover:border-zinc-600 transition-all"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-8 xs:w-9 sm:w-10 md:w-12 lg:w-14 xl:w-16 h-8 xs:h-9 sm:h-10 md:h-12 lg:h-14 xl:h-16 rounded-full bg-zinc-800/50 flex items-center justify-center mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6"
                >
                  <card.icon className="w-4 xs:w-5 sm:w-6 md:w-7 lg:w-8 xl:w-10 h-4 xs:h-5 sm:h-6 md:h-7 lg:h-8 xl:h-10 text-red-500" />
                </motion.div>
                <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1.5 xs:mb-2 sm:mb-3 md:mb-4 lg:mb-5">{card.title}</h3>
                <ul className="space-y-1 xs:space-y-1.5 sm:space-y-2 md:space-y-3 text-xs xs:text-sm sm:text-base text-zinc-300">
                  {card.items.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-1 xs:gap-1.5 sm:gap-2"
                    >
                      <CheckCircle className="w-3 xs:w-3.5 sm:w-4 h-3 xs:h-3.5 sm:h-4 text-green-500 flex-shrink-0" />
                      <span className="text-xs xs:text-sm">{item}</span>
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
        className="bg-black text-white py-10 xs:py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-6 xs:mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-2 sm:mb-3 md:mb-4">
              How <span className="text-red-600">SPARTST</span> Works
            </h2>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-zinc-400 font-medium px-2 sm:px-4">
              A streamlined workflow designed for professional collaboration.
            </p>
          </motion.div>

          {/* 3-Step Cards with Lucide Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
            {[
              { number: "01", icon: Sparkles, title: "Create Your Lookbook", desc: "Showcase your best work in a professional, curated portfolio designed for industry viewing.", color: "red" },
              { number: "02", icon: Search, title: "Discover & Connect", desc: "Use AI-powered matching to find collaborators that fit your specific style, genre, and goals.", color: "purple" },
              { number: "03", icon: Briefcase, title: "Collaborate & Earn", desc: "Manage projects, split sheets, and agreements securely within our workspace.", color: "red" }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`bg-zinc-950/70 border border-zinc-800 rounded-lg xs:rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 hover:border-red-900/50 transition-all duration-300 group ${
                  index === 1 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  <div className={`w-6 xs:w-7 sm:w-8 md:w-10 lg:w-12 xl:w-14 h-6 xs:h-7 sm:h-8 md:h-10 lg:h-12 xl:h-14 rounded-lg xs:rounded-xl bg-${step.color}-900/30 flex items-center justify-center text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black`}>
                    {step.number}
                  </div>
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-5 xs:w-6 sm:w-7 md:w-8 lg:w-10 xl:w-12 h-5 xs:h-6 sm:h-7 md:h-8 lg:h-10 xl:h-12 rounded-full bg-${step.color}-600/20 flex items-center justify-center`}
                  >
                    <step.icon className={`w-3 xs:w-3.5 sm:w-4 md:w-5 lg:w-6 xl:w-8 h-3 xs:h-3.5 sm:h-4 md:h-5 lg:h-6 xl:h-8 text-${step.color}-500`} />
                  </motion.div>
                </div>
                <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-1 xs:mb-1.5 sm:mb-2 md:mb-3">{step.title}</h3>
                <p className="text-[10px] xs:text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed">
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
        className="bg-black text-white py-10 xs:py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-6 xs:mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-2 sm:mb-3 md:mb-4">
              Simple, <span className="text-red-600">Transparent</span> Pricing
            </h1>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-zinc-400">
              Start for free, upgrade as you grow.
            </p>
          </motion.div>

          {/* Pricing Cards with Lucide Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { name: "Ignite", price: "Free", icon: Zap, features: ["Basic Profile", "2GB Storage", "3 Active Projects", "Community Support"], popular: false },
              { name: "Launch", price: "$10.99", icon: Rocket, features: ["Verified Badge", "50GB Storage", "Unlimited Projects", "Priority Support", "Advanced Analytics"], popular: true },
              { name: "Excel", price: "$21.99", icon: Infinity, features: ["Everything in Launch", "1TB Storage", "Legal Templates", "Brief Priority"], popular: false }
            ].map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: plan.popular ? 1.05 : 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`relative bg-zinc-950/70 border ${
                  plan.popular 
                    ? 'border-2 border-red-800/50 shadow-2xl shadow-red-950/30 md:scale-105 lg:scale-105 xl:scale-110 z-10 hover:border-red-700' 
                    : 'border-zinc-800 hover:border-zinc-600'
                } rounded-lg xs:rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col h-full transition-all`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -top-2 xs:-top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] xs:text-xs font-bold px-2 xs:px-3 sm:px-4 py-0.5 xs:py-1 rounded-full uppercase tracking-wide shadow-lg whitespace-nowrap"
                  >
                    Most Popular
                  </motion.div>
                )}

                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold ${
                    plan.popular ? 'mt-3 xs:mt-4 sm:mt-5 md:mt-6' : ''
                  }`}>
                    {plan.name}
                  </h3>
                  <plan.icon className={`w-5 xs:w-6 sm:w-7 md:w-8 h-5 xs:h-6 sm:h-7 md:h-8 ${plan.popular ? 'text-red-500' : 'text-zinc-400'}`} />
                </div>
                
                <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-2 xs:mb-3 sm:mb-4">
                  {plan.price}
                  <span className="text-[10px] xs:text-xs sm:text-sm font-normal text-zinc-400">
                    {plan.price !== 'Free' ? '/mo' : ''}
                  </span>
                </p>

                <ul className="space-y-1 xs:space-y-1.5 sm:space-y-2 md:space-y-3 mb-4 xs:mb-5 sm:mb-6 md:mb-8 flex-grow text-xs xs:text-sm sm:text-base text-zinc-300">
                  {plan.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-1 xs:gap-1.5 sm:gap-2"
                    >
                      <CheckCircle className="w-3 xs:w-3.5 sm:w-4 h-3 xs:h-3.5 sm:h-4 text-green-500 flex-shrink-0" />
                      <span className="text-[10px] xs:text-xs sm:text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-auto flex items-center justify-center gap-1 sm:gap-2 ${
                    plan.popular 
                      ? 'bg-red-600 hover:bg-red-700 shadow-lg shadow-red-900/40' 
                      : 'border border-zinc-700 hover:bg-zinc-900'
                  } text-white font-semibold py-1.5 xs:py-2 sm:py-2.5 md:py-3 px-3 xs:px-4 sm:px-5 rounded-lg xs:rounded-xl transition-all text-[10px] xs:text-xs sm:text-sm md:text-base`}
                >
                  {plan.name === 'Ignite' ? 'Get Started' : plan.name === 'Launch' ? 'Start Free Trial' : 'Upgrade'}
                  <ChevronRight className="w-3 xs:w-3.5 sm:w-4 h-3 xs:h-3.5 sm:h-4" />
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
        className="border-t border-zinc-800 bg-black py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 text-[10px] xs:text-xs sm:text-sm text-zinc-400">
          <div className="col-span-2 sm:col-span-3 md:col-span-1">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 sm:gap-2 mb-1 xs:mb-1.5 sm:mb-2 md:mb-3 lg:mb-4"
            >
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
            </motion.div>
            <p className="leading-relaxed text-[10px] xs:text-xs flex items-center gap-1">
              <Globe className="w-3 h-3 inline-block" />
              Empowering the next generation of music professionals.
            </p>
          </div>

          {[
            { title: "Product", links: ["Features", "Pricing", "Download"] },
            { title: "Company", links: ["About", "Blog", "Careers"] },
            { title: "Legal", links: ["Privacy", "Terms", "Security"] }
          ].map((section, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <h4 className="text-white font-semibold mb-1 xs:mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 text-[10px] xs:text-xs sm:text-sm md:text-base">
                {section.title}
              </h4>
              <ul className="space-y-0.5 xs:space-y-1 sm:space-y-1.5 md:space-y-2">
                {section.links.map((link, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a 
                      href={link === 'Features' ? '#features' : link === 'Pricing' ? '#pricing' : '#'} 
                      className="hover:text-white transition text-[8px] xs:text-[10px] sm:text-xs flex items-center gap-1"
                    >
                      <ChevronRight className="w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity" />
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
          className="max-w-7xl mx-auto mt-4 xs:mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 pt-3 xs:pt-4 sm:pt-5 md:pt-6 lg:pt-8 border-t border-zinc-800 text-center text-[8px] xs:text-[10px] sm:text-xs text-zinc-500"
        >
          © 2024 SPARTST INC. All rights reserved.
        </motion.div>
      </motion.footer>
    </div>
  );
}