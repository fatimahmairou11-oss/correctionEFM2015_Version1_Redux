import {
  ADD_TO_FAVORIS,
  REMOVE_FROM_FAVORIS,
  CLEAR_FAVORIS_LIST
} from "./actions";

import movies from "../data/movies";

const initialState = {
  movies: movies,
  favoris: []
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_TO_FAVORIS:

      return {
        ...state,

        favoris: [
          ...state.favoris,
          action.payload
        ],

        movies: state.movies.map(movie =>movie.id === action.payload.id ? { ...movie, inFavoris: true }
            : movie
        )
      };


    case REMOVE_FROM_FAVORIS:

      return {
        ...state,

        favoris: state.favoris.filter(
          movie => movie.id !== action.payload
        ),

        movies: state.movies.map(movie =>
          movie.id === action.payload
            ? { ...movie, inFavoris: false }
            : movie
        )
      };


    case CLEAR_FAVORIS_LIST:

      return {
        ...state,

        favoris: [],

        movies: state.movies.map(movie => ({
          ...movie,
          inFavoris: false
        }))
      };


    default:
      return state;
  }
};

export default reducer;
