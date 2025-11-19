'use client'

import { VisitCard } from '@/components/visit-card'
import { Activity, Heart, Droplet, Weight, Settings, Watch, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AIExplainer } from '@/components/ai-explainer'
import { AppleHealthDetail } from '@/components/apple-health-detail'
import { useState } from 'react'

const latestVisit = {
  date: '2024-03-15',
  provider: 'Dr. Sarah Chen',
  specialty: 'Primary Care',
  vitals: [
    {
      name: 'Blood Pressure',
      value: '118/76',
      unit: 'mmHg',
      trend: 'improved' as const,
      previousValue: '128/82',
      icon: Activity,
    },
    {
      name: 'Heart Rate',
      value: '68',
      unit: 'bpm',
      trend: 'improved' as const,
      previousValue: '75',
      icon: Heart,
    },
    {
      name: 'Weight',
      value: '165',
      unit: 'lbs',
      trend: 'stable' as const,
      previousValue: '165',
      icon: Weight,
    },
    {
      name: 'BMI',
      value: '24.2',
      unit: '',
      trend: 'stable' as const,
      previousValue: '24.2',
      category: 'Normal',
      icon: Weight,
    },
  ],
  labs: [
    {
      name: 'Hemoglobin A1C',
      value: '5.4',
      unit: '%',
      trend: 'improved' as const,
      previousValue: '5.8',
      range: '< 5.7',
      status: 'normal' as const,
    },
    {
      name: 'LDL Cholesterol',
      value: '115',
      unit: 'mg/dL',
      trend: 'improved' as const,
      previousValue: '142',
      range: '< 100',
      status: 'borderline' as const,
    },
    {
      name: 'HDL Cholesterol',
      value: '58',
      unit: 'mg/dL',
      trend: 'improved' as const,
      previousValue: '52',
      range: '> 40',
      status: 'normal' as const,
    },
    {
      name: 'Vitamin D',
      value: '32',
      unit: 'ng/mL',
      trend: 'stable' as const,
      previousValue: '31',
      range: '30-100',
      status: 'normal' as const,
    },
  ],
  focusPoints: [
    'Your blood pressure has improved significantly - keep up the exercise routine',
    'A1C trending in the right direction - continue dietary modifications',
    'LDL cholesterol improving but still above optimal - consider increasing cardio activity',
  ],
}

export default function Home() {
  const [showHealthDetail, setShowHealthDetail] = useState(false)

  return (
    <main className="min-h-screen bg-background pb-20">
      <header className="border-b bg-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Activity className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">VisitSnap</h1>
              <p className="text-xs text-muted-foreground">Clinical Dashboard</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Manage Tracking
          </Button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div 
          className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4 cursor-pointer hover:bg-primary/10 transition-colors"
          onClick={() => setShowHealthDetail(true)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-2">
                <Watch className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Apple Watch Connected</p>
                <p className="text-xs text-muted-foreground">
                  Last synced: Today at 2:30 PM • Tracking sleep, activity, heart rate
                </p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <TrendingUp className="mr-2 h-4 w-4" />
              View Trends
            </Button>
          </div>
        </div>

        {/* Visit Card */}
        <VisitCard visit={latestVisit} />
      </div>

      {/* AI Explainer floating button */}
      <AIExplainer />

      {/* Apple Health detail modal */}
      {showHealthDetail && <AppleHealthDetail onClose={() => setShowHealthDetail(false)} />}
    </main>
  )
}
