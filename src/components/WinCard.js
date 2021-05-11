import React from 'react';
import './WinCard.css';
import correct from './correct.png';

const WinCard = ({ modalData, setIsOpen }) => {
  return (
    <div className="card-container">
      <img src={modalData.image} alt="Mars-view" />
      <div className="card-banner">
        <img className="card-icon" src={correct} alt="Mars-Helicopter" />
      </div>
      <h2 className="card-title">Congrats!!!</h2>

      <p className="card-paragraph">{modalData.text}</p>
      <button className="card-btn" onClick={() => setIsOpen(false)}>
        Go back to the Questions
      </button>
    </div>
  );
};

export default WinCard;
