import React, { useState } from 'react';

import Modals from 'react-modal';
import Header from '../Header';
import './Modal.css';

Modals.setAppElement('#root')

export default function Modal(){
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [drink, setDrink] = useState('');
  const [country, setCountry] = useState('');

  function handleSubmit(){
    if(drink === ''){
      alert('Por favor, coloque uma bebida válida!');
      return;
    }
    localStorage.setItem('drinks', drink);
    saveCountry();
    setModalIsOpen(false);
  }

  function saveCountry(){
    localStorage.setItem('country', country);
    setModalIsOpen(false);
  }

  function refreshPage(){ 
    window.location.reload(); 
  }

  return(
    <main>
      <div className="Modal-container">
        <div className="Button-container">
          <button className="button-refresh" onClick={() => refreshPage()}>Atualizar</button>
          <button className="button-open" onClick={() => setModalIsOpen(true)}>Cadastrar Bebida</button>
        </div>
        <Modals 
          isOpen={modalIsOpen} 
          onRequestClose={() => setModalIsOpen(false)} 
          style={{overlay: { backgroundColor: '#DCDCDC' }}}
          >
          <Header title="Cadastro de bebida" />
          <form action="" method="post" className="Form">
            <input className="Input-drink" placeholder="Nome da bebida" type="text" value={drink} onChange={(event) => setDrink(event.target.value)} />
            <select name="select" id="Select-country" className="Select-country" onChange={(event) => setCountry(event.target.value)}>
              <option>Selecione o pais</option>
              <option value="Brasil">Brasil</option>
              <option value="França">França</option>
              <option value="Japão">Japão</option>
              <option value="Venezuela">Venezuela</option>
            </select>
            <div className="Div-buttons">
              <button type="reset" className="Button-cancel" onClick={() => setModalIsOpen(false)}>Cancelar</button>
              <button type="button" className="Button-submit" onClick={() => handleSubmit()}>Cadastrar</button>
            </div>
          </form>
        </Modals>
      </div>
    </main>
  );
}