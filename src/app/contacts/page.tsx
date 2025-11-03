'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { UserPlus, Search, Mail, Users, Check, X } from "lucide-react"
import { toast } from "sonner"

export default function ContactsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [email, setEmail] = useState("")
  
  const suggestedContacts = [
    {
      id: 1,
      name: "Sarah Chen",
      username: "@sarahc",
      mutualFriends: 5,
      hitRate: 68,
      status: "suggested"
    },
    {
      id: 2,
      name: "James Wilson",
      username: "@jwilson",
      mutualFriends: 3,
      hitRate: 72,
      status: "suggested"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      username: "@emilyr",
      mutualFriends: 8,
      hitRate: 65,
      status: "suggested"
    },
    {
      id: 4,
      name: "Marcus Johnson",
      username: "@mjohnson",
      mutualFriends: 2,
      hitRate: 71,
      status: "suggested"
    }
  ]
  
  const pendingRequests = [
    {
      id: 5,
      name: "Alex Kim",
      username: "@alexk",
      mutualFriends: 4,
      hitRate: 63,
      status: "pending"
    },
    {
      id: 6,
      name: "Lisa Brown",
      username: "@lisab",
      mutualFriends: 6,
      hitRate: 69,
      status: "pending"
    }
  ]
  
  const handleAddContact = (contact: any) => {
    toast.success(`Friend request sent to ${contact.name}!`, {
      duration: 3000
    })
  }
  
  const handleAcceptRequest = (contact: any) => {
    toast.success(`${contact.name} is now your friend!`, {
      duration: 3000
    })
  }
  
  const handleRejectRequest = (contact: any) => {
    toast.success(`Declined request from ${contact.name}`, {
      duration: 2000
    })
  }
  
  const handleInviteByEmail = () => {
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address")
      return
    }
    toast.success(`Invitation sent to ${email}!`, {
      duration: 3000
    })
    setEmail("")
  }
  
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-border py-3">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2 text-xs text-text-muted">
            <Users className="h-3.5 w-3.5 text-[#10B981]" />
            <span className="font-medium">Build your betting crew</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-8 py-10 max-w-5xl">
        <div className="space-y-10">
          {/* Header */}
          <div className="space-y-3">
            <h1 className="text-5xl font-bold tracking-tight text-text">Add Contacts</h1>
            <p className="text-text-dim text-xl">
              Build your betting crew and share picks with friends
            </p>
          </div>
          
          {/* Invite by Email */}
          <Card className="rounded-3xl bg-gradient-to-br from-[#10B981]/5 to-[#10B981]/10 border-[#10B981]/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-text flex items-center gap-2">
                <Mail className="h-6 w-6 text-[#10B981]" />
                Invite by Email
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="friend@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-2xl bg-white border-border text-base placeholder:text-text-muted"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleInviteByEmail()
                    }
                  }}
                />
                <Button
                  onClick={handleInviteByEmail}
                  className="accent-gradient text-white font-semibold rounded-full px-8 shadow-lg whitespace-nowrap"
                >
                  Send Invite
                </Button>
              </div>
              <p className="text-sm text-text-dim">
                Invite friends who aren't on MikeBets yet. They'll get an email to join.
              </p>
            </CardContent>
          </Card>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
            <Input
              placeholder="Search by name or username..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-14 pl-12 rounded-2xl bg-white border-border text-base"
            />
          </div>
          
          {/* Pending Friend Requests */}
          {pendingRequests.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-text flex items-center gap-2">
                <UserPlus className="h-6 w-6 text-[#10B981]" />
                Pending Requests
              </h2>
              
              <div className="space-y-3">
                {pendingRequests.map((contact) => (
                  <Card key={contact.id} className="rounded-3xl bg-white border-border shadow-sm hover:shadow-xl transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="accent-gradient text-white font-bold">
                              {contact.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-bold text-lg text-text">{contact.name}</div>
                            <div className="text-sm text-text-dim">{contact.username}</div>
                            <div className="flex items-center gap-3 mt-1">
                              <span className="text-xs text-text-muted">{contact.mutualFriends} mutual friends</span>
                              <span className="text-xs text-text-muted">·</span>
                              <span className="text-xs font-mono font-semibold text-[#10B981]">{contact.hitRate}% hit rate</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button
                            onClick={() => handleAcceptRequest(contact)}
                            className="accent-gradient text-white font-semibold rounded-full px-6"
                          >
                            <Check className="h-4 w-4 mr-2" />
                            Accept
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => handleRejectRequest(contact)}
                            className="border-border rounded-full px-6 hover:bg-red-50 hover:border-red-300 hover:text-red-600"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          {/* Suggested Contacts */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text flex items-center gap-2">
              <Users className="h-6 w-6 text-[#10B981]" />
              Suggested Friends
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {suggestedContacts.map((contact) => (
                <Card key={contact.id} className="rounded-3xl bg-white border-border shadow-sm hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-11 w-11">
                          <AvatarFallback className="accent-gradient text-white font-bold">
                            {contact.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-bold text-base text-text">{contact.name}</div>
                          <div className="text-sm text-text-dim">{contact.username}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-text-muted">Mutual:</span>
                        <span className="font-semibold text-text ml-1">{contact.mutualFriends}</span>
                      </div>
                      <div className="w-px h-4 bg-border"></div>
                      <div>
                        <span className="text-text-muted">Hit Rate:</span>
                        <span className="font-mono font-bold text-[#10B981] ml-1">{contact.hitRate}%</span>
                      </div>
                    </div>
                    
                    <Button
                      onClick={() => handleAddContact(contact)}
                      className="w-full accent-gradient text-white font-semibold rounded-full shadow-md"
                    >
                      <UserPlus className="h-4 w-4 mr-2" />
                      Add Friend
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Info Card */}
          <Card className="rounded-3xl bg-gray-50 border-0">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 text-text">Why Add Friends?</h3>
              <ul className="space-y-3 text-text-dim text-base">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-[#10B981]" />
                  </div>
                  <span>See their parlays and copy winning strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-[#10B981]" />
                  </div>
                  <span>Track their hit rates and follow top performers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-[#10B981]" />
                  </div>
                  <span>Share picks in private threads and celebrate wins together</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-[#10B981]" />
                  </div>
                  <span>Create and accept P2P microbets on live events</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

