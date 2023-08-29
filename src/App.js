import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProfileScreen from './screens/ProfileScreen';
import FuturePage from './screens/FuturePage';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);


  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path='/futurepage' element={<FuturePage />} />
            <Route exact path='/profile' element={<ProfileScreen />} />
            <Route exact path="/" element={<HomeScreen />}>


            </Route>
          </Routes>

        )}

      </Router>
    </div>
  );
}

export default App;