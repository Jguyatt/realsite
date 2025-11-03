'use client'

import KYCFlow from "@/components/trust/KYCFlow"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield } from "lucide-react"

export default function KYCPage() {
  return (
    <div>
      <div className="bg-blue-50 dark:bg-blue-950 border-y border-blue-200 dark:border-blue-800 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-blue-900 dark:text-blue-100">
            <Shield className="h-4 w-4" />
            <span className="font-medium">Identity Verification</span>
            <span className="hidden md:inline">·</span>
            <span>Required by law to prevent fraud and underage gambling</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="max-w-2xl mx-auto text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Identity Verification</h1>
            <p className="text-muted-foreground">
              We need to verify your identity before you can place bets. This process takes about 2 minutes.
            </p>
          </div>
          
          <Alert className="max-w-2xl mx-auto border-blue-200 bg-blue-50/50 dark:bg-blue-950/20">
            <Shield className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-sm text-blue-900 dark:text-blue-100">
              <strong>Why we verify:</strong> Ontario law requires all online betting operators to verify the identity and age of all players. This protects you and ensures a safe, fair betting environment.
            </AlertDescription>
          </Alert>
          
          <KYCFlow />
          
          <div className="max-w-2xl mx-auto mt-8 p-4 border rounded-xl bg-secondary/30">
            <h3 className="font-semibold text-sm mb-2">Your Privacy Matters</h3>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Your documents are encrypted during transmission and storage</li>
              <li>• We never sell your personal information</li>
              <li>• KYC data is stored in Canada and complies with PIPEDA</li>
              <li>• You can request deletion of your data at any time</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

