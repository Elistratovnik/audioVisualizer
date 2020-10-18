import React from 'react';
import '../sass/Spinner.scss'

function Spinner() {
  return (
      <div className="spinner">
        <div className="spinner__loader"><span></span></div>
      </div>
  );
}

export default Spinner;
