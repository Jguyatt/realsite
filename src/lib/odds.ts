export function combineAmericanOdds(odds: number[]): number {
  if (odds.length === 0) return 0
  
  // Convert American odds to decimal
  const toDec = (o: number) => o > 0 ? 1 + o / 100 : 1 + 100 / Math.abs(o)
  
  // Multiply all decimal odds
  const product = odds.map(toDec).reduce((a, b) => a * b, 1)
  
  // Convert back to American odds
  const back = product >= 2 ? (product - 1) * 100 : -100 / (product - 1)
  
  return Math.round(back)
}

export function calculatePotentialReturn(stake: number, odds: number): number {
  const decimal = odds > 0 ? 1 + odds / 100 : 1 + 100 / Math.abs(odds)
  return stake * decimal
}

export function calculateParlayPayout(stake: number, odds: number[]): number {
  const combinedOdds = combineAmericanOdds(odds)
  return calculatePotentialReturn(stake, combinedOdds)
}

