import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Database, FileCheck, Shield } from "lucide-react"

export default function SecurityPanel() {
  const features = [
    {
      icon: Lock,
      title: "Encryption in Transit & at Rest",
      description: "All data encrypted using industry-standard TLS 1.3 and AES-256"
    },
    {
      icon: Database,
      title: "Segregated Workloads",
      description: "Player funds held in separate accounts, never commingled"
    },
    {
      icon: FileCheck,
      title: "Comprehensive Audit Logging",
      description: "Every action tracked and auditable for compliance"
    },
    {
      icon: Shield,
      title: "Regular Security Audits",
      description: "Third-party penetration testing and compliance reviews"
    }
  ]
  
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>Security & Infrastructure</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium mb-1">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

