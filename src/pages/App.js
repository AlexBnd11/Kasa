import '../styles/main.scss';
import React from 'react';
import Accueil from './Accueil';
import APropos from './APropos';
import Logement from './Logement';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Erreur404 from '../components/Erreur404'
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<APropos />} />
        <Route path="*" element={<Erreur404 />} />
        <Route path="/logement/:id" element={<Logement />} />
      </Routes>
      <Footer />
    </>
  );
}