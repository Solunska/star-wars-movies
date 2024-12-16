import classes from './Movie.module.css';
import TextGroup from './TextGroup';
import { LABEL_DATA } from '../translations/global';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { formatDate } from '../utils/formatDate';

export default function Movie({ id, title, director, releaseDate, producers }) {
    const { language } = useContext(LanguageContext);
    const movieId = atob(id).split(":")[1];

    const formattedDate = formatDate(releaseDate);

    return <div className={classes.container}>
        <p className={classes.id}>{movieId}</p>
        <p className={classes.title}>{title}</p>
        <TextGroup label={LABEL_DATA.movies.directorLabel[language]} >
            <p className={classes.director}>{director}</p>
        </TextGroup>
        <TextGroup label={LABEL_DATA.movies.producersLabel[language]} >
            <ul className={classes.producerList}>
                {producers.map((producer) => (
                    <li key={producer} className={classes.producer}>{producer}</li>
                ))}
            </ul>
        </TextGroup>
        <p className={classes.date}>{formattedDate}</p>
    </div>
}