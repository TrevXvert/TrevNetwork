import p from "./profile.module.css";
import userPhoto from "../../../assets/images/user-photo.webp"
import { useEffect, useState } from "react";
import ProfileForm from "../ProfileForm/ProfileForm";
const Profile = (props) => {

   const [status, setStatus] = useState(props.status)
   const [editMode, setEditMode] = useState(false)

   let onStatusChange = (e) => {
      setStatus(e.target.value)
   }

   let onUpdateStatus = () => {
      props.updateStatus(status)
   }

   useEffect(() => {
      setStatus(props.status)
   }, [props.status])

   return (
      <div className={p.content}>
         <div className={p.content__container}>

            <div className={p.content__background}>
               <img src={props.background} alt="" />
            </div>

            <div className={p.status}>
               <input value={status} onChange={onStatusChange} type="text" className={p.status__input} />
               <button onClick={(e) => onUpdateStatus()} type="button">Change status</button>
            </div>

            <div className={p.account}>

               <div className={p.avatar}>
                  <img src={props?.avatar?.large || props?.avatar?.small || userPhoto} alt="" />

                  {props.isOwner &&
                     <div>
                        <input onChange={props.saveImage} type="file" accept="image/png, image/jpeg, image/webp" />
                     </div>}

               </div>

               <ProfileForm
                  userId={props.userId}
                  updateProfile={props.updateProfile}
                  editMode={editMode}
                  setEditMode={setEditMode}
                  fullName={props.fullName}
                  aboutMe={props.aboutMe}
                  lookingForAJob={props.lookingForAJob}
                  lookingForAJobDescription={props.lookingForAJobDescription}
                  contacts={props.contacts} />





            </div>

         </div>
      </div >
   )
}

export default Profile