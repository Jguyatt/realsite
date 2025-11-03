'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { useStore } from "@/lib/store"
import { formatCurrency, formatOdds } from "@/lib/utils"
import { combineAmericanOdds, calculateParlayPayout } from "@/lib/odds"
import { mockGames } from "@/lib/mock"
import ParlayLeg from "./ParlayLeg"
import ParlayCard from "./ParlayCard"
import { toast } from "sonner"
import { Plus, Sparkles } from "lucide-react"

export default function ParlayBuilder() {
  const { currentParlayDraft, setCurrentDraft, updateDraftLeg, removeDraftLeg, addDraftLeg, lockSlip, parlays, limits } = useStore()
  const [stake, setStake] = useState(currentParlayDraft?.stake || 10)
  const [searchTerm, setSearchTerm] = useState("")
  
  const draft = currentParlayDraft
  const combinedOdds = draft ? combineAmericanOdds(draft.legs.map(l => l.odds)) : 0
  const potentialReturn = draft ? calculateParlayPayout(stake, draft.legs.map(l => l.odds)) : 0
  
  const handleLockSlip = () => {
    if (!draft || draft.legs.length === 0) {
      toast.error("Add at least one leg to your parlay")
      return
    }
    
    if (stake > limits.remainingStake) {
      toast.error(`Stake exceeds your daily limit. ${formatCurrency(limits.remainingStake)} remaining today.`)
      return
    }
    
    lockSlip()
    
    toast.success("Slip locked! Good luck!", {
      duration: 3000
    })
    
    // Reset
    setStake(10)
  }
  
  const handleAddMarket = (game: any, market: any) => {
    const newLeg = {
      id: `leg-${Date.now()}`,
      league: game.league,
      game: `${game.homeTeam} vs ${game.awayTeam}`,
      market: market.type,
      odds: market.odds
    }
    
    addDraftLeg(newLeg)
    toast.success("Added to slip")
  }
  
  const filteredGames = mockGames.filter(g => 
    searchTerm === "" || 
    g.homeTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
    g.awayTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
    g.league.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  return (
    <div className="grid md:grid-cols-[1fr_380px] gap-6">
      {/* Left: Game Browser */}
      <div className="space-y-4">
        <Tabs defaultValue="build" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 bg-surface border border-border rounded-2xl p-1">
            <TabsTrigger value="build" className="rounded-xl data-[state=active]:gold-shine data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:shadow-lg">Build from Scratch</TabsTrigger>
            <TabsTrigger value="tail" className="rounded-xl data-[state=active]:gold-shine data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:shadow-lg">Tail from Friends</TabsTrigger>
          </TabsList>
          
          <TabsContent value="build" className="space-y-4 mt-4">
            <Input
              placeholder="Search games, teams, leagues..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md h-12 rounded-2xl bg-white border-border text-base"
            />
            
            <div className="space-y-4">
              {filteredGames.map((game) => (
                <Card key={game.id} className="rounded-3xl bg-white border-border shadow-sm hover:shadow-xl transition-all">
                  <CardHeader className="pb-4">
                    <div>
                      <Badge className="mb-3 bg-[#10B981]/10 text-[#10B981] border-0 rounded-full font-semibold">{game.league}</Badge>
                      <CardTitle className="text-xl font-bold text-text">
                        {game.homeTeam} vs {game.awayTeam}
                      </CardTitle>
                      <div className="text-base text-text-dim mt-2 font-medium">
                        {new Date(game.startTime).toLocaleString()}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 gap-3">
                    {game.markets.map((market, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        className="justify-between h-auto py-5 border-border rounded-2xl hover:bg-[#10B981]/5 hover:border-[#10B981] font-semibold text-base transition-all"
                        onClick={() => handleAddMarket(game, market)}
                      >
                        <span className="text-text">{market.type}</span>
                        <span className="font-mono text-[#10B981] font-bold">{formatOdds(market.odds)}</span>
                      </Button>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tail" className="space-y-4 mt-4">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-[#10B981]" />
              <p className="text-sm text-text-dim">
                Browse parlays from your friends. Copy & tweak to make them your own.
              </p>
            </div>
            
            <div className="space-y-4">
              {parlays.map((parlay) => (
                <ParlayCard key={parlay.id} parlay={parlay} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Right: Bet Slip */}
      <div className="space-y-4">
        <Card className="rounded-3xl sticky top-4 bg-white border-border shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-2xl">
              <span className="text-text">Your Slip</span>
              {draft && draft.legs.length > 0 && (
                <Badge className="bg-[#10B981]/10 text-[#10B981] border-0 rounded-full font-mono font-bold">{draft.legs.length} legs</Badge>
              )}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {!draft || draft.legs.length === 0 ? (
              <div className="text-center py-16 text-text-dim">
                <Plus className="h-16 w-16 mx-auto mb-4 opacity-20" />
                <p className="text-lg font-medium">Add picks to build your parlay</p>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  {draft.legs.map((leg, idx) => (
                    <ParlayLeg
                      key={leg.id}
                      leg={leg}
                      showRemove
                      onRemove={() => removeDraftLeg(idx)}
                    />
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-base font-semibold text-text">Stake Amount</label>
                      <Input
                        type="number"
                        value={stake}
                        onChange={(e) => setStake(Number(e.target.value))}
                        className="w-28 h-10 text-right font-mono rounded-xl"
                        min={1}
                        max={limits.remainingStake}
                      />
                    </div>
                    <Slider
                      value={[stake]}
                      onValueChange={([v]) => setStake(v)}
                      min={1}
                      max={Math.min(100, limits.remainingStake)}
                      step={1}
                      className="mt-3"
                    />
                    <div className="text-sm text-text-muted mt-2">
                      {formatCurrency(limits.remainingStake)} remaining today
                    </div>
                  </div>
                  
                  <div className="space-y-3 p-5 bg-surface-hover rounded-2xl border border-border">
                    <div className="flex justify-between">
                      <span className="text-text-dim font-medium">Combined Odds</span>
                      <span className="font-mono font-bold text-lg text-[#10B981]">{formatOdds(combinedOdds)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-dim font-medium">Potential Win</span>
                      <span className="font-bold font-mono text-xl text-[#10B981]">
                        {formatCurrency(potentialReturn)}
                      </span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleLockSlip} 
                    className="w-full accent-gradient text-white font-bold rounded-full shadow-lg h-14 text-lg"
                    size="lg"
                  >
                    Lock Slip
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

