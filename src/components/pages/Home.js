import React from 'react';

class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="text-center p-5">
					<h1>Welcome to PokéDB!</h1>
					<p>PokéDB is a website where you can browse through Pokémons</p>
				</div>
			</React.Fragment>
		);
	}
}

export default Home;