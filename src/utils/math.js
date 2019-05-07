const avg = (nums) => nums.reduce((acm, value) => acm + value, 0) / nums.length

const sumCost = (hero) => {
  let sum = hero.cost
  for (let i = 1; i < hero.lvl; i++)
    sum = sum * 3
  return sum
}

const dps = (hero) => Math.floor(avg(hero.attacks[hero.lvl - 1]) / hero.attackSpead)


export {
  avg,
  sumCost,
  dps,
}