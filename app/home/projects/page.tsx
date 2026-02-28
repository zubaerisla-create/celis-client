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
          <h1 className="text-3xl lg:text-4xl font-bold">Projects</h1>
          <p className="text-zinc-400 mt-2">
            Manage your collaborative music projects
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-200 group"
            >
              {/* Top bar with status */}
              <div className="px-5 pt-5 pb-3 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-600/30 to-purple-600/20 rounded-lg flex items-center justify-center">
                    <Folder className="text-indigo-400" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      {project.status === "Completed" ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-950/60 text-emerald-400 border border-emerald-900/50 rounded-full text-xs font-medium">
                          <CheckCircle2 size={14} />
                          Completed
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-950/60 text-blue-400 border border-blue-900/50 rounded-full text-xs font-medium">
                          In Progress
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
                  <span>{project.progress}%</span>
                </div>
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      project.progress === 100
                        ? "bg-emerald-500"
                        : project.progress >= 70
                        ? "bg-blue-500"
                        : "bg-rose-600"
                    }`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Collaborators + Files */}
              <div className="px-5 pb-6 space-y-4">
                {/* Collaborators */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Users size={16} className="text-zinc-500" />
                    <span>{project.collaborators} Collaborators</span>
                  </div>

                  {/* Avatar stack */}
                  <div className="flex -space-x-2">
                    {Array.from({ length: Math.min(project.collaborators, 4) }).map((_, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full border-2 border-zinc-900 bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center text-xs font-medium text-zinc-300"
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                    {project.collaborators > 4 && (
                      <div className="w-7 h-7 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400">
                        +{project.collaborators - 4}
                      </div>
                    )}
                  </div>
                </div>

                {/* Files */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <File size={16} className="text-zinc-500" />
                    <span>{project.files} files</span>
                  </div>
                </div>
              </div>

              {/* Footer button */}
              <div className="px-5 pb-5">
             <Link href="/home/projects/open-project" >
             
                <button className="w-full bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 text-white font-medium py-2.5 rounded-lg border border-zinc-700 transition-colors">
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