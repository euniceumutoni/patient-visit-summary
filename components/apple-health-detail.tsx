import { Watch, Activity, Moon, Heart, X, TrendingUp } from 'lucide-react'

export function AppleHealthDetail({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        <div className="sticky top-0 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-5 flex justify-between items-center rounded-t-2xl">
          <div className="flex items-center gap-2">
            <Watch className="w-5 h-5 text-green-400" />
            <h3 className="font-semibold">Apple Watch</h3>
          </div>
          <button onClick={onClose} className="hover:bg-white/10 p-1.5 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-slate-900">Daily Activity</h4>
              <span className="text-xs text-slate-500">Today</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <Activity className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">Steps</p>
                  <p className="text-2xl font-bold text-slate-900">8,432</p>
                  <div className="w-full bg-slate-100 h-2 rounded-full mt-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '84%' }} />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Goal: 10,000 steps</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-xl">
                  <Heart className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">Resting Heart Rate</p>
                  <p className="text-2xl font-bold text-slate-900">62 <span className="text-sm text-slate-500">bpm</span></p>
                  <p className="text-xs text-green-600 mt-1">↓ 2 bpm from avg (64 bpm)</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Moon className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">Sleep Duration</p>
                  <p className="text-2xl font-bold text-slate-900">7h 12m</p>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <div className="bg-blue-50 p-2 rounded-lg text-center">
                      <p className="text-xs text-blue-600 font-medium">Deep</p>
                      <p className="text-sm font-bold text-slate-900">1h 45m</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-lg text-center">
                      <p className="text-xs text-blue-600 font-medium">Core</p>
                      <p className="text-sm font-bold text-slate-900">4h 30m</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-lg text-center">
                      <p className="text-xs text-blue-600 font-medium">REM</p>
                      <p className="text-sm font-bold text-slate-900">57m</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-slate-900">Weekly Trends</h4>
              <button className="text-xs text-blue-600 font-medium flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                View All
              </button>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Avg Steps</span>
                <span className="text-sm font-bold text-slate-900">7,842 / day</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Avg Sleep</span>
                <span className="text-sm font-bold text-slate-900">7h 18m</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Resting HR</span>
                <span className="text-sm font-bold text-slate-900">63 bpm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
