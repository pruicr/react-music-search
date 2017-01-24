import React, { Component } from 'react'

import './App.css'

export default class Profile extends Component {
  render() {
    let artist = {name: '', followers: {total: ''}, images: [{url: ''}], genres: []}
    artist = this.props.artist !== null ? this.props.artist : artist
    return (
      <div className="profile">
        <img className="profile-img" src={artist.images[0].url} alt="Profile"/>
        <div className="profile-info">
          <div className="profile-name">{artist.name}</div>
          <div className="profile-followers">{artist.followers.total} followers</div>
          <div className="profile-genres">
            {
              artist.genres.map((genre, k) => {
                genre = genre !== artist.genres[artist.genres.length - 1] ? ` ${genre},` : ` & ${genre}`
                return(
                  <span key={k}>{genre}</span>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}