import { useDispatch, useSelector } from "react-redux"
import Header from "./header"
import { logoutUserThunk } from "../../redux/auth-reducer"

const HeaderContainer = () => {
   const dispatch = useDispatch()

   let onLogout = () => {
      dispatch(logoutUserThunk())
   }

   let isAuth = useSelector(state => state.Auth.isAuth)
   let id = useSelector(state => state.Auth.userId)
   let username = useSelector(state => state.Auth.username)
   let email = useSelector(state => state.Auth.email)

   return (
      <Header onLogout={onLogout} isAuth={isAuth} id={id} username={username} email={email} />
   )
}

export default HeaderContainer