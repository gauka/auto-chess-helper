import Hero, { Race, Spec } from './Hero'
/*eslint-disable*/
const Heroes = {
  'Axe': new Hero(1, 1, 'Axe', [[50, 55], [100, 110], [200, 220]], [700, 1400, 2800], 1.5, 'axe', [Race.ORC], Spec.WARRIOR),
  'Anti Mage': new Hero(1, 1, 'Anti Mage', [[45, 55], [90, 110], [180, 220]], [500, 1000, 2000], 1.2, 'antimage', [Race.ELF], Spec.DEMON_HUNTER),
  'Crystal Maiden': new Hero(1, 2, 'Crystal Maiden', [[40, 45], [80, 90], [160, 180]], [450, 900, 1800], 1.7, 'crystal_maiden', [Race.HUMAN], Spec.MAGE),
  'Batrider': new Hero(1, 1, 'Batrider', [[40, 55], [80, 110], [160, 220]], [500, 1000, 2000], 1.3, 'batrider', [Race.TROLL], Spec.KNIGHT),
  'Beastmaster': new Hero(1, 2, 'Beastmaster', [[60, 70], [120, 140], [240, 280]], [600, 1200, 2400], 1.3, 'beastmaster', [Race.ORC], Spec.HUNTER),
  'Bounty Hunter': new Hero(1, 1, 'Bounty Hunter', [[50, 70], [100, 140], [200, 280]], [550, 1100, 2200], 1.1, 'bounty_hunter', [Race.GOBLIN], Spec.ASSASIN),
  'Dazzle': new Hero(1, 3, 'Dazzle', [[50, 75], [100, 150], [200, 300]], [550, 1100, 2200], 1.4, 'dazzle', [Race.TROLL], Spec.PRIEST),
  'Death Prophet': new Hero(1, 5, 'Death Prophet', [[50, 60], [100, 120], [200, 240]], [1000, 2000, 4000], 1.4, 'death_prophet', [Race.UNDEAD], Spec.WARLOCK),
  'Doom': new Hero(1, 4, 'Doom', [[110, 120], [220, 240], [440, 480]], [1050, 2100, 4200], 1.3, 'doom', [Race.DEMON], Spec.WARRIOR),
  'Dragon Knight': new Hero(1, 4, 'Dragon Knight', [[50, 60], [100, 120], [200, 240]], [800, 1600, 3200], 1.2, 'dragon_knight', [Race.HUMAN, Race.DRAGON], Spec.KNIGHT, 10),
}

export default Heroes