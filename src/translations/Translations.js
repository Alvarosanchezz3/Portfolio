import React, { useState } from 'react';

const Translations = ({ onLanguageChange }) => {
  const [isSpanish, setIsSpanish] = useState(true);

  const toggleLanguage = () => {
    setIsSpanish(!isSpanish);
    onLanguageChange(); // Llama a la función de cambio de idioma en App.js
  };

  return (
    <div>
      <button id="changeLanguageButton" className="flag-button" onClick={toggleLanguage}>
        <img
          id="flagImage"
          src={isSpanish ? './assets/ES.png' : './assets/UK.png'}
          alt="flag"
          className="flag"
        />
      </button>
    </div>
  );
};

export default Translations;