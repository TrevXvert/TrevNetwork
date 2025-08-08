import ProfilePage from "./ProfilePage"
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from "react"
import Posts from './posts/posts';
import { getUser, setUserStatus, updateStatus } from "../../redux/profile-reducer"
import useAuthRedirect from "../../hooks/useAuthRedirect"


const ProfileContainer = () => {

   // useAuthRedirect()
   const state = useSelector(state => state.ProfilePage.PostsData)
   const profile = useSelector(state => state.ProfilePage.Profile)
   const status = useSelector(state => state.ProfilePage.status)
   const dispatch = useDispatch()
   const [searchParams] = useSearchParams();
   const userId = searchParams.get('id');

   if (userId) {
      dispatch(setUserStatus(userId))
   }


   let PostsElements = state.map((post) =>
      <Posts key={post.id} message={post.text} avatar={post.avatar} likesCount={post.likesCount} />)

   useEffect(() => {
      dispatch(getUser(userId))
   }, [])

   return <ProfilePage updateStatus={updateStatus} status={status} profile={profile} PostsElements={PostsElements} />

}
export default ProfileContainer