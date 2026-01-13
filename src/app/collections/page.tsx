"use client";

import { useState } from "react";

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
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

function DotsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
    </svg>
  );
}

const collections = [
  { id: 1, name: "Tropical Fish", count: 24, color: "from-orange-400 to-pink-500", icon: "🐠" },
  { id: 2, name: "Reef Dwellers", count: 18, color: "from-cyan-400 to-blue-500", icon: "🪸" },
  { id: 3, name: "Deep Sea", count: 12, color: "from-purple-400 to-indigo-500", icon: "🌊" },
  { id: 4, name: "Freshwater", count: 31, color: "from-green-400 to-emerald-500", icon: "🌿" },
  { id: 5, name: "Rare Species", count: 8, color: "from-yellow-400 to-orange-500", icon: "⭐" },
  { id: 6, name: "Local Waters", count: 15, color: "from-teal-400 to-cyan-500", icon: "📍" },
];

const recentlyAdded = [
  { id: 1, name: "Emperor Angelfish", collection: "Tropical Fish" },
  { id: 2, name: "Blue Ribbon Eel", collection: "Reef Dwellers" },
  { id: 3, name: "Leafy Seadragon", collection: "Rare Species" },
];

export default function CollectionsPage() {
  const [showNewModal, setShowNewModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--foreground)]">
            My Collections
          </h1>
          <p className="text-[var(--muted)] mt-1">
            Organize your fish discoveries into themed collections
          </p>
        </div>
        <button
          onClick={() => setShowNewModal(true)}
          className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
        >
          <PlusIcon className="w-5 h-5" />
          <span>New Collection</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-[var(--card-bg)] rounded-xl border border-[var(--border)]">
          <p className="text-2xl font-bold text-[var(--foreground)]">{collections.length}</p>
          <p className="text-sm text-[var(--muted)]">Collections</p>
        </div>
        <div className="p-4 bg-[var(--card-bg)] rounded-xl border border-[var(--border)]">
          <p className="text-2xl font-bold text-[var(--foreground)]">
            {collections.reduce((acc, c) => acc + c.count, 0)}
          </p>
          <p className="text-sm text-[var(--muted)]">Total Fish</p>
        </div>
        <div className="p-4 bg-[var(--card-bg)] rounded-xl border border-[var(--border)]">
          <p className="text-2xl font-bold text-[var(--primary)]">Tropical Fish</p>
          <p className="text-sm text-[var(--muted)]">Largest Collection</p>
        </div>
        <div className="p-4 bg-[var(--card-bg)] rounded-xl border border-[var(--border)]">
          <p className="text-2xl font-bold text-[var(--accent)]">+5</p>
          <p className="text-sm text-[var(--muted)]">Added This Week</p>
        </div>
      </div>

      {/* Collections Grid */}
      <div>
        <h2 className="text-lg font-semibold text-[var(--foreground)] mb-4">All Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] overflow-hidden hover:shadow-lg transition-all cursor-pointer"
            >
              {/* Header Gradient */}
              <div className={`h-24 bg-gradient-to-r ${collection.color} flex items-center justify-center`}>
                <span className="text-4xl">{collection.icon}</span>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                      {collection.name}
                    </h3>
                    <p className="text-sm text-[var(--muted)]">{collection.count} fish</p>
                  </div>
                  <button className="p-1 hover:bg-[var(--border)] rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                    <DotsIcon className="w-5 h-5 text-[var(--muted)]" />
                  </button>
                </div>

                {/* Preview */}
                <div className="flex -space-x-2 mt-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 border-2 border-[var(--card-bg)] flex items-center justify-center"
                    >
                      <FishIcon className="w-4 h-4 text-[var(--primary)]/60" />
                    </div>
                  ))}
                  {collection.count > 4 && (
                    <div className="w-8 h-8 rounded-full bg-[var(--border)] border-2 border-[var(--card-bg)] flex items-center justify-center">
                      <span className="text-xs font-medium text-[var(--muted)]">+{collection.count - 4}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Create New Collection Card */}
          <button
            onClick={() => setShowNewModal(true)}
            className="flex flex-col items-center justify-center h-48 bg-[var(--card-bg)] rounded-2xl border-2 border-dashed border-[var(--border)] hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-[var(--border)] group-hover:bg-[var(--primary)]/20 flex items-center justify-center mb-3 transition-colors">
              <PlusIcon className="w-6 h-6 text-[var(--muted)] group-hover:text-[var(--primary)]" />
            </div>
            <span className="font-medium text-[var(--muted)] group-hover:text-[var(--primary)]">
              Create Collection
            </span>
          </button>
        </div>
      </div>

      {/* Recently Added */}
      <div>
        <h2 className="text-lg font-semibold text-[var(--foreground)] mb-4">Recently Added</h2>
        <div className="bg-[var(--card-bg)] rounded-xl border border-[var(--border)] divide-y divide-[var(--border)]">
          {recentlyAdded.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 hover:bg-[var(--border)]/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 flex items-center justify-center">
                <FishIcon className="w-5 h-5 text-[var(--primary)]/60" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-[var(--foreground)]">{item.name}</p>
                <p className="text-sm text-[var(--muted)]">Added to {item.collection}</p>
              </div>
              <span className="text-xs text-[var(--muted)]">Just now</span>
            </div>
          ))}
        </div>
      </div>

      {/* New Collection Modal */}
      {showNewModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[var(--card-bg)] rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">Create New Collection</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Collection Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., My Favorites"
                  className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Description (optional)
                </label>
                <textarea
                  placeholder="Describe your collection..."
                  rows={3}
                  className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Choose Color
                </label>
                <div className="flex gap-2">
                  {["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-orange-500", "bg-pink-500", "bg-cyan-500"].map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full ${color} hover:ring-2 ring-offset-2 ring-[var(--primary)] transition-all`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowNewModal(false)}
                className="flex-1 px-4 py-3 bg-[var(--border)] text-[var(--foreground)] rounded-xl font-medium hover:bg-[var(--muted)]/20 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowNewModal(false)}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
