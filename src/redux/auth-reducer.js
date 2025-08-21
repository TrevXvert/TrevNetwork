import { getAuthState, logInUser, logOutUser } from "../api/api"

const SET_USER_DATA = "SET-USER-DATA";
const LOGOUT_USER = "LOGOUT_USER";

let initialState = {
   userId: null,
   username: null,
   email: null,
   isFetching: false,
   isAuth: false,
}

const authReducer = (state = initialState, action) => {

   switch (action.type) {

      case SET_USER_DATA:
         return {
            ...state,
            userId: action.data.userId,
            username: action.data.username,
            email: action.data.email,
            isAuth: true,
         }
      case LOGOUT_USER:
         return {
            ...state,
            userId: null,
            username: null,
            email: null,
            isAuth: false,
         }

      default:
         return state
   }
}


export let setUserDataCreator = (userId, username, email) => ({ type: SET_USER_DATA, data: { userId, username, email } })
export let logoutUserCreator = () => ({ type: LOGOUT_USER })

export let getAuth = () => async (dispatch) => {
   const response = await getAuthState()
   if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data
      dispatch(setUserDataCreator(id, login, email))
   }
}


export let loginUserThunk = (data) => (dispatch) => {

   const { Email, Password, RememberMe } = data

   return logInUser(Email, Password, RememberMe).then(response => {
      if (response.data.resultCode === 0) {
         dispatch(getAuth())
      }
      return response
   })

}

export let logoutUserThunk = () => (dispatch) => {
   return logOutUser().then(response => {
      if (response.data.resultCode === 0) {
         dispatch(logoutUserCreator())
      }
      return response
   })

}


export default authReducer