
import React, {useState, useEffect} from 'react';
import Navigation from '../components/Navigation.jsx';
import '../css/template.css';
import '../css/popular.css';


function Popular(props) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0aeb138d5d585648c855afa3a42c484e&language=en-US&page=1`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Navigation />
            <div className="mainContainer">
                <div className="movieContainer">
                    {movies.map((movie, index) => (
                        <div key={index} className="movieObject">
                            <h2>{movie.title}</h2>
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                            <p>{movie.overview}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Popular