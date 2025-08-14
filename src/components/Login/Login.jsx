import { useForm } from "react-hook-form";
import styles from "./Login.module.css"

const Login = () => {
   return (
      <div>
         <p className={styles.login__title}>Login</p>
         <LoginForm />
      </div>
   )
}


export const LoginForm = () => {

   const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset,
   } = useForm({
      mode: "onChange"
   });

   const handleLogin = (data) => {
      console.log(data);
      reset();
   };

   return (
      <form onSubmit={handleSubmit(handleLogin)} className={styles.login__form}>
         <div>
            {errors.Username ? <p>{errors.Username.message}</p> : ""}
         </div>

         <div className={styles.login__input}>
            <input
               {...register("Username",
                  {
                     required: "Username is required",
                     maxLength: {
                        value: 30,
                        message: "30 symbols maximum",
                     },
                  })}
               placeholder='Username' />
         </div>

         <div>
            {errors.Password && <p>{errors.Password.message}</p>}
         </div>

         <div className={styles.login__input}>
            <input {...register("Password",
               {
                  required: "Password is required",
                  minLength: {
                     value: 8,
                     message: "8 symbols minimum"
                  }
               }
            )} type="password" placeholder="Password" />

         </div>

         <div className={styles.login__checkbox}>
            <input {...register("RememberMe")} type="checkbox" />
            <p>Remember Me</p>
         </div>

         <div className={styles.login__button}>
            <button disabled={!isValid}>Sumbit</button>
         </div>


      </form>
   )
}

export default Login