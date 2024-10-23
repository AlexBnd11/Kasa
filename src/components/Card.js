import React from "react";
import { Link } from 'react-router-dom';

export default function Card(props) {
    const cardImg = {backgroundImage: `url(${props.coverUrl})`,};
    return (
        <Link to={`/logement/${props.id}`}>
            <div className="card" style={cardImg}>
                <p>{props.title}</p>
            </div>
        </Link>
    );
}