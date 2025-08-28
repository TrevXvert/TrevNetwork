import Dialogs from "./dialogs"
import { sendMessageActionCreator } from "../../redux/dialogs-reducer"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Dialog } from "./dialog"
import { Message } from "./message"
import useAuthRedirect from "../../hooks/useAuthRedirect"

const DialogsContainer = () => {

   useAuthRedirect()
   const dispatch = useDispatch()
   const dialogs = useSelector(state => state.DialogsPage.dialogsData)
   const messages = useSelector(state => state.DialogsPage.messagesData)


   let DialogsElements = dialogs.map(dialog => <Dialog key={dialog.id} name={dialog.name} avatar={dialog.avatar} />)
   let MessagesElements = messages.map(message => <Message key={message.id} message={message.message} />)

   let sendMessage = (data) => {
      dispatch(sendMessageActionCreator(data))
   }

   return (
      <Dialogs sendMessage={sendMessage} DialogsElements={DialogsElements} MessagesElements={MessagesElements} />
   )
}

export default DialogsContainer