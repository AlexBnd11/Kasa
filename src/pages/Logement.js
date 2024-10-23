import React, { useState } from "react";
import { useParams, Navigate } from 'react-router-dom';
import Collapse from "../components/Collapse"
import ArrowForward from "../assets/arrow-forward.png";
import Logements from "../assets/logements.json";

export default function Logement() {
    const { id } = useParams();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const selectedLogement = Logements.find(logement => logement.id === id);
    if (!selectedLogement) {
        return <Navigate to="/404" />;
    }
    const prevHandler = () => {
        if (currentImageIndex === 0) {
            setCurrentImageIndex(currentImageIndex.length - 1)
        } else {
            setCurrentImageIndex(currentImageIndex - 1)
        }
    };
    const nextHandler = () => {
        if (currentImageIndex === currentImageIndex.length - 1) {
            setCurrentImageIndex(0)
        } else {
            setCurrentImageIndex(currentImageIndex + 1)
        }
    };

    return (
        <main>

            <div className="carrousel-container">
                <figure>
                    <img src={selectedLogement.pictures[currentImageIndex]} alt={selectedLogement.title} />
                </figure>
                <img src={ArrowForward} className="arrow-backwards" alt="Flèche Précédent" onClick={prevHandler}/>
                <img src={ArrowForward} className="arrow-forward" alt="Flèche Suivant" onClick={nextHandler}/>
            </div>
            <div className="description--primary">
                <div className="title-container">
                    <h1>{selectedLogement.title}</h1>
                    <h2>{selectedLogement.location}</h2>
                </div>
                <div className="host-container">
                    <p>{selectedLogement.host.name}</p>
                    <img src={selectedLogement.host.picture} />
                </div>
            </div>
            <div className="description--secondary">
                <div className="tags-container">
                    {selectedLogement.tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
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
                    collapseDescription={selectedLogement.description}
                    />
                <Collapse 
                    collapseName="Equipements"
                    collapseDescription={selectedLogement.equipements.map((equip, index) => (
                        <>
                        {equip} <br key={index} />
                        </>
                    ))}
                    />
            </div>
        </main>
    );
}