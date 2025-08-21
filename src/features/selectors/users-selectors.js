export const selectUsers = (state) => {
   return state.UsersPage.users
}
export const selectTotalCount = (state) => {
   return state.UsersPage.totalCount
}
export const selectPageSize = (state) => {
   return state.UsersPage.pageSize
}
export const selectCurrentPage = (state) => {
   return state.UsersPage.currentPage
}
export const selectIsFetching = (state) => {
   return state.UsersPage.isFetching
}
export const selectFollowingProgress = (state) => {
   return state.UsersPage.followingProgress
}
