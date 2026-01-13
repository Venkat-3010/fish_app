"use client";

import { useState } from "react";

function HeartIcon({ className, filled }: { className?: string; filled?: boolean }) {
  return filled ? (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  ) : (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function CommentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}

function ShareIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
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

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

const posts = [
  {
    id: 1,
    user: { name: "Marina Explorer", avatar: "ME", badge: "Expert" },
    fish: { name: "Mandarin Dragonet", scientificName: "Synchiropus splendidus" },
    content: "Just spotted this beautiful Mandarin Dragonet while diving in the Philippines! The colors are absolutely mesmerizing. Has anyone else seen one in the wild?",
    likes: 142,
    comments: 23,
    time: "2 hours ago",
    liked: false,
  },
  {
    id: 2,
    user: { name: "Ocean Diver", avatar: "OD", badge: "Pro" },
    fish: { name: "Leafy Seadragon", scientificName: "Phycodurus eques" },
    content: "Finally found a Leafy Seadragon in South Australia! These creatures are masters of camouflage. Took me 3 dives to spot one!",
    likes: 256,
    comments: 45,
    time: "5 hours ago",
    liked: true,
  },
  {
    id: 3,
    user: { name: "Reef Guardian", avatar: "RG", badge: null },
    fish: { name: "Humphead Wrasse", scientificName: "Cheilinus undulatus" },
    content: "Encountered this gentle giant on the Great Barrier Reef. These fish are endangered, so it was a privilege to see one up close. Remember to support reef conservation!",
    likes: 89,
    comments: 12,
    time: "1 day ago",
    liked: false,
  },
];

const leaderboard = [
  { rank: 1, name: "Marina Explorer", scans: 1247, badge: "🥇" },
  { rank: 2, name: "Ocean Diver", scans: 1089, badge: "🥈" },
  { rank: 3, name: "Reef Guardian", scans: 956, badge: "🥉" },
  { rank: 4, name: "Sea Wanderer", scans: 834, badge: "" },
  { rank: 5, name: "Coral Seeker", scans: 721, badge: "" },
];

const challenges = [
  { id: 1, title: "Tropical Paradise", description: "Identify 10 tropical fish species", progress: 7, total: 10, reward: "50 XP" },
  { id: 2, title: "Deep Diver", description: "Scan 5 deep sea creatures", progress: 2, total: 5, reward: "100 XP" },
  { id: 3, title: "Rare Finder", description: "Discover a rare species", progress: 0, total: 1, reward: "200 XP" },
];

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<"feed" | "leaderboard" | "challenges">("feed");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--foreground)]">
          Community
        </h1>
        <p className="text-[var(--muted)] mt-1">
          Connect with fellow fish enthusiasts and share your discoveries
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-1 bg-[var(--card-bg)] rounded-xl border border-[var(--border)] w-fit">
        {[
          { id: "feed", label: "Feed" },
          { id: "leaderboard", label: "Leaderboard" },
          { id: "challenges", label: "Challenges" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Feed Tab */}
      {activeTab === "feed" && (
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] overflow-hidden">
              {/* Post Header */}
              <div className="flex items-center gap-3 p-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white font-semibold text-sm">
                  {post.user.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[var(--foreground)]">{post.user.name}</span>
                    {post.user.badge && (
                      <span className="px-2 py-0.5 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-medium rounded-full">
                        {post.user.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-[var(--muted)]">{post.time}</span>
                </div>
              </div>

              {/* Fish Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 flex items-center justify-center">
                <FishIcon className="w-24 h-24 text-[var(--primary)]/40" />
              </div>

              {/* Fish Info */}
              <div className="px-4 py-3 bg-[var(--border)]/30">
                <p className="font-semibold text-[var(--foreground)]">{post.fish.name}</p>
                <p className="text-sm text-[var(--muted)] italic">{post.fish.scientificName}</p>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-[var(--foreground)]">{post.content}</p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-6 px-4 py-3 border-t border-[var(--border)]">
                <button className={`flex items-center gap-2 ${post.liked ? "text-red-500" : "text-[var(--muted)]"} hover:text-red-500 transition-colors`}>
                  <HeartIcon className="w-5 h-5" filled={post.liked} />
                  <span className="text-sm font-medium">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                  <CommentIcon className="w-5 h-5" />
                  <span className="text-sm font-medium">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                  <ShareIcon className="w-5 h-5" />
                  <span className="text-sm font-medium">Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Leaderboard Tab */}
      {activeTab === "leaderboard" && (
        <div className="bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] overflow-hidden">
          <div className="p-4 border-b border-[var(--border)]">
            <h2 className="font-semibold text-[var(--foreground)]">Top Scanners This Month</h2>
          </div>
          <div className="divide-y divide-[var(--border)]">
            {leaderboard.map((user) => (
              <div key={user.rank} className="flex items-center gap-4 p-4 hover:bg-[var(--border)]/30 transition-colors">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                  user.rank === 1 ? "bg-yellow-100 text-yellow-600" :
                  user.rank === 2 ? "bg-gray-100 text-gray-600" :
                  user.rank === 3 ? "bg-orange-100 text-orange-600" :
                  "bg-[var(--border)] text-[var(--muted)]"
                }`}>
                  {user.badge || user.rank}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-[var(--foreground)]">{user.name}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[var(--primary)]">{user.scans.toLocaleString()}</p>
                  <p className="text-xs text-[var(--muted)]">scans</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Challenges Tab */}
      {activeTab === "challenges" && (
        <div className="space-y-4">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">{challenge.title}</h3>
                  <p className="text-sm text-[var(--muted)]">{challenge.description}</p>
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium rounded-full">
                  <TrophyIcon className="w-4 h-4" />
                  {challenge.reward}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--muted)]">Progress</span>
                  <span className="font-medium text-[var(--foreground)]">{challenge.progress}/{challenge.total}</span>
                </div>
                <div className="h-2 bg-[var(--border)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full transition-all"
                    style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
