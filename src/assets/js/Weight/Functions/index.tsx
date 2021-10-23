const kilogramsToGrams = (kilograms: number): number => {
  return kilograms * 1000
}

const poundsToGrams = (pounds: number): number => {
  return pounds * 453.59237
}

const ouncesToGrams = (ounces: number): number => {
  return ounces * 28.34952
}

const stonesToGrams = (stones: number): number => {
  return stones * 6350.293
}

const gramsToKilograms = (grams: number): number => {
  return grams / 1000.0
}

const gramsToPounds = (grams: number): number => {
  return grams / 453.59237
}

const gramsToOunces = (grams: number): number => {
  return grams / 28.35
}

const gramsToStones = (grams: number): number => {
  return grams / 6350.0
}

export {
  kilogramsToGrams,
  poundsToGrams,
  ouncesToGrams,
  stonesToGrams,
  gramsToKilograms,
  gramsToPounds,
  gramsToOunces,
  gramsToStones
}
