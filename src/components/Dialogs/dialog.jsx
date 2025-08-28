import styles from "./dialogs.module.css"
import { NavLink } from "react-router";

export const Dialog = (props) => {

   let path = "/dialogs/" + props.id

   return (
      <NavLink to={path}>
         <li className={styles.user}>
            <div className={styles.user__avatar}>
               <img src={props.avatar} alt="" />
            </div>
            <p>{props.name}</p>
         </li>
      </NavLink>
   )
}

export default Dialog