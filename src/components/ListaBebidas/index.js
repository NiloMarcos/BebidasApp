import React, { useState, useEffect } from 'react';

import './ListaBebidas.css';

export default function ListaBebidas(){
  const [drinks, setDrinks] = useState([]);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const myDrinks = localStorage.getItem('drinks')
    const countries = localStorage.getItem('country');
    console.log(myDrinks);
    setDrinks(myDrinks);
    setCountry(countries);
  },[]);

  return(
    <main className="Container">
      <div className="Contaner-drink">
        <p className="Drink-name">Bebida: {drinks}</p>
        <p className="Drink-country">Pais: {country}</p>
      </div>
    </main>
  );
}