import d from "./dialogs.module.css"
import { useForm } from "react-hook-form"
import React, { useCallback } from "react";

const Dialogs = React.memo((props) => {

   const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset,
   } = useForm({ mode: "onChange" })

   const handleMessage = useCallback((data) => {
      props.sendMessage(data)
      reset();
   }, [props, reset])

   return (
      <div className={d.dialogs}>
         <div className={d.wrapper}>

            <ul className={d.users}>
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
})

export default Dialogs