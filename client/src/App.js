import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    const { food, searchTerm, searchTermChanged } = this.props;

    this.food = food;
    this.searchTerm = searchTerm;
    this.searchTermChanged = searchTermChanged;
  }

  render() {
    return (
      <div>
        <div className="search">
          <input
            type="text"
            name="search"
            placeholder="Search"
            value={this.searchTerm}
            onChange={e => this.searchTermChanged(e.target.value)}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Origin</th>
              <th>Continent</th>
            </tr>
          </thead>
          <tbody>
            {this.food.map(theFood => (
              <tr key={theFood.name}>
                <td>{theFood.name}</td>
                <td>{theFood.origin}</td>
                <td>{theFood.continent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(store => store, actions)(App);
