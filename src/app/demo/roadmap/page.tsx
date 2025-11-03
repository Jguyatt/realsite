'use client'

import RoadmapTimeline from "@/components/marketing/RoadmapTimeline"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Rocket } from "lucide-react"

export default function RoadmapPage() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-sm font-medium mb-4">
              <Rocket className="h-4 w-4" />
              Our Journey to Launch
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">12-Month Roadmap</h1>
            <p className="text-muted-foreground text-lg">
              From concept to launch, here's how we're building MikeBets responsibly
            </p>
          </div>
          
          <Card className="rounded-2xl bg-secondary/30 max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Why It Takes Time</h3>
                  <p className="text-sm text-muted-foreground">
                    Building a licensed sportsbook isn't just about writing code. We're building relationships with regulators, implementing rigorous security measures, and ensuring every feature meets Ontario's strict standards for responsible gaming. This timeline reflects our commitment to launching right, not launching fast.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <RoadmapTimeline />
          
          <div className="text-center text-sm text-muted-foreground p-4 border rounded-xl bg-secondary/30 max-w-3xl mx-auto">
            <p className="font-semibold mb-2">Timeline Subject to Change</p>
            <p>
              Regulatory approval timelines can vary. We'll keep our community updated throughout the process. Join our waitlist to stay informed.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

