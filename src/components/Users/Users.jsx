import styles from "./Users.module.css"
import userPhoto from "./../../assets/images/user-photo.webp"
import { NavLink } from "react-router"
import { useDispatch } from "react-redux"
import Pagination from "../common/preloader/Pagination/pagination"

const Users = (props) => {
   const dispatch = useDispatch()
   let users = props.users.map(user => {
      return (
         <div key={user.id} className={styles.user}>

            <div className={styles.avatar__container}>

               <NavLink to={`/profile?id=${user.id}`} className={styles.avatar}>
                  <img src={user.avatar ? user.avatar : userPhoto} alt="" />
               </NavLink>

               {user.followed
                  ? <button disabled={props.followingProgress.some((id) => id === user.id)}
                     onClick={() => { dispatch(props.unfollowThunkCreator(user.id)) }}
                     className={styles.follow__button}>Unfollow</button>

                  : <button disabled={props.followingProgress.some((id) => id === user.id)}
                     onClick={() => { dispatch(props.followThunkCreator(user.id)) }}
                     className={styles.follow__button}>Follow</button>
               }


            </div>


            <div className={styles.info}>

               <div className={styles.about}>
                  <div className={styles.name}>{user.name}</div>
                  <div className={styles.status}>{user.status}</div>
               </div>


               <div className={styles.location}>
                  <div className={styles.city}>{user.city}</div>
                  <div className={styles.country}>{user.country}</div>
               </div>

            </div>

         </div >
      )
   })


   return (

      <div>
         <p className={styles.title}>Users</p>

         <div className={styles.users}>
            {users}

            {/* PAGINATION */}
            <Pagination pageSize={props.pageSize} totalCount={props.totalCount} onPageChanged={props.onPageChanged} currentPage={props.currentPage} />
            {/* PAGINATION */}

         </div >

      </div>
   )
}

export default Users;

