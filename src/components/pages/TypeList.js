import React from 'react';
import ReactLoading from 'react-loading';

const API = 'https://pokeapi.co/api/v2/type';

export default class TypeList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoading: true,
      items: []
    }
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(result => this.setState({ isLoading: false, items: result.results }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { error, isLoading, items } = this.state;

    if (error) {
      return (
        <div class="alert alert-danger" role="alert">
          Error! Message: {error.message}
        </div>
      );
    }

    if (isLoading) {
      return <ReactLoading type={"spinningBubbles"} color={"red"} />;
    }

    return (
      <ul className>
        {items.map(item => (
          <React.Fragment>
            <li>Type name: {item.name}</li>
            <li>Url: <a href={item.url}>Link</a></li>
          </React.Fragment>
        ))}
      </ul>
    )
  }
}
