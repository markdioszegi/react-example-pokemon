import React from 'react';
import logo from '../logo512.png'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Layout extends React.Component {
	render() {
		return (
			<Navbar bg="dark" variant="dark" expand="lg">
				<Navbar.Brand as={Link} to="/"><img className="logo" width="128px" src={logo} alt="PokeDB"></img></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link as={Link} to="/">Home</Nav.Link>
						<Nav.Link as={Link} to="/pokemons">Pokémons</Nav.Link>
						<Nav.Link as={Link} to="/types">Types</Nav.Link>
						{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							</NavDropdown> */}
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-info">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar >
		);
	}
}

export default Layout;