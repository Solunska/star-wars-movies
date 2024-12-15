// import { useQuery } from '@apollo/client';
import Movie from './Movie';
import classes from './MovieList.module.css';
// import { GET_MOVIES } from '../graphql/movieQuery';
import { DropdownOptionsContext } from '../context/DropdownOptionsContext';
import { useContext, useEffect } from 'react';
import { useFilter } from '../hooks/useFilter';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorMessage from '../UI/ErrorMessage';
import { data } from '../data';

export default function MovieList() {
    // const { loading, error, data } = useQuery(GET_MOVIES)
    const { updateOptions } = useContext(DropdownOptionsContext);
    const { setMoviesData, filteredMovies } = useFilter();

    useEffect(() => {
        if (data && data.allFilms) {
            updateOptions(data.allFilms.films);
        }
    }, [data]);

    useEffect(() => {
        if (data?.allFilms?.films?.length > 0) {
            setMoviesData(data.allFilms.films);
        }
    }, [data, setMoviesData]);

    // if (loading) return <LoadingIndicator />;
    // if (error) return <ErrorMessage />

    return <div className={classes.container}>
        {filteredMovies.map((film) => (
            <Movie
                key={film.id}
                id={film.id}
                title={film.title}
                director={film.director}
                releaseDate={film.releaseDate}
                producers={film.producers} />
        ))}
    </div>
}