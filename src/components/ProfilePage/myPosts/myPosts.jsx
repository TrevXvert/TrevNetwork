import React from "react";
import p from "./myPosts.module.css";

const MyPosts = (props) => {

   let NewPostElement = React.createRef()

   let onAddPost = () => {
      props.addPost()
   }

   let onPostChange = () => {
      let text = NewPostElement.current.value
      props.updateNewPostText(text)
      console.log(props.NewPostText);
   }

   return (
      <div className={p.myposts}>
         <p>My Posts</p>
         <textarea value={props.NewPostText} onChange={onPostChange} ref={NewPostElement}></textarea>
         <button onClick={onAddPost} className={p.button}>Send</button>
      </div>
   )
}

export default MyPosts