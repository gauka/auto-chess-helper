import { Race } from '../models/Hero'

const prepareRaces = (selectedHeroes) => {
  const races = {}
  _.each(selectedHeroes, hero =>
    _.each(hero.races, (race) => {
      races[race] ? races[race] += 1 : races[race] = 1
    })
  )
  return races
}

const prepareSpecs = (selectedHeroes) => {
  const specs = {}
  _.each(selectedHeroes, hero => {
    specs[hero.spec] ? specs[hero.spec] += 1 : specs[hero.spec] = 1
  })
  return specs
}

const calculateSummaryHealth = (selectedHeroes) => {
  const summaryHealth = selectedHeroes.reduce((acm, current) => acm + current.hps[current.lvl - 1], 0)
  let bonusHealth = 0
  let orcCounter = 0
  selectedHeroes.forEach((hero) => {
    if (hero.races.includes(Race.ORC)) orcCounter++
  })
  if (orcCounter >= 2) bonusHealth += 250
  if (orcCounter >= 4) bonusHealth += 350
  return { summaryHealth, bonusHealth }
}

export {
  prepareRaces,
  prepareSpecs,
  calculateSummaryHealth,
}