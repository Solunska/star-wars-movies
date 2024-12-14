import classes from './Movie.module.css';

export default function Movie({ id, title, director, releaseDate, producers }) {

    const movieId = atob(id).split(":")[1];

    const date = new Date(releaseDate);
    const formattedDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);

    return <div className={classes.container}>
        <div className={classes.header}>
            <p className={classes.id}>{movieId}</p>
            <p className={classes.title}>{title}</p>
            <p className={classes.date}>{formattedDate}</p>
            <div className={classes.director}>
                <p>Directed by</p>
                <p>{director}</p>
            </div>
        </div>
        <div className={classes.producerSection}>
            <p className={classes.producerTitle}>Producers:</p>
            <ul className={classes.producerList}>
                {producers.map((producer) => (
                    <li key={producer}>{producer}</li>
                ))}
            </ul>
        </div>
    </div>
}