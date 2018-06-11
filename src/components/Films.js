import React, { Component } from 'react';
import FilmCard from './FilmCard';

function Films({ data }) {

    return(
        <div className="card-wrapper">
            { data.map((film) => 
                <FilmCard
                    key={film.imdbID} 
                    title={film.Title}
                    poster={film.Poster}
                    year={film.Year}
                    type={film.Type}
                    id={film.imdbID}
                />
            )}
        </div>    
    )
    
}

export default Films;