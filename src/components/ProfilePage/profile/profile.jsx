import p from "./profile.module.css";
import userPhoto from "../../../assets/images/user-photo.webp"
import { useState } from "react";
import { updateStatus } from "../../../redux/profile-reducer";
const Profile = (props) => {

   const [status, setStatus] = useState(props.status)

   let onUpdateStatus = () => {
      updateStatus(status)
   }

   let onStatusChange = (e) => {
      setStatus(e.target.value)
   }



   return (
      <div className={p.content}>
         <div className={p.content__container}>

            <div className={p.content__background}>
               <img src={props.background} alt="" />
            </div>

            <div className={p.status}>
               <p>{status}</p>
               <input value={status} onChange={onStatusChange} type="text" className={p.status__input} />
               <button onClick={(e) => onUpdateStatus()} type="button">Change status</button>
            </div>

            <div className={p.account}>

               <div className={p.avatar}>
                  <img src={props.avatar || userPhoto} alt="" />
               </div>

               <ul className={p.info}>
                  <li>Name: {props.name}</li>
                  <li>Country: {props.country}</li>
                  <li>City: {props.city}</li>
                  <li>Phone: {props.phone}</li>
               </ul>

            </div>

         </div>
      </div >
   )
}

export default Profile