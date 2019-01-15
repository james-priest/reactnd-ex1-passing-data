import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import FavoriteMovies from './FavoriteMovies.js';
import { profiles, users, movies }  from './data.js';
// import Test from './Test.js';

/*
Use React and the data below to display a list of users alongside their favorite movies.

For detailed instructions, refer to instructions.md.
*/

class App extends Component {
  render() {
    console.log(logo);
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Favorite Movies</h2>
        <FavoriteMovies profiles={profiles} users={users} movies={movies} />
        {/* <Test /> */}
      </div>
    );
  }
}

export default App;
