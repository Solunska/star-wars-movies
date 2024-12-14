import classes from './Movie.module.css';

export default function Movie({ id, title, director, releaseDate, producers }) {

    const movieId = atob(id).split(":")[1];

    const date = new Date(releaseDate);
    const formattedDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);

    return <div className={classes.container}>
        <p className={classes.id}>{movieId}</p>
        <p className={classes.title}>{title}</p>
        <div className={classes.group}>
            <p className={classes.label}>Directed by</p>
            <p className={classes.director}>{director}</p>
        </div>
        <div className={classes.group}>
            <p className={classes.label}>Producers</p>
            <ul className={classes.producerList}>
                {producers.map((producer) => (
                    <li key={producer} className={classes.producer}>{producer}</li>
                ))}
            </ul>
        </div>
        <p className={classes.date}>{formattedDate}</p>
    </div>
}