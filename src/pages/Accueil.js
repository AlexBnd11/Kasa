import React from "react";
import BackgroundAccueil from "../assets/background-accueil.jpg";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Logements from "../assets/logements.json";

export default function Accueil() {
    const Cards = () => {
        return Logements.map((logement) => (
            <Card 
                key={logement.id} 
                coverUrl={logement.cover}
                id={logement.id}
                title={logement.title}
            />
        ));
    };

    return (
        <>
            <Banner imgUrl={BackgroundAccueil} text="Chez vous, partout et ailleurs" />
            <main className="cards-container">
                {Cards()}
            </main>
        </>
    );
}