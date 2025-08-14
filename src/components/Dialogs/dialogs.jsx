import { NavLink } from "react-router";
import d from "./dialogs.module.css"
import { useForm } from "react-hook-form"

export const Dialog = (props) => {

   let path = "/dialogs/" + props.id

   return (
      <NavLink to={path}>
         <li className={d.user}>
            <div className={d.user__avatar}>
               <img src={props.avatar} alt="" />
            </div>
            <p>{props.name}</p>
         </li>
      </NavLink>
   )
}

export const Message = (props) => {
   return (
      <div className={d.message}>
         {props.message}
      </div>
   )
}

const Dialogs = (props) => {

   const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset,
   } = useForm({ mode: "onChange" })

   const handleMessage = (data) => {
      props.sendMessage(data)
      reset();
   }

   return (
      <div className={d.dialogs}>
         <div className={d.wrapper}>

            <ul className={d.users}>
               {props.DialogsElements}
               {props.DialogsElements}
            </ul>

            <form onSubmit={handleSubmit(handleMessage)} className={d.messages}>
               {props.MessagesElements}

               <div className={d.my__message}>
                  <textarea {...register("message", { required: "Message is required" })}></textarea>
               </div>

               <button disabled={!isValid}>Send</button>
            </form>



         </div>
      </div>
   )
}

export default Dialogs