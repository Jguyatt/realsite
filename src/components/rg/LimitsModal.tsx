'use client'

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useStore } from "@/lib/store"
import { formatCurrency } from "@/lib/utils"
import { toast } from "sonner"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface LimitsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function LimitsModal({ open, onOpenChange }: LimitsModalProps) {
  const { limits, requestLimitChange } = useStore()
  const [newLimit, setNewLimit] = useState(limits.dailyStake)
  const [reason, setReason] = useState("")
  const [isPending, setIsPending] = useState(false)
  
  const handleKeepLimit = () => {
    toast.success("Your current limit remains in place. We're here to help you play responsibly.")
    onOpenChange(false)
  }
  
  const handleRequestChange = () => {
    if (!reason.trim()) {
      toast.error("Please provide a reason for the limit change")
      return
    }
    
    setIsPending(true)
    requestLimitChange(newLimit, reason)
    
    setTimeout(() => {
      setIsPending(false)
      toast.info("Request submitted. Our team will review within 24 hours. New limits take effect 24h after approval.", {
        duration: 5000
      })
      onOpenChange(false)
      setReason("")
    }, 1000)
  }
  
  const isIncrease = newLimit > limits.dailyStake
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Adjust Daily Stake Limit</DialogTitle>
          <DialogDescription>
            Your current daily stake limit is {formatCurrency(limits.dailyStake)}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>New Limit</Label>
              <span className="text-lg font-semibold">{formatCurrency(newLimit)}</span>
            </div>
            <Slider
              value={[newLimit]}
              onValueChange={([v]) => setNewLimit(v)}
              min={10}
              max={500}
              step={10}
              className="mt-2"
            />
          </div>
          
          {isIncrease && (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-xs">
                Increases take effect 24 hours after approval. Decreases are immediate.
              </AlertDescription>
            </Alert>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="reason">Reason for change</Label>
            <Textarea
              id="reason"
              placeholder="Why are you requesting this change?"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="resize-none"
              rows={3}
            />
            <p className="text-xs text-muted-foreground">
              Required for all limit changes
            </p>
          </div>
        </div>
        
        <DialogFooter className="sm:justify-between">
          <Button variant="default" onClick={handleKeepLimit} className="flex-1">
            Keep Current Limit
          </Button>
          <Button
            variant="secondary"
            onClick={handleRequestChange}
            disabled={isPending}
            className="flex-1"
          >
            {isPending ? "Submitting..." : "Request Change"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

