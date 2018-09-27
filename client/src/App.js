import React from 'react';
import './App.css';

function App({ food, searchTerm, searchTermChanged }) {
  return (
    <div>
      <div className="search">
        <input
          type="text"
          name="search"
          placeholder="Search"
          value={searchTerm}
          onChange={e => searchTermChanged(e.target.value)}
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
          {food.map(theFood => (
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

export default (App);
