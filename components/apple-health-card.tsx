import { Watch, Activity, Moon, Heart } from 'lucide-react'

export function AppleHealthCard() {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 text-white shadow-lg overflow-hidden relative group cursor-pointer transition-transform hover:scale-[1.01]">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Watch className="w-24 h-24" />
      </div>
      
      <div className="flex justify-between items-center mb-6 relative z-10">
        <div className="flex items-center gap-2">
          <div className="bg-white/10 p-1.5 rounded-lg backdrop-blur-sm">
            <Watch className="w-4 h-4 text-green-400" />
          </div>
          <span className="text-sm font-medium text-slate-300">Apple Watch Connected</span>
        </div>
        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full border border-green-500/30">Sync: Just now</span>
      </div>

      <div className="grid grid-cols-3 gap-4 relative z-10">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
            <Activity className="w-3 h-3" /> Steps
          </div>
          <div className="text-xl font-bold">8,432</div>
          <div className="text-xs text-green-400">Goal: 10k</div>
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
            <Heart className="w-3 h-3" /> RHR
          </div>
          <div className="text-xl font-bold">62 <span className="text-xs font-normal text-slate-400">bpm</span></div>
          <div className="text-xs text-slate-400">Avg: 64</div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
            <Moon className="w-3 h-3" /> Sleep
          </div>
          <div className="text-xl font-bold">7h 12m</div>
          <div className="text-xs text-green-400">+45m</div>
        </div>
      </div>
      
      {/* Simulated ECG line */}
      <div className="mt-6 h-8 flex items-end gap-0.5 opacity-30">
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i} 
            className="w-full bg-green-400 rounded-full"
            style={{ height: `${20 + Math.random() * 60}%` }}
          />
        ))}
      </div>
    </div>
  )
}
