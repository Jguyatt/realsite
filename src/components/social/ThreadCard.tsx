'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Thread } from "@/lib/store"
import { formatDate } from "@/lib/utils"
import { MessageCircle } from "lucide-react"
import { useRouter } from "next/navigation"

interface ThreadCardProps {
  thread: Thread
  showParlaySummary?: boolean
}

export default function ThreadCard({ thread, showParlaySummary }: ThreadCardProps) {
  const router = useRouter()
  
  return (
    <Card className="rounded-2xl cursor-pointer hover:shadow-md transition-shadow" onClick={() => router.push('/demo/thread')}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg">{thread.title}</CardTitle>
            <div className="text-xs text-muted-foreground mt-1">{formatDate(thread.createdAt)}</div>
          </div>
          <Badge variant="secondary" className="ml-2">
            <MessageCircle className="h-3 w-3 mr-1" />
            {thread.commentCount}
          </Badge>
        </div>
      </CardHeader>
      
      {showParlaySummary && thread.parlayId && (
        <CardContent>
          <div className="text-sm text-muted-foreground">
            Attached parlay: 4-leg · +850
          </div>
        </CardContent>
      )}
      
      <CardContent className="pt-0">
        <Button variant="ghost" size="sm" className="w-full">
          View Discussion →
        </Button>
      </CardContent>
    </Card>
  )
}

