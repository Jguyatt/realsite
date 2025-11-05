'use client'

import { useState } from "react"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { useStore, Parlay } from "@/lib/store"
import { formatCurrency, formatOdds, formatDate } from "@/lib/utils"
import { combineAmericanOdds, calculateParlayPayout } from "@/lib/odds"
import ParlayLeg from "./ParlayLeg"
import ReviewBetModal from "./ReviewBetModal"
import Comment from "@/components/social/Comment"
import Composer from "@/components/social/Composer"
import { MessageCircle } from "lucide-react"

interface ParlayCardProps {
  parlay: Parlay
  showActions?: boolean
}

export default function ParlayCard({ parlay, showActions = true }: ParlayCardProps) {
  const [showReviewModal, setShowReviewModal] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const { comments } = useStore()
  
  const combinedOdds = combineAmericanOdds(parlay.legs.map(l => l.odds))
  const potentialReturn = calculateParlayPayout(parlay.stake, parlay.legs.map(l => l.odds))
  
  const handleCopyClick = () => {
    setShowReviewModal(true)
  }
  
  const parlayComments = comments.filter(c => c.parlayId === parlay.id)
  
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
      
      <CardFooter className="flex-col items-stretch pt-4 border-t border-border bg-surface-hover/50 space-y-4">
        <div className="flex items-center justify-between">
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
            <Button onClick={handleCopyClick} className="accent-gradient text-white font-semibold rounded-full shadow-md">
              Copy
            </Button>
          )}
        </div>
        
        {/* Comments Toggle */}
        <Button
          variant="ghost"
          className="w-full justify-start text-text-dim hover:text-text"
          onClick={() => setShowComments(!showComments)}
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          {parlayComments.length} {parlayComments.length === 1 ? 'comment' : 'comments'}
        </Button>
        
        {/* Comments Section */}
        {showComments && (
          <div className="space-y-4 pt-2">
            <Separator />
            <Composer parlayId={parlay.id} placeholder="Share your thoughts on this parlay..." />
            
            {parlayComments.length > 0 && (
              <div className="space-y-2 bg-white rounded-2xl p-4">
                {parlayComments.map((comment) => (
                  <Comment key={comment.id} comment={comment} />
                ))}
              </div>
            )}
          </div>
        )}
      </CardFooter>
      
      <ReviewBetModal
        open={showReviewModal}
        onOpenChange={setShowReviewModal}
        parlay={parlay}
      />
    </Card>
  )
}
