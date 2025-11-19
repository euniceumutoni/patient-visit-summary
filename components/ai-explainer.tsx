import { Sparkles, X, MessageSquare } from 'lucide-react'
import { useState } from "react"

export function AIExplainer() {
  const [isOpen, setIsOpen] = useState(false)

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all flex items-center gap-2 z-50 group"
      >
        <Sparkles className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
          Explain this visit
        </span>
      </button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-indigo-100 z-50 overflow-hidden flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300">
      <div className="bg-indigo-600 p-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          <h3 className="font-semibold">VisitSnap AI</h3>
        </div>
        <button onClick={() => setIsOpen(false)} className="hover:bg-indigo-700 p-1 rounded-full transition-colors">
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <div className="p-4 bg-indigo-50/50 flex-1 max-h-[400px] overflow-y-auto">
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-indigo-50 text-sm text-slate-700">
              <p className="mb-2">I've analyzed your visit results. Here's what's important:</p>
              <ul className="list-disc pl-4 space-y-1 mb-2">
                <li>Your <strong>A1C of 5.4%</strong> means you don't have diabetes. This improved from 5.8%.</li>
                <li>Blood pressure is now 118/76 - excellent improvement!</li>
                <li>LDL cholesterol is improving but still borderline. Consider more cardio.</li>
              </ul>
              <p>What would you like to know more about?</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 border-t border-slate-100 bg-white">
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button className="whitespace-nowrap px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs rounded-full transition-colors">
            Explain my cholesterol
          </button>
          <button className="whitespace-nowrap px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs rounded-full transition-colors">
            Why did BP improve?
          </button>
        </div>
        <div className="relative mt-2">
          <input 
            type="text" 
            placeholder="Ask a question..." 
            className="w-full pl-4 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
            <MessageSquare className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
