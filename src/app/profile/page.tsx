"use client";

import { useState } from "react";

function EditIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  );
}

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function LogoutIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
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

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

const achievements = [
  { id: 1, name: "First Catch", description: "Scan your first fish", icon: "🐟", unlocked: true },
  { id: 2, name: "Collector", description: "Create 5 collections", icon: "📚", unlocked: true },
  { id: 3, name: "Explorer", description: "Scan 100 different species", icon: "🧭", unlocked: true },
  { id: 4, name: "Deep Diver", description: "Identify 10 deep sea fish", icon: "🌊", unlocked: false },
  { id: 5, name: "Social Butterfly", description: "Get 100 likes on posts", icon: "🦋", unlocked: false },
  { id: 6, name: "Expert", description: "Reach 1000 total scans", icon: "🏆", unlocked: false },
];

const activityData = [
  { month: "Jul", scans: 45 },
  { month: "Aug", scans: 62 },
  { month: "Sep", scans: 78 },
  { month: "Oct", scans: 91 },
  { month: "Nov", scans: 85 },
  { month: "Dec", scans: 120 },
];

const settings = [
  { id: 1, label: "Account Settings", icon: SettingsIcon },
  { id: 2, label: "Notification Preferences", icon: SettingsIcon },
  { id: 3, label: "Privacy & Security", icon: SettingsIcon },
  { id: 4, label: "Help & Support", icon: SettingsIcon },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"stats" | "achievements" | "settings">("stats");

  const maxScans = Math.max(...activityData.map(d => d.scans));

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] overflow-hidden">
        {/* Cover Image */}
        <div className="h-32 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] relative">
          <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
            <CameraIcon className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Profile Info */}
        <div className="px-4 md:px-6 pb-6">
          <div className="flex flex-col md:flex-row md:items-end gap-4 -mt-12 md:-mt-16">
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] border-4 border-[var(--card-bg)] flex items-center justify-center">
                <span className="text-3xl md:text-4xl font-bold text-white">AF</span>
              </div>
              <button className="absolute bottom-0 right-0 p-1.5 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg hover:bg-[var(--border)] transition-colors">
                <EditIcon className="w-4 h-4 text-[var(--muted)]" />
              </button>
            </div>

            {/* Info */}
            <div className="flex-1 md:pb-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-[var(--foreground)]">
                    Aquatic Fisher
                  </h1>
                  <p className="text-[var(--muted)]">@aquaticfisher</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium rounded-full">
                    Pro Member
                  </span>
                  <span className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium rounded-full">
                    Level 12
                  </span>
                </div>
              </div>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Marine biologist and underwater photographer. Passionate about ocean conservation and fish identification.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-[var(--border)]">
            <div className="text-center">
              <p className="text-2xl font-bold text-[var(--foreground)]">1,247</p>
              <p className="text-sm text-[var(--muted)]">Total Scans</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[var(--foreground)]">89</p>
              <p className="text-sm text-[var(--muted)]">Species Found</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[var(--foreground)]">342</p>
              <p className="text-sm text-[var(--muted)]">Followers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-1 bg-[var(--card-bg)] rounded-xl border border-[var(--border)] w-fit">
        {[
          { id: "stats", label: "Statistics" },
          { id: "achievements", label: "Achievements" },
          { id: "settings", label: "Settings" },
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

      {/* Stats Tab */}
      {activeTab === "stats" && (
        <div className="space-y-6">
          {/* Activity Chart */}
          <div className="bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] p-4 md:p-6">
            <h2 className="font-semibold text-[var(--foreground)] mb-4">Scan Activity</h2>
            <div className="flex items-end gap-2 h-40">
              {activityData.map((item) => (
                <div key={item.month} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full bg-gradient-to-t from-[var(--primary)] to-[var(--secondary)] rounded-t-lg transition-all hover:opacity-80"
                    style={{ height: `${(item.scans / maxScans) * 100}%` }}
                  />
                  <span className="text-xs text-[var(--muted)]">{item.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Species */}
          <div className="bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] p-4 md:p-6">
            <h2 className="font-semibold text-[var(--foreground)] mb-4">Most Scanned Species</h2>
            <div className="space-y-3">
              {[
                { name: "Clownfish", count: 47 },
                { name: "Blue Tang", count: 35 },
                { name: "Angelfish", count: 28 },
                { name: "Betta Fish", count: 22 },
                { name: "Lionfish", count: 18 },
              ].map((species, index) => (
                <div key={species.name} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 flex items-center justify-center">
                    <FishIcon className="w-4 h-4 text-[var(--primary)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-[var(--foreground)]">{species.name}</span>
                      <span className="text-sm text-[var(--muted)]">{species.count} scans</span>
                    </div>
                    <div className="h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full"
                        style={{ width: `${(species.count / 47) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Achievements Tab */}
      {activeTab === "achievements" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`p-4 rounded-2xl border transition-all ${
                achievement.unlocked
                  ? "bg-[var(--card-bg)] border-[var(--border)]"
                  : "bg-[var(--border)]/30 border-[var(--border)] opacity-60"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                  achievement.unlocked
                    ? "bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20"
                    : "bg-[var(--border)]"
                }`}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[var(--foreground)]">{achievement.name}</h3>
                  <p className="text-sm text-[var(--muted)]">{achievement.description}</p>
                  {achievement.unlocked && (
                    <span className="inline-block mt-2 px-2 py-0.5 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-medium rounded-full">
                      Unlocked
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === "settings" && (
        <div className="bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] overflow-hidden">
          <div className="divide-y divide-[var(--border)]">
            {settings.map((setting) => (
              <button
                key={setting.id}
                className="w-full flex items-center gap-4 p-4 hover:bg-[var(--border)]/30 transition-colors text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--border)] flex items-center justify-center">
                  <setting.icon className="w-5 h-5 text-[var(--muted)]" />
                </div>
                <span className="flex-1 font-medium text-[var(--foreground)]">{setting.label}</span>
                <ChevronRightIcon className="w-5 h-5 text-[var(--muted)]" />
              </button>
            ))}
            <button className="w-full flex items-center gap-4 p-4 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors text-left">
              <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                <LogoutIcon className="w-5 h-5 text-red-500" />
              </div>
              <span className="flex-1 font-medium text-red-500">Log Out</span>
              <ChevronRightIcon className="w-5 h-5 text-red-500" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
