'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Parlay } from "@/lib/store"
import { formatCurrency, formatOdds } from "@/lib/utils"
import { combineAmericanOdds, calculateParlayPayout } from "@/lib/odds"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

interface ReviewBetModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  parlay: Parlay | null
}

export default function ReviewBetModal({ open, onOpenChange, parlay }: ReviewBetModalProps) {
  if (!parlay) return null
  
  const combinedOdds = combineAmericanOdds(parlay.legs.map(l => l.odds))
  const potentialReturn = calculateParlayPayout(parlay.stake, parlay.legs.map(l => l.odds))
  const initials = parlay.authorName.substring(0, 2).toUpperCase()
  
  const handlePlaceBet = () => {
    toast.success("Bet placed successfully! Good luck! 🎉", {
      duration: 3000
    })
    onOpenChange(false)
  }
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-text">Review Bet</DialogTitle>
          <DialogDescription className="text-base text-text-dim">
            You're about to copy {parlay.authorName}'s parlay
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Original Author */}
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="accent-gradient text-white font-bold">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-text">{parlay.authorName}'s Parlay</div>
              <Badge className="mt-1 bg-[#10B981]/10 text-[#10B981] border-0 rounded-full font-mono font-bold">
                {formatOdds(combinedOdds)}
              </Badge>
            </div>
          </div>
          
          <Separator />
          
          {/* Bet Legs */}
          <div className="space-y-3">
            <div className="font-semibold text-text">Selections ({parlay.legs.length} legs)</div>
            {parlay.legs.map((leg, idx) => (
              <div key={leg.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl">
                <div>
                  <div className="font-semibold text-sm text-text">{leg.market}</div>
                  <div className="text-xs text-text-dim">{leg.league} · {leg.game}</div>
                </div>
                <div className="font-mono font-bold text-[#10B981]">{formatOdds(leg.odds)}</div>
              </div>
            ))}
          </div>
          
          <Separator />
          
          {/* Bet Summary */}
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-[#10B981]/5 rounded-2xl">
              <div>
                <div className="text-sm text-text-dim mb-1">Your Stake</div>
                <div className="text-2xl font-bold font-mono text-text">{formatCurrency(parlay.stake)}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-text-dim mb-1">Potential Win</div>
                <div className="text-2xl font-bold font-mono text-[#10B981]">{formatCurrency(potentialReturn)}</div>
              </div>
            </div>
          </div>
        </div>
        
        <DialogFooter className="sm:justify-between gap-3">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="flex-1 rounded-full border-border h-12"
          >
            Cancel
          </Button>
          <Button
            onClick={handlePlaceBet}
            className="flex-1 accent-gradient text-white font-bold rounded-full h-12 shadow-lg"
          >
            <CheckCircle2 className="h-5 w-5 mr-2" />
            Place Bet
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

