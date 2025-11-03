'use client'

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Upload, Scan, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

export default function KYCFlow() {
  const [step, setStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  
  const handleUploadID = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      toast.success("ID documents uploaded successfully")
      setStep(2)
    }, 1500)
  }
  
  const handleLivenessCheck = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      toast.success("Liveness check completed")
      setStep(3)
    }, 2000)
  }
  
  const handleFinish = () => {
    toast.success("Verification complete! You're all set to start betting.")
  }
  
  const progress = (step / 3) * 100
  
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Step {step} of 3</span>
          <span className="font-medium">{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      
      {step === 1 && (
        <Card className="rounded-2xl">
          <CardContent className="pt-6 text-center space-y-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Upload ID Documents</h3>
              <p className="text-muted-foreground">
                We need a photo of your government-issued ID (front and back)
              </p>
            </div>
            
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full"
                onClick={handleUploadID}
                disabled={isProcessing}
              >
                {isProcessing ? "Uploading..." : "Upload Front of ID"}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                disabled={isProcessing}
              >
                Upload Back of ID
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground">
              Your documents are encrypted and stored securely
            </p>
          </CardContent>
        </Card>
      )}
      
      {step === 2 && (
        <Card className="rounded-2xl">
          <CardContent className="pt-6 text-center space-y-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto animate-pulse">
              <Scan className="h-8 w-8 text-primary" />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Liveness Check</h3>
              <p className="text-muted-foreground">
                Quick selfie to verify you're a real person
              </p>
            </div>
            
            <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Scan className="h-12 w-12 mx-auto mb-2 text-muted-foreground animate-pulse" />
                <p className="text-sm text-muted-foreground">Camera preview would appear here</p>
              </div>
            </div>
            
            <Button
              size="lg"
              className="w-full"
              onClick={handleLivenessCheck}
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Start Liveness Check"}
            </Button>
          </CardContent>
        </Card>
      )}
      
      {step === 3 && (
        <Card className="rounded-2xl border-green-200 bg-green-50/50 dark:bg-green-950/20">
          <CardContent className="pt-6 text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Verification Complete! 🎉</h3>
              <p className="text-muted-foreground">
                Your identity has been verified. You can now deposit and place bets.
              </p>
            </div>
            
            <div className="space-y-2 text-sm text-left bg-white dark:bg-gray-900 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>ID verified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>Liveness confirmed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>Age requirement met (19+)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>Ontario resident confirmed</span>
              </div>
            </div>
            
            <Button size="lg" className="w-full" onClick={handleFinish}>
              Continue to App
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

