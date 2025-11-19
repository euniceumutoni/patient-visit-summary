import { ArrowUp, ArrowDown, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

type TrendIndicatorProps = {
  trend: 'improved' | 'decreased' | 'stable'
  size?: 'sm' | 'md'
}

export function TrendIndicator({ trend, size = 'md' }: TrendIndicatorProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-full',
        size === 'sm' && 'h-8 w-8',
        size === 'md' && 'h-10 w-10',
        trend === 'improved' && 'bg-success',
        trend === 'decreased' && 'bg-destructive',
        trend === 'stable' && 'bg-muted'
      )}
    >
      {trend === 'improved' && (
        <ArrowUp className={cn(size === 'sm' ? 'h-4 w-4' : 'h-5 w-5', 'text-success-foreground')} />
      )}
      {trend === 'decreased' && (
        <ArrowDown
          className={cn(size === 'sm' ? 'h-4 w-4' : 'h-5 w-5', 'text-destructive-foreground')}
        />
      )}
      {trend === 'stable' && (
        <Minus className={cn(size === 'sm' ? 'h-4 w-4' : 'h-5 w-5', 'text-muted-foreground')} />
      )}
    </div>
  )
}
