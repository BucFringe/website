import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
        <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
            <div className='grid max-w-[1240px] m-auto px-5 py-5'>
                <img src={user.picture} alt={user.name} />
                <h2>Username : {user.name}</h2>
                <p>Email: {user.email}</p>
            </div>
        </div>
    )
  );
};

export default Profile;