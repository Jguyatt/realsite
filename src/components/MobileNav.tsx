'use client'

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  tabs: Array<{ id: string; name: string; icon: any }>
  activeTab: string
  onTabChange: (tabId: string) => void
}

export default function MobileNav({ tabs, activeTab, onTabChange }: MobileNavProps) {
  const [open, setOpen] = useState(false)
  
  const handleTabClick = (tabId: string) => {
    onTabChange(tabId)
    setOpen(false)
  }
  
  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl accent-gradient flex items-center justify-center shadow-md">
            <TrendingUp className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-text">
            Mike<span className="text-[#10B981]">Bets</span>
          </span>
        </div>
        
        {/* Menu Button */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-xl">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <div className="flex flex-col h-full bg-white">
              {/* Logo */}
              <div className="p-6 border-b border-border">
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
              <nav className="flex-1 p-4 space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
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
              
              {/* User Profile */}
              <div className="p-4 border-t border-border">
                <div className="flex items-center gap-3 px-4 py-3 bg-surface-hover rounded-2xl">
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
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

