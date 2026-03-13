import BriefCard from "@/component/Home/BriefCard/BriefCard";
import ProjectCard from "@/component/Home/ProjectCard/ProjectCard";
import StatCard from "@/component/Home/StatCard/StatCard";
import UpgradeBanner from "@/component/Home/UpgradeBanner/UpgradeBanner";
import UserCard from "@/component/Home/UseCard/UseCard";
import { Eye, Users, Briefcase, Music } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const getIcon = (iconName: string) => {
    const iconProps = { className: "w-5 h-5 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent" };
    
    switch(iconName) {
      case "eye":
        return <Eye {...iconProps} />;
      case "users":
        return <Users {...iconProps} />;
      case "briefcase":
        return <Briefcase {...iconProps} />;
      case "music":
        return <Music {...iconProps} />;
      default:
        return <></>; // Return empty fragment instead of null
    }
  };

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Welcome */}
      <div className="px-4 sm:px-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 sm:mb-2">Welcome back, John</h1>
        <p className="text-sm sm:text-base text-zinc-400">Here is what is happening with your creative journey</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-4 sm:px-0">
        <StatCard 
          title="Profile Views" 
          value="1,247" 
          change="+2%" 
          trend="up" 
          icon={getIcon("eye")} 
        />
        <StatCard 
          title="Collaborations" 
          value="8" 
          change="+2" 
          trend="up" 
          icon={getIcon("users")} 
        />
        <StatCard 
          title="Active Briefs" 
          value="4" 
          change="+2 new" 
          trend="up" 
          icon={getIcon("briefcase")} 
        />
        <StatCard 
          title="Works Uploaded" 
          value="23" 
          change="-5" 
          trend="down" 
          icon={getIcon("music")} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-8 sm:space-y-10">
          {/* Suggested for you */}
          <section>
            <div className="flex items-center justify-between mb-4 sm:mb-5">
              <h2 className="text-xl sm:text-2xl font-bold">Suggested For You</h2>
              <button className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent hover:from-[#D63F99] hover:to-[#730CCF] text-xs sm:text-sm font-medium">
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        
        <Link href="/home/friends-profile">
              <UserCard
                name="Sarah Chen"
                role="Producer"
                match="92%"
                genre="R&B Soul"
                plan="Launch"
                imageBg="from-[#E54FA9] to-[#831CDF]"
              />
        </Link>


           <Link href="/home/friends-profile">
           
              <UserCard
                name="Marcus Williams"
                role="Songwriter"
                match="87%"
                genre="R&B Pop"
                plan="Excel"
                imageBg="from-[#831CDF] to-[#E54FA9]"
              />
           </Link>
            </div>
          </section>

          {/* Open Industry Briefs */}
          <section>
            <div className="flex items-center justify-between mb-4 sm:mb-5">
              <h2 className="text-xl sm:text-2xl font-bold">Open Industry Briefs</h2>
              <button className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent hover:from-[#D63F99] hover:to-[#730CCF] text-xs sm:text-sm font-medium">
                View all
              </button>
            </div>
            <div className="space-y-3 sm:space-y-4">
       <Link href="/home/briefs/brief-details">
              <BriefCard 
                title="Looking for R&B Vocalist" 
                client="Atlantic Records" 
                genre="R&B" 
                urgent 
                gradientFrom="#E54FA9" 
                gradientTo="#831CDF"
              />
       </Link>
       
<Link href="/home/briefs/brief-details">
       <BriefCard 
                title="Hip-Hop Beat Production" 
                client="Indie Label Group" 
                genre="Hip-Hop" 
                deadline="5 days left"
                gradientFrom="#E54FA9" 
                gradientTo="#831CDF" 
              />
</Link>

   <Link href="/home/briefs/brief-details">
              <BriefCard 
                title="Summer Pop Track" 
                client="Sony Music" 
                genre="Pop" 
                deadline="3 days left"
                gradientFrom="#E54FA9" 
                gradientTo="#831CDF" 
              />
   </Link>
            </div>
          </section>

          {/* Active Projects */}
          <section>
            <div className="flex items-center justify-between mb-4 sm:mb-5">
              <h2 className="text-xl sm:text-2xl font-bold">Active Projects</h2>
              <button className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent hover:from-[#D63F99] hover:to-[#730CCF] text-xs sm:text-sm font-medium">
                View all
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
    <Link href="/home/projects/open-project">
              <ProjectCard 
                title="Midnight Sessions" 
                artist="Sarah Chen & Alex Rivera" 
                progress={65} 
                updated="2 hours ago" 
                gradientFrom="#E54FA9" 
                gradientTo="#831CDF"
              />
    </Link>
<Link href="/home/projects/open-project">

              <ProjectCard 
                title="Summer Vibes EP" 
                artist="Marcus Williams" 
                progress={40} 
                updated="1 day ago"
                gradientFrom="#E54FA9" 
                gradientTo="#831CDF" 
              />
</Link>
            </div>
          </section>
        </div>

        {/* Right sidebar */}
        <aside className="space-y-6 sm:space-y-8">
          <UpgradeBanner 
            gradientFrom="#E54FA9" 
            gradientTo="#831CDF" 
          />

          <section className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Trending This Week</h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#E54FA9] to-[#831CDF]" />
                <div>
                  <p className="text-sm sm:text-base font-medium">Jordan Lee</p>
                  <p className="text-xs sm:text-sm text-zinc-400">Vocal Artist – Excel</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#831CDF] to-[#E54FA9]" />
                <div>
                  <p className="text-sm sm:text-base font-medium">Maya Rodriguez</p>
                  <p className="text-xs sm:text-sm text-zinc-400">Producer – Launch</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#E54FA9] to-[#831CDF]" />
                <div>
                  <p className="text-sm sm:text-base font-medium">David Kim</p>
                  <p className="text-xs sm:text-sm text-zinc-400">Songwriter – Excel</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">In the Spotlight</h2>
            <p className="text-xs sm:text-sm text-zinc-300 mb-3 sm:mb-4">
              Complete your profile to get featured in this week's spotlight
            </p>
            <div className="mb-3 sm:mb-4">
              <div className="flex justify-between text-xs sm:text-sm text-zinc-400 mb-1 sm:mb-1.5">
                <span>Profile completion</span>
                <span>75%</span>
              </div>
              <div className="h-1.5 sm:h-2 bg-zinc-800 rounded-full">
                <div 
                  className="h-full rounded-full w-[75%]" 
                  style={{ background: 'linear-gradient(to right, #E54FA9, #831CDF)' }}
                />
              </div>
            </div>
     <Link href="/home/settings">
            <button 
              className="w-full py-2 sm:py-2.5 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] hover:from-[#D63F99] hover:to-[#730CCF] rounded-lg text-xs sm:text-sm font-medium transition-all"
            >
              Complete Profile
            </button>
     </Link>
          </section>
        </aside>
      </div>
    </div>
  );
}