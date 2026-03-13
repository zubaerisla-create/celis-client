// app/onboarding/role-selection/page.tsx
// or as a component: components/RoleSelection.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Mic2, 
  Disc3, 
  Palette, 
  Briefcase, 
  Building2, 
  Guitar, 
  Drama,
  Check 
} from 'lucide-react';
import logo from "../../../../public/logo.png";
import LogoContainer from '@/component/ReUsableComponent/LogoContainer/LogoContainer';

const roles = [
  {
    id: 'songwriter',
    icon: Mic2,
    title: 'Songwriter',
    description: 'Create lyrics, melodies, and collaborate on compositions',
  },
  {
    id: 'producer',
    icon: Disc3,
    title: 'Producer',
    description: 'Produce beats, mix tracks, and work with vocalists',
  },
  {
    id: 'visual-artist',
    icon: Palette,
    title: 'Visual Artist / Choreographer',
    description: 'Design visuals, direct videos, and create performances',
  },
  {
    id: 'aar-executive',
    icon: Briefcase,
    title: 'A&R Executive',
    description: 'Scout talent, manage briefs, and build rosters',
  },
  {
    id: 'label-professional',
    icon: Building2,
    title: 'Label / Industry Professional',
    description: 'Post opportunities and discover emerging talent',
  },
  {
    id: 'musician',
    icon: Guitar,
    title: 'Musician',
    description: 'Post opportunities and discover emerging talent',
  },
  {
    id: 'performing-artist',
    icon: Drama,
    title: 'Performing Artist',
    description: 'Post opportunities and discover emerging talent',
  },
];

export default function SelectRole() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleRole = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  const isSelected = (id: string) => selected.includes(id);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header / Logo */}
      <div className="p-4 sm:p-6 md:p-10">
        <div className="flex items-center gap-3 pb-4 sm:pb-6 border-b border-zinc-800">
          {/* Logo Container with Light background for black logo */}
        <LogoContainer/>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pb-8 sm:pb-12">
        <div className="w-full max-w-5xl">
          {/* Title */}
          <div className="text-center mb-8 sm:mb-10 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-2 sm:mb-3">
              What best describes you?
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-400">
              Select all that apply to customize your experience
            </p>
          </div>

          {/* Role Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-12">
            {roles.map((role) => {
              const IconComponent = role.icon;
              const isRoleSelected = isSelected(role.id);
              
              return (
                <button
                  key={role.id}
                  onClick={() => toggleRole(role.id)}
                  className={`
                    group relative
                    bg-zinc-950 border-2 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 text-left
                    transition-all duration-300
                    ${
                      isRoleSelected
                        ? 'border-[#E54FA9] bg-gradient-to-br from-[#E54FA9]/10 to-[#831CDF]/10 shadow-lg shadow-[#831CDF]/20'
                        : 'border-zinc-800 hover:border-[#E54FA9]/50 hover:bg-zinc-950/80'
                    }
                  `}
                >
                  {/* Icon */}
                  <div className="mb-3 sm:mb-4">
                    <IconComponent 
                      className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-all ${
                        isRoleSelected 
                          ? 'text-[#E54FA9]' 
                          : 'text-zinc-400 group-hover:text-[#E54FA9]'
                      }`} 
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1.5 sm:mb-2">
                    {role.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed">
                    {role.description}
                  </p>

                  {/* Selected indicator */}
                  {isRoleSelected && (
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] rounded-full flex items-center justify-center shadow-lg shadow-[#831CDF]/30">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Continue Button */}
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <Link href="/auth/sign-up/select-role/set-profile" className="w-full max-w-md">
              <button
                disabled={selected.length === 0}
                className={`
                  w-full py-3 sm:py-4 px-4 sm:px-8
                  bg-gradient-to-r from-[#E54FA9] to-[#831CDF]
                  hover:from-[#D63F99] hover:to-[#730CCF]
                  text-white font-bold text-base sm:text-lg
                  rounded-lg sm:rounded-xl transition-all
                  shadow-lg shadow-[#831CDF]/30
                  disabled:opacity-50 disabled:cursor-not-allowed
                  active:scale-[0.98]
                `}
              >
                Continue
              </button>
            </Link>

            <p className="text-xs sm:text-sm text-zinc-500 text-center">
              You can change this later in your settings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}