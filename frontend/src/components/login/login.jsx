import React, { useEffect } from 'react';
import './login.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../loader/loader';

const Login = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo } = userLogin;
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo?.user) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const handleSignin = () => {
    window.open('http://localhost:3001/api/v1/auth/google', '_self');
  };
  return loading ? (
    <>
      <Loader />
    </>
  ) : (
    <>
      <div>
        <div className="welcomeContainer">
          <div className="welcomeHeader">
            <h2>Science - C.G.U.</h2>
          </div>
          <div className="welcomeImg">
            <img className="loginImg" src={'./images/login.jpg'} alt="login" />
          </div>
          <div className="welcomeMsg">
            Please signin with your G-suit(Sci)
            <br /> E-mail
          </div>
          <div className="signinBtn">
            <button id="signBtn" onClick={handleSignin}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png"
                alt="google logo"
                width={30}
                height={30}
              />
              <span className="signinTxt">Sign in with google</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
