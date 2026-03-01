// app/projects/[id]/page.tsx
"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Users,
  MessageSquare,
  Percent,
  Music,
  FileText,
  Upload,
  Play,
  Download,
  MoreVertical,
  X,
  Check,
  Pencil,
  Search,
  Mail,
} from "lucide-react";
import { useRouter } from "next/navigation";


type Tab = "comments" | "splits";
type FileTab = "audio" | "lyrics";

interface Collaborator {
  name: string;
  role: string;
  avatar?: string;
  isYou?: boolean;
}

interface AudioFile {
  name: string;
  uploader: string;
  date: string;
  size: string;
  duration?: string;
  waveformColor?: string;
}

interface LyricsFile {
  name: string;
  uploader: string;
  date: string;
  content: string;
}

export default function ProjectDetailPage() {
  const [activeTab, setActiveTab] = useState<Tab>("comments");
  const [activeFileTab, setActiveFileTab] = useState<FileTab>("audio");
  const [isEditingSplits, setIsEditingSplits] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [showLyricsModal, setShowLyricsModal] = useState(false);
  const [selectedLyrics, setSelectedLyrics] = useState<LyricsFile | null>(null);

  const router = useRouter();

  const collaborators: Collaborator[] = [
    { name: "You", role: "Production & Mixing", isYou: true },
    { name: "Sarah Chen", role: "Vocals & Songwriting" },
    { name: "Alex Rivera", role: "Beat Production" },
  ];

  const audioFiles: AudioFile[] = [
    {
      name: "Track_01_Rough_Mix.mp3",
      uploader: "Sarah Chen",
      date: "Feb 20, 2026",
      size: "4.2 MB",
      waveformColor: "from-rose-500 to-pink-600",
    },
    {
      name: "Vocals_Final_Take.wav",
      uploader: "Marcus Williams",
      date: "Feb 18, 2026",
      size: "12.5 MB",
      waveformColor: "from-blue-500 to-cyan-600",
    },
    {
      name: "Beat_Version_2.mp3",
      uploader: "Alex Rivera",
      date: "Feb 15, 2026",
      size: "5.8 MB",
      waveformColor: "from-purple-500 to-indigo-600",
    },
  ];

  const lyricsFiles: LyricsFile[] = [
    {
      name: "Verse 1 Draft.txt",
      uploader: "Jordan Lee",
      date: "Feb 19, 2026",
      content: "In the midnight hour, when the world's asleep\nI'm wide awake, counting memories I keep\nEvery word you said still echoes in my mind\nLike a melody that's running out of time",
    },
    {
      name: "Chorus Final.txt",
      uploader: "Sarah Chen",
      date: "Feb 17, 2026",
      content: "We're rising up, breaking through the night\nShining brighter than the city lights\nNothing's gonna stop us now\nWe'll make it through somehow",
    },
    {
      name: "Bridge Idea.txt",
      uploader: "Alex Rivera",
      date: "Feb 15, 2026",
      content: "And in the silence, I can hear your voice\nTelling me I always had a choice\nTo rise above, to break these chains\nAnd dance out in the pouring rain",
    },
  ];

  const splits = [
    { name: "You", role: "Production & Mixing", percent: 40 },
    { name: "Sarah Chen", role: "Vocals & Songwriting", percent: 35 },
    { name: "Alex Rivera", role: "Beat Production", percent: 25 },
  ];

  const handleOpenLyrics = (lyrics: LyricsFile) => {
    setSelectedLyrics(lyrics);
    setShowLyricsModal(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <div className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button className="text-zinc-400 hover:text-white">
                <ArrowLeft onClick={()=>router.back()} size={20} />
              </button>
              <div>
                <h1 className="text-xl font-bold">Midnight Echoes Album</h1>
                <p className="text-sm text-zinc-400">R&B • Collaborative Project</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="px-3 py-1 bg-blue-950/60 text-blue-400 border border-blue-900/50 rounded-full text-sm font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                In Progress
              </div>

              <button 
                onClick={() => setShowInviteModal(true)}
                className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg text-sm font-medium border border-zinc-700 flex items-center gap-2"
              >
                <Users size={16} />
                Invite Collaborators
              </button>

              <div className="flex -space-x-2">
                {collaborators.slice(0, 3).map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center text-xs"
                    title={c.name}
                  >
                    {c.name[0]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left + Center – Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="flex border-b border-zinc-800">
                <button
                  onClick={() => setActiveTab("comments")}
                  className={`flex-1 py-4 text-center font-medium ${
                    activeTab === "comments"
                      ? "border-b-2 border-rose-500 text-rose-400"
                      : "text-zinc-400 hover:text-zinc-300"
                  }`}
                >
                  Comments
                </button>
                <button
                  onClick={() => setActiveTab("splits")}
                  className={`flex-1 py-4 text-center font-medium ${
                    activeTab === "splits"
                      ? "border-b-2 border-rose-500 text-rose-400"
                      : "text-zinc-400 hover:text-zinc-300"
                  }`}
                >
                  Splits
                </button>
              </div>

              {/* Comments tab content */}
              {activeTab === "comments" && (
                <div className="p-5 space-y-5">
                  <textarea
                    placeholder="Add a comment..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:border-zinc-600 min-h-[90px]"
                  />

                  <div className="flex justify-end">
                    <button className="bg-rose-600 hover:bg-rose-700 px-5 py-2 rounded-lg font-medium flex items-center gap-2">
                      <MessageSquare size={16} />
                      Post Comment
                    </button>
                  </div>

                  {/* Sample comments */}
                  <div className="space-y-4 pt-4 border-t border-zinc-800">
                    <div className="flex gap-3">
                      <div className="w-9 h-9 rounded-full bg-zinc-700 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Marcus Williams</span>
                          <span className="text-xs text-zinc-500">2 hours ago</span>
                        </div>
                        <p className="mt-1 text-zinc-300">
                          Love the new vocal take! The harmony in the chorus is perfect.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-9 h-9 rounded-full bg-zinc-700 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Alex Rivera</span>
                          <span className="text-xs text-zinc-500">5 hours ago</span>
                        </div>
                        <p className="mt-1 text-zinc-300">
                          Updated the beat with more bass. Let me know what you think!
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-9 h-9 rounded-full bg-zinc-700 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Jordan Lee</span>
                          <span className="text-xs text-zinc-500">1 day ago</span>
                        </div>
                        <p className="mt-1 text-zinc-300">
                          Just uploaded the verse 1 draft. Still working on verse 2.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Splits tab content */}
              {activeTab === "splits" && (
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Revenue split percentages for this project</h3>
                    {isEditingSplits ? (
                      <div className="flex gap-3">
                        <button
                          onClick={() => setIsEditingSplits(false)}
                          className="px-4 py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm border border-zinc-700 flex items-center gap-1.5"
                        >
                          <X size={16} /> Cancel
                        </button>
                        <button className="px-4 py-1.5 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-medium flex items-center gap-1.5">
                          <Check size={16} /> Save
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setIsEditingSplits(true)}
                        className="text-sm text-rose-400 hover:text-rose-300 flex items-center gap-1"
                      >
                        <Pencil size={14} /> Edit Splits
                      </button>
                    )}
                  </div>

                  <div className="text-sm text-zinc-400">Total: 100%</div>

                  <div className="space-y-4">
                    {splits.map((split, i) => (
                      <div key={i} className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-zinc-700" />
                            <div>
                              <div className="font-medium">{split.name}</div>
                              <div className="text-xs text-zinc-500">{split.role}</div>
                            </div>
                          </div>
                          {isEditingSplits ? (
                            <div className="flex items-center gap-2">
                              <input
                                type="number"
                                defaultValue={split.percent}
                                className="w-16 bg-zinc-900 border border-zinc-700 rounded px-2 py-1 text-center text-sm"
                                min="0"
                                max="100"
                              />
                              <span className="text-zinc-500">%</span>
                            </div>
                          ) : (
                            <div className="text-right">
                              <div className="text-rose-400 font-medium">{split.percent}%</div>
                            </div>
                          )}
                        </div>

                        <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-rose-600 rounded-full"
                            style={{ width: `${split.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Files section */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="flex border-b border-zinc-800">
                <button
                  onClick={() => setActiveFileTab("audio")}
                  className={`flex-1 py-4 px-5 text-left font-medium ${
                    activeFileTab === "audio"
                      ? "bg-zinc-800/60 border-b-2 border-rose-500"
                      : "text-zinc-400 hover:text-zinc-300"
                  }`}
                >
                  Audio Files
                </button>
                <button
                  onClick={() => setActiveFileTab("lyrics")}
                  className={`flex-1 py-4 px-5 text-left font-medium ${
                    activeFileTab === "lyrics"
                      ? "bg-zinc-800/60 border-b-2 border-rose-500"
                      : "text-zinc-400 hover:text-zinc-300"
                  }`}
                >
                  Lyrics
                </button>
              </div>

              <div className="p-5">
                {activeFileTab === "audio" ? (
                  <>
                    <div className="flex justify-end mb-4">
                      <button
                        onClick={() => setShowUploadModal(true)}
                        className="bg-rose-600 hover:bg-rose-700 px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
                      >
                        <Upload size={16} />
                        Upload Audio
                      </button>
                    </div>

                    <div className="space-y-4">
                      {audioFiles.map((file, i) => (
                        <div
                          key={i}
                          className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 hover:border-zinc-700 transition-colors group"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-lg flex items-center justify-center">
                                <Music size={18} className="text-zinc-400" />
                              </div>
                              <div>
                                <div className="font-medium">{file.name}</div>
                                <div className="text-xs text-zinc-500">
                                  by {file.uploader} • {file.date} • {file.size}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button className="text-zinc-400 hover:text-white">
                                <Play size={18} />
                              </button>
                              <button className="text-zinc-400 hover:text-white">
                                <Download size={18} />
                              </button>
                              <button className="text-zinc-400 hover:text-white">
                                <MoreVertical size={18} />
                              </button>
                            </div>
                          </div>

                          {/* Fake waveform */}
                          <div className={`h-10 bg-gradient-to-r ${file.waveformColor} opacity-30 rounded-md relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-end mb-4">
                      <button
                        onClick={() => setShowUploadModal(true)}
                        className="bg-rose-600 hover:bg-rose-700 px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
                      >
                        <Upload size={16} />
                        Upload Lyrics
                      </button>
                    </div>

                    <div className="space-y-3">
                      {lyricsFiles.map((file, i) => (
                        <div
                          key={i}
                          onClick={() => handleOpenLyrics(file)}
                          className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 hover:border-zinc-700 transition-colors cursor-pointer group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-lg flex items-center justify-center">
                              <FileText size={18} className="text-zinc-400" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">{file.name}</div>
                              <div className="text-xs text-zinc-500">
                                by {file.uploader} • {file.date}
                              </div>
                            </div>
                            <button className="text-zinc-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                              <Download size={18} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            {/* Collaborators */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Users size={18} className="text-zinc-400" />
                Collaborators
              </h3>

              <div className="space-y-4">
                {collaborators.map((collab, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center">
                        {collab.name[0]}
                      </div>
                      <div>
                        <div className="font-medium">{collab.name}</div>
                        <div className="text-xs text-zinc-500">{collab.role}</div>
                      </div>
                    </div>
                    {!collab.isYou && (
                      <button className="text-zinc-500 hover:text-zinc-300">
                        <MoreVertical size={18} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Project Progress */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
              <h3 className="font-semibold mb-4">Project Progress</h3>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span>Overall</span>
                    <span className="text-rose-400">65%</span>
                  </div>
                  <div className="h-2.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-[65%] bg-rose-600 rounded-full" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm text-zinc-300 border-t border-zinc-800 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">24</div>
                    <div className="text-xs text-zinc-500">Total Files</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-xs text-zinc-500">Audio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">2</div>
                    <div className="text-xs text-zinc-500">Lyrics</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">6</div>
                    <div className="text-xs text-zinc-500">Comments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Invite Collaborators Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl w-full max-w-md">
            <div className="p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold">Invite Collaborators</h3>
                <button
                  onClick={() => setShowInviteModal(false)}
                  className="text-zinc-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
              
              <p className="text-sm text-zinc-400 mb-5">
                Invite users to collaborate on this project.
              </p>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Search Users</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                    <input
                      type="text"
                      placeholder="Search by name or email..."
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-zinc-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Assign Role</label>
                  <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-600">
                    <option>Collaborator</option>
                    <option>Producer</option>
                    <option>Songwriter</option>
                    <option>Viewer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Personal Message (Optional)</label>
                  <textarea
                    placeholder="Add a personal message to the invitation..."
                    rows={3}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm resize-none focus:outline-none focus:border-zinc-600"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-800 p-5 flex gap-3 justify-end">
              <button
                onClick={() => setShowInviteModal(false)}
                className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 rounded-lg border border-zinc-700"
              >
                Cancel
              </button>
              <button className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 rounded-lg font-medium">
                Send Invitation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl w-full max-w-md">
            <div className="p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold">Upload {activeFileTab === "audio" ? "Audio" : "Lyrics"} File</h3>
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="text-zinc-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">File name</label>
                  <input
                    type="text"
                    placeholder={activeFileTab === "audio" ? "e.g. Hook_Final_v3.mp3" : "e.g. Verse_1_Draft.txt"}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Upload File</label>
                  <div className="border-2 border-dashed border-zinc-700 rounded-lg p-8 text-center hover:border-rose-600/50 transition-colors cursor-pointer">
                    <Upload className="mx-auto mb-3 text-zinc-500" size={32} />
                    <p className="text-sm text-zinc-400">Click or drag {activeFileTab === "audio" ? "audio" : "text"} file here</p>
                    <p className="text-xs text-zinc-600 mt-1">
                      {activeFileTab === "audio" ? "MP3, WAV • max 50 MB" : "TXT, DOCX • max 10 MB"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-800 p-5 flex gap-3 justify-end">
              <button
                onClick={() => setShowUploadModal(false)}
                className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 rounded-lg border border-zinc-700"
              >
                Cancel
              </button>
              <button className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 rounded-lg font-medium">
                Upload
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lyrics View Modal */}
      {showLyricsModal && selectedLyrics && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl w-full max-w-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{selectedLyrics.name}</h3>
                  <p className="text-sm text-zinc-400">
                    by {selectedLyrics.uploader} • {selectedLyrics.date}
                  </p>
                </div>
                <button
                  onClick={() => setShowLyricsModal(false)}
                  className="text-zinc-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 my-4">
                <pre className="font-sans text-zinc-300 whitespace-pre-wrap">
                  {selectedLyrics.content}
                </pre>
              </div>

              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => setShowLyricsModal(false)}
                  className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 rounded-lg border border-zinc-700"
                >
                  Close
                </button>
                <button className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 rounded-lg font-medium flex items-center gap-2">
                  <Download size={16} />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}