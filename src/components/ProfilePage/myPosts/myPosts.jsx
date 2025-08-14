import p from "./myPosts.module.css";
import { useForm } from "react-hook-form"

const MyPosts = (props) => {

   const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset,
   } = useForm({ mode: "onChange" })

   const handlePost = (data) => {
      console.log(data);
      props.addPost(data)
      reset();
   };

   return (
      <form onSubmit={handleSubmit(handlePost)} className={p.myposts}>
         <p>My Posts</p>
         <div>{errors.Post ? <p>{errors.Post.message}</p> : ""}</div>
         <textarea {...register("Post", { required: "Field is required", minLength: { value: 20, message: "At least 20 symbols" } })}></textarea>
         <button disabled={!isValid} className={p.button}>Send</button>
      </form>
   )
}

export default MyPosts