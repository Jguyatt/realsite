'use client'

import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useStore, Parlay } from "@/lib/store"
import { formatCurrency, formatOdds, formatDate } from "@/lib/utils"
import { combineAmericanOdds, calculateParlayPayout } from "@/lib/odds"
import ParlayLeg from "./ParlayLeg"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

interface ParlayCardProps {
  parlay: Parlay
  showActions?: boolean
}

export default function ParlayCard({ parlay, showActions = true }: ParlayCardProps) {
  const { copyParlay } = useStore()
  const router = useRouter()
  
  const combinedOdds = combineAmericanOdds(parlay.legs.map(l => l.odds))
  const potentialReturn = calculateParlayPayout(parlay.stake, parlay.legs.map(l => l.odds))
  
  const handleCopyAndTweak = () => {
    copyParlay(parlay.id)
    toast.success(`Copied ${parlay.authorName}'s parlay!`, {
      duration: 3000
    })
    router.push('/demo/builder')
  }
  
  const initials = parlay.authorName.substring(0, 2).toUpperCase()
  
  return (
    <Card className="rounded-3xl border border-border bg-white shadow-sm hover:shadow-xl transition-all">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-11 w-11">
              <AvatarFallback className="accent-gradient text-white font-bold">{initials}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-text">{parlay.authorName}</div>
              <div className="text-sm text-text-dim">{formatDate(parlay.createdAt)}</div>
            </div>
          </div>
          <Badge className="font-mono bg-[#10B981]/10 text-[#10B981] border-0 rounded-full px-4 py-1 font-semibold">
            {formatOdds(combinedOdds)}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3 pb-4">
        {parlay.legs.map((leg) => (
          <ParlayLeg key={leg.id} leg={leg} />
        ))}
      </CardContent>
      
      <CardFooter className="flex items-center justify-between pt-4 border-t border-border bg-surface-hover/50">
        <div className="flex items-center gap-6">
          <div>
            <div className="text-xs text-text-dim mb-1">Stake</div>
            <div className="font-bold font-mono text-lg text-text">{formatCurrency(parlay.stake)}</div>
          </div>
          <div className="w-px h-12 bg-border"></div>
          <div>
            <div className="text-xs text-text-dim mb-1">To Win</div>
            <div className="font-bold font-mono text-lg text-[#10B981]">{formatCurrency(potentialReturn)}</div>
          </div>
        </div>
        
        {showActions && (
          <Button onClick={handleCopyAndTweak} className="accent-gradient text-white font-semibold rounded-full shadow-md">
            Copy
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
