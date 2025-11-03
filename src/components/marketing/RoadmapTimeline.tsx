import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, Clock } from "lucide-react"

export default function RoadmapTimeline() {
  const phases = [
    {
      title: "Build",
      range: "Months 0-6",
      status: "in_progress",
      milestones: [
        { text: "Core betting engine", done: true },
        { text: "Social features (parlays, tailing)", done: true },
        { text: "Responsible gaming controls", done: true },
        { text: "KYC/AML integration", done: false },
        { text: "Payment processing", done: false },
        { text: "Mobile apps (iOS/Android)", done: false }
      ]
    },
    {
      title: "Test",
      range: "Months 6-10",
      status: "upcoming",
      milestones: [
        { text: "Internal alpha testing", done: false },
        { text: "Closed beta with 1000 users", done: false },
        { text: "iGaming Ontario application", done: false },
        { text: "Compliance audits", done: false },
        { text: "Load testing & optimization", done: false },
        { text: "Bug bounty program", done: false }
      ]
    },
    {
      title: "Launch",
      range: "Months 10-12",
      status: "upcoming",
      milestones: [
        { text: "iGO license approval", done: false },
        { text: "Public beta waitlist", done: false },
        { text: "Soft launch (Ontario only)", done: false },
        { text: "Marketing campaign", done: false },
        { text: "Full public launch", done: false },
        { text: "Post-launch monitoring", done: false }
      ]
    }
  ]
  
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {phases.map((phase, idx) => (
        <Card key={idx} className="rounded-2xl">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <CardTitle className="text-xl">{phase.title}</CardTitle>
              {phase.status === "in_progress" && (
                <Badge variant="default" className="animate-pulse">
                  <Clock className="h-3 w-3 mr-1" />
                  Current
                </Badge>
              )}
              {phase.status === "upcoming" && (
                <Badge variant="secondary">
                  Upcoming
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{phase.range}</p>
          </CardHeader>
          
          <CardContent>
            <ul className="space-y-3">
              {phase.milestones.map((milestone, mIdx) => (
                <li key={mIdx} className="flex items-start gap-2">
                  {milestone.done ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  )}
                  <span className={`text-sm ${milestone.done ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {milestone.text}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

