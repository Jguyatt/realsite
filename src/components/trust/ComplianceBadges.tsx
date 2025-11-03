import { Badge } from "@/components/ui/badge"
import { Shield, UserCheck, AlertTriangle, Scale } from "lucide-react"

export default function ComplianceBadges() {
  const badges = [
    {
      icon: Scale,
      label: "Operate where licensed",
      description: "Only in regulated jurisdictions"
    },
    {
      icon: AlertTriangle,
      label: "No celebrity endorsements",
      description: "Responsible marketing only"
    },
    {
      icon: Shield,
      label: "Responsible ads",
      description: "Age-gated and compliant"
    },
    {
      icon: UserCheck,
      label: "KYC/AML enforced",
      description: "Every user verified"
    }
  ]
  
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {badges.map((badge, idx) => (
        <div key={idx} className="flex items-start gap-3 p-4 border rounded-xl bg-card">
          <div className="p-2 bg-primary/10 rounded-lg">
            <badge.icon className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm">{badge.label}</div>
            <div className="text-xs text-muted-foreground mt-1">{badge.description}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

