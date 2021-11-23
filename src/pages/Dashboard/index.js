import React from 'react';

import Header from '../../components/Header';
import ListaBebidas from '../../components/ListaBebidas';
import Modal from '../../components/Modal';

export default function Dashboard(){
  return(
    <main>
      <Header title="Cadastrar Bebidas" />
      <Modal />
      <ListaBebidas />
    </main>
  );
}