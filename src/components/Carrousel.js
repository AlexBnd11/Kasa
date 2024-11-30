import React, { useState } from "react";
import ArrowForward from "../assets/arrow-forward.png";

export default function Carrousel(props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prevHandler = () => {
        if (currentImageIndex === 0) {
            setCurrentImageIndex(props.data.pictures.length - 1)
        } else {
            setCurrentImageIndex(currentImageIndex - 1)
        }
    };
    const nextHandler = () => {
        if (currentImageIndex === props.data.pictures.length - 1) {
            setCurrentImageIndex(0)
        } else {
            setCurrentImageIndex(currentImageIndex + 1)
        }
    };

    const currentCount = currentImageIndex + 1;
    const totalCount = props.data.pictures.length;

    return (
        <figure className="carrousel-container">
            <img src={props.data.pictures[currentImageIndex]} alt={props.data.title} />
            {totalCount > 1 && (
                <>
                    <img 
                        src={ArrowForward} 
                        className="arrow-backwards" 
                        alt="Flèche Précédent" 
                        onClick={prevHandler}
                    />
                    <img 
                        src={ArrowForward} 
                        className="arrow-forward" 
                        alt="Flèche Suivant" 
                        onClick={nextHandler}
                    />
                    <p>{currentCount}/{totalCount}</p>
                </>
            )}
        </figure>
    );
}