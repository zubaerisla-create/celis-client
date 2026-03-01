import BriefCard from "@/component/Home/BriefCard/BriefCard";
import ProjectCard from "@/component/Home/ProjectCard/ProjectCard";
import StatCard from "@/component/Home/StatCard/StatCard";
import UpgradeBanner from "@/component/Home/UpgradeBanner/UpgradeBanner";
import UserCard from "@/component/Home/UseCard/UseCard";
import { Eye, Users, Briefcase, Music } from "lucide-react";

export default function Home() {
  const getIcon = (iconName: string) => {
    const iconProps = { className: "w-5 h-5" };
    
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
    <div className="space-y-10">
      {/* Welcome */}
      <div>
        <h1 className="text-3xl md:text-4xl font-black mb-2">Welcome back, John</h1>
        <p className="text-zinc-400">Here is what is happening with your creative journey</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-10">
          {/* Suggested for you */}
          <section>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-bold">Suggested For You</h2>
              <button className="text-red-500 hover:text-red-400 text-sm font-medium">View All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <UserCard
                name="Sarah Chen"
                role="Producer"
                match="92%"
                genre="R&B Soul"
                plan="Launch"
                imageBg="from-red-500 to-pink-600"
              />
              <UserCard
                name="Marcus Williams"
                role="Songwriter"
                match="87%"
                genre="R&B Pop"
                plan="Excel"
                imageBg="from-purple-600 to-indigo-600"
              />
            </div>
          </section>

          {/* Open Industry Briefs */}
          <section>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-bold">Open Industry Briefs</h2>
              <button className="text-red-500 hover:text-red-400 text-sm font-medium">View all</button>
            </div>
            <div className="space-y-4">
              <BriefCard title="Looking for R&B Vocalist" client="Atlantic Records" genre="R&B" urgent />
              <BriefCard title="Hip-Hop Beat Production" client="Indie Label Group" genre="Hip-Hop" deadline="5 days left" />
              <BriefCard title="Summer Pop Track" client="Sony Music" genre="Pop" deadline="3 days left" />
            </div>
          </section>

          {/* Active Projects */}
          <section>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-bold">Active Projects</h2>
              <button className="text-red-500 hover:text-red-400 text-sm font-medium">View all</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard title="Midnight Sessions" artist="Sarah Chen & Alex Rivera" progress={65} updated="2 hours ago" />
              <ProjectCard title="Summer Vibes EP" artist="Marcus Williams" progress={40} updated="1 day ago" />
            </div>
          </section>
        </div>

        {/* Right sidebar */}
        <aside className="space-y-8">
          <UpgradeBanner />

          <section>
            <h2 className="text-xl font-bold mb-4">Trending This Week</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500" />
                <div>
                  <p className="font-medium">Jordan Lee</p>
                  <p className="text-sm text-zinc-400">Vocal Artist – Excel</p>
                </div>
              </div>
              {/* more trending people... */}
            </div>
          </section>

          <section className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">In the Spotlight</h2>
            <p className="text-sm text-zinc-300 mb-4">
              Complete your profile to get featured in this week iss spotlight
            </p>
            <div className="mb-3">
              <div className="flex justify-between text-sm text-zinc-400 mb-1.5">
                <span>Profile completion</span>
                <span>75%</span>
              </div>
              <div className="h-2 bg-zinc-800 rounded-full">
                <div className="h-full bg-red-600 rounded-full w-[75%]" />
              </div>
            </div>
            <button className="w-full py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium">
              Complete Profile
            </button>
          </section>
        </aside>
      </div>
    </div>
  );
}