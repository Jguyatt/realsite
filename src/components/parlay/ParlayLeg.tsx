import { Leg } from "@/lib/store"
import { formatOdds } from "@/lib/utils"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ParlayLegProps {
  leg: Leg
  showRemove?: boolean
  onRemove?: () => void
  onClick?: () => void
}

export default function ParlayLeg({ leg, showRemove, onRemove, onClick }: ParlayLegProps) {
  return (
    <div 
      className={`flex items-center justify-between p-4 bg-surface-hover rounded-2xl border border-border ${onClick ? 'cursor-pointer hover:border-[#10B981]' : ''}`}
      onClick={onClick}
    >
      <div className="flex-1">
        <div className="font-semibold text-base text-text">{leg.market}</div>
        <div className="text-sm text-text-dim">{leg.league} · {leg.game}</div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="font-mono font-bold text-lg text-[#10B981]">{formatOdds(leg.odds)}</div>
        {showRemove && onRemove && (
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 rounded-full hover:bg-red-100"
            onClick={(e) => {
              e.stopPropagation()
              onRemove()
            }}
          >
            <X className="h-4 w-4 text-red-500" />
          </Button>
        )}
      </div>
    </div>
  )
}
