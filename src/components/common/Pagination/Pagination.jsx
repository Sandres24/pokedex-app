import React from 'react';
import { useSelector } from 'react-redux';
import { getOffset } from '../../../utils';
import './Pagination.css';

const Pagination = ({
   range,
   paginationInfo,
   setPaginationInfo,
   totalPages,
}) => {
   const theme = useSelector((state) => state.theme);

   const handleClick = (e) => {
      setPaginationInfo({
         ...paginationInfo,
         page: Number(e.target.textContent),
         offset: getOffset(
            Number(e.target.textContent),
            paginationInfo.elementsPerPage
         ),
      });
      window.scrollTo(0, 0);
   };

   const handleNextPage = () => {
      setPaginationInfo({
         ...paginationInfo,
         page: paginationInfo.page + 1,
         offset: getOffset(
            paginationInfo.page + 1,
            paginationInfo.elementsPerPage
         ),
      });
      window.scrollTo(0, 0);
   };

   const handlePrevPage = () => {
      setPaginationInfo({
         ...paginationInfo,
         page: paginationInfo.page - 1,
         offset: getOffset(
            paginationInfo.page - 1,
            paginationInfo.elementsPerPage
         ),
      });
      window.scrollTo(0, 0);
   };

   return (
      <section className='pagination-section'>
         {paginationInfo.page > 1 && (
            <button
               className='pagination-btn prev-btn'
               onClick={handlePrevPage}
            >
               <i className='fa-solid fa-angles-left'></i>
            </button>
         )}

         {range.map((page) => (
            <button
               key={page}
               style={{ color: theme === 'light' ? '#000' : '#fff' }}
               className='pagination-btn'
               type='button'
               onClick={handleClick}
               disabled={page === paginationInfo.page}
            >
               {page}
            </button>
         ))}

         {paginationInfo.page < totalPages && (
            <button
               className='pagination-btn next-btn'
               onClick={handleNextPage}
            >
               <i className='fa-solid fa-angles-right'></i>
            </button>
         )}
      </section>
   );
};

export default Pagination;
