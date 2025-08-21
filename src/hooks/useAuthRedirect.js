import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useAuthRedirect = () => {
   const isAuth = useSelector(state => state.Auth.isAuth);
   const init = useSelector(state => state.App.init);
   const navigate = useNavigate();

   useEffect(() => {
      if (init && !isAuth) {
         navigate("/login");
      }
   }, [init, isAuth, navigate])
}

export default useAuthRedirect