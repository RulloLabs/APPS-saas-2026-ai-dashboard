"use client";
import React from 'react';
import { LayoutDashboard, Sparkles, Zap, Search } from 'lucide-react';

export default function Dashboard() {
    return (
          <div className="flex h-screen bg-black text-white font-sans overflow-hidden">
                <aside className="w-64 border-r border-zinc-900 bg-[#050505] p-6 flex flex-col">
                        <div className="flex items-center gap-3 mb-10">
                                  <Zap className="text-purple-500 fill-purple-500/20" />
                                  <span className="font-bold text-xl tracking-tight">SaaS 2026</span>span>
                        </div>div>
                        <nav className="space-y-4">
                                  <div className="flex items-center gap-3 text-purple-400 cursor-pointer hover:text-purple-300 transition-colors">
                                              <LayoutDashboard size={20} /> Overview
                                  </div>div>
                                  <div className="flex items-center gap-3 text-zinc-500 cursor-pointer hover:text-white transition-colors">
                                              <Sparkles size={20} /> AI Models
                                  </div>div>
                        </nav>nav>
                </aside>aside>
                <main className="flex-1 flex flex-col p-8 relative">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full" />
                        <header className="flex justify-between items-center mb-10 z-10">
                                  <div className="relative w-96">
                                              <Search className="absolute left-3 top-2.5 w-4 h-4 text-zinc-500" />
                                              <input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-purple-500/50" placeholder="Search insights..." />
                                  </div>div>
                                  <div className="bg-white text-black px-6 py-2 rounded-lg font-bold cursor-pointer hover:bg-zinc-200 transition-all shadow-lg shadow-white/5">
                                              Deploy AI
                                  </div>div>
                        </header>header>
                        <div className="bg-zinc-900/40 backdrop-blur-md p-8 rounded-2xl border border-purple-500/20 mb-8 relative z-10">
                                  <h1 className="text-3xl font-bold mb-2 tracking-tight">Intelligence Dashboard</h1>h1>
                                  <p className="text-zinc-400">Real-time metrics and AI insights for your SaaS factory.</p>p>
                        </div>div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                                  <Card label="Active Users" value="2,450" change="+12%" />
                                  <Card label="Revenue" value="$12,840" change="+8.4%" />
                                  <Card label="AI Invocations" value="14.2k" change="+45%" />
                        </div>div>
                </main>main>
          </div>div>
        );
}

function Card({ label, value, change }) {
    return (
          <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors group">
                <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">{label}</div>div>
                <div className="flex items-baseline gap-2 mt-2">
                        <div className="text-2xl font-bold text-white tracking-tight">{value}</div>div>
                        <div className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">{change}</div>div>
                </div>div>
          </div>div>
        );
}
</div>
