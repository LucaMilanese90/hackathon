import React from 'react';

const WinCard = ({ modalData }) => {
  return (
    <div className="card-container">
      <h2>Congrats!!!</h2>
      <img src={modalData.image} alt="Mars view" />
      <p>{modalData.text}</p>
    </div>
  );
};

export default WinCard;
