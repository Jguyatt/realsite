'use client'

import HeroCTA from "@/components/marketing/HeroCTA"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Trophy, MessageCircle, Shield } from "lucide-react"

export default function WaitlistPage() {
  const features = [
    {
      icon: Users,
      title: "Social Betting",
      description: "Build parlays with friends, share picks, and tail the best bettors in your crew"
    },
    {
      icon: Trophy,
      title: "Smart Analytics",
      description: "Track your hit rate, best leagues, and betting patterns to improve over time"
    },
    {
      icon: MessageCircle,
      title: "Live Discussions",
      description: "Comment on bets, debate picks, and celebrate wins together in real-time"
    },
    {
      icon: Shield,
      title: "Responsible by Design",
      description: "Built-in limits, self-exclusion tools, and transparent controls to keep betting fun"
    }
  ]
  
  return (
    <div>
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-12">
          <HeroCTA />
          
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Why MikeBets?</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <Card key={idx} className="rounded-2xl">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="rounded-2xl bg-amber-50 dark:bg-amber-950/20 border-amber-200">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2 text-center">Launch Details</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                    <span><strong>Region:</strong> Ontario, Canada (pending iGaming Ontario licensing)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                    <span><strong>Age Requirement:</strong> 19+ only</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                    <span><strong>Timeline:</strong> Expected launch in 12 months (subject to regulatory approval)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                    <span><strong>Beta Access:</strong> Waitlist members get priority access to closed beta</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <div className="text-center text-sm text-muted-foreground p-4 border rounded-xl bg-secondary/30">
              <p>
                <strong>Demo Only:</strong> This is a product walkthrough. MikeBets is not yet operational. By joining the waitlist, you'll receive updates as we progress through development, testing, and regulatory approval.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

