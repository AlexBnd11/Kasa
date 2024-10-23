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
            setCurrentImageIndex(selectedLogement.pictures.length - 1)
        } else {
            setCurrentImageIndex(currentImageIndex - 1)
        }
    };
    const nextHandler = () => {
        if (currentImageIndex === selectedLogement.pictures.length - 1) {
            setCurrentImageIndex(0)
        } else {
            setCurrentImageIndex(currentImageIndex + 1)
        }
    };

    return (
        <main>
            <figure className="carrousel-container">
                <img src={selectedLogement.pictures[currentImageIndex]} alt={selectedLogement.title} />
                <img src={ArrowForward} className="arrow-backwards" alt="Flèche Précédent" onClick={prevHandler}/>
                <img src={ArrowForward} className="arrow-forward" alt="Flèche Suivant" onClick={nextHandler}/>
            </figure>
            <div className="description--primary">
                <div className="title-container">
                    <h1>{selectedLogement.title}</h1>
                    <h2>{selectedLogement.location}</h2>
                </div>
                <div className="host-container">
                    <p>
                        {selectedLogement.host.name.split(' ')[0]} <br />
                        {selectedLogement.host.name.split(' ')[1]}
                    </p>
                    <img src={selectedLogement.host.picture} alt="" />
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
                    collapseDescription={selectedLogement.equipments.map((equip, index) => (
                        <>
                        {equip} <br key={index} />
                        </>
                    ))}
                    />
            </div>
        </main>
    );
}