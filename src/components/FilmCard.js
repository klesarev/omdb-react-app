
import React from 'react';
import { NavLink } from 'react-router-dom';

function FilmCard({ title, poster, year, type, id }) {

    let image = (poster === 'N/A') ? 'https://www.nilfiskcfm.com/wp-content/uploads/2016/12/placeholder.png' : poster;
    return (
        <div className="card">
            <div className="card-image">
               
                <NavLink to={id}>
                    <img src={image}/>
                </NavLink>
                
                <span className="badge badge-success">{type}</span>
            </div>
            <div className="card-body">
                <strong className="card-title">{ title }</strong>
                <p className="card-text">{ year }</p>
            </div>
           
        </div>
   
    )

}

export default FilmCard



