import p from "./profile.module.css";
import userPhoto from "../../../assets/images/user-photo.webp"
import { useEffect, useState } from "react";
const Profile = (props) => {
   const [status, setStatus] = useState(props.status)

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