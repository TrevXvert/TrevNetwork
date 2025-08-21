import axios from "axios";


const instance = axios.create({
   withCredentials: true,
   headers: { "API-KEY": "7812ccda-1b8d-4a9e-977d-54272aad4b7a" },
   baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const getAuthState = () => instance.get("auth/me")


export const getUsers = (currentPage, pageSize) => {
   return (
      instance.get(`users/?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            return (
               response.data
            )
         })
   )
}

export const getFollowState = (userId) => {
   return (
      instance.post(`follow/${userId}`)
   )
}

export const getUnfollowState = (userId) => {
   return (
      instance.delete(`follow/${userId}`)
   )
}

export const getUserProfile = (userId) => {
   return (
      instance.get(`profile/${userId}`)
   )
}
export const getUserStatus = (userId) => {
   return (
      instance.get(`profile/status/${userId}`)
   )
}
export const updateUserStatus = (status) => {
   return (
      instance.put(`profile/status/`, { status })
   )
}

export const logInUser = (email, password, rememberMe) => {
   return (
      instance.post(`/auth/login`, { email, password, rememberMe })
   )
}

export const logOutUser = () => {
   return (
      instance.delete(`/auth/login`)
   )
}




