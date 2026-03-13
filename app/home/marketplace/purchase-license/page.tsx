// components/UploadAssetForm.tsx
"use client";

import { useState } from "react";
import { ArrowLeft, Upload, X, Music, FileText, Package, Image as ImageIcon } from "lucide-react";
import { useRouter } from "next/navigation";

type AssetType = "beat" | "lyrics" | "sample" | "visual" | null;

export default function UploadAssetForm() {
  const [selectedType, setSelectedType] = useState<AssetType>("beat");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");
  const [licenseType, setLicenseType] = useState<"non-exclusive" | "exclusive">("non-exclusive");
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [previewFile, setPreviewFile] = useState<File | null>(null);
  const router = useRouter();

  const handleAddTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  const handleMainFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handlePreviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPreviewFile(e.target.files[0]);
    }
  };

  const getTypeIcon = () => {
    switch (selectedType) {
      case "beat":    return <Music className="w-6 h-6" />;
      case "lyrics":  return <FileText className="w-6 h-6" />;
      case "sample":  return <Package className="w-6 h-6" />;
      case "visual":  return <ImageIcon className="w-6 h-6" />;
      default:        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 pb-12">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <button 
            onClick={()=> router.back() } 
            className="text-gray-300 hover:text-[#E54FA9] transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold">
            <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
              Back to Marketplace
            </span>
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
            Upload Asset
          </span>
        </h1>
        <p className="text-gray-400 mb-10">
          Share your creative work and earn from your talent
        </p>

        {/* Asset Type Selection */}
        <div className="mb-10">
          <label className="block text-sm font-medium mb-3">Asset Type</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { type: "beat",    label: "Beat/Track", icon: Music },
              { type: "lyrics",  label: "Lyrics",     icon: FileText },
              { type: "sample",  label: "Sample Pack",icon: Package },
              { type: "visual",  label: "Visual Asset",icon: ImageIcon },
            ].map((item) => (
              <button
                key={item.type}
                onClick={() => setSelectedType(item.type as AssetType)}
                className={`flex flex-col items-center gap-3 p-5 rounded-xl border transition-all ${
                  selectedType === item.type
                    ? "bg-gradient-to-r from-[#E54FA9]/20 to-[#831CDF]/20 border-[#E54FA9] text-white shadow-lg shadow-[#831CDF]/20"
                    : "bg-gray-900 border-gray-800 hover:border-[#E54FA9]/50 text-gray-300"
                }`}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-black/40">
                  <item.icon 
                    size={24} 
                    className={selectedType === item.type ? "text-[#E54FA9]" : "text-gray-400"} 
                  />
                </div>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="space-y-7">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Title <span className="text-[#E54FA9]">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter asset title"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Description <span className="text-[#E54FA9]">*</span>
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your asset: include details about style, usage, etc."
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all resize-y"
            />
          </div>

          {/* Genre & Price */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Genre <span className="text-[#E54FA9]">*</span>
              </label>
              <input
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                placeholder="e.g. Hip-Hop, R&B, Pop"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Price (USD) <span className="text-[#E54FA9]">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="0.00"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-8 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
            </div>
          </div>

          {/* License Type */}
          <div>
            <label className="block text-sm font-medium mb-3">
              License Type <span className="text-[#E54FA9]">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => setLicenseType("non-exclusive")}
                className={`p-5 rounded-xl border text-left transition-all ${
                  licenseType === "non-exclusive"
                    ? "bg-gradient-to-r from-[#E54FA9]/20 to-[#831CDF]/20 border-[#E54FA9] shadow-lg shadow-[#831CDF]/20"
                    : "bg-gray-900 border-gray-700 hover:border-[#E54FA9]/50"
                }`}
              >
                <div className="font-bold mb-1 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
                  Non-Exclusive
                </div>
                <p className="text-sm text-gray-400">Can be sold to multiple buyers</p>
              </button>

              <button
                onClick={() => setLicenseType("exclusive")}
                className={`p-5 rounded-xl border text-left transition-all ${
                  licenseType === "exclusive"
                    ? "bg-gradient-to-r from-[#E54FA9]/20 to-[#831CDF]/20 border-[#E54FA9] shadow-lg shadow-[#831CDF]/20"
                    : "bg-gray-900 border-gray-700 hover:border-[#E54FA9]/50"
                }`}
              >
                <div className="font-bold mb-1 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
                  Exclusive
                </div>
                <p className="text-sm text-gray-400">Sold to one buyer only</p>
              </button>
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium mb-2">Tags</label>
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="bg-gradient-to-r from-[#E54FA9]/20 to-[#831CDF]/20 px-3 py-1.5 rounded-full text-sm flex items-center gap-2 border border-[#E54FA9]/30"
                >
                  <span className="bg-gradient-to-r from-[#E54FA9] to-[#831CDF] bg-clip-text text-transparent">
                    {tag}
                  </span>
                  <button onClick={() => removeTag(tag)} className="text-gray-400 hover:text-[#E54FA9] transition-colors">
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                placeholder="Add tags (e.g. 808, trap, dark)"
                className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E54FA9] focus:ring-1 focus:ring-[#E54FA9] transition-all"
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTag())}
              />
              <button
                onClick={handleAddTag}
                className="bg-gray-800 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] px-6 rounded-lg font-medium transition-all hover:text-white hover:shadow-lg hover:shadow-[#831CDF]/30"
              >
                Add
              </button>
            </div>
          </div>

          {/* Upload Main Files */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Upload <span className="text-[#E54FA9]">*</span>
            </label>
            <div className="border-2 border-dashed border-gray-700 rounded-xl p-10 text-center hover:border-[#E54FA9] transition-colors cursor-pointer bg-gray-950/50 group">
              <Upload className="mx-auto mb-4 text-gray-500 group-hover:text-[#E54FA9] transition-colors" size={40} />
              <p className="text-gray-300 mb-1 group-hover:text-[#E54FA9] transition-colors">
                Drag and drop files here, or click to browse
              </p>
              <p className="text-sm text-gray-500">Supported formats depend on asset type</p>
              <input
                type="file"
                multiple
                onChange={handleMainFilesChange}
                className="hidden"
              />
              <button className="mt-4 bg-gray-800 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] px-6 py-2.5 rounded-lg text-sm transition-all hover:text-white hover:shadow-lg hover:shadow-[#831CDF]/30">
                Choose Files
              </button>
            </div>
            {files.length > 0 && (
              <p className="mt-2 text-sm text-gray-400">
                <span className="text-[#E54FA9]">{files.length}</span> file{files.length > 1 ? "s" : ""} selected
              </p>
            )}
          </div>

          {/* Preview File */}
          <div>
            <label className="block text-sm font-medium mb-2">Preview File (Optional)</label>
            <p className="text-sm text-gray-500 mb-3">
              Upload watermarked or shortened version for buyers to preview
            </p>
            <div className="border border-gray-700 rounded-lg p-4 bg-gray-950 hover:border-[#E54FA9]/50 transition-colors">
              <input
                type="file"
                onChange={handlePreviewChange}
                className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-gradient-to-r file:from-[#E54FA9] file:to-[#831CDF] file:text-white hover:file:from-[#D63F99] hover:file:to-[#730CCF] file:transition-all file:cursor-pointer file:shadow-lg file:shadow-[#831CDF]/30"
              />
            </div>
            {previewFile && (
              <p className="mt-2 text-sm text-gray-400">
                Preview selected: <span className="text-[#E54FA9]">{previewFile.name}</span>
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button className="flex-1 bg-gray-800 hover:bg-gradient-to-r hover:from-[#E54FA9] hover:to-[#831CDF] py-3.5 rounded-lg font-medium transition-all hover:text-white hover:shadow-lg hover:shadow-[#831CDF]/30">
              Cancel
            </button>
            <button className="flex-1 bg-gradient-to-r from-[#E54FA9] to-[#831CDF] hover:from-[#D63F99] hover:to-[#730CCF] py-3.5 rounded-lg font-medium transition-all shadow-lg shadow-[#831CDF]/30 active:scale-[0.98]">
              Upload Asset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}