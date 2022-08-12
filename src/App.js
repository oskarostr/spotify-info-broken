import './styles/main.scss'
import Navbar from './components/Navbar';
import React from 'react';
import { SpotifyApiContext } from 'react-spotify-api';
import { SpotifyAuth, Scopes } from 'react-spotify-auth';
import Cookies from 'js-cookie'

function App() {
  const [token, setToken] = React.useState(Cookies.get('spotifyAuthToken'))

  return (
    <div>
      { token ? (
        <SpotifyApiContext.Provider value = {token}>
          <p>logged in with: {token}</p>
        </SpotifyApiContext.Provider>
      ) : (
        <SpotifyAuth
          redirectUri = 'http://localhost:3000/callback'
          clientID = '0e01d553dd08456bbf881a975efbf52d'
          scopes = {[Scopes.userReadPrivate, Scopes.userReadEmail]}
          onAccessToken = {(token) => setToken(token)}
        />
      )}
      <Navbar />
    </div>
  )
}

export default App;