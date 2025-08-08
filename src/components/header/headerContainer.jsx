import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Header from "./header"
import { getAuth } from "../../redux/auth-reducer"

const HeaderContainer = () => {
   const dispatch = useDispatch()

   let isAuth = useSelector(state => state.Auth.isAuth)
   let id = useSelector(state => state.Auth.userId)
   let username = useSelector(state => state.Auth.username)
   let email = useSelector(state => state.Auth.email)

   useEffect(() => {
      dispatch(getAuth())
   }, [dispatch])

   return (
      <Header isAuth={isAuth} id={id} username={username} email={email} />
   )
}

export default HeaderContainer