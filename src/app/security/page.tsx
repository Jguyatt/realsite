'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Database, FileCheck, Eye, CheckCircle2, Globe, Server, Key, AlertTriangle, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Header Navigation */}
      <header className="border-b border-border/50 bg-white/90 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-2xl accent-gradient flex items-center justify-center shadow-lg">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-text">
                Mike<span className="text-[#10B981]">Bets</span>
              </span>
            </Link>
            
            {/* Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/security" className="text-sm font-medium text-[#10B981] border-b-2 border-[#10B981]">
                Security
              </Link>
            </div>
            
            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="text-text-dim hover:text-text"
                >
                  Login
                </Button>
              </Link>
              <Link href="/">
                <Button
                  className="accent-gradient text-white font-semibold shadow-lg rounded-full"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero Section with Background */}
      <section className="relative overflow-hidden bg-gray-900">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/90 to-gray-900"></div>
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&q=80"
            alt="Security"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-8 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#10B981]/10 border border-[#10B981]/30">
              <Shield className="h-5 w-5 text-[#10B981]" />
              <span className="text-sm font-bold text-[#10B981]">Enterprise-Grade Security</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-white">
              Your Security is
              <br />
              <span className="text-[#10B981]">Our Priority</span>
            </h1>
            
            <p className="text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Built with bank-level encryption and world-class security standards
            </p>
          </div>
        </div>
      </section>
      
      {/* Security Features Grid */}
      <section className="container mx-auto px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-text">
              Multi-Layered Protection
            </h2>
            <p className="text-xl text-text-dim">
              Every layer of our platform is designed with security in mind
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <Card className="bg-white border-border rounded-3xl shadow-sm hover:shadow-xl transition-all">
              <CardContent className="pt-10 pb-10">
                <div className="w-16 h-16 rounded-3xl accent-gradient flex items-center justify-center mb-6 shadow-lg">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-text">256-Bit Encryption</h3>
                <p className="text-text-dim leading-relaxed text-base">
                  All data encrypted using AES-256, the same standard used by banks
                </p>
              </CardContent>
            </Card>
            
            {/* Feature 2 */}
            <Card className="bg-white border-border rounded-3xl shadow-sm hover:shadow-xl transition-all">
              <CardContent className="pt-10 pb-10">
                <div className="w-16 h-16 rounded-3xl bg-blue-500 flex items-center justify-center mb-6 shadow-lg">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-text">Segregated Funds</h3>
                <p className="text-text-dim leading-relaxed text-base">
                  Player funds held separately and never mixed with operational accounts
                </p>
              </CardContent>
            </Card>
            
            {/* Feature 3 */}
            <Card className="bg-white border-border rounded-3xl shadow-sm hover:shadow-xl transition-all">
              <CardContent className="pt-10 pb-10">
                <div className="w-16 h-16 rounded-3xl bg-purple-500 flex items-center justify-center mb-6 shadow-lg">
                  <FileCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-text">Audit Logging</h3>
                <p className="text-text-dim leading-relaxed text-base">
                  Every action logged and monitored 24/7 to detect suspicious activity
                </p>
              </CardContent>
            </Card>
            
            {/* Feature 4 */}
            <Card className="bg-white border-border rounded-3xl shadow-sm hover:shadow-xl transition-all">
              <CardContent className="pt-10 pb-10">
                <div className="w-16 h-16 rounded-3xl bg-orange-500 flex items-center justify-center mb-6 shadow-lg">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-text">Identity Verification</h3>
                <p className="text-text-dim leading-relaxed text-base">
                  Advanced KYC with liveness detection to verify every user
                </p>
              </CardContent>
            </Card>
            
            {/* Feature 5 */}
            <Card className="bg-white border-border rounded-3xl shadow-sm hover:shadow-xl transition-all">
              <CardContent className="pt-10 pb-10">
                <div className="w-16 h-16 rounded-3xl bg-indigo-500 flex items-center justify-center mb-6 shadow-lg">
                  <Server className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-text">DDoS Protection</h3>
                <p className="text-text-dim leading-relaxed text-base">
                  Enterprise-grade protection with 99.99% uptime guarantee
                </p>
              </CardContent>
            </Card>
            
            {/* Feature 6 */}
            <Card className="bg-white border-border rounded-3xl shadow-sm hover:shadow-xl transition-all">
              <CardContent className="pt-10 pb-10">
                <div className="w-16 h-16 rounded-3xl bg-red-500 flex items-center justify-center mb-6 shadow-lg">
                  <Key className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-text">2FA Authentication</h3>
                <p className="text-text-dim leading-relaxed text-base">
                  Two-factor authentication for extra account protection
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Compliance Section */}
      <section className="container mx-auto px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white border-border rounded-3xl shadow-lg">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Regulatory Compliance</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-[#10B981] flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">iGaming Ontario Licensed</div>
                        <p className="text-sm text-text-dim">Fully licensed and regulated by iGaming Ontario (iGO)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-[#10B981] flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">AGCO Registered</div>
                        <p className="text-sm text-text-dim">Registered with the Alcohol and Gaming Commission of Ontario</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-[#10B981] flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">FINTRAC Compliant</div>
                        <p className="text-sm text-text-dim">Full compliance with Canada's anti-money laundering regulations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-[#10B981] flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">PIPEDA Certified</div>
                        <p className="text-sm text-text-dim">Privacy practices meet Canada's privacy legislation standards</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                    alt="Compliance"
                    className="rounded-2xl w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Infrastructure Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              World-Class Infrastructure
            </h2>
            <p className="text-xl text-text-dim">
              Hosted on enterprise-grade cloud infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-surface border-border">
              <CardContent className="pt-8 pb-8 text-center">
                <Globe className="h-12 w-12 mx-auto mb-4 text-[#FDB022]" />
                <div className="text-3xl font-bold mb-2 text-[#FDB022] font-mono">99.99%</div>
                <div className="text-text-dim">Uptime SLA</div>
              </CardContent>
            </Card>
            
            <Card className="bg-surface border-border">
              <CardContent className="pt-8 pb-8 text-center">
                <Server className="h-12 w-12 mx-auto mb-4 text-[#3B82F6]" />
                <div className="text-3xl font-bold mb-2 text-[#3B82F6] font-mono">&lt;50ms</div>
                <div className="text-text-dim">Response Time</div>
              </CardContent>
            </Card>
            
            <Card className="bg-surface border-border">
              <CardContent className="pt-8 pb-8 text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-[#10B981]" />
                <div className="text-3xl font-bold mb-2 text-[#10B981] font-mono">24/7</div>
                <div className="text-text-dim">Monitoring</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Responsible Disclosure */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-surface border-[#F59E0B]/30">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center flex-shrink-0 border border-[#F59E0B]/20">
                  <AlertTriangle className="h-6 w-6 text-[#F59E0B]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Security Researcher?</h3>
                  <p className="text-text-dim mb-4">
                    We welcome responsible disclosure of security vulnerabilities. If you've discovered a security issue, please contact our security team at <span className="text-[#FDB022]">security@mikebets.com</span>
                  </p>
                  <div className="text-sm text-text-muted">
                    We offer rewards for valid security reports and commit to responding within 24 hours.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Footer CTA */}
      <section className="container mx-auto px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-text">
            Questions About Security?
          </h2>
          <p className="text-xl text-text-dim mb-8">
            Our security team is here to help
          </p>
          <button className="accent-gradient px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl">
            Contact Security Team
          </button>
        </div>
      </section>
    </div>
  )
}

