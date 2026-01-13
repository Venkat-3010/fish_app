"use client";

import { useState } from "react";

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function FilterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
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

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  );
}

function BookmarkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
    </svg>
  );
}

const historyData = [
  { id: 1, name: "Clownfish", scientificName: "Amphiprioninae", confidence: 98, date: "2024-01-15", time: "14:32", location: "Great Barrier Reef" },
  { id: 2, name: "Blue Tang", scientificName: "Paracanthurus hepatus", confidence: 95, date: "2024-01-15", time: "10:15", location: "Caribbean Sea" },
  { id: 3, name: "Angelfish", scientificName: "Pterophyllum", confidence: 92, date: "2024-01-14", time: "16:45", location: "Amazon River" },
  { id: 4, name: "Betta Fish", scientificName: "Betta splendens", confidence: 97, date: "2024-01-14", time: "09:20", location: "Thailand" },
  { id: 5, name: "Lionfish", scientificName: "Pterois", confidence: 94, date: "2024-01-13", time: "11:30", location: "Red Sea" },
  { id: 6, name: "Mandarin Fish", scientificName: "Synchiropus splendidus", confidence: 89, date: "2024-01-13", time: "08:45", location: "Pacific Ocean" },
  { id: 7, name: "Pufferfish", scientificName: "Tetraodontidae", confidence: 96, date: "2024-01-12", time: "15:20", location: "Japan" },
  { id: 8, name: "Moorish Idol", scientificName: "Zanclus cornutus", confidence: 91, date: "2024-01-12", time: "12:10", location: "Hawaii" },
];

export default function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredHistory = historyData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.scientificName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--foreground)]">
          Scan History
        </h1>
        <p className="text-[var(--muted)] mt-1">
          View and manage your previous fish identifications
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted)]" />
          <input
            type="text"
            placeholder="Search by name or species..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
          />
        </div>
        <div className="flex gap-2">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="px-4 py-3 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-[var(--foreground)]"
          >
            <option value="all">All Time</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
          <button className="p-3 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl hover:bg-[var(--border)] transition-colors">
            <FilterIcon className="w-5 h-5 text-[var(--muted)]" />
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="flex flex-wrap gap-4 p-4 bg-[var(--card-bg)] rounded-xl border border-[var(--border)]">
        <div className="flex items-center gap-2">
          <span className="text-sm text-[var(--muted)]">Total Scans:</span>
          <span className="font-semibold text-[var(--foreground)]">{historyData.length}</span>
        </div>
        <div className="w-px h-5 bg-[var(--border)]" />
        <div className="flex items-center gap-2">
          <span className="text-sm text-[var(--muted)]">Avg Confidence:</span>
          <span className="font-semibold text-[var(--accent)]">94%</span>
        </div>
        <div className="w-px h-5 bg-[var(--border)]" />
        <div className="flex items-center gap-2">
          <span className="text-sm text-[var(--muted)]">Unique Species:</span>
          <span className="font-semibold text-[var(--primary)]">{historyData.length}</span>
        </div>
      </div>

      {/* History List */}
      <div className="space-y-3">
        {filteredHistory.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-4 bg-[var(--card-bg)] rounded-xl border border-[var(--border)] hover:shadow-md transition-shadow group"
          >
            {/* Image Placeholder */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 flex items-center justify-center flex-shrink-0">
              <FishIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--primary)]/60" />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[var(--muted)] italic truncate">{item.scientificName}</p>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium rounded-full">
                  {item.confidence}%
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-[var(--muted)]">
                <span>{item.date} at {item.time}</span>
                <span>{item.location}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 hover:bg-[var(--border)] rounded-lg transition-colors" title="Save to collection">
                <BookmarkIcon className="w-5 h-5 text-[var(--muted)]" />
              </button>
              <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg transition-colors" title="Delete">
                <TrashIcon className="w-5 h-5 text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredHistory.length === 0 && (
        <div className="text-center py-12">
          <FishIcon className="w-16 h-16 mx-auto text-[var(--muted)]/40 mb-4" />
          <h3 className="text-lg font-medium text-[var(--foreground)]">No results found</h3>
          <p className="text-[var(--muted)]">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}
