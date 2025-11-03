import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Comment as CommentType } from "@/lib/store"
import { formatDate } from "@/lib/utils"

interface CommentProps {
  comment: CommentType
}

export default function Comment({ comment }: CommentProps) {
  const initials = comment.authorName.substring(0, 2).toUpperCase()
  
  return (
    <div className="flex gap-3 py-3">
      <Avatar className="h-8 w-8">
        <AvatarFallback className="text-xs">{initials}</AvatarFallback>
      </Avatar>
      
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-medium text-sm">{comment.authorName}</span>
          <span className="text-xs text-muted-foreground">{formatDate(comment.createdAt)}</span>
        </div>
        
        <p className="text-sm">{comment.text}</p>
        
        {comment.reactions && comment.reactions.length > 0 && (
          <div className="flex gap-2 mt-2">
            {comment.reactions.map((reaction, idx) => (
              <Button
                key={idx}
                variant="ghost"
                size="sm"
                className="h-7 px-2 text-xs"
              >
                {reaction.emoji} {reaction.count}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

