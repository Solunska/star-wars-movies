import { useEffect, useState } from "react";

export function useInfiniteScroll(movies) {
    const [loadedMovies, setLoadedMovies] = useState(3);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(movies.slice(0, loadedMovies));


    const handleScroll = () => {
        if (isLoading || loadedMovies >= movies.length) return;

        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= documentHeight - 10) {
            setIsLoading(true);
            setLoadedMovies((prevLoadedMovies) => prevLoadedMovies + 3);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isLoading]);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setData(movies.slice(0, loadedMovies));
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [loadedMovies, movies]);

    return { isLoading, data };
};

export default useInfiniteScroll;