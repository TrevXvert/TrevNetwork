import { getUserProfile, getUserStatus, updateUserStatus } from "../api/api"

const ADD_POST = "ADD-POST";
const SHOW_PROFILE = "GET-PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";



let initialState = {
   PostsData: [
      {
         id: 1,
         text: "Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Имени, дорогу продолжил языкового вершину страна все подзаголовок щеке его деревни агентство! Запятых что моей обеспечивает эта знаках, ты строчка! Жизни, за которой пустился жаренные свое решила то коварных коварный использовало переписывается маленький журчит текстов оксмокс но подпоясал вершину взгляд.",
         avatar: "https://avatars.mds.yandex.net/i?id=7a0a91c5a0d3faf537c1360d8cb0995a_l-7999331-images-thumbs&n=13",
         likesCount: 202,
      },
      {
         id: 2,
         text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequuntur iusto voluptas corrupti esse odit",
         avatar: "https://avatars.mds.yandex.net/i?id=f1322a00cdae16fd4cb790fdfa87a3bb_l-5905988-images-thumbs&n=13",
         likesCount: 3,
      }
   ],
   Profile: {},
   status: ""
}

const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 3,
            text: action.data.Post,
            likesCount: 0,
         }
         return {
            ...state,
            PostsData: [...state.PostsData, newPost],
         }

      case SHOW_PROFILE:
         return {
            ...state,
            Profile: action.profile
         }
      case SET_USER_STATUS:
         return {
            ...state,
            status: action.status
         }
      case UPDATE_USER_STATUS:
         return {
            ...state,
            status: action.status
         }

      default:
         return state
   }
}


export let addPostActionCreator = (data) => ({ type: ADD_POST, data })
export let showProfileCreator = (profile) => ({ type: SHOW_PROFILE, profile })
export let setUserStatusCreator = (status) => ({ type: SET_USER_STATUS, status })
export let updateUserStatusCreator = (status) => ({ type: UPDATE_USER_STATUS, status })

export let getUserThunk = (userId) => async (dispatch) => {
   const response = await getUserProfile(userId)
   dispatch(showProfileCreator(response.data))
}

export let setUserStatusThunk = (userId) => async (dispatch) => {
   const response = await getUserStatus(userId)
   if (response.data) {
      dispatch(setUserStatusCreator(response.data))
   } else {
      dispatch(setUserStatusCreator(""))
   }

}


export let updateStatusThunk = (status) => async () => {
   await updateUserStatus(status)
}


export default profileReducer