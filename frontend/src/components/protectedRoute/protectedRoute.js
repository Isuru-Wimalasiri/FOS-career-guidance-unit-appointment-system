import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loader from '../loader/loader';

const ProtectedRoute = ({ loading, userInfo }) => {
  const location = useLocation();
  if (loading) {
    return <Loader />;
  }
  if (!userInfo) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
