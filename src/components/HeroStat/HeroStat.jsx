import React from 'react'
import { sumCost, dps } from '../../utils/math'
import { prepareRaces, prepareSpecs, calculateSummaryHealth } from '../../utils/game_logic'

const RaceBonusesStatBlock = ({ races }) => (
  <div className="races">
    <h3>Race bonuses</h3>
    {Object.keys(races).map((hero) => (
      <span
        className={`race ${hero.toLowerCase()}`}
        key={hero}
      >
        <span className="race-count">{races[hero]}</span>
      </span>
    ))}
  </div>
)

const SpecBonusesStatBlock = ({ specs }) => (
  <div className="specs">
    <h3>Class bonuses</h3>
    {Object.keys(specs).map((hero) => (
      <span
        className={`spec ${hero.toLowerCase()}`}
        key={hero}
      >
        <span className="spec-count">{specs[hero]}</span>
      </span>
    ))}
  </div>
)

const ValueStatBlock = ({ iconClassName, title, value, bonus = 0 }) => (
  <div className="value-block">
    <i className={iconClassName} />
    <span className="title">{title}</span>
    <span className="value">{value}</span>
    {bonus !== 0 && <span className="value-bonus"> + {bonus}</span>}
  </div>
)

const HeroStat = ({ selectedHeroes, setHeroLevel }) => {
  const selectedHeroesArray = _.toArray(selectedHeroes)
  if (selectedHeroesArray.length === 0) return null
  return (
    <div className="container hero-stat">
      <div className="row">
        <div className="col-lg-3 col-xs-12">
          {selectedHeroesArray.map((hero) => (
            <div key={hero.name} className="hero">
              <span className={`d2mh ${hero.img} active`} />
              <i
                className="fas fa-star star first"
                onClick={() => setHeroLevel(hero.name, 1)}
              />
              <i
                className={`${hero.lvl > 1 ? 'fas' : 'far'} fa-star star hovered`}
                onClick={() => setHeroLevel(hero.name, hero.lvl > 1 ? 1 : 2)}
              />
              <i
                className={`${hero.lvl > 2 ? 'fas' : 'far'} fa-star star hovered`}
                onClick={() => setHeroLevel(hero.name, hero.lvl === 3 ? 2 : 3)}
              />
              <span>{hero.name}</span>
            </div>
          ))}
        </div>
        <div className="col-lg-9 col-xs-12 info">
          <h3>Heroes {selectedHeroesArray.length} out of 10</h3>
          <ValueStatBlock
            iconClassName="fas fa-heart-broken"
            title="Summary dps:"
            value={selectedHeroesArray.reduce((acm, current) => acm + dps(current), 0)}
          />
          <ValueStatBlock
            iconClassName="fas fa-heart"
            title="Summary health:"
            value={calculateSummaryHealth(selectedHeroesArray).summaryHealth}
            bonus={calculateSummaryHealth(selectedHeroesArray).bonusHealth}
          />
          <ValueStatBlock
            iconClassName="fas fa-coins"
            title="Summary cost:"
            value={selectedHeroesArray.reduce((acm, current) => acm + sumCost(current), 0)}
          />
          <ValueStatBlock
            iconClassName="fas fa-shield-alt"
            title="Summary armor:"
            value={selectedHeroesArray.reduce((acm, current) => acm + current.armor, 0)}
          />
          <RaceBonusesStatBlock races={prepareRaces(selectedHeroes)} />
          <SpecBonusesStatBlock specs={prepareSpecs(selectedHeroes)} />
        </div>
      </div>
    </div>
  )
}
export default HeroStat