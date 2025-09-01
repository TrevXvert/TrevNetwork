import classes from "./ProfileForm.module.css"
import { useForm } from "react-hook-form";

const ProfileForm = ({ fullName, aboutMe, lookingForAJob, userId,
   lookingForAJobDescription, contacts, editMode, setEditMode, updateProfile }) => {

   const {
      register,
      handleSubmit,
   } = useForm({
      mode: "onChange"
   });

   const handleProfile = async (profile) => {


      if (editMode) {
         setEditMode(false)

         const profileCopy = {
            ...profile,
            userId: userId
         };

         updateProfile(profileCopy)
      } else {
         setEditMode(true)
      }

   };


   return (
      <form onSubmit={handleSubmit(handleProfile)}>

         <ul className={classes.info}>

            <li>
               Name: {editMode
                  ? <input {...register("fullName")} defaultValue={fullName} />
                  : fullName}
            </li>

            <li>
               About me: {editMode
                  ? <input {...register("aboutMe")} defaultValue={aboutMe} />
                  : aboutMe}
            </li>

            <li>
               Looking For A Job: {editMode
                  ? <input {...register("lookingForAJob")} type="checkbox" defaultValue={lookingForAJob} />
                  : lookingForAJob ? "Yes" : "No"
               }
            </li>

            <li>
               Job Preferences: {editMode
                  ? <input {...register("lookingForAJobDescription")} defaultValue={lookingForAJobDescription} />
                  : lookingForAJobDescription
               }
            </li>

            <ul className={classes.info__sublist}>
               Contacts:
               {editMode
                  ? Object.entries(contacts).map(([key, value]) => (
                     <li key={key}>
                        {key}: <input
                           {...register(`contacts.${key}`)}
                           key={key}
                           defaultValue={value || ""}
                        />
                     </li>

                  ))
                  : Object.entries(contacts).map(([key, value]) => (
                     <li key={key}>
                        {key}: {value}
                     </li>
                  ))
               }
            </ul>


         </ul>

         <button onClick={handleSubmit(handleProfile)}>
            {editMode ? "Save" : "Edit Info"}
         </button>

      </form>
   )
}

export default ProfileForm