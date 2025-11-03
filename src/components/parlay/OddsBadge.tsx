import { Badge } from "@/components/ui/badge"
import { formatOdds } from "@/lib/utils"

interface OddsBadgeProps {
  odds: number
  variant?: "default" | "secondary" | "outline"
}

export default function OddsBadge({ odds, variant = "secondary" }: OddsBadgeProps) {
  return (
    <Badge variant={variant} className="font-mono">
      {formatOdds(odds)}
    </Badge>
  )
}

