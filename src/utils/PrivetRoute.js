import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {

    const { email } = useSelector((state) => state.auth.user);
    const { isLoading } = useSelector((state) => state.auth);
    const { pathname } = useLocation();

    if (isLoading) {
        return <p>Loading....</p>
    }

    if (!email && !isLoading) {
        return <Navigate to="/login" state={{ path: pathname }} />
    }

    return children;
};

export default PrivetRoute;