// import { useQuery } from '@apollo/client';
// import { GET_MOVIES } from '../graphql/movieQuery';
import Movie from './Movie';
import classes from './MovieList.module.css';

import { useFilter } from '../hooks/useFilter';
import LoadingIndicator from '../UI/LoadingIndicator';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import { useMoviesData } from '../hooks/useMoviesData';
import ErrorMessage from '../UI/ErrorMessage';

export default function MovieList() {
    // const { loading, error, data } = useQuery(GET_MOVIES)
    const { setMoviesData, filteredMovies } = useFilter();
    const { data, isLoading } = useInfiniteScroll(filteredMovies);
    useMoviesData(setMoviesData);

    // if (loading) return <LoadingIndicator />;
    // if (error) return <ErrorMessage heading="Oops! Something went wrong." message="There was a problem fetch the data. Please try again later." />

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
        {(data.length <= 0 && !isLoading) && <ErrorMessage heading="No movies found." message="Try adjusting or clearing the filters to see more results." />}
    </div>
}
