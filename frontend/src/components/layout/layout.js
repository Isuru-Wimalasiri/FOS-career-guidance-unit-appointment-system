import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { isLogin } from '../../actions/userActions';
import Loader from '../loader/loader';

const Layout = ({ location }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo } = userLogin;

  return loading ? (
    <>
      <Loader />
    </>
  ) : (
    <>
      {userInfo ? (
        <>
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Layout;
