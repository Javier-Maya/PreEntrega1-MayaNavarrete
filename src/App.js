import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import RutaCenicero from './assets/Cenicero.png';
import RutaLampara from './assets/Lampara.png';
import RutaMate from './assets/Mate.png';
import RutaPelota from './assets/Pelota.png';
import RutaSchopero from './assets/Schopero.png';
import RutaTermo from './assets/Termo.png';

function App() {
  return (
    <body>
      <NavBar/>
      <div className="containerProductos">
        <ItemListContainer Producto="Cenicero" Precio='2990' Descripcion="Cenicero U. de Chile" Imagen={RutaCenicero}/>
        <ItemListContainer Producto="Lampara" Precio='20990' Descripcion="Lampara U. de Chile" Imagen={RutaLampara}/>
        <ItemListContainer Producto="Mate" Precio='9990' Descripcion="Mate U. de Chile" Imagen={RutaMate}/>
        <ItemListContainer Producto="Pelota" Precio='19990' Descripcion="Pelota U. de Chile" Imagen={RutaPelota}/>
        <ItemListContainer Producto="Schopero" Precio='8990' Descripcion="Schopero U. de Chile" Imagen={RutaSchopero}/>
        <ItemListContainer Producto="Termo" Precio='29990' Descripcion="Termo U. de Chile" Imagen={RutaTermo}/>
      </div>
      <Footer/>
    </body> 
    
    );
}

export default App;