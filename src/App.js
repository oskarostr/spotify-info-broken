import React from 'react';
import './styles/main.scss'
import 'react-spotify-auth/dist/index.css'
import Navbar from './components/Navbar';
import Card from './components/Card'
import SpotifyWebApi from 'spotify-web-api-js';

function App() {
  const [spotifyToken, setSpotifyToken] = React.useState()
  const [topTracks, setTopTracks] = React.useState()

  const spotify = new SpotifyWebApi()

  const authEndpoint = "https://accounts.spotify.com/authorize"
  const redirectUri = 'http://localhost:3000/callback'
  const clientID = '38c53561ad794547901185e5b90be818'

  const scopes = [
    'user-read-currently-playing',
    'user-top-read'
  ]

  const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

  const getTokenFromUrl = () => {
    return window.location.hash
      .substring(1)
      .split('&')
      .reduce((initial, item) => {
        let parts = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1])

        return initial
      }, {})
  }

  React.useEffect(() => {
    const token = getTokenFromUrl().access_token
    window.location.hash = ''

    if(token) {
      setSpotifyToken(token)

      spotify.setAccessToken(token)

      spotify.getMyTopTracks()
        .then(data => setTopTracks(data))
        .catch(err => console.error(err))
    }
  }, [])

  console.log(topTracks)

  /*const trackElements = topTracks.map(track => {
    return (
      <Card 
        name = {track.name}
      />
    )
  })*/

  return (
    <div className='app'>
      { spotifyToken && topTracks ? (
        <main>
          <h1>{topTracks.href}</h1>
        </main>
      ) : (
        <div className='btn-wrapper'>
          <a href = {loginUrl} className='sign-in-btn'>Sign in</a>
        </div>
      )}
    </div>
  )
}

export default App;