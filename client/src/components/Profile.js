import { useAuth0 } from "@auth0/auth0-react";

const Profile= () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <img src={user.picture} alt={user.name} />
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Nickname: {user.nickname}</p>
    </div>
  );
}

export default Profile;