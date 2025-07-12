import './App.css';
import LoginButton from './components/Loginbutton';
import LogoutButton from './components/Logoutbutton';
import Profile from './components/Profile';

// import { useAuth0 } from '@auth0/auth0-react';

function App() {
  return (
   <main className="App"
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#282c34',
      color: 'white',
    }}
   >
    <h1>AUTH0 LOGIN</h1>
    <LoginButton/>
    <LogoutButton/>
    <Profile/>
  </main>
  );
}

export default App;
