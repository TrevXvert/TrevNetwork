import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer"
import MyPosts from "./myPosts"
import { useSelector, useDispatch } from "react-redux";

const MyPostsContainer = () => {
   const NewPostText = useSelector(state => state.ProfilePage.NewPostText)
   const ProfilePage = useSelector(state => state.ProfilePage)
   const dispatch = useDispatch()

   const updateNewPostText = (text) => {
      dispatch(updateNewPostTextActionCreator(text))
   }

   const addPost = () => {
      dispatch(addPostActionCreator())
   }

   return <MyPosts NewPostText={NewPostText} ProfilePage={ProfilePage} updateNewPostText={updateNewPostText} addPost={addPost} />
}

export default MyPostsContainer