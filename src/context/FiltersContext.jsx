import { createContext, useState } from "react";

export const FiltersContext = createContext();

const startingState = {
    director: null,
    year: null,
    sort: null
}

export function FiltersContextProvider({ children }) {

    const [filters, setFilters] = useState(startingState);

    function handleFilterChange(category, value) {
        setFilters(prevFilters => ({
            ...prevFilters,
            [category]: value
        }));
    }

    function clearFilters() {
        setFilters(startingState);
    }

    const filtersContext = {
        filters,
        handleFilterChange,
        clearFilters
    }

    return <FiltersContext.Provider value={filtersContext}>{children}</FiltersContext.Provider>

}