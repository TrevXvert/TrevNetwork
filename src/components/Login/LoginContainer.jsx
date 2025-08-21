import Login from "./Login"
import { loginUserThunk } from "../../redux/auth-reducer"
import { useDispatch } from "react-redux"

const LoginContainer = () => {
   const dispatch = useDispatch()

   let onLogin = (data) => {
      return dispatch(loginUserThunk(data))
   }

   return (
      <Login onLogin={onLogin} />
   )
}

export default LoginContainer