import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
    const { favorites } = useMovieContext();
    if (favorites) {
        return (
            <div className="favorites">
            <h2>Your Favorites</h2>
            <div className="movies-grid">
                    {favorites.map((movie) => (
                      <MovieCard key={movie.id} movie={movie} />
                      ))}
                </div>
        </div>
        )
    }


    return <div className="favorites-empty">
        <h2>Your Favorites List is Empty</h2>
        <p>Find your favorite movies and add them to your favorites list.</p>
    </div>
}

export default Favorites;