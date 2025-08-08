import React from "react";
import { NavLink } from "react-router";
import d from "./dialogs.module.css"


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
   let newMessageText = React.createRef();

   let onSendMessage = () => {
      props.sendMessage()
   }

   let onChangeMessage = () => {
      let text = newMessageText.current.value
      props.changeMessage(text)
   }


   return (
      <div className={d.dialogs}>
         <div className={d.wrapper}>

            <ul className={d.users}>
               {props.DialogsElements}
               {props.DialogsElements}
            </ul>

            <div className={d.messages}>
               {props.MessagesElements}

               <div className={d.my__message}>
                  <textarea onChange={onChangeMessage} value={props.newMessageBody} ref={newMessageText}></textarea>
               </div>

               <button onClick={onSendMessage}>Send</button>
            </div>



         </div>
      </div>
   )
}

export default Dialogs