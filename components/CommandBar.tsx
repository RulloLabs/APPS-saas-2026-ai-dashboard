"use client";
import React, { useEffect, useState } from 'react';
import { Search, Zap, Settings, Users, BarChart3, Sparkles } from 'lucide-react';

export default function CommandBar() {
    const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
        const down = (e: KeyboardEvent) => {
                if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                          e.preventDefault();
                          setIsOpen((open) => !open);
                }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
  }, []);

  if (!isOpen) return null;

  return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
              <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
                      <div className="flex items-center px-4 py-4 border-b border-zinc-800">
                                <Search className="w-5 h-5 text-zinc-500 mr-3" />
                                <input autoFocus placeholder="Search commands..." className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-zinc-500" />
                                <div className="text-[10px] font-bold text-zinc-500 px-2 py-1 bg-black rounded border border-zinc-800">ESC</div>div>
                      </div>div>
                      <div className="p-2 max-h-[400px] overflow-y-auto">
                                <div className="px-3 py-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Suggestions</div>div>
                                <Item icon={<Sparkles size={18} className="text-purple-400" />} label="Generate AI Insight" shortcut="G I" />
                                <Item icon={<BarChart3 size={18} className="text-blue-400" />} label="Analytics Report" shortcut="A R" />
                                <div className="px-3 py-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-4">Navigation</div>div>
                                <Item icon={<Zap size={18} />} label="Go to Overview" />
                                <Item icon={<Users size={18} />} label="Go to Customers" />
                                <Item icon={<Settings size={18} />} label="Settings" />
                      </div>div>
              </div>div>
        </div>div>
      );
}

function Item({ icon, label, shortcut }: { icon: React.ReactNode, label: string, shortcut?: string }) {
    return (
          <div className="flex items-center justify-between px-3 py-3 rounded-xl hover:bg-zinc-800 cursor-pointer group transition-colors">
                <div className="flex items-center gap-3">
                        <span className="text-zinc-500 group-hover:text-white">{icon}</span>span>
                        <span className="text-sm font-medium text-zinc-300 group-hover:text-white">{label}</span>span>
                </div>div>
            {shortcut && <span className="text-[10px] font-bold text-zinc-600 bg-black px-2 py-0.5 rounded border border-zinc-800">{shortcut}</span>span>}
          </div>div>
        );
}
</div>
