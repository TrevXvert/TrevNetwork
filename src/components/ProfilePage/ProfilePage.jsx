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
         <Profile lookingForAJobDescription={profile.lookingForAJobDescription} lookingForAJob={profile.lookingForAJob} userId={props.userId} updateProfile={props.updateProfile} saveImage={props.saveImage} isOwner={props.isOwner} updateStatus={props.updateStatus}
            status={props.status} fullName={profile.fullName} contacts={profile.contacts}
            city={profile.city} phone={profile.phone}
            avatar={profile.photos} aboutMe={profile.aboutMe} />

         <MyPostsContainer />

         <div className='posts'>

            {props.PostsElements}

         </div>

      </div>

   )
}

export default ProfilePage