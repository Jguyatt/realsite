import { AlertCircle } from "lucide-react"

export default function ResponsibleRibbon() {
  return (
    <div className="bg-white border-b border-border py-3">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-2 text-xs text-text-muted">
          <AlertCircle className="h-3.5 w-3.5" />
          <span className="font-medium">19+</span>
          <span>·</span>
          <span>Play responsibly</span>
        </div>
      </div>
    </div>
  )
}
