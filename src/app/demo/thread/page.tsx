'use client'

import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import ResponsibleRibbon from "@/components/rg/ResponsibleRibbon"
import ParlayCard from "@/components/parlay/ParlayCard"
import Comment from "@/components/social/Comment"
import Composer from "@/components/social/Composer"
import { useStore } from "@/lib/store"
import { mockParlays, mockComments } from "@/lib/mock"
import { MessageCircle } from "lucide-react"

export default function ThreadPage() {
  const { comments, parlays } = useStore()
  
  // Initialize mock data
  useEffect(() => {
    useStore.setState({
      parlays: mockParlays,
      comments: mockComments
    })
  }, [])
  
  const threadComments = comments.filter(c => c.threadId === 't1')
  const attachedParlay = parlays.find(p => p.id === 'p1')
  
  return (
    <div>
      <ResponsibleRibbon />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          {/* Thread Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Saturday Slate 🔥</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MessageCircle className="h-4 w-4" />
              <span>{threadComments.length} comments</span>
            </div>
          </div>
          
          {/* Attached Parlay */}
          {attachedParlay && (
            <div>
              <h2 className="text-sm font-medium text-muted-foreground mb-3">Attached Parlay</h2>
              <ParlayCard parlay={attachedParlay} />
            </div>
          )}
          
          <Separator />
          
          {/* Comments */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Discussion</h2>
            
            <Composer threadId="t1" placeholder="Share your thoughts on this parlay..." />
            
            <Card className="rounded-2xl">
              <CardContent className="divide-y pt-0">
                {threadComments.length > 0 ? (
                  threadComments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                  ))
                ) : (
                  <div className="py-12 text-center text-muted-foreground text-sm">
                    No comments yet. Be the first to share your thoughts!
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

