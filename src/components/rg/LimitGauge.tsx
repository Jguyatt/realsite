import { Progress } from "@/components/ui/progress"
import { formatCurrency } from "@/lib/utils"
import { useStore } from "@/lib/store"

export default function LimitGauge() {
  const { limits } = useStore()
  
  const used = limits.dailyStake - limits.remainingStake
  const percentage = (used / limits.dailyStake) * 100
  
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-text-dim font-medium">Daily Stake Used</span>
        <span className="font-bold text-text font-mono">
          {formatCurrency(used)} / {formatCurrency(limits.dailyStake)}
        </span>
      </div>
      
      <Progress value={percentage} className="h-3 bg-gray-200" />
      
      <div className="text-sm text-text-dim font-medium">
        {formatCurrency(limits.remainingStake)} remaining today
      </div>
    </div>
  )
}

