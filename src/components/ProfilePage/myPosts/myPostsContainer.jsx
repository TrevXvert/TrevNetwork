import { addPostActionCreator } from "../../../redux/profile-reducer"
import MyPosts from "./myPosts"
import { useSelector, useDispatch } from "react-redux";

const MyPostsContainer = () => {
   const ProfilePage = useSelector(state => state.ProfilePage)
   const dispatch = useDispatch()

   const addPost = (data) => {
      dispatch(addPostActionCreator(data))
   }

   return <MyPosts ProfilePage={ProfilePage} addPost={addPost} />
}

export default MyPostsContainer