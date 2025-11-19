import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendIndicator } from './trend-indicator'
import { Type as type, type LucideIcon } from 'lucide-react'
import { FlaskConical } from 'lucide-react'

type Vital = {
  name: string
  value: string
  unit: string
  trend: 'improved' | 'decreased' | 'stable'
  previousValue: string
  icon: LucideIcon
  category?: string
}

type Lab = {
  name: string
  value: string
  unit: string
  trend: 'improved' | 'decreased' | 'stable'
  previousValue: string
  range: string
  status: 'normal' | 'borderline' | 'high' | 'low'
}

type Visit = {
  date: string
  provider: string
  specialty: string
  vitals: Vital[]
  labs: Lab[]
  focusPoints: string[]
  providerNotes: string
}

export function VisitCard({ visit }: { visit: Visit }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const getStatusColor = (status: Lab['status']) => {
    switch (status) {
      case 'normal':
        return 'bg-success/10 text-success border-success/20'
      case 'borderline':
        return 'bg-warning/10 text-warning border-warning/20'
      case 'high':
      case 'low':
        return 'bg-destructive/10 text-destructive border-destructive/20'
    }
  }

  return (
    <Card className="shadow-lg">
      <CardHeader className="border-b bg-accent/30 pb-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl">{formatDate(visit.date)}</CardTitle>
            <CardDescription className="mt-1 text-base">
              {visit.provider} • {visit.specialty}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="text-sm">
            Latest Visit
          </Badge>
        </div>
        <div className="mt-4 bg-blue-50 p-3 rounded-xl border border-blue-100">
          <p className="text-xs font-medium text-blue-900 mb-1">Provider Assessment</p>
          <p className="text-sm text-blue-800 leading-relaxed">
            {visit.providerNotes}
          </p>
        </div>
      </CardHeader>

      <CardContent className="pt-6">
        {/* Vitals Grid */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-foreground">Your Vitals</h3>
            <button className="text-xs text-primary font-medium hover:underline">
              Compare last 5 visits
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visit.vitals.map((vital) => (
              <div
                key={vital.name}
                className="flex flex-col gap-3 rounded-lg border bg-card p-4 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <vital.icon className="h-4 w-4 text-primary" />
                  </div>
                  <TrendIndicator trend={vital.trend} size="sm" />
                </div>
                <div>
                  <p className="mb-1 text-xs font-medium text-muted-foreground">{vital.name}</p>
                  <p className="text-2xl font-bold text-foreground">
                    {vital.value}
                    {vital.unit && (
                      <span className="ml-1 text-sm font-normal text-muted-foreground">
                        {vital.unit}
                      </span>
                    )}
                  </p>
                  {vital.category && (
                    <p className="mt-1 text-xs font-medium text-success">{vital.category}</p>
                  )}
                  <p className="mt-1 text-xs text-muted-foreground">
                    Previous: {vital.previousValue} {vital.unit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <FlaskConical className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Lab Results</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {visit.labs.map((lab) => (
              <div
                key={lab.name}
                className="flex items-center gap-4 rounded-lg border bg-card p-4 transition-shadow hover:shadow-md"
              >
                <TrendIndicator trend={lab.trend} size="sm" />
                <div className="flex-1">
                  <div className="mb-1 flex items-center justify-between">
                    <p className="text-sm font-medium text-foreground">{lab.name}</p>
                    <Badge className={getStatusColor(lab.status)} variant="outline">
                      {lab.status}
                    </Badge>
                  </div>
                  <p className="text-xl font-bold text-foreground">
                    {lab.value}
                    <span className="ml-1 text-sm font-normal text-muted-foreground">
                      {lab.unit}
                    </span>
                  </p>
                  <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Previous: {lab.previousValue}</span>
                    <span>Range: {lab.range}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Focus Points */}
        <div>
          <h3 className="mb-3 text-lg font-semibold text-foreground">What to Focus On</h3>
          <div className="space-y-2.5">
            {visit.focusPoints.map((point, index) => (
              <div key={index} className="flex gap-3 rounded-lg bg-accent/40 p-4">
                <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {index + 1}
                </div>
                <p className="text-pretty text-sm leading-relaxed text-card-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
