import React from 'react';
import ReactLoading from 'react-loading';
import PokemonDetails from './PokemonDetails';
import { Link } from 'react-router-dom';

class PokemonList extends React.Component {
	API = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=27';
	QUERY = 20;

	constructor(props) {
		super(props);

		this.state = {
			error: null,
			isLoading: true,
			pokemons: [],
			hasNext: null,
			hasPrev: null
		};
	}

	componentDidMount() {
		this.fetchPokemons();
	}

	fetchPokemons() {
		let pokemons_ = []

		fetch(this.API)
			.then((response) => {
				response.json().then((pokemons) =>
					pokemons.results.map((pokemon) =>
						fetch(pokemon.url)
							.then((response) => {
								response.json().then((details) =>
									pokemons_.push(details)
								).then(() => { this.setState({ pokemons: pokemons_, isLoading: false, hasNext: pokemons.next, hasPrev: pokemons.previous }); })
									.catch((error) =>
										console.log(error)
									)
							})
					)
				)
			})
	}

	render() {
		const { error, isLoading, hasNext, hasPrev, pokemons } = this.state;
		//console.log(pokemons);

		if (error) {
			return (
				<div class="alert alert-danger" role="alert">
					Error! Message: {error.message}
				</div>
			);
		}

		if (isLoading) {
			return <ReactLoading type={"spokes"} color={"rgb(61, 113, 191)"} />;
		}

		return (
			<React.Fragment>
				<div className="d-flex flex-wrap">
					{pokemons.map((pokemon) => (
						<div className="card text-center mp-1" style={{ width: "12rem" }} key={pokemon.id}>
							<div className="card-body">
								<img src={pokemon.sprites.front_default} alt="front"></img>
								<p>{pokemon.name.toUpperCase()}</p>
								<Link to={{ pathname: `pokemon/${pokemon.id}`, details: pokemon }} params={{ asd: "apad" }} className="btn btn-primary">Details</Link>
							</div>
						</div>
					))}
				</div>
				<div className="d-flex mt-3 mb-3 justify-content-center">
					{hasPrev ? (
						<button className="btn btn-info" onClick={() => { this.API = hasPrev; this.fetchPokemons(); }}>Previous</button>
					) : (
							<div></div>
						)
					}
					{hasNext ? (
						<button className="btn btn-info" onClick={() => { this.API = hasNext; this.fetchPokemons(); }}>Next</button>
					) : (
							<div></div>
						)}
				</div>
			</React.Fragment >
		);
	}
}

export default PokemonList;