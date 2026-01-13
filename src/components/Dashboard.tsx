"use client";

import { useState, useRef } from "react";

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function UploadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function ScanIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function FishIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor">
      <path d="M52 32c0-8-12-16-28-16-4 0-8 1-12 2 8 4 12 10 12 14s-4 10-12 14c4 1 8 2 12 2 16 0 28-8 28-16z" />
      <circle cx="44" cy="30" r="3" fill="white" />
      <path d="M8 32c0-4 4-8 8-12-4 1-8 4-12 12 4 8 8 11 12 12-4-4-8-8-8-12z" />
    </svg>
  );
}

const recentScans = [
  { id: 1, name: "Clownfish", scientificName: "Amphiprioninae", confidence: 98, image: "/fish1.jpg", time: "2 hours ago" },
  { id: 2, name: "Blue Tang", scientificName: "Paracanthurus hepatus", confidence: 95, image: "/fish2.jpg", time: "5 hours ago" },
  { id: 3, name: "Angelfish", scientificName: "Pterophyllum", confidence: 92, image: "/fish3.jpg", time: "1 day ago" },
  { id: 4, name: "Betta Fish", scientificName: "Betta splendens", confidence: 97, image: "/fish4.jpg", time: "2 days ago" },
];

const stats = [
  { label: "Total Scans", value: "1,247", icon: ScanIcon, color: "from-blue-500 to-cyan-500" },
  { label: "Species Found", value: "89", icon: FishIcon, color: "from-emerald-500 to-teal-500" },
  { label: "Collections", value: "12", icon: CollectionIcon, color: "from-purple-500 to-pink-500" },
];

function CollectionIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  );
}

export default function Dashboard() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleFile(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setUploadedImage(null);
    }, 3000);
  };

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--foreground)]">
          Welcome back, Fisher!
        </h1>
        <p className="text-[var(--muted)] mt-1">
          Identify any fish species with a photo
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-[var(--card-bg)] rounded-2xl p-4 md:p-6 border border-[var(--border)] hover:shadow-lg transition-shadow"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-3`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-2xl md:text-3xl font-bold text-[var(--foreground)]">{stat.value}</p>
            <p className="text-sm text-[var(--muted)]">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Scan Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload Area */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative bg-[var(--card-bg)] rounded-2xl border-2 border-dashed transition-all duration-300 overflow-hidden ${
            isDragging
              ? "border-[var(--primary)] bg-[var(--primary)]/5"
              : "border-[var(--border)] hover:border-[var(--primary)]/50"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileInput}
            className="hidden"
            capture="environment"
          />

          {uploadedImage ? (
            <div className="relative aspect-video md:aspect-[4/3]">
              <img
                src={uploadedImage}
                alt="Uploaded fish"
                className="w-full h-full object-cover"
              />
              {isScanning && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="font-medium">Analyzing...</p>
                  </div>
                </div>
              )}
              <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                <button
                  onClick={() => setUploadedImage(null)}
                  className="flex-1 py-3 px-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-medium hover:bg-white/20 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleScan}
                  disabled={isScanning}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isScanning ? "Scanning..." : "Identify Fish"}
                </button>
              </div>
            </div>
          ) : (
            <div className="aspect-video md:aspect-[4/3] flex flex-col items-center justify-center p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[var(--primary)]/20 to-[var(--secondary)]/20 flex items-center justify-center mb-4 animate-float">
                <UploadIcon className="w-10 h-10 text-[var(--primary)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                Drop your fish photo here
              </h3>
              <p className="text-sm text-[var(--muted)] mb-4">
                or click to browse from your device
              </p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="py-2 px-6 bg-[var(--border)] text-[var(--foreground)] rounded-xl font-medium hover:bg-[var(--muted)]/20 transition-colors"
              >
                Browse Files
              </button>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[var(--foreground)]">Quick Actions</h2>

          {/* Camera Button */}
          <button
            onClick={handleCameraClick}
            className="w-full p-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-2xl text-white text-left hover:opacity-90 transition-opacity group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <CameraIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Scan with Camera</h3>
                <p className="text-white/80 text-sm">Take a photo to identify instantly</p>
              </div>
            </div>
          </button>

          {/* Tips Card */}
          <div className="bg-[var(--card-bg)] rounded-2xl p-5 border border-[var(--border)]">
            <h3 className="font-semibold text-[var(--foreground)] mb-3">Tips for best results</h3>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-0.5">•</span>
                Ensure good lighting on the fish
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-0.5">•</span>
                Capture the full body if possible
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-0.5">•</span>
                Avoid blurry or motion-affected images
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-0.5">•</span>
                Side profile works best for identification
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recent Scans */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-[var(--foreground)]">Recent Scans</h2>
          <a href="/history" className="text-sm text-[var(--primary)] hover:underline">
            View all
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentScans.map((scan) => (
            <div
              key={scan.id}
              className="bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
            >
              <div className="aspect-square bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FishIcon className="w-16 h-16 text-[var(--primary)]/40" />
                </div>
                <div className="absolute top-2 right-2 bg-[var(--accent)] text-white text-xs font-medium px-2 py-1 rounded-full">
                  {scan.confidence}%
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                  {scan.name}
                </h3>
                <p className="text-xs text-[var(--muted)] italic">{scan.scientificName}</p>
                <p className="text-xs text-[var(--muted)] mt-2">{scan.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
