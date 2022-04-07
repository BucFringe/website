import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

function ProfilePicture() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isAuthenticated) {
        return (
            <Link path='profile'>
                <img src={user.picture} alt={user.name} />
            </Link>
        )
    }
}

export default ProfilePicture