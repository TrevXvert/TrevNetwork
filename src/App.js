import './App.css';
import Sidebar from './components/sidebar/sidebar';
import { Routes, Route } from 'react-router';
import HeaderContainer from './components/header/headerContainer';
import { useDispatch } from 'react-redux';
import { setInitThunk } from "./redux/app-reducer"
import React, { useEffect, Suspense, lazy } from 'react';

const DialogsContainer = lazy(() => import("./components/Dialogs/dialogsContainer"));
const ProfileContainer = lazy(() => import("./components/ProfilePage/ProfilePageContainer"));
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));
const LoginContainer = lazy(() => import("./components/Login/LoginContainer"));
const NewsContainer = lazy(() => import("./components/News/NewsContainer"));



function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setInitThunk()); // обязательно в useEffect, а не напрямую
  }, [dispatch]);

  return (

    <div className="App">

      <HeaderContainer />

      <div className='wrapper container'>

        <Sidebar />
        <div className='content'>
          {/* -------------------------------------------------------------------------------------------------------------- */}

          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/profile/*" element={<ProfileContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login/*" element={<LoginContainer />} />
              <Route path="/news" element={<NewsContainer />} />
            </Routes>
          </Suspense>



          {/* -------------------------------------------------------------------------------------------------------------- */}
        </div>

      </div>
    </div >
  );
}

export default App;
