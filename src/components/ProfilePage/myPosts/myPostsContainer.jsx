import { useCallback } from "react";
import { addPostActionCreator } from "../../../redux/profile-reducer"
import MyPostsForm from "./myPosts"
import { useDispatch } from "react-redux";

const MyPostsContainer = () => {

   console.log("container");

   const dispatch = useDispatch()

   const addPost = useCallback((data) => {
      dispatch(addPostActionCreator(data))
   }, [dispatch])

   return <MyPostsForm addPost={addPost} />
}

export default MyPostsContainer