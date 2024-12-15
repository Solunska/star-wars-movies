// import { useQuery } from '@apollo/client';
// import { GET_MOVIES } from '../graphql/movieQuery';
import Movie from './Movie';
import classes from './MovieList.module.css';

import { useFilter } from '../hooks/useFilter';
import LoadingIndicator from '../UI/LoadingIndicator';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import { useMoviesData } from '../hooks/useMoviesData';

export default function MovieList() {
    // const { loading, error, data } = useQuery(GET_MOVIES)
    const { setMoviesData, filteredMovies } = useFilter();
    const { data, isLoading } = useInfiniteScroll(filteredMovies);
    useMoviesData(setMoviesData);

    // if (loading) return <LoadingIndicator />;
    // if (error) return <ErrorMessage />
    console.log(data);
    return <div className={classes.container}>
        {data.map((film) => (
            <Movie
                key={film.id}
                id={film.id}
                title={film.title}
                director={film.director}
                releaseDate={film.releaseDate}
                producers={film.producers} />
        ))}
        {isLoading && <LoadingIndicator />}
        {(data.length <= 0 && !isLoading) && <h2>No movies found. Try adjusting or clearing the filters to see more results.</h2>}
    </div>
}