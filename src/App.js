import React from 'react';
import './styles/main.scss'
import 'react-spotify-auth/dist/index.css'
import Header from './components/Header';
import Card from './components/Card'
import SignInBtn from './components/SignInBtn';
import SpotifyWebApi from 'spotify-web-api-js';

function App() {
  const [spotifyToken, setSpotifyToken] = React.useState()
  const [topTracks, setTopTracks] = React.useState()
  const [userData, setUserData] = React.useState()

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
        .then(data => {
          console.log(data.items[0].album.artists)
          setTopTracks(data.items)
        })
        .catch(err => console.error(err))

      spotify.getMe()
        .then(data => {
          console.log(data)
          setUserData(data)
        })
        .catch(err => console.error(err))
    }
  }, [])

  console.log(topTracks)

  let trackElements
  if(topTracks) {
    trackElements = topTracks.map(track => {
      return (
        <Card 
          key = {track.id} 
          name = {track.name}
          image = {track.album.images[1].url}
        />
      )
    })
  }

  return (
    <div className='app'>
      { spotifyToken && topTracks && userData ? (
        <main>
          <Header 
           userName = {userData.display_name}
          />
          <div className='elements-container'>
            {trackElements}
          </div>
        </main>
      ) : (
        <SignInBtn URL = {loginUrl} />
      )}
    </div>
  )
}

export default App;