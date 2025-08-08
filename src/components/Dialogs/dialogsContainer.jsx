import Dialogs from "./dialogs"
import { updateNewMessageBodyActionCreator, sendMessageActionCreator } from "../../redux/dialogs-reducer"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Dialog, Message } from "./dialogs"
import useAuthRedirect from "../../hooks/useAuthRedirect"

const DialogsContainer = () => {

   useAuthRedirect()

   const state = useSelector(state => state.DialogsPage)
   const dispatch = useDispatch()

   let DialogsElements = state.dialogsData.map(dialog => <Dialog key={dialog.id} name={dialog.name} avatar={dialog.avatar} />)
   let MessagesElements = state.messagesData.map(message => <Message key={message.id} message={message.message} />)

   let sendMessage = () => {
      dispatch(sendMessageActionCreator())
   }

   let changeMessage = (text) => {
      dispatch(updateNewMessageBodyActionCreator(text))
   }

   return (
      <Dialogs DialogsPage={state} newMessageBody={state.newMessageBody} sendMessage={sendMessage} changeMessage={changeMessage} DialogsElements={DialogsElements} MessagesElements={MessagesElements} />
   )
}

export default DialogsContainer