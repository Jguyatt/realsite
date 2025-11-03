'use client'

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useStore } from "@/lib/store"
import { Send } from "lucide-react"
import { toast } from "sonner"

interface ComposerProps {
  threadId: string
  placeholder?: string
}

export default function Composer({ threadId, placeholder = "Add a comment..." }: ComposerProps) {
  const { user, postComment } = useStore()
  const [text, setText] = useState("")
  
  const handlePost = () => {
    if (!text.trim()) return
    
    postComment(threadId, text)
    setText("")
    toast.success("Comment posted!")
  }
  
  const initials = user.name.substring(0, 2).toUpperCase()
  
  return (
    <div className="flex gap-3 p-4 border rounded-xl bg-card">
      <Avatar className="h-8 w-8">
        <AvatarFallback className="text-xs">{initials}</AvatarFallback>
      </Avatar>
      
      <div className="flex-1 space-y-2">
        <Textarea
          placeholder={placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[80px] resize-none"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
              handlePost()
            }
          }}
        />
        
        <div className="flex justify-between items-center">
          <div className="text-xs text-muted-foreground">
            Tip: Use @name to mention friends
          </div>
          <Button onClick={handlePost} size="sm">
            <Send className="h-4 w-4 mr-1" />
            Post
          </Button>
        </div>
      </div>
    </div>
  )
}

