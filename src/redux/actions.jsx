export const ADD_TO_FAVORIS = "ADD_TO_FAVORIS";
export const REMOVE_FROM_FAVORIS = "REMOVE_FROM_FAVORIS";
export const CLEAR_FAVORIS_LIST = "CLEAR_FAVORIS_LIST";


export const addToFavoris = (movie) => {
  return {
    type: ADD_TO_FAVORIS,
    payload: movie
  };
};


export const RemoveFromeFavoris = (id) => {
  return {
    type: REMOVE_FROM_FAVORIS,
    payload: id
  };
};



export const clearFavorisList = () => {
  return {
    type: CLEAR_FAVORIS_LIST
  };
};
