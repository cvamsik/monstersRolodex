import React from 'react';
import "./Card.css";
export const Card = (props) =>(

    <div className="card-container">
        <img alt='monster' src={'https://robohash.org/'+props.val.id+'?set=set4'}/>
        <h1>{props.val.name}</h1>
    </div>
);