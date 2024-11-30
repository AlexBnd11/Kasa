import React from "react";
import { useParams, Navigate } from 'react-router-dom';
import Collapse from "../components/Collapse"
import Logements from "../assets/logements.json";
import EmptyStar from "../assets/empty-star.png";
import FilledStar from "../assets/filled-star.png";
import Carrousel from "../components/Carrousel";

export default function Logement() {
    const { id } = useParams();
    const selectedLogement = Logements.find(logement => logement.id === id);
    if (!selectedLogement) {return <Navigate to="/404" />;}

    return (
        <main className="description--logement">
            <Carrousel
                data={selectedLogement}
            />
            <div className="primary-secondary-container">
                <div className="description--primary">
                    <div className="title-container">
                        <h1>{selectedLogement.title}</h1>
                        <h2>{selectedLogement.location}</h2>
                    </div>
                    <div className="tags-container">
                        {selectedLogement.tags.map((tag, index) => (
                            <div key={index} className="tag-container">
                                <span>{tag}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="description--secondary">
                    <div className="host-container">
                            <p>
                                {selectedLogement.host.name.split(' ')[0]} <br />
                                {selectedLogement.host.name.split(' ')[1]}
                            </p>
                            <img src={selectedLogement.host.picture} alt="" />
                        </div>
                    <div className="stars-container">
                        {[...Array(5)].map((star, index) => (
                            <img
                            key={index}
                            src={index < selectedLogement.rating ? EmptyStar : FilledStar}
                            alt={`Étoile ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="description--tertiary">
                <Collapse 
                    collapseName="Description"
                    collapseDescription={selectedLogement.description}
                    isLogement={true}
                    />
                <Collapse 
                    collapseName="Equipements"
                    collapseDescription={selectedLogement.equipments.map((equip, index) => (
                        <React.Fragment key={index}>
                        {equip} <br />
                        </React.Fragment>
                    ))}
                    isLogement={true}
                    />
            </div>
        </main>
    );
}