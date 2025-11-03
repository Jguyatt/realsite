import { create } from 'zustand'

export type Leg = {
  id: string
  league: string
  game: string
  market: string
  odds: number
}

export type Parlay = {
  id: string
  authorId: string
  authorName: string
  legs: Leg[]
  stake: number
  createdAt: string
  isPublic?: boolean
}

export type Comment = {
  id: string
  threadId: string
  authorId: string
  authorName: string
  text: string
  createdAt: string
  reactions?: { emoji: string; count: number }[]
}

export type Thread = {
  id: string
  title: string
  parlayId?: string
  commentCount: number
  createdAt: string
}

export type User = {
  id: string
  name: string
  avatar?: string
  hitRate?: number
  avgOdds?: number
}

export type Limits = {
  dailyDeposit: number
  dailyStake: number
  remainingStake: number
  weeklyStake?: number
  monthlyStake?: number
}

type State = {
  user: User
  friends: User[]
  parlays: Parlay[]
  threads: Thread[]
  comments: Comment[]
  limits: Limits
  currentParlayDraft: Parlay | null
  
  // Actions
  copyParlay: (id: string) => void
  tweakLeg: (parlayId: string, legIndex: number, updates: Partial<Leg>) => void
  postComment: (threadId: string, text: string) => void
  applyStake: (amount: number) => void
  requestLimitChange: (newLimit: number, reason: string) => void
  setCurrentDraft: (parlay: Parlay | null) => void
  updateDraftLeg: (legIndex: number, updates: Partial<Leg>) => void
  removeDraftLeg: (legIndex: number) => void
  addDraftLeg: (leg: Leg) => void
  lockSlip: () => void
}

export const useStore = create<State>((set, get) => ({
  user: { id: 'u1', name: 'You', hitRate: 62, avgOdds: 245 },
  
  friends: [
    { id: 'u2', name: 'Sam', hitRate: 58, avgOdds: 220 },
    { id: 'u3', name: 'Ava', hitRate: 65, avgOdds: 180 },
    { id: 'u4', name: 'Mike', hitRate: 71, avgOdds: 210 }
  ],
  
  parlays: [],
  threads: [],
  comments: [],
  
  limits: {
    dailyDeposit: 500,
    dailyStake: 100,
    remainingStake: 55,
    weeklyStake: 500,
    monthlyStake: 2000
  },
  
  currentParlayDraft: null,
  
  copyParlay: (id) => {
    const p = get().parlays.find(p => p.id === id)
    if (!p) return
    
    const copy: Parlay = {
      ...p,
      id: `draft-${Date.now()}`,
      authorId: get().user.id,
      authorName: get().user.name,
      createdAt: new Date().toISOString()
    }
    
    set({ currentParlayDraft: copy })
  },
  
  tweakLeg: (parlayId, legIndex, updates) => {
    const draft = get().currentParlayDraft
    if (!draft || draft.id !== parlayId) return
    
    const newLegs = [...draft.legs]
    newLegs[legIndex] = { ...newLegs[legIndex], ...updates }
    
    set({
      currentParlayDraft: { ...draft, legs: newLegs }
    })
  },
  
  postComment: (threadId, text) => {
    const newComment: Comment = {
      id: `c-${Date.now()}`,
      threadId,
      authorId: get().user.id,
      authorName: get().user.name,
      text,
      createdAt: new Date().toISOString(),
      reactions: []
    }
    
    set({
      comments: [newComment, ...get().comments],
      threads: get().threads.map(t =>
        t.id === threadId ? { ...t, commentCount: t.commentCount + 1 } : t
      )
    })
  },
  
  applyStake: (amount) => {
    const { limits } = get()
    const newRemaining = limits.remainingStake - amount
    
    if (newRemaining >= 0) {
      set({
        limits: { ...limits, remainingStake: newRemaining }
      })
      return true
    }
    return false
  },
  
  requestLimitChange: (newLimit, reason) => {
    console.log('Limit change requested:', { newLimit, reason })
    // In a real app, this would make an API call
  },
  
  setCurrentDraft: (parlay) => {
    set({ currentParlayDraft: parlay })
  },
  
  updateDraftLeg: (legIndex, updates) => {
    const draft = get().currentParlayDraft
    if (!draft) return
    
    const newLegs = [...draft.legs]
    newLegs[legIndex] = { ...newLegs[legIndex], ...updates }
    
    set({
      currentParlayDraft: { ...draft, legs: newLegs }
    })
  },
  
  removeDraftLeg: (legIndex) => {
    const draft = get().currentParlayDraft
    if (!draft) return
    
    const newLegs = draft.legs.filter((_, i) => i !== legIndex)
    
    set({
      currentParlayDraft: { ...draft, legs: newLegs }
    })
  },
  
  addDraftLeg: (leg) => {
    const draft = get().currentParlayDraft
    if (!draft) {
      set({
        currentParlayDraft: {
          id: `draft-${Date.now()}`,
          authorId: get().user.id,
          authorName: get().user.name,
          legs: [leg],
          stake: 10,
          createdAt: new Date().toISOString()
        }
      })
    } else {
      set({
        currentParlayDraft: {
          ...draft,
          legs: [...draft.legs, leg]
        }
      })
    }
  },
  
  lockSlip: () => {
    const draft = get().currentParlayDraft
    if (!draft) return
    
    const finalParlay = {
      ...draft,
      id: `p-${Date.now()}`,
      createdAt: new Date().toISOString()
    }
    
    set({
      parlays: [finalParlay, ...get().parlays],
      currentParlayDraft: null
    })
  }
}))

