import React, { useState } from "react";
import Collapse from "../components/Collapse"
import ArrowForward from "../assets/arrow-forward.png";

export default function Logement(props) {
    const [currentImage, setCurrentImage] = useState([props.pictures]);
    const prevHandler = () => {
        if (currentImage[0]) {
            setCurrentImage[currentImage.length -1]
        } else {
            setCurrentImage[currentImage - 1]
        }
    };
    const nextHandler = () => {
        if (currentImage = currentImage.length -1) {
            setCurrentImage[0]
        } else {
            setCurrentImage[currentImage + 1]
        }
    };

    return (
        <main>

            <div className="carrousel-container">
                <figure>{currentImage}</figure>
                <img src={ArrowForward} className="arrow-backwards" onClick={prevHandler}/>
                <img src={ArrowForward} className="arrow-forward" onClick={nextHandler}/>
            </div>
            <div className="description--primary">
                <div className="title-container">
                    <h1>{props.title}</h1>
                    <h2>{props.location}</h2>
                </div>
                <div className="host-container">
                    <p>{props.hostName}</p>
                    <img src={props.hostPic} />
                </div>
            </div>
            <div className="description--secondary">
                <div className="tags-container">
                    <p>{props.tags}</p>
                </div>
                <div className="stars-container">
                    <img />
                    <img />
                    <img />
                    <img />
                    <img />
                </div>
            </div>
            <div className="description--tertiary">
                <Collapse 
                    collapseName="Description"
                    collapseDescription={props.description}
                    />
                <Collapse 
                    collapseName="Equipements"
                    collapseDescription={props.equipements}
                    />
            </div>
        </main>
    );
}