import { getAuthState } from "../api/api"

const SET_USER_DATA = "SET-USER-DATA";

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

      default:
         return state
   }
}



export let setUserDataCreator = (userId, username, email) => ({ type: SET_USER_DATA, data: { userId, username, email } })

export let getAuth = () => {
   return (dispatch) => {
      getAuthState().then(response => {
         if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data
            dispatch(setUserDataCreator(id, login, email))
         }
      })
   }
}


export default authReducer