import React from 'react';
import Banner from '../components/Banner';
import BackgroundAPropos from '../assets/background-apropos.jpg';
import Collapse from '../components/Collapse';

export default function APropos() {
    return (
        <main>
            <Banner imgUrl={BackgroundAPropos} />
            <Collapse 
                collapseName="Fiabilité"
                collapseDescription="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
            />
            <Collapse 
                collapseName="Respect"
                collapseDescription="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <Collapse 
                collapseName="Service"
                collapseDescription="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
            />
            <Collapse 
                collapseName="Sécurité"
                collapseDescription="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos serveices.
                En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            />
        </main>
    );
}