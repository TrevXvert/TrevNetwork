import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useAuthRedirect = () => {
   const isAuth = useSelector(state => state.Auth.isAuth);
   const navigate = useNavigate();

   useEffect(() => {
      if (!isAuth) {
         navigate("/login");
      }
   }, [isAuth, navigate])
}

export default useAuthRedirect