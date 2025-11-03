'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Shield, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Simple Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gold-shine flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-black" />
              </div>
              <span className="text-xl font-bold">
                Mike<span className="text-[#FDB022]">Bets</span>
              </span>
            </div>
            
            <Link href="/">
              <Button className="gold-shine text-black font-semibold">
                Open App
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </header>
      
      {/* Simple Hero */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl font-extrabold">
            Social Betting,
            <br />
            <span className="text-[#FDB022]">Done Right</span>
          </h1>
          
          <p className="text-xl text-text-dim max-w-2xl mx-auto">
            Build parlays with friends, share winning picks, and bet smarter together.
          </p>
          
          <Link href="/">
            <Button size="lg" className="gold-shine text-black font-semibold text-lg h-14 px-8">
              Try Demo Now
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Simple Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <Card className="bg-surface border-border">
            <CardContent className="pt-8 pb-8 text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-[#FDB022]" />
              <h3 className="text-xl font-bold mb-2">Social</h3>
              <p className="text-text-dim">Bet with friends</p>
            </CardContent>
          </Card>
          
          <Card className="bg-surface border-border">
            <CardContent className="pt-8 pb-8 text-center">
              <Zap className="h-12 w-12 mx-auto mb-4 text-[#3B82F6]" />
              <h3 className="text-xl font-bold mb-2">Fast</h3>
              <p className="text-text-dim">Real-time updates</p>
            </CardContent>
          </Card>
          
          <Card className="bg-surface border-border">
            <CardContent className="pt-8 pb-8 text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-[#10B981]" />
              <h3 className="text-xl font-bold mb-2">Safe</h3>
              <p className="text-text-dim">Responsible gaming</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

