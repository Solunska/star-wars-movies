// import { useQuery } from '@apollo/client';
import Movie from './Movie';
import classes from './MovieList.module.css';
// import { GET_MOVIES } from '../graphql/movieQuery';
import { DropdownOptionsContext } from '../context/DropdownOptionsContext';
import { useContext, useEffect } from 'react';
import { useFilter } from '../hooks/useFilter';

const data = {
    allFilms: {
        films: [
            {
                id: "1",
                title: "Inception",
                director: "Christopher Nolan",
                releaseDate: "2010-07-16",
                producers: ["Emma Thomas", "Christopher Nolan"]
            },
            {
                id: "2",
                title: "The Dark Knight",
                director: "Christopher Nolan",
                releaseDate: "2008-07-18",
                producers: ["Emma Thomas", "Christopher Nolan"]
            },
            {
                id: "3",
                title: "Pulp Fiction",
                director: "Quentin Tarantino",
                releaseDate: "1994-10-14",
                producers: ["Lawrence Bender"]
            },
            {
                id: "4",
                title: "Interstellar",
                director: "Christopher Nolan",
                releaseDate: "2014-11-07",
                producers: ["Emma Thomas", "Christopher Nolan", "Lynda Obst"]
            },
            {
                id: "5",
                title: "Django Unchained",
                director: "Quentin Tarantino",
                releaseDate: "2012-12-25",
                producers: ["Reginald Hudlin", "Stacey Sher", "Pilar Savone"]
            },
            {
                id: "6",
                title: "The Grand Budapest Hotel",
                director: "Wes Anderson",
                releaseDate: "2014-03-28",
                producers: ["Wes Anderson", "Scott Rudin", "Steven Rales", "Jeremy Dawson"]
            },
            {
                id: "7",
                title: "Parasite",
                director: "Bong Joon-ho",
                releaseDate: "2019-05-30",
                producers: ["Kwak Sin-ae", "Bong Joon-ho"]
            }
        ]
    }
};


export default function MovieList() {
    const { updateOptions } = useContext(DropdownOptionsContext);
    const { setMoviesData, filteredMovies } = useFilter();

    useEffect(() => {
        if (data) {
            updateOptions(data.allFilms.films);
        }
    }, [data]);

    useEffect(() => {
        if (data.allFilms.films.length > 0) {
            setMoviesData(data.allFilms.films);
        }
    }, [data.allFilms.films, setMoviesData]);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;

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