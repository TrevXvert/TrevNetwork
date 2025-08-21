import { useForm } from "react-hook-form";
import styles from "./Login.module.css"


const Login = (props) => {
   return (
      <div>
         <p className={styles.login__title}>Login</p>
         <LoginForm {...props} />
      </div>
   )
}


export const LoginForm = (props) => {
   const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      setError,
      reset,
   } = useForm({
      mode: "onChange"
   });

   const handleLogin = async (data) => {
      const response = await props.onLogin(data)

      if (response?.data?.resultCode === 1) {
         setError("root", { type: "server", message: "Email or password are incorrect" })
         return
      }

      if (response?.data?.resultCode === 10) {
         setError("root", { type: "server", message: "Too many attempts. Try again later" })
         return
      }

      reset();
   };

   return (
      <form onSubmit={handleSubmit(handleLogin)} className={styles.login__form}>
         <div className="form__error">
            {errors.Email ? <p>{errors.Email.message}</p> : ""}
         </div>

         <div className={`${styles.login__input} ${errors.Email ? "form__error" : ""}`}>
            <input
               {...register("Email",
                  {
                     required: "Email is required",
                     maxLength: {
                        value: 30,
                        message: "30 symbols maximum",
                     },
                  })}
               placeholder='Email' />
         </div>

         <div className="form__error">
            {errors.Password && <p>{errors.Password.message}</p>}
         </div>

         <div className={`${styles.login__input} ${errors.Password ? "form__error" : ""}`}>
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

         <div className="form__error">{errors.root && <p>{errors.root.message}</p>}</div>


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