// app/onboarding/role-selection/page.tsx
// or as a component: components/RoleSelection.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';

const roles = [
  {
    id: 'songwriter',
    icon: '🎤',
    title: 'Songwriter',
    description: 'Create lyrics, melodies, and collaborate on compositions',
  },
  {
    id: 'producer',
    icon: '♪',
    title: 'Producer',
    description: 'Produce beats, mix tracks, and work with vocalists',
  },
  {
    id: 'visual-artist',
    icon: '🎨',
    title: 'Visual Artist / Choreographer',
    description: 'Design visuals, direct videos, and create performances',
  },
  {
    id: 'aar-executive',
    icon: '📋',
    title: 'A&R Executive',
    description: 'Scout talent, manage briefs, and build rosters',
  },
  {
    id: 'label-professional',
    icon: '🏢',
    title: 'Label / Industry Professional',
    description: 'Post opportunities and discover emerging talent',
  },
  {
    id: 'musician',
    icon: '🎸',
    title: 'Musician',
    description: 'Post opportunities and discover emerging talent',
  },
  {
    id: 'performing-artist',
    icon: '🎭',
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
      <div className="p-6 md:p-10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-2xl font-black">
            S
          </div>
          <span className="text-3xl font-black tracking-tight">PARTST</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12">
        <div className="w-full max-w-5xl">
          {/* Title */}
          <div className="text-center mb-10 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
              What best describes you?
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl">
              Select all that apply to customize your experience
            </p>
          </div>

          {/* Role Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-12">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => toggleRole(role.id)}
                className={`
                  group relative
                  bg-zinc-950 border-2 rounded-2xl p-6 md:p-8 text-left
                  transition-all duration-300
                  ${
                    isSelected(role.id)
                      ? 'border-red-600 bg-zinc-900/70 shadow-red-900/30'
                      : 'border-zinc-800 hover:border-zinc-600 hover:bg-zinc-950/80'
                  }
                `}
              >
                {/* Icon */}
                <div className="text-4xl mb-4">{role.icon}</div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {role.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  {role.description}
                </p>

                {/* Selected indicator */}
                {isSelected(role.id) && (
                  <div className="absolute top-4 right-4 w-7 h-7 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Continue Button */}
          <div className="flex flex-col items-center gap-4">
          

          <Link href="/auth/sign-up/select-role/set-profile" >
          
            <button
              disabled={selected.length === 0}
              className={`
                w-full max-w-md py-4 px-8
                bg-red-600 hover:bg-red-700
                text-white font-bold text-lg
                rounded-xl transition-all
                shadow-lg shadow-red-900/30
                disabled:opacity-50 disabled:cursor-not-allowed
                active:scale-[0.98]
              `}
            >
              Continue
            </button>
          </Link>

            <p className="text-zinc-500 text-sm text-center">
              You can change this later in your settings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}