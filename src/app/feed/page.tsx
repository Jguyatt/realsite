'use client'

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import ResponsibleRibbon from "@/components/rg/ResponsibleRibbon"
import ParlayCard from "@/components/parlay/ParlayCard"
import { useStore } from "@/lib/store"
import { mockParlays, mockThreads, mockComments } from "@/lib/mock"
import { TrendingUp } from "lucide-react"

export default function FeedPage() {
  const { parlays } = useStore()
  
  // Initialize mock data
  useEffect(() => {
    if (parlays.length === 0) {
      useStore.setState({
        parlays: mockParlays,
        threads: mockThreads,
        comments: mockComments
      })
    }
  }, [parlays.length])
  
  return (
    <div className="min-h-screen">
      <ResponsibleRibbon />
      
      <div className="container mx-auto px-8 py-10 max-w-5xl">
        <div className="space-y-10">
          {/* Header */}
          <div className="space-y-3">
            <h1 className="text-5xl font-bold tracking-tight text-text">Your Feed</h1>
            <p className="text-text-dim text-xl">
              See what your friends are betting on
            </p>
          </div>
          
          {/* Friend Parlays */}
          <div className="space-y-6">
            {parlays.length > 0 ? (
              parlays.map((parlay) => (
                <ParlayCard key={parlay.id} parlay={parlay} />
              ))
            ) : (
              <Card className="rounded-3xl border-border bg-white">
                <CardContent className="py-20 text-center text-text-dim">
                  <p className="text-lg">No parlays yet</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
