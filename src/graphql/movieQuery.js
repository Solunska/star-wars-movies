import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
  query GetMovies {
    allFilms {
      films {
        id
        title
        releaseDate
        director
        producers
      }
    }
  }
`;