import React from "react";

export default function Card(props) {
    const cardImg = {backgroundImage: `url(${props.coverUrl})`,};
    const cardLink = `${props.cardLink}`;
    return (
        <a href={cardLink}>
            <div className="card" style={cardImg}>
                <p>{props.title}</p>
            </div>
        </a>
    );
}