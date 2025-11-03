'use client'

import ComplianceBadges from "@/components/trust/ComplianceBadges"
import SecurityPanel from "@/components/trust/SecurityPanel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Award, FileText } from "lucide-react"

export default function TrustPage() {
  return (
    <div>
      <div className="bg-green-50 dark:bg-green-950 border-y border-green-200 dark:border-green-800 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-green-900 dark:text-green-100">
            <ShieldCheck className="h-4 w-4" />
            <span className="font-medium">Licensed & Compliant</span>
            <span className="hidden md:inline">·</span>
            <span>Operating under strict regulatory oversight</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="space-y-8">
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight">Trust & Compliance</h1>
            <p className="text-muted-foreground">
              We're building MikeBets to the highest standards of security, compliance, and responsible gaming
            </p>
          </div>
          
          {/* Licensing */}
          <Card className="rounded-2xl max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Licensing & Regulation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge variant="default" className="mt-1">Planned</Badge>
                <div className="flex-1">
                  <div className="font-medium">iGaming Ontario (iGO) License</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    We will apply for licensing through iGaming Ontario before launch. Only licensed operators can legally offer sports betting in Ontario.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Badge variant="default" className="mt-1">Planned</Badge>
                <div className="flex-1">
                  <div className="font-medium">AGCO Registration</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Registered with the Alcohol and Gaming Commission of Ontario (AGCO), the provincial regulator for gaming.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Compliance Badges */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-center">Our Commitments</h2>
            <ComplianceBadges />
          </div>
          
          {/* Security */}
          <SecurityPanel />
          
          {/* AML/KYC */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Anti-Money Laundering (AML) & Know Your Customer (KYC)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>
                We take our AML/KYC obligations seriously and have implemented robust processes to:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Verify the identity of every player before they can deposit or bet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Monitor transactions for suspicious activity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Report suspicious transactions to FINTRAC as required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Maintain comprehensive records for regulatory review</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Footer Note */}
          <div className="text-center text-sm text-muted-foreground p-4 border rounded-xl bg-secondary/30 max-w-3xl mx-auto">
            <p>
              This is a demo. MikeBets is not yet licensed or operational. All regulatory and compliance measures described here reflect our planned approach to launching a legal, responsible sportsbook in Ontario.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

