import React from 'react';
import './Header.css';

import PropTypes from 'prop-types';

import { BiDrink } from 'react-icons/bi';

export default function Header({ title }) {
  return (
    <main>
      <div className="Header-container">
        <BiDrink size={30}/>
        <h3 className="Header-title">{title}</h3>
      </div>
    </main>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}