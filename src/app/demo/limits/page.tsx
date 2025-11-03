'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import LimitGauge from "@/components/rg/LimitGauge"
import LimitsModal from "@/components/rg/LimitsModal"
import { useStore } from "@/lib/store"
import { formatCurrency } from "@/lib/utils"
import { Shield, AlertCircle, TrendingDown } from "lucide-react"

export default function LimitsPage() {
  const { limits } = useStore()
  const [showModal, setShowModal] = useState(false)
  
  return (
    <div>
      <div className="bg-amber-50 dark:bg-amber-950 border-y border-amber-200 dark:border-amber-800 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-amber-900 dark:text-amber-100">
            <Shield className="h-4 w-4" />
            <span className="font-medium">Responsible Gaming</span>
            <span className="hidden md:inline">·</span>
            <span>We're committed to helping you play responsibly</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Responsible Gaming Limits</h1>
            <p className="text-muted-foreground">
              Set limits to help you stay in control of your betting
            </p>
          </div>
          
          <Alert className="border-blue-200 bg-blue-50/50 dark:bg-blue-950/20">
            <AlertCircle className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-sm text-blue-900 dark:text-blue-100">
              <strong>Why limits matter:</strong> Setting daily, weekly, and monthly limits helps ensure betting stays fun and within your budget. You're always in control.
            </AlertDescription>
          </Alert>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Daily Stake */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Daily Stake Limit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <LimitGauge />
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setShowModal(true)}
                >
                  Adjust Limit
                </Button>
              </CardContent>
            </Card>
            
            {/* Weekly Stake */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Weekly Stake Limit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">This Week</span>
                    <span className="font-medium">
                      {formatCurrency(145)} / {formatCurrency(limits.weeklyStake || 500)}
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '29%' }} />
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  Adjust Limit
                </Button>
              </CardContent>
            </Card>
            
            {/* Self-Exclusion */}
            <Card className="rounded-2xl border-orange-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-orange-600" />
                  Self-Exclusion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Take a break from betting. Self-exclusion periods: 24h, 7 days, 30 days, or permanent.
                </p>
                <Button variant="destructive" className="w-full">
                  Request Self-Exclusion
                </Button>
              </CardContent>
            </Card>
            
            {/* Deposit Limit */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">Daily Deposit Limit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-2xl font-bold">{formatCurrency(limits.dailyDeposit)}</div>
                <p className="text-sm text-muted-foreground">
                  Maximum you can deposit in 24 hours
                </p>
                <Button variant="outline" className="w-full">
                  Adjust Limit
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Resources */}
          <Card className="rounded-2xl bg-secondary/30">
            <CardHeader>
              <CardTitle className="text-lg">Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>
                <strong>ConnexOntario:</strong> 1-866-531-2600 (24/7 support)
              </p>
              <p>
                <strong>Responsible Gambling Council:</strong> responsiblegambling.org
              </p>
              <p className="text-muted-foreground">
                If you or someone you know has a gambling problem, help is available.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <LimitsModal open={showModal} onOpenChange={setShowModal} />
    </div>
  )
}

