import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
  query GetMovies($director: String, $releaseYear: Int, $skip: Int, $limit: Int) {
    allFilms(director: $director, releaseYear: $releaseYear, skip: $skip, limit: $limit) {
      films {
        id
        title
        releaseDate
        director
        producers
      }
      totalCount
    }
  }
`;
