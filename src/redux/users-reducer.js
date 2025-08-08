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
   pageSize: 4,
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

export let getUsersThunkCreator = (currentPage, pageSize) => {
   return (dispatch) => {
      dispatch(toggleFetchingCreator(true))
      getUsers(currentPage, pageSize)
         .then(response => {
            dispatch(countUsersCreator(response.totalCount))
            dispatch(SetUsersCreator(response.items))
         })
         .catch(error => {
            console.error("Ошибка при получении данных:", error);
         })
         .finally(() => {
            dispatch(toggleFetchingCreator(false));
         });
   }
}

export let followThunkCreator = (userId) => {
   return (dispatch) => {
      dispatch(toggleFollowingProgress(true, userId));
      dispatch(FollowCreator(userId));
      getFollowState(userId).then(response => {
         dispatch(toggleFollowingProgress(false, userId));
      })
   }
}

export let unfollowThunkCreator = (userId) => {
   return (dispatch) => {
      dispatch(toggleFollowingProgress(true, userId));
      dispatch(UnfollowCreator(userId));
      getUnfollowState(userId).then(response => {
         dispatch(toggleFollowingProgress(false, userId))
      })
   }
}


export default usersReducer