import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [message, setMessage] = useState("");

  const fetchProtectedData = async () => {
    try {
      const token = await getAccessTokenSilently();
      const res = await fetch("http://localhost:5000/api/protected", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Failed to fetch protected data");
    }
  };

  if (!isAuthenticated) return null;

  return (
    <div style={{ marginTop: "1rem" }}>
      <h2>Dashboard</h2>
      <button onClick={fetchProtectedData}>Fetch Protected API</button>
      <p>{message}</p>
    </div>
  );
};

export default Dashboard;
