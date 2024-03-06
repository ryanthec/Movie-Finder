
import React, {useState} from 'react';
import Movie from '../components/Movie.jsx';
import Navigation from '../components/Navigation.jsx';
import '../css/template.css';

function Template()
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
            <Navigation getSearch={getSearch}/>
            {showMovie && <div className="mainContainer">

                <button onClick={prevMovie}>👈</button>
                <div className="movieContainer">
                    <Movie search={searchString} num = {movieIndex}/>
                </div>
                <div className="movieContainer">
                    <Movie search={searchString} num = {movieIndex + 1}/>
                </div>
                <button onClick={nextMovie}>👉</button>
            </div>}
        </>
    );
}


export default Template