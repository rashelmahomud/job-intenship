import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/resolve/Loading';

const PrivetRoute = ({ children }) => {

    const { email } = useSelector((state) => state.auth.user);
    const { isLoading } = useSelector((state) => state.auth);
    const { pathname } = useLocation();

    if (isLoading) {
        return <Loading />
    }

    if (!email && !isLoading) {
        return <Navigate to="/login" state={{ path: pathname }} />
    }

    return children;
};

export default PrivetRoute;