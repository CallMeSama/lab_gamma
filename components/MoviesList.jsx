import { useState, useEffect } from "react";
function MovieList(){
    const [movies, setMovies] = useState([]);
    useEffect(async()=>{
        const response = await fetch("api/movies");
        const movies = await response.json();
        setMovies(movies);
    }, []);
    return(
        <div>
            <h1>Movies</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title} - {movies.releaseYear}</li>
                ))}
            </ul>
        </div>
    )
}
export default MovieList;