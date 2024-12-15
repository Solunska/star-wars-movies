import { useCallback, useContext, useEffect, useState } from "react";
import { FiltersContext } from "../context/FiltersContext";

export function useFilter() {
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [movies, setMovies] = useState([]);
    const { filters } = useContext(FiltersContext);

    useEffect(() => {
        setFilteredMovies(movies);
    }, [movies]);

    useEffect(() => {
        applyFilters();
    }, [filters]);

    const applyFilters = useCallback(() => {
        let updatedMovies = [...movies];

        if (filters.director) {
            updatedMovies = updatedMovies.filter(item => item.director === filters.director);
        }

        if (filters.year) {
            updatedMovies = updatedMovies.filter(item => item.releaseDate.startsWith(filters.year));
        }

        if (filters.sort) {
            updatedMovies = updatedMovies.sort((a, b) => {
                if (filters.sort === "title") {
                    return a.title.localeCompare(b.title);
                } else if (filters.sort === "releaseDate") {
                    return new Date(a.releaseDate) - new Date(b.releaseDate);
                }
                return 0;
            });
        }

        setFilteredMovies(updatedMovies);
    }, [filters, movies]);

    function setMoviesData(data) {
        setMovies(data);
    }

    return {
        filteredMovies,
        applyFilters,
        setMoviesData,
        movies
    };
}
