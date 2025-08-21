import { getAuth } from "./auth-reducer"

const SET_INIT = "SET_INIT";

let initialState = {
   init: false,
}

const appReducer = (state = initialState, action) => {
   switch (action.type) {

      case SET_INIT:
         return {
            ...state,
            init: true,
         }

      default:
         return state
   }
}

export let setInitCreator = () => ({ type: SET_INIT })

export let setInitThunk = () => async (dispatch) => {
   await dispatch(getAuth())
   dispatch(setInitCreator())
}

export default appReducer