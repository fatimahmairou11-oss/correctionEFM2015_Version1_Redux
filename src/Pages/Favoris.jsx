import { useSelector, useDispatch } from "react-redux";

<<<<<<< HEAD
import {
  removeFromFavoris,
  clearFavoris
} from "../features/movieSlice";

function Favoris() {

  const favoris = useSelector(state => state.movies.favoris);
=======
import {RemoveFromeFavoris,clearFavorisList} from "../redux/actions";

const Favoris=()=> {

  const favoris = useSelector(state => state.favoris );
>>>>>>> 687c85bee7baa8dd3a478ae06c752cb83be9fee0

  const dispatch = useDispatch();

  return (

    <div className="container mt-4">

<<<<<<< HEAD
      <h2 className="text-center mb-4">
        Mes Films Favoris
      </h2>

      <div className="d-flex flex-column gap-3">

        {favoris.map(movie => (
=======
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
>>>>>>> 687c85bee7baa8dd3a478ae06c752cb83be9fee0

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
<<<<<<< HEAD
                    dispatch(removeFromFavoris(movie.id))
=======
                    dispatch(RemoveFromeFavoris(movie.id))
>>>>>>> 687c85bee7baa8dd3a478ae06c752cb83be9fee0
                  }
                >
                  Supprimer
                </button>
<<<<<<< HEAD

              </div>

            </div>

          </div>

        ))}

      </div>

      {favoris.length > 0 && (

        <button
          className="btn btn-warning mt-4"
          onClick={() => dispatch(clearFavoris())}
        >
          Vider la liste des favoris
        </button>

      )}

      {favoris.length === 0 && (

        <h5 className="text-center text-muted mt-4">
          Aucun film dans les favoris !
        </h5>

      )}

    </div>

=======
            </div>
</div>
          </div>
        ))}

        </div>
    </div>
>>>>>>> 687c85bee7baa8dd3a478ae06c752cb83be9fee0
  );
}

export default Favoris;
