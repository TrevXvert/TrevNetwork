import { useDispatch, useSelector } from "react-redux"
import Users from "./Users"
import { changePageCreator, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator } from "./../../redux/users-reducer"
import Preloader from "../common/preloader/preloader"
import { useEffect } from "react"

const UsersContainer = () => {
   const users = useSelector(state => state.UsersPage.users)
   const totalCount = useSelector(state => state.UsersPage.totalCount)
   const pageSize = useSelector(state => state.UsersPage.pageSize)
   const currentPage = useSelector(state => state.UsersPage.currentPage)
   const isFetching = useSelector(state => state.UsersPage.isFetching)
   const followingProgress = useSelector(state => state.UsersPage.followingProgress)
   const dispatch = useDispatch()

   const changePage = (pageNumber) => {
      dispatch(changePageCreator(pageNumber))
   }

   useEffect(() => {
      dispatch(getUsersThunkCreator(currentPage, pageSize));
   }, [dispatch])

   let onPageChanged = (page) => {
      dispatch(getUsersThunkCreator(page, pageSize));
      changePage(page)
   }



   return (
      <>
         {isFetching ? <Preloader /> : ""}
         <Users totalCount={totalCount}
            pageSize={pageSize}
            users={users}
            onPageChanged={onPageChanged}
            currentPage={currentPage}
            followingProgress={followingProgress}
            getUsersThunkCreator={getUsersThunkCreator}
            followThunkCreator={followThunkCreator}
            unfollowThunkCreator={unfollowThunkCreator}
         />
      </>
   )
}

export default UsersContainer