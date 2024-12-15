import { createContext, useState } from "react";

export const DropdownOptionsContext = createContext();

const startingState = {
    directors: [],
    years: []
}

export function DropdownOptionsContextProvider({ children }) {
    const [options, setOptions] = useState(startingState);

    const updateOptions = (movies) => {
        const directors = [...new Set(movies.map((movie) => movie.director))];
        const years = [...new Set(movies.map((movie) => new Date(movie.releaseDate).getFullYear()))];

        setOptions({ directors, years });
    }

    const dropdownOptionsContext = {
        updateOptions,
        options,
    }

    return <DropdownOptionsContext.Provider value={dropdownOptionsContext}>{children}</DropdownOptionsContext.Provider>
}