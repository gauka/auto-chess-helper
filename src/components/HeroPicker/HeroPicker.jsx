import _ from 'lodash'
import React from 'react'

const HeroPicker = ({ heroes, pickHero, selectedHeroes }) => (
  <div className="container hero-picker">
    {_.toArray(heroes).map((hero) => (
      <span
        key={hero.name}
        className={`d2mh ${hero.img} ${_.find(selectedHeroes, current => hero.name === current.name) ? 'active' : 'not_active'}`}
        onClick={() => pickHero(hero)}
      />
    ))}
  </div>
)

export default HeroPicker