'use client'

import ResponsibleRibbon from "@/components/rg/ResponsibleRibbon"
import ParlayBuilder from "@/components/parlay/ParlayBuilder"
import LimitGauge from "@/components/rg/LimitGauge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BuilderPage() {
  return (
    <div className="min-h-screen">
      <ResponsibleRibbon />
      
      <div className="container mx-auto px-8 py-10 max-w-7xl">
        <div className="space-y-10">
          <div className="space-y-3">
            <h1 className="text-5xl font-bold tracking-tight text-text">Parlay Builder</h1>
            <p className="text-text-dim text-xl">
              Build your own parlay or tail a friend's picks
            </p>
          </div>
          
          <Card className="rounded-3xl bg-white border-border shadow-sm max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-text">Daily Limit</CardTitle>
            </CardHeader>
            <CardContent>
              <LimitGauge />
            </CardContent>
          </Card>
          
          <ParlayBuilder />
        </div>
      </div>
    </div>
  )
}
