export default class Hero {
  constructor(lvl, cost, name, attacks, hps, attackSpead, img, races = null, spec = null, armor = 5) {
    this.lvl = lvl
    this.cost = cost
    this.name = name
    this.attacks = attacks
    this.hps = hps
    this.attackSpead = attackSpead
    this.img = img
    this.armor = armor
    this.races = races
    this.spec = spec
  }
}

const Race = {
  ORC: 'Orc',
  BEAST: 'Beast',
  DEMON: 'Demon',
  DRAGON: 'Dragon',
  DWARF: 'Dwarf',
  ELEMENTAL: 'Elemental',
  ELF: 'Elf',
  GOBLIN: 'Goblin',
  SATYR: 'Satyr',
  HUMAN: 'Human',
  OGRE: 'Ogre',
  NAGA: 'Naga',
  TROLL: 'Troll',
  UNDEAD: 'Undead',
  GOD: 'God',
}

const Spec = {
  ASSASIN: 'Assasin',
  DEMON_HUNTER: 'DemonHunter',
  DRUID: 'Druid',
  KNIGHT: 'Knight',
  HUNTER: 'Hunter',
  PRIEST: 'Priest',
  MAGE: 'Mage',
  MECH: 'Mech',
  SHAMAN: 'Shaman',
  WARLOCK: 'Warlock',
  WARRIOR: 'Warrior',
}

export {
  Race,
  Spec,
}