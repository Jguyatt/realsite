'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Clock, TrendingUp, Users, Zap } from "lucide-react"
import { toast } from "sonner"
import { formatCurrency } from "@/lib/utils"

export default function P2PBetsPage() {
  const [betAmount, setBetAmount] = useState("")
  
  const liveBets = [
    {
      id: 1,
      event: "Blue Jays vs Yankees",
      category: "MLB",
      question: "Will Guerrero Jr. hit a home run this inning?",
      creator: "Mike",
      stake: 25,
      odds: "2.5x",
      timeLeft: "2m 34s",
      status: "live",
      createdAt: "Just now"
    },
    {
      id: 2,
      event: "Grammy Awards 2025",
      category: "Entertainment",
      question: "Will Taylor Swift win Album of the Year?",
      creator: "Sarah",
      stake: 50,
      odds: "1.8x",
      timeLeft: "15m 12s",
      status: "live",
      createdAt: "2m ago"
    },
    {
      id: 3,
      event: "Raptors vs Celtics",
      category: "NBA",
      question: "Next basket scored in under 2 minutes?",
      creator: "Alex",
      stake: 15,
      odds: "3.0x",
      timeLeft: "1m 45s",
      status: "live",
      createdAt: "30s ago"
    },
    {
      id: 4,
      event: "Grammy Awards 2025",
      category: "Entertainment",
      question: "Will host make a joke about AI in next 5 minutes?",
      creator: "Emma",
      stake: 20,
      odds: "2.2x",
      timeLeft: "4m 20s",
      status: "live",
      createdAt: "1m ago"
    },
    {
      id: 5,
      event: "Maple Leafs vs Bruins",
      category: "NHL",
      question: "Goal scored in next 3 minutes?",
      creator: "David",
      stake: 30,
      odds: "4.0x",
      timeLeft: "2m 58s",
      status: "live",
      createdAt: "45s ago"
    },
    {
      id: 6,
      event: "Blue Jays vs Yankees",
      category: "MLB",
      question: "Next pitch will be a strike?",
      creator: "Lisa",
      stake: 10,
      odds: "1.5x",
      timeLeft: "30s",
      status: "live",
      createdAt: "15s ago"
    }
  ]
  
  const handleAcceptBet = (bet: any) => {
    toast.success(`Accepted ${bet.creator}'s bet for ${formatCurrency(bet.stake)}!`, {
      duration: 3000
    })
  }
  
  const handleCreateBet = () => {
    if (!betAmount || Number(betAmount) < 1) {
      toast.error("Enter a valid bet amount")
      return
    }
    toast.success("Bet created! Waiting for someone to accept...", {
      duration: 3000
    })
    setBetAmount("")
  }
  
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-border py-3">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2 text-xs text-text-muted">
            <Zap className="h-3.5 w-3.5 text-[#10B981]" />
            <span className="font-medium">Live Microbets</span>
            <span>·</span>
            <span>Instant settlement</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-8 py-10 max-w-6xl">
        <div className="space-y-10">
          {/* Header */}
          <div className="space-y-3">
            <h1 className="text-5xl font-bold tracking-tight text-text">Peer-to-Peer Bets</h1>
            <p className="text-text-dim text-xl">
              Create and accept instant microbets on live events
            </p>
          </div>
          
          {/* Create Bet Section */}
          <Card className="rounded-3xl bg-gradient-to-br from-[#10B981]/5 to-[#10B981]/10 border-[#10B981]/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-text flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-[#10B981]" />
                Create Your Bet
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="What's happening? (e.g., Next goal in 2 mins)"
                  className="h-12 rounded-2xl bg-white border-border text-base"
                />
                <div className="flex gap-2">
                  <Input
                    type="number"
                    placeholder="Stake amount"
                    value={betAmount}
                    onChange={(e) => setBetAmount(e.target.value)}
                    className="h-12 rounded-2xl bg-white border-border text-base font-mono"
                  />
                  <Button
                    onClick={handleCreateBet}
                    className="accent-gradient text-white font-semibold rounded-full px-8 shadow-lg whitespace-nowrap"
                  >
                    Create Bet
                  </Button>
                </div>
              </div>
              <p className="text-sm text-text-dim">
                Create instant bets on anything happening right now. Friends can accept and settle happens automatically.
              </p>
            </CardContent>
          </Card>
          
          {/* Live Bets Feed */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-[#10B981]" />
                <h2 className="text-2xl font-semibold text-text">Live Bets</h2>
              </div>
              <Badge className="bg-red-500/10 text-red-500 border-0 rounded-full px-4 py-1 font-semibold animate-pulse">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2 inline-block"></div>
                LIVE
              </Badge>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {liveBets.map((bet) => (
                <Card key={bet.id} className="rounded-3xl bg-white border-border shadow-sm hover:shadow-xl transition-all">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-[#10B981]/10 text-[#10B981] border-0 rounded-full text-xs font-semibold">
                            {bet.category}
                          </Badge>
                          <span className="text-xs text-text-muted">{bet.createdAt}</span>
                        </div>
                        <div className="text-sm font-semibold text-text-dim mb-1">{bet.event}</div>
                        <CardTitle className="text-lg font-bold text-text leading-tight">
                          {bet.question}
                        </CardTitle>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-3">
                      <Avatar className="h-7 w-7">
                        <AvatarFallback className="accent-gradient text-white font-bold text-xs">
                          {bet.creator.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium text-text">{bet.creator}</span>
                      <span className="text-sm text-text-dim">·</span>
                      <span className="text-sm font-mono font-bold text-[#10B981]">{formatCurrency(bet.stake)}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl mb-3">
                      <div>
                        <div className="text-xs text-text-dim mb-1">Win if you accept</div>
                        <div className="text-2xl font-bold font-mono text-[#10B981]">
                          {formatCurrency(bet.stake * parseFloat(bet.odds))}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-text-dim mb-1">Multiplier</div>
                        <div className="text-xl font-bold font-mono text-text">
                          {bet.odds}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-red-500" />
                        <span className="font-mono font-bold text-red-500">{bet.timeLeft}</span>
                      </div>
                      <Button
                        onClick={() => handleAcceptBet(bet)}
                        className="accent-gradient text-white font-bold rounded-full px-6 shadow-md"
                      >
                        Accept Bet
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* How It Works */}
          <Card className="rounded-3xl bg-gray-50 border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-text">How P2P Bets Work</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-2xl accent-gradient flex items-center justify-center text-white font-bold text-xl mb-3">
                    1
                  </div>
                  <h4 className="font-bold text-lg text-text">Create</h4>
                  <p className="text-text-dim text-base">
                    Watch something live? Create a quick bet on what happens next
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-2xl accent-gradient flex items-center justify-center text-white font-bold text-xl mb-3">
                    2
                  </div>
                  <h4 className="font-bold text-lg text-text">Accept</h4>
                  <p className="text-text-dim text-base">
                    Browse live bets from friends and accept the ones you like
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-2xl accent-gradient flex items-center justify-center text-white font-bold text-xl mb-3">
                    3
                  </div>
                  <h4 className="font-bold text-lg text-text">Settle</h4>
                  <p className="text-text-dim text-base">
                    Outcome verified instantly. Winner gets paid automatically
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

