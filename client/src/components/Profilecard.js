import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ProfileCard = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) return null;

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem", marginTop: "1rem", maxWidth: "300px" }}>
      <img src={user.picture} alt={user.name} style={{ width: "100px", borderRadius: "50%" }} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};

export default ProfileCard;
