import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container text-center h-100">
          <span>Thanks to <a href="https://pokeapi.co/">PokéAPI</a></span>
        </div>
      </footer>
    );
  }
}

export default Footer;