import React, { Component } from 'react';

class FavoriteMovies extends Component {
  render() {
    return (
      <ol>
        {this.props.profiles.map(profile => (
          <li key={profile.id}>
            {/* <p>Id, {profile.id} UserId, {profile.userID}, MovieID {profile.favoriteMovieID}</p> */}
            <div>{this.props.users[profile.userID].name}'s favorite movie is {this.props.movies[profile.favoriteMovieID].name}</div>
          </li>
        ))}
      </ol>
    );
  }
}

export default FavoriteMovies