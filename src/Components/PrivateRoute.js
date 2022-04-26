import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

import { useAuth } from '../firebase/AuthContext'


export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();

    // if currentUser is null, redirect to login page. Else, render component with props.
    return currentUser ? <Outlet /> : <Navigate to="/login" />;
}
