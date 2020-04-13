import React from 'react';

import { CardList } from "./components/card-list/card-list.component";

import './App.css';
import {SearchBox} from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({
        monsters: users
      }))
  }

  updateSearchField = (event) => {
    this.setState({
      searchField: event.target.value
    });
  }

  render() {
    const filtredMonsters = this.state.monsters.filter(m => m.name.toLowerCase().includes(this.state.searchField));
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monster" handleChange={this.updateSearchField} />
        <CardList monsters={filtredMonsters} />
      </div>
    )
  }
}

export default App;
