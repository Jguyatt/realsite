'use client'

import { useState } from "react"
import { cn } from "@/lib/utils"
import { 
  Home, 
  TrendingUp, 
  MessageSquare, 
  Shield, 
  User,
  Lock,
  Zap,
  UserPlus
} from "lucide-react"
import MobileNav from "@/components/MobileNav"

// Import demo pages
import FeedPage from "@/app/feed/page"
import BuilderPage from "@/app/demo/builder/page"
import KYCPage from "@/app/demo/kyc/page"
import TrustPage from "@/app/demo/trust/page"
import SecurityPage from "@/app/security/page"
import P2PPage from "@/app/p2p/page"
import ContactsPage from "@/app/contacts/page"

const tabs = [
  { id: 'feed', name: 'Feed', icon: Home },
  { id: 'builder', name: 'Builder', icon: TrendingUp },
  { id: 'p2p', name: 'P2P Bets', icon: Zap },
  { id: 'contacts', name: 'Add Contact', icon: UserPlus },
]

export default function AppSimulator() {
  const [activeTab, setActiveTab] = useState('feed')
  
  const renderContent = () => {
    switch (activeTab) {
      case 'feed':
        return <FeedPage />
      case 'builder':
        return <BuilderPage />
      case 'p2p':
        return <P2PPage />
      case 'contacts':
        return <ContactsPage />
      default:
        return <FeedPage />
    }
  }
  
  return (
    <div className="flex h-screen bg-[#FAFAFA]">
      {/* Mobile Navigation */}
      <MobileNav tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-72 bg-white border-r border-border flex-col">
        {/* Logo */}
        <div className="p-8 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl accent-gradient flex items-center justify-center shadow-md">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-text">
              Mike<span className="text-[#10B981]">Bets</span>
            </span>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 p-6 space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-5 py-4 rounded-2xl font-medium transition-all",
                  activeTab === tab.id
                    ? "bg-[#10B981] text-white shadow-lg"
                    : "text-text-dim hover:bg-surface-hover hover:text-text"
                )}
              >
                <Icon className="h-5 w-5" />
                {tab.name}
              </button>
            )
          })}
        </nav>
        
        {/* Bottom Section */}
        <div className="p-6 border-t border-border space-y-4">
          <div className="flex items-center gap-3 px-5 py-4 bg-surface-hover rounded-2xl border border-border">
            <div className="w-10 h-10 rounded-full accent-gradient flex items-center justify-center font-bold text-white shadow-md">
              J
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold truncate text-text">Jacob</div>
              <div className="text-xs text-text-muted truncate">jacob@demo.com</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-[#FAFAFA] lg:pt-0 pt-16">
        {renderContent()}
      </div>
    </div>
  )
}
