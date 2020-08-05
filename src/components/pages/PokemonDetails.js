import React, { Component } from 'react'

export default class Pokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: []
    }
  }

  componentWillMount() {
    this.setState({ pokemon: this.props.location.details })
  }

  render() {
    const { pokemon } = this.state;
    console.log(pokemon);

    return (
      <div className="container text-center">
        <img src={pokemon.sprites.front_default} alt="front"></img>
        <h3>{pokemon.name}</h3>
        <p>Base experience: {pokemon.base_experience}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Height: {pokemon.height}</p>
        <h4>Abilities</h4>
        <div className="d-flex justify-content-center mt-3 mb-3 flex-wrap">
          {pokemon.abilities.map((ability) => (
            <span className="badge badge-secondary" key={ability.ability.name}>{ability.ability.name}</span>
          ))}
        </div>
      </div>
    )
  }
}
