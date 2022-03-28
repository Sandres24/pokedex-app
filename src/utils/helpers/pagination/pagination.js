export const getOffset = (page, elementsPerPage) =>
   elementsPerPage * page - elementsPerPage;

export const getTotalPages = (totalElements, elementsPerPage) =>
   Math.ceil(totalElements / elementsPerPage);

export const getPaginationRange = (pages, totalPages, page) => {
   return Array.from(
      Array(totalPages < pages ? totalPages : pages).keys(),
      (index) => {
         if (totalPages <= pages) return index + 1;
         if (page < 6) return index + 1;
         if (page >= 6 && page + 4 <= totalPages) return index + page - 4;
         if (page >= 6 && !page + 4 < totalPages)
            return index + totalPages - pages + 1;
         return index + 1;
      }
   );
};
