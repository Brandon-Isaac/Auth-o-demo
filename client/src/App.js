import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import Navbar from "./components/Navbar";
// import ProfileCard from "./components/Profilecard";
// import Dashboard from "./components/Dashboard";


function App() {
  const { loginWithRedirect, logout, isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  const callAPI = async () => {
    const token = await getAccessTokenSilently();
    const res = await fetch("http://localhost:5000/api/protected", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    alert(JSON.stringify(data));
  };

  return (
    <div>
      {!isAuthenticated && <button onClick={loginWithRedirect}>Log in</button>}
      {isAuthenticated && (
        <>
          <p>Welcome, {user.name}</p>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
          <button onClick={callAPI}>Call Protected API</button>
        </>
      )}
    </div>
    
  );
}

export default App;
