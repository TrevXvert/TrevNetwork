import { NavLink } from "react-router";
import s from "./sidebar.module.css";
import FriendsOnline from "./friendsOnline/friends";
import { useSelector } from "react-redux";

const Sidebar = () => {

   const state = useSelector(state => state.Sidebar.FriendsOnline)

   let friendsElements = state.map(friend => <FriendsOnline key={friend.id} name={friend.name} avatar={friend.avatar} />)

   return (

      <aside className={s.sidebar} >

         <nav className={s.sidebar__container}>

            <ul className={s.sidebar__list}>

               <li><NavLink to="/profile"
                  className={navData => navData.isActive ? s.active : s.item}
               >Profile</NavLink>
               </li>

               <li><NavLink to="/dialogs"
                  className={navData => navData.isActive ? s.active : s.item}
               >Messages</NavLink>
               </li>

               <li><NavLink to="/news"
                  className={navData => navData.isActive ? s.active : s.item}
               >News</NavLink>
               </li>

               <li><NavLink to="/music"
                  className={navData => navData.isActive ? s.active : s.item}
               >Music</NavLink>
               </li>

               <li><NavLink to="/users"
                  className={navData => navData.isActive ? s.active : s.item}
               >Add Friends</NavLink>
               </li>

               <div className={s.friends__container}>
                  <p>Friends Online</p>
                  <div className={s.friends}>
                     {friendsElements}
                  </div>
               </div>
            </ul>





            <button className={s.sidebar__settings}>Settings</button>

         </nav>

      </aside >


   )
}

export default Sidebar