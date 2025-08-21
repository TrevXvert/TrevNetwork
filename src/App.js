import './App.css';
import Sidebar from './components/sidebar/sidebar';
import ProfileContainer from './components/ProfilePage/ProfilePageContainer';
import { Routes, Route } from 'react-router';
import DialogsContainer from './components/Dialogs/dialogsContainer';
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/header/headerContainer';
import LoginContainer from './components/Login/LoginContainer';
import { useDispatch, useSelector } from 'react-redux';
import { setInitThunk } from "./redux/app-reducer"



function App() {

  const dispatch = useDispatch()
  dispatch(setInitThunk())

  return (

    <div className="App">

      <HeaderContainer />

      <div className='wrapper container'>

        <Sidebar />
        <div className='content'>
          {/* -------------------------------------------------------------------------------------------------------------- */}


          <Routes>

            <Route path="/dialogs/*" element={<DialogsContainer />} />

            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/profile/*" element={<ProfileContainer />} />

            <Route path="/users" element={<UsersContainer />} />

            <Route path="/login/*" element={<LoginContainer />} />

          </Routes>



          {/* -------------------------------------------------------------------------------------------------------------- */}
        </div>

      </div>
    </div>
  );
}

export default App;
