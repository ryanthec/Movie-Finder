
import React, {useState, useEffect} from 'react'

function Movie(props){

    const [movie,setMovie] = useState();
    const [movieImg, setMovieImg] = useState();
    const [movieDes, setMovieDes] = useState();

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=0aeb138d5d585648c855afa3a42c484e&query=${props.search}&language=en-US&page=1`)
        .then((response)=>response.json())
        .then((data)=>{
            setMovie(data.results[props.num].title);
            setMovieImg(data.results[props.num].poster_path);
            setMovieDes(data.results[props.num].overview);
            console.log(data);
        })
        .catch((error)=>console.log(error));
    }, [props.search, props.num]);

    

    return(
        <div>
            <h1>{movie}</h1>
            <br/>
            <img src={`https://image.tmdb.org/t/p/original${movieImg}`} alt={movie}/>
            <br/>
            <p>{movieDes}</p>
        </div>
    );
}

export default Movie