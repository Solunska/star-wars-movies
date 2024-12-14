import { useQuery } from '@apollo/client';
import Movie from './Movie';
import classes from './MovieList.module.css';
import { GET_MOVIES } from '../graphql/movieQuery';

export default function MovieList() {
    const { loading, error, data } = useQuery(GET_MOVIES)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return <div className={classes.container}>
        {data.allFilms.films.map((film) => (
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