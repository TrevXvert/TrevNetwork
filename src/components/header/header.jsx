import { NavLink } from "react-router"
import h from "./header.module.css"

const Header = (props) => {
   return (
      <header className={h.header}>
         <ul className={`${h.header__container} ${h.container}`}>

            <NavLink to="profile/*" className={h.header__logo}>
               <img src="https://i.pinimg.com/736x/5a/ae/50/5aae503e4f037a5a4375944d8861fb6a.jpg" alt=""></img>
            </NavLink>

            {props.isAuth
               ? <div className={h.header__login}>{props.username}</div>
               : <NavLink to="login/" className={h.header__login}>Log in</NavLink>
            }

         </ul>
      </header >
   )
}

export default Header