import { useDispatch, useSelector } from "react-redux"
import Users from "./Users"
import { changePageCreator, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator } from "./../../redux/users-reducer"
import Preloader from "../common/preloader/preloader"
import { useEffect } from "react"
import { selectUsers, selectTotalCount, selectPageSize, selectCurrentPage, selectIsFetching, selectFollowingProgress } from "../../features/selectors/users-selectors"

const UsersContainer = () => {
   const users = useSelector(selectUsers)
   const totalCount = useSelector(selectTotalCount)
   const pageSize = useSelector(selectPageSize)
   const currentPage = useSelector(selectCurrentPage)
   const isFetching = useSelector(selectIsFetching)
   const followingProgress = useSelector(selectFollowingProgress)
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