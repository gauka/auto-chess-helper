import React from 'react'
import _ from 'lodash'
import HeroPicker from '../HeroPicker/HeroPicker'
import HeroStat from '../HeroStat/HeroStat'
import Heroes from '../../models/Heroes'


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedHeroes: {},
    }
  }

  pickHero = (hero) => {
    const isActiveHero = _.find(this.state.selectedHeroes, current => current.name === hero.name)
    const newSelectedHeroes = this.state.selectedHeroes
    if (isActiveHero) {
      delete newSelectedHeroes[hero.name]
    } else {
      newSelectedHeroes[hero.name] = hero
    }
    this.setState({ selectedHeroes: newSelectedHeroes })
  }

  setHeroLevel = (heroName, level) => {
    const newSelectedHeroes = this.state.selectedHeroes
    newSelectedHeroes[heroName].lvl = level
    this.setState({ selectedHeroes: newSelectedHeroes })
  }

  render() {
    return (
      <div>
        <HeroStat
          selectedHeroes={this.state.selectedHeroes}
          setHeroLevel={this.setHeroLevel}
        />
        <HeroPicker
          heroes={Heroes}
          pickHero={this.pickHero}
          selectedHeroes={this.state.selectedHeroes}
        />
      </div>
    )
  }
}
export default Main