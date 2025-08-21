import ProfilePage from "./ProfilePage"
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from "react"
import Posts from './posts/posts';
import { getUserThunk, setUserStatusThunk, updateStatusThunk } from "../../redux/profile-reducer"
import useAuthRedirect from "../../hooks/useAuthRedirect"


const ProfileContainer = () => {

   useAuthRedirect()

   const dispatch = useDispatch()
   const state = useSelector(state => state.ProfilePage.PostsData)
   const profile = useSelector(state => state.ProfilePage.Profile)
   const status = useSelector(state => state.ProfilePage.status)

   const [searchParams] = useSearchParams();

   const searchUserId = searchParams.get('id');
   const authUserId = useSelector(state => state.Auth.userId)

   const userId = searchUserId || authUserId

   let updateStatus = (status) => {
      dispatch(updateStatusThunk(status))
   }

   let PostsElements = state.map((post) =>
      <Posts key={post.id} message={post.text} avatar={post.avatar} likesCount={post.likesCount} />)

   useEffect(() => {
      if (userId) {
         dispatch(getUserThunk(userId))
         dispatch(setUserStatusThunk(userId))
      }
   }, [userId, dispatch])

   return <ProfilePage updateStatus={updateStatus} status={status} profile={profile} PostsElements={PostsElements} />

}
export default ProfileContainer