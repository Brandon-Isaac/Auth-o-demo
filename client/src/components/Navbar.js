import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <h2>Auth0 Demo</h2>
      {isAuthenticated ? (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log in</button>
      )}
    </nav>
  );
};

export default Navbar;
