import React from 'react';
import '../cardList/CardList.css' 
import {Card} from "../Card/Card"
 const CardList = props => (
    <div className="card-list">
        {props.monster.map(monster =>
            <Card key={monster.id} val={monster}/>)}
    </div>
);

export default CardList;
