
import React, {useState} from 'react';
import TvShows from '../components/TvShows.jsx';
import Navigation from '../components/Navigation.jsx';
import TvNav from '../components/TvNav.jsx';
import '../css/template.css';


function Tv()
{

    const [searchString, setSearchString] = useState('');
    const [showMovie, setShowMovie] = useState(false);

    function getSearch(inputValue){
        setSearchString(inputValue);
        setMovieIndex(0);
        setShowMovie(inputValue !== '');
    }



    const [movieIndex, setMovieIndex] = useState(0);

    function nextMovie(){
        setMovieIndex(m => m + 2);
    }

    function prevMovie(){
        if(movieIndex > 0)
        {  
            setMovieIndex(m => m - 2);
        }
    }

    return(
        <>
            <TvNav getSearch={getSearch}/>
            {showMovie && <div className="mainContainer">

                <button onClick={prevMovie}>👈</button>
                <div className="movieContainer">
                    <TvShows search={searchString} num = {movieIndex}/>
                </div>
                <div className="movieContainer">
                    <TvShows search={searchString} num = {movieIndex + 1}/>
                </div>
                <button onClick={nextMovie}>👉</button>
            </div>}
        </>
    );
}


export default Tv