import Profile from './profile/profile';
import MyPostsContainer from './myPosts/myPostsContainer';
import Preloader from '../common/preloader/preloader';

const ProfilePage = (props) => {
   const profile = props.profile
   const status = props.status
   if (!profile || !profile.fullName) {
      return <Preloader />;
   }

   return (
      <div>
         <Profile updateStatus={props.updateStatus} status={status} name={profile.fullName} country={profile.country} city={profile.city} phone={profile.phone} background={profile.background} avatar={profile.avatar} aboutMe={profile.aboutMe} />

         <MyPostsContainer />

         <div className='posts'>

            {props.PostsElements}

         </div>

      </div>

   )
}

export default ProfilePage