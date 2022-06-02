import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { Carousel } from './components/carousel/Carousel';
import { Homecards } from './components/homecards/Homecards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Carousel/>
    <Homecards/>
    <Footer/>
  </React.StrictMode>
);

