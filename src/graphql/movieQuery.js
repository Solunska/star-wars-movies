import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
  query GetMovies( $skip: Int, $limit: Int) {
    allFilms(skip: $skip, limit: $limit) {
      films {
        id
        title
        releaseDate
        director
        producers
      }
      hasNextPage
    }
  }
`;
