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
          <button onClick={()=> router.back() } className="text-gray-300 hover:text-white">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold">Back to Marketplace</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Upload Asset</h1>
        <p className="text-gray-400 mb-10">
          Share your creative work and earn from your talent
        </p>

        {/* Asset Type Selection */}
        <div className="mb-10">
          <label className="block text-sm font-medium mb-3">Asset Type</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { type: "beat",    label: "Beat/Track", icon: Music,   activeBg: "bg-red-900/70" },
              { type: "lyrics",  label: "Lyrics",     icon: FileText },
              { type: "sample",  label: "Sample Pack",icon: Package },
              { type: "visual",  label: "Visual Asset",icon: ImageIcon },
            ].map((item) => (
              <button
                key={item.type}
                onClick={() => setSelectedType(item.type as AssetType)}
                className={`flex flex-col items-center gap-3 p-5 rounded-xl border transition-all ${
                  selectedType === item.type
                    ? `${item.activeBg || "bg-gray-800"} border-red-600 text-white`
                    : "bg-gray-900 border-gray-800 hover:border-gray-600 text-gray-300"
                }`}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-black/40">
                  <item.icon size={24} />
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
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter asset title"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your asset: include details about style, usage, etc."
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 resize-y"
            />
          </div>

          {/* Genre & Price */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Genre <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                placeholder="e.g. Hip-Hop, R&B, Pop"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Price (USD) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="0.00"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-8 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
            </div>
          </div>

          {/* License Type */}
          <div>
            <label className="block text-sm font-medium mb-3">License Type <span className="text-red-500">*</span></label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => setLicenseType("non-exclusive")}
                className={`p-5 rounded-xl border text-left transition-all ${
                  licenseType === "non-exclusive"
                    ? "bg-red-900/70 border-red-600"
                    : "bg-gray-900 border-gray-700 hover:border-gray-600"
                }`}
              >
                <div className="font-bold mb-1">Non-Exclusive</div>
                <p className="text-sm text-gray-400">Can be sold to multiple buyers</p>
              </button>

              <button
                onClick={() => setLicenseType("exclusive")}
                className={`p-5 rounded-xl border text-left transition-all ${
                  licenseType === "exclusive"
                    ? "bg-red-900/70 border-red-600"
                    : "bg-gray-900 border-gray-700 hover:border-gray-600"
                }`}
              >
                <div className="font-bold mb-1">Exclusive</div>
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
                  className="bg-gray-800 px-3 py-1.5 rounded-full text-sm flex items-center gap-2"
                >
                  {tag}
                  <button onClick={() => removeTag(tag)}>
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
                className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTag())}
              />
              <button
                onClick={handleAddTag}
                className="bg-gray-800 hover:bg-gray-700 px-6 rounded-lg font-medium"
              >
                Add
              </button>
            </div>
          </div>

          {/* Upload Main Files */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Upload <span className="text-red-500">*</span>
            </label>
            <div className="border-2 border-dashed border-gray-700 rounded-xl p-10 text-center hover:border-gray-500 transition-colors cursor-pointer bg-gray-950/50">
              <Upload className="mx-auto mb-4 text-gray-500" size={40} />
              <p className="text-gray-300 mb-1">Drag and drop files here, or click to browse</p>
              <p className="text-sm text-gray-500">Supported formats depend on asset type</p>
              <input
                type="file"
                multiple
                onChange={handleMainFilesChange}
                className="hidden"
              />
              <button className="mt-4 bg-gray-800 hover:bg-gray-700 px-6 py-2.5 rounded-lg text-sm">
                Choose Files
              </button>
            </div>
            {files.length > 0 && (
              <p className="mt-2 text-sm text-gray-400">
                {files.length} file{files.length > 1 ? "s" : ""} selected
              </p>
            )}
          </div>

          {/* Preview File */}
          <div>
            <label className="block text-sm font-medium mb-2">Preview File (Optional)</label>
            <p className="text-sm text-gray-500 mb-3">
              Upload watermarked or shortened version for buyers to preview
            </p>
            <div className="border border-gray-700 rounded-lg p-4 bg-gray-950">
              <input
                type="file"
                onChange={handlePreviewChange}
                className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-gray-800 file:text-white hover:file:bg-gray-700"
              />
            </div>
            {previewFile && (
              <p className="mt-2 text-sm text-gray-400">
                Preview selected: {previewFile.name}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button className="flex-1 bg-gray-800 hover:bg-gray-700 py-3.5 rounded-lg font-medium transition">
              Cancel
            </button>
            <button className="flex-1 bg-red-600 hover:bg-red-700 py-3.5 rounded-lg font-medium transition">
              Upload Asset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}