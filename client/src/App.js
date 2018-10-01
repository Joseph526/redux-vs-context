import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import auth0Client from './Auth/Auth';
import Callback from './Callback/Callback';
import HomePage from './HomePage/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/callback" render={(routeProps) => (
          <Callback
            {...routeProps}
            auth={auth0Client}
          />)
        }/>
        <Route exact path="/" render={(routeProps) => (
          <HomePage
            {...routeProps}
            auth={auth0Client}
            history={routeProps.history}
          />)
        }/>
      </div>
    </Router>
  )
}

export default App;
