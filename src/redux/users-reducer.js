import { getUsers, getFollowState, getUnfollowState } from "../api/api"
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const COUNT_USERS = "COUNT-USERS";
const CHANGE_PAGE = "CHANGE-PAGE";
const TOGGLE_FETCHING = "TOGGLE-FETCHING"
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS"


let initialState = {
   users: [],
   totalCount: 0,
   pageSize: 6,
   currentPage: 1,
   isFetching: false,
   followingProgress: [],
}

const usersReducer = (state = initialState, action) => {

   switch (action.type) {

      case FOLLOW:
         return {
            ...state,
            users: state.users.map(user =>
               user.id === action.userId ? { ...user, followed: true } : user
            )
         }

      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  return { ...user, followed: false, }
               }

               return user
            })
         }

      case SET_USERS:
         return {
            ...state,
            users: [...action.users]
         }

      case COUNT_USERS:
         return {
            ...state,
            totalCount: action.amount
         }

      case CHANGE_PAGE:
         return {
            ...state,
            currentPage: action.pageNumber
         }

      case TOGGLE_FETCHING:
         return {
            ...state,
            isFetching: action.value
         }

      case TOGGLE_FOLLOWING_PROGRESS:
         return {
            ...state,
            followingProgress: action.isFetching
               ? [...state.followingProgress, action.userId]
               : [state.followingProgress.filter((id) => id !== action.userId)]
         }

      default:
         return state
   }
}


export let FollowCreator = (userId) => ({ type: FOLLOW, userId })
export let UnfollowCreator = (userId) => ({ type: UNFOLLOW, userId })
export let SetUsersCreator = (users) => ({ type: SET_USERS, users })
export let countUsersCreator = (amount) => ({ type: COUNT_USERS, amount })
export let changePageCreator = (pageNumber) => ({ type: CHANGE_PAGE, pageNumber })
export let toggleFetchingCreator = (value) => ({ type: TOGGLE_FETCHING, value })
export let toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId })



export let getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
   dispatch(toggleFetchingCreator(true))
   const response = await getUsers(currentPage, pageSize)
   dispatch(countUsersCreator(response.totalCount))
   dispatch(SetUsersCreator(response.items))
   dispatch(toggleFetchingCreator(false));
}

const followUnfollowFlow = async (dispatch, userId, actionCreator, apiMethod) => {
   dispatch(toggleFollowingProgress(true, userId));
   await dispatch(actionCreator(userId));
   await apiMethod(userId);
   dispatch(toggleFollowingProgress(false, userId))
}

export let followThunkCreator = (userId) => (dispatch) => {
   followUnfollowFlow(dispatch, userId, FollowCreator, getFollowState);
}


export let unfollowThunkCreator = (userId) => (dispatch) => {
   followUnfollowFlow(dispatch, userId, UnfollowCreator, getUnfollowState);
}



export default usersReducer