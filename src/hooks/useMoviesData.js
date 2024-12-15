import { useContext, useEffect } from "react";
import { DropdownOptionsContext } from "../context/DropdownOptionsContext";
import { mockStarWarsMovies } from '../data';

export function useMoviesData(setMoviesData) {
    const { updateOptions } = useContext(DropdownOptionsContext);

    useEffect(() => {
        if (mockStarWarsMovies.allFilms) {
            updateOptions(mockStarWarsMovies.allFilms.films);
        }
    }, [mockStarWarsMovies]);

    useEffect(() => {
        if (mockStarWarsMovies?.allFilms?.films?.length > 0) {
            setMoviesData(mockStarWarsMovies.allFilms.films);
        }
    }, [mockStarWarsMovies, setMoviesData]);
}