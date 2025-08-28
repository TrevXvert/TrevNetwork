import styles from "./dialogs.module.css"

export const Message = (props) => {
   return (
      <div className={styles.message}>
         {props.message}
      </div>
   )
}

export default Message