import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"
import usersReducer from "./users-reducer"
import authReducer from "./auth-reducer"
import appReducer from "./app-reducer";


let reducers = combineReducers({
   DialogsPage: dialogsReducer,
   ProfilePage: profileReducer,
   Sidebar: sidebarReducer,
   UsersPage: usersReducer,
   Auth: authReducer,
   App: appReducer,
})

const store = configureStore({
   reducer: reducers
})


export default store