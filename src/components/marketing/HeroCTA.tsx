'use client'

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Mail, Sparkles } from "lucide-react"

export default function HeroCTA() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleJoinWaitlist = () => {
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address")
      return
    }
    
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success("🎉 You're on the list! We'll notify you when we launch in Ontario.", {
        duration: 4000
      })
      setEmail("")
    }, 1000)
  }
  
  return (
    <div className="max-w-3xl mx-auto">
      <Card className="rounded-3xl border-2 bg-gradient-to-br from-primary/5 to-secondary">
        <CardContent className="pt-12 pb-12 text-center space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              Coming Soon to Ontario
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Bet Smarter, Together
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join the waitlist for MikeBets — the first social sportsbook designed for friends who want to share picks, tail parlays, and win together.
            </p>
          </div>
          
          <div className="max-w-md mx-auto space-y-3">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-base"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleJoinWaitlist()
                  }
                }}
              />
              <Button
                size="lg"
                className="h-12 px-8"
                onClick={handleJoinWaitlist}
                disabled={isSubmitting}
              >
                <Mail className="h-5 w-5 mr-2" />
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground">
              No spam. We'll only email you when we're ready to launch.
            </p>
          </div>
          
          <div className="pt-6 border-t max-w-md mx-auto">
            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="font-semibold">19+</span>
              </span>
              <span>·</span>
              <span>Ontario at launch</span>
              <span>·</span>
              <span>Play responsibly</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

