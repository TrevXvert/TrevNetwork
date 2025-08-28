import styles from "./pagination.module.css"
import { useState } from "react"



const Pagination = ({ totalCount, pageSize, currentPage, onPageChanged }) => {

   const [portion, setPortion] = useState(1)
   const portionSize = 10

   let pagesCount = Math.ceil(totalCount / pageSize) // общее количество страниц
   let portionCount = Math.ceil(pagesCount / portionSize) // общее количество порций страниц (по portionSize страниц в порции)
   let leftPortionPageNumber = (portion - 1) * portionSize + 1
   let rightPortionPageNumber = portion * portionSize

   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }

   let visiblePages = pages.filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)

   return (
      <div className={styles.pagination}>

         {portion > 1 && <button onClick={() => setPortion(prev => prev - 1)}>Prev</button>}

         {visiblePages.map(page => (
            <span key={page} onClick={(e) => onPageChanged(page)}
               className={currentPage === page ? styles.active : ""}>
               {page}
            </span>
         ))}

         {portion < portionCount && <button onClick={() => setPortion(prev => prev + 1)}>Next</button>}

      </div>
   )
}

export default Pagination