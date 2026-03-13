// app/projects/page.tsx
"use client";

import { Folder, Users, File, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";

type ProjectStatus = "In Progress" | "Completed";

interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  progress: number;           // 0–100
  updated: string;
  collaborators: number;
  files: number;
  avatars: string[];          // placeholder urls or just count
}

const mockProjects: Project[] = [
  {
    id: "1",
    title: "Midnight Echoes Album",
    status: "In Progress",
    progress: 65,
    updated: "Updated 2 days ago",
    collaborators: 4,
    files: 24,
    avatars: ["", "", "", ""],
  },
  {
    id: "2",
    title: "Summer Vibes EP",
    status: "Completed",
    progress: 100,
    updated: "Completed 1 week ago",
    collaborators: 2,
    files: 18,
    avatars: ["", ""],
  },
  {
    id: "3",
    title: "Acoustic Sessions",
    status: "In Progress",
    progress: 35,
    updated: "Updated 5 hours ago",
    collaborators: 3,
    files: 12,
    avatars: ["", "", ""],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl lg:text-4xl font-bold">
            <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-zinc-400 mt-2">
            Manage your collaborative music projects
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-[#E54FA9]/50 transition-all duration-200 group"
            >
              {/* Top bar with status */}
              <div className="px-5 pt-5 pb-3 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#E54FA9]/30 to-[#831CDF]/20 rounded-lg flex items-center justify-center">
                    <Folder className="text-[#E54FA9]" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg leading-tight group-hover:text-[#E54FA9] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      {project.status === "Completed" ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-gradient-to-r from-[#E54FA9]/20 to-[#831CDF]/20 text-transparent bg-clip-text border border-[#E54FA9]/30 rounded-full text-xs font-medium">
                          <CheckCircle2 size={14} className="text-[#E54FA9]" />
                          <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">Completed</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-gradient-to-r from-[#E54FA9]/20 to-[#831CDF]/20 text-transparent bg-clip-text border border-[#E54FA9]/30 rounded-full text-xs font-medium">
                          <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">In Progress</span>
                        </span>
                      )}
                      <span className="text-xs text-zinc-500">
                        {project.updated}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="px-5 pb-4">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-1.5">
                  <span>Progress</span>
                  <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent font-medium">
                    {project.progress}%
                  </span>
                </div>
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ 
                      width: `${project.progress}%`,
                      background: project.progress === 100
                        ? 'linear-gradient(to right, #10b981, #34d399)'
                        : 'linear-gradient(to right, #E54FA9, #831CDF)'
                    }}
                  />
                </div>
              </div>

              {/* Collaborators + Files */}
              <div className="px-5 pb-6 space-y-4">
                {/* Collaborators */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Users size={16} className="text-zinc-500 group-hover:text-[#E54FA9] transition-colors" />
                    <span>{project.collaborators} Collaborators</span>
                  </div>

                  {/* Avatar stack */}
                  <div className="flex -space-x-2">
                    {Array.from({ length: Math.min(project.collaborators, 4) }).map((_, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full border-2 border-zinc-900 bg-gradient-to-br from-[#E54FA9] to-[#831CDF] flex items-center justify-center text-xs font-medium text-white"
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                    {project.collaborators > 4 && (
                      <div className="w-7 h-7 rounded-full border-2 border-zinc-900 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] flex items-center justify-center text-[10px] text-white">
                        +{project.collaborators - 4}
                      </div>
                    )}
                  </div>
                </div>

                {/* Files */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <File size={16} className="text-zinc-500 group-hover:text-[#E54FA9] transition-colors" />
                    <span>{project.files} files</span>
                  </div>
                </div>
              </div>

              {/* Footer button */}
              <div className="px-5 pb-5">
                <Link href="/home/projects/open-project">
                  <button className="w-full bg-zinc-800 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] text-white font-medium py-2.5 rounded-lg border border-zinc-700 hover:border-transparent transition-all active:scale-[0.98] shadow-lg hover:shadow-[#831CDF]/30">
                    Open Project
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}                   