import Profile from './profile/profile';
import MyPostsContainer from './myPosts/myPostsContainer';
import Preloader from '../common/preloader/preloader';

const ProfilePage = (props) => {
   const profile = props.profile

   if (!profile || !profile.fullName) {
      return <Preloader />;
   }



   return (
      <div>
         <Profile updateStatus={props.updateStatus} status={props.status} name={profile.fullName} country={profile.country} city={profile.city} phone={profile.phone} background={profile.background} avatar={profile.avatar} aboutMe={profile.aboutMe} />

         <MyPostsContainer addPost={() => console.log("add")} />

         <div className='posts'>

            {props.PostsElements}

         </div>

      </div>

   )
}

export default ProfilePage