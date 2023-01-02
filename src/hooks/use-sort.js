import { useState } from "react";

function useSort(config, data) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const handleSort = (label) => {
        if(sortBy && label !== sortBy) {
            setSortOrder('asc');
            setSortBy(label);
            return;
        };
    
        if (sortOrder === null) {
          setSortOrder("asc");
          setSortBy(label);
        }
        if (sortOrder === "asc") {
          setSortOrder("desc");
          setSortBy(label);
        }
        if (sortOrder === "desc") {
          setSortOrder(null);
          setSortBy(null);
        }
      };
    
      // Only sort data if sortOrder and sortBy are not null
      // Make a copy of data prop
      // Find the correct sortValue function and use it for sorting
      let sortedData = data;
    
      if (sortOrder && sortBy) {
        const { sortValue } = config.find((column) => column.label === sortBy);
    
        sortedData = [...data].sort((a, b) => {
          const valueA = sortValue(a);
          const valueB = sortValue(b);
    
          const reverseOrder = sortOrder === "asc" ? 1 : -1;
    
          if (typeof valueA === "string") {
            return valueA.localeCompare(valueB) * reverseOrder;
          } else {
            return (valueA - valueB) * reverseOrder;
          }
        });
      }
    
      return {
        sortBy, sortOrder, handleSort, sortedData
      }

}

export default useSort;