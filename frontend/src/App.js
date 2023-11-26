import { useEffect } from 'react';
import './App.css';
import ParentForm from './components/parent/parent';
import MainMenu from './components/mainMenu/mainMenu';
import { login, isLogin } from './actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute/protectedRoute';
import Login from './components/login/login';
import StudentProfile from './components/studentProfile/studentProfile';
import { AdvisorProfile } from './components/advisorProfile/advisorProfile';
import Layout from './components/layout/layout';
import Loader from './components/loader/loader';

function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo } = userLogin;
  const dispatch = useDispatch();

  useEffect(() => {
    const getDetails = () => {
      if (!userInfo) {
        dispatch(isLogin());
      }
    };
    getDetails();
  }, [dispatch, userInfo]);

  return (
    <div className="App">
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          {
            <Routes>
              <Route path="/" element={<Layout userDetails={userInfo} />}>
                <Route index element={<MainMenu />} />
                <Route path="appoinment" element={<ParentForm />} />
                <Route path="menu" element={<MainMenu />} />
                <Route
                  path="menu/studentProfile"
                  element={<StudentProfile />}
                />
                <Route
                  path="menu/advisorProfile"
                  element={<AdvisorProfile />}
                />
                <Route path="/login" element={<Login />} />
              </Route>
              {/* <Route path="/login" element={userInfo ? <ParentForm /> : <Login />} /> */}
            </Routes>
          }
        </>
      )}
    </div>
  );
}

export default App;
