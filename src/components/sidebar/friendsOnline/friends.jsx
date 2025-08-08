import f from "./friends.module.css"

const FriendsOnline = (props) => {

   return (
      <div className={f.friend}>
         <div className={f.avatar}>
            <img src={props.avatar} alt="" />
         </div>

         <p className={f.name}>{props.name}</p>
      </div>
   )
}

export default FriendsOnline;