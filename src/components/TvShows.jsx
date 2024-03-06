
import React, {useState, useEffect} from 'react'

function TvShows(props){

    const [tv,setTv] = useState();
    const [tvImg, setTvImg] = useState();
    const [tvDes, setTvDes] = useState();

    useEffect(()=>{
        
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=0aeb138d5d585648c855afa3a42c484e&query=${props.search}&include_adult=false`)
        .then((response)=>response.json())
        .then((data)=>{
            setTv(data.results[props.num].title);
            setTvImg(data.results[props.num].poster_path);
            setTvDes(data.results[props.num].overview);
            console.log(data);
        })
        .catch((error)=>console.log(error));
    }, [props.search, props.num]);

    

    return(
        <div>
            <h1>{tv}</h1>
            <br/>
            <img src={`https://image.tmdb.org/t/p/original${tvImg}`} alt={tv}/>
            <br/>
            <p>{tvDes}</p>
        </div>
    );
}

export default TvShows