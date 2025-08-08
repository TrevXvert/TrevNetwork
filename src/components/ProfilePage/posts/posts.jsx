import p from "./posts.module.css"
import like from "../../../assets/images/like.png"

const Posts = (props) => {
   return (
      <div className={p.post}>

         <div className={p.info}>

            <div className={p.avatar}>
               <img src={props.avatar} alt="" />
            </div>

            <p className={p.text}>{props.message}</p>

            <div className={p.likes}>

               <div className={p.likes__count}>{props.likesCount}</div>

               <button className={p.like}>
                  <img src={like} alt="Like" />
               </button>

            </div>


         </div>

      </div>
   )
}

export default Posts