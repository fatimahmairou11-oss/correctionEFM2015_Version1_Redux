import { useSelector, useDispatch } from "react-redux";

import {RemoveFromeFavoris,clearFavorisList} from "../redux/actions";

const Favoris=()=> {

  const favoris = useSelector(state => state.favoris );

  const dispatch = useDispatch();

  return (

    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
       <h2>Mes Films Favoris</h2> 
       {favoris.length > 0 && (
        <button
          className="btn btn-danger" onClick={() => dispatch(clearFavorisList())}
        >
          Vider la liste
        </button>
       )}
      </div>

      <div className="d-flex flex-column gap-3">
         {favoris.length === 0 ? (
          <p className="text-center">Aucun film dans vos favoris.</p>
        ):
        favoris.map(movie => (

          <div
            className="card shadow"
            key={movie.id}
          >

            <div className="d-flex align-items-center p-3">

              <img
                src={movie.poster}
                alt={movie.title}
                style={{
                  width: "100px",
                  height: "130px",
                  objectFit: "cover"
                }}
              />

              <div className="ms-4 flex-grow-1">

                <h5>{movie.title}</h5>

                <button
                  className="btn btn-danger"
                  onClick={() =>
                    dispatch(RemoveFromeFavoris(movie.id))
                  }
                >
                  Supprimer
                </button>
            </div>
</div>
          </div>
        ))}

        </div>
    </div>
  );
}

export default Favoris;
