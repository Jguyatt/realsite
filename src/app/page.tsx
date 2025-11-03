'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Shield, Zap, CheckCircle2, ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import AppSimulator from "@/components/AppSimulator"

export default function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState("")
  
  const handleLogin = () => {
    setIsLoggedIn(true)
  }
  
  if (isLoggedIn) {
    return <AppSimulator />
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Header */}
      <header className="border-b border-border/50 bg-white/90 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-2xl accent-gradient flex items-center justify-center shadow-lg">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-text">
                Mike<span className="text-[#10B981]">Bets</span>
              </span>
            </div>
            
            {/* Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/security" className="text-sm font-medium text-text-dim hover:text-text transition-colors">
                Security
              </Link>
            </div>
            
            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                onClick={handleLogin}
                className="text-text-dim hover:text-text"
              >
                Login
              </Button>
              <Button
                onClick={handleLogin}
                className="accent-gradient text-white font-semibold shadow-lg rounded-full"
              >
                Get Started
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-28">
          <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white border border-[#10B981]/20 shadow-lg">
              <Star className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-[#10B981] fill-[#10B981]" />
              <span className="text-xs sm:text-sm font-bold text-[#10B981]">Trusted by 1,000+ Bettors</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-none text-text px-4">
              Social Betting,
              <br />
              <span className="bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent">Simplified</span>
            </h1>
            
            <p className="text-lg sm:text-2xl text-text-dim max-w-2xl mx-auto leading-relaxed px-4">
              Build parlays with friends. Share winning picks. Bet smarter together.
            </p>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6 max-w-lg mx-auto px-4">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 sm:h-14 w-full bg-white border-border text-base rounded-full placeholder:text-text-muted focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 shadow-sm"
              />
              <Button
                onClick={handleLogin}
                className="h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto accent-gradient text-white font-semibold whitespace-nowrap rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Start Free
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6 px-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 sm:h-5 w-4 sm:w-5 text-[#10B981]" />
                <span className="text-xs sm:text-sm font-medium text-text-dim">Free Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 sm:h-5 w-4 sm:w-5 text-[#10B981]" />
                <span className="text-xs sm:text-sm font-medium text-text-dim">No Card</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 sm:h-5 w-4 sm:w-5 text-[#10B981]" />
                <span className="text-xs sm:text-sm font-medium text-text-dim">19+ Ontario</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Visual Demo Section with Gold */}
      <section className="container mx-auto px-6 py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-text">
              See The Platform
            </h2>
            <p className="text-xl text-text-dim">
              A preview of what's inside
            </p>
          </div>
          
          {/* Glowing Demo Container */}
          <div className="relative">
            {/* Gold Glow Background */}
            <div className="absolute inset-0 -m-12">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FDB022]/15 rounded-full blur-[120px]"></div>
            </div>
            
            {/* Demo Frame with Gold Border */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border-4 border-[#FDB022] shadow-2xl" style={{ boxShadow: '0 0 60px rgba(253, 176, 34, 0.4), 0 20px 80px rgba(0, 0, 0, 0.15)' }}>
                {/* Browser Chrome */}
                <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-lg px-4 py-2 text-sm text-text-dim border border-gray-200">
                      https://mikebets.com/app
                    </div>
                  </div>
                </div>
                
                {/* App Screenshot */}
                <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black relative h-[550px]">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1400&q=80" 
                      alt="Sports Stadium"
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-center">
                    <div className="text-center space-y-6 px-6">
                      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FDB022]/20 border-2 border-[#FDB022] backdrop-blur-sm">
                        <span className="text-sm font-bold text-[#FDB022]">Live Demo</span>
                      </div>
                      <h3 className="text-5xl font-extrabold text-white">
                        Social Betting Interface
                      </h3>
                      <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Share parlays, track your crew's picks, and win together
                      </p>
                      <Button
                        onClick={handleLogin}
                        size="lg"
                        className="h-16 px-10 bg-[#FDB022] hover:bg-[#E69E00] text-black font-bold text-lg rounded-full shadow-2xl mt-6"
                      >
                        Try It Now
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Grid */}
      <section id="features" className="container mx-auto px-4 sm:px-6 py-16 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-20 px-4">
            <h2 className="text-4xl sm:text-6xl font-extrabold mb-4 sm:mb-6 text-text">
              Everything You Need
            </h2>
            <p className="text-lg sm:text-2xl text-text-dim">
              Built for serious bettors
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <Card className="rounded-3xl border border-border bg-white shadow-sm hover:shadow-xl transition-all">
              <CardContent className="pt-10 pb-10 text-center">
                <div className="w-16 h-16 rounded-3xl accent-gradient flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-text">Social Parlays</h3>
                <p className="text-text-dim leading-relaxed text-base">
                  Build parlays together, copy winning strategies, and celebrate wins
                </p>
              </CardContent>
            </Card>
            
            {/* Feature 2 */}
            <Card className="rounded-3xl border border-border bg-white shadow-sm hover:shadow-xl transition-all">
              <CardContent className="pt-10 pb-10 text-center">
                <div className="w-16 h-16 rounded-3xl bg-blue-500 flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-text">Live Analytics</h3>
                <p className="text-text-dim leading-relaxed text-base">
                  Track performance, identify patterns, and improve your strategy
                </p>
              </CardContent>
            </Card>
            
            {/* Feature 3 */}
            <Card className="rounded-3xl border border-border bg-white shadow-sm hover:shadow-xl transition-all">
              <CardContent className="pt-10 pb-10 text-center">
                <div className="w-16 h-16 rounded-3xl bg-orange-500 flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-text">Responsible Gaming</h3>
                <p className="text-text-dim leading-relaxed text-base">
                  Built-in limits and self-exclusion tools keep betting fun
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Social Proof */}
      <section className="container mx-auto px-6 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-6xl font-bold text-[#10B981] mb-3 font-mono">1K+</div>
              <div className="text-text-dim text-lg">Active Users</div>
            </div>
            <div>
              <div className="text-6xl font-bold text-[#10B981] mb-3 font-mono">98%</div>
              <div className="text-text-dim text-lg">Satisfaction</div>
            </div>
            <div>
              <div className="text-6xl font-bold text-[#10B981] mb-3 font-mono">24/7</div>
              <div className="text-text-dim text-lg">Support</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <Card className="rounded-3xl bg-gradient-to-br from-[#10B981]/5 to-[#10B981]/10 border border-[#10B981]/20 shadow-xl">
            <CardContent className="p-16 text-center space-y-6">
              <h2 className="text-5xl font-bold text-text">
                Ready to Win Together?
              </h2>
              <p className="text-xl text-text-dim max-w-2xl mx-auto">
                Join thousands of smart bettors already using MikeBets
              </p>
              <Button
                onClick={handleLogin}
                size="lg"
                className="h-16 px-12 accent-gradient text-white font-bold text-lg rounded-full shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <p className="text-sm text-text-muted pt-4">
                19+ · Ontario · Play Responsibly
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-border mt-20 bg-white">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-sm text-text-muted space-y-2">
            <p>© 2025 MikeBets · Demo Platform</p>
            <p className="text-xs">19+ · Ontario · Play Responsibly</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
