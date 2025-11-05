import { Parlay, Thread, Comment } from './store'

export const mockParlays: Parlay[] = [
  {
    id: 'p1',
    authorId: 'u2',
    authorName: 'Sam',
    stake: 10,
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    legs: [
      {
        id: 'l1',
        league: 'NHL',
        game: 'Leafs vs Bruins',
        market: 'Leafs ML',
        odds: -120
      },
      {
        id: 'l2',
        league: 'NBA',
        game: 'Raptors vs Heat',
        market: 'Raptors +3.5',
        odds: 105
      },
      {
        id: 'l3',
        league: 'NHL',
        game: 'Oilers vs Flames',
        market: 'Over 5.5',
        odds: 110
      },
      {
        id: 'l4',
        league: 'NFL',
        game: 'Bills vs Chiefs',
        market: 'Bills -2.5',
        odds: -105
      }
    ]
  },
  {
    id: 'p2',
    authorId: 'u3',
    authorName: 'Ava',
    stake: 15,
    createdAt: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    legs: [
      {
        id: 'l5',
        league: 'NBA',
        game: 'Lakers vs Warriors',
        market: 'Lakers ML',
        odds: 130
      },
      {
        id: 'l6',
        league: 'NHL',
        game: 'Maple Leafs vs Canadiens',
        market: 'Under 6.5',
        odds: -115
      },
      {
        id: 'l7',
        league: 'NFL',
        game: 'Cowboys vs Eagles',
        market: 'Cowboys +7',
        odds: 110
      }
    ]
  },
  {
    id: 'p3',
    authorId: 'u4',
    authorName: 'Mike',
    stake: 20,
    createdAt: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
    legs: [
      {
        id: 'l8',
        league: 'NBA',
        game: 'Celtics vs Nets',
        market: 'Celtics -5.5',
        odds: -110
      },
      {
        id: 'l9',
        league: 'NHL',
        game: 'Penguins vs Rangers',
        market: 'Rangers ML',
        odds: 145
      }
    ]
  }
]

export const mockThreads: Thread[] = [
  {
    id: 't1',
    title: 'Saturday Slate 🔥',
    parlayId: 'p1',
    commentCount: 3,
    createdAt: new Date(Date.now() - 1000 * 60 * 90).toISOString()
  },
  {
    id: 't2',
    title: 'Sunday Night Football Discussion',
    commentCount: 7,
    createdAt: new Date(Date.now() - 1000 * 60 * 200).toISOString()
  }
]

export const mockComments: Comment[] = [
  {
    id: 'c1',
    parlayId: 'p1',
    authorId: 'u3',
    authorName: 'Ava',
    text: "Love this parlay! I'm tailing the Leafs and Bills picks 💪",
    createdAt: new Date(Date.now() - 1000 * 60 * 85).toISOString(),
    reactions: [
      { emoji: '🔥', count: 3 },
      { emoji: '💯', count: 2 }
    ]
  },
  {
    id: 'c2',
    parlayId: 'p1',
    authorId: 'u4',
    authorName: 'Mike',
    text: 'Iffy on the Raptors spread but the rest looks solid',
    createdAt: new Date(Date.now() - 1000 * 60 * 70).toISOString(),
    reactions: [
      { emoji: '🤔', count: 1 }
    ]
  },
  {
    id: 'c3',
    parlayId: 'p1',
    authorId: 'u2',
    authorName: 'Sam',
    text: '@Mike I hear you, but the Raptors have been covering lately. Worth the risk imo',
    createdAt: new Date(Date.now() - 1000 * 60 * 50).toISOString(),
    reactions: []
  }
]

export const mockGames = [
  {
    id: 'g1',
    league: 'NHL',
    homeTeam: 'Maple Leafs',
    awayTeam: 'Bruins',
    startTime: new Date(Date.now() + 1000 * 60 * 60 * 3).toISOString(),
    markets: [
      { type: 'ML Home', odds: -120 },
      { type: 'ML Away', odds: 105 },
      { type: 'Over 5.5', odds: -110 },
      { type: 'Under 5.5', odds: -105 }
    ]
  },
  {
    id: 'g2',
    league: 'NBA',
    homeTeam: 'Raptors',
    awayTeam: 'Heat',
    startTime: new Date(Date.now() + 1000 * 60 * 60 * 4).toISOString(),
    markets: [
      { type: 'ML Home', odds: 145 },
      { type: 'ML Away', odds: -165 },
      { type: 'Raptors +3.5', odds: 105 },
      { type: 'Heat -3.5', odds: -120 }
    ]
  },
  {
    id: 'g3',
    league: 'NFL',
    homeTeam: 'Bills',
    awayTeam: 'Chiefs',
    startTime: new Date(Date.now() + 1000 * 60 * 60 * 6).toISOString(),
    markets: [
      { type: 'ML Home', odds: -180 },
      { type: 'ML Away', odds: 155 },
      { type: 'Bills -2.5', odds: -105 },
      { type: 'Chiefs +2.5', odds: -110 }
    ]
  },
  {
    id: 'g4',
    league: 'NHL',
    homeTeam: 'Oilers',
    awayTeam: 'Flames',
    startTime: new Date(Date.now() + 1000 * 60 * 60 * 5).toISOString(),
    markets: [
      { type: 'ML Home', odds: -135 },
      { type: 'ML Away', odds: 115 },
      { type: 'Over 5.5', odds: 110 },
      { type: 'Under 5.5', odds: -125 }
    ]
  }
]

