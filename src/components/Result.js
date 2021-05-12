import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Result.css';


const Result = ({ message }) => {
  const history = useHistory();

  const [index, setIndex] = useState(0);
  const classLink = 'Classname';

  const handleClick = () => {
    if (message) {
      window.open('https://mars.nasa.gov/mars2020/', '_blank');
    }
    if (!message) {
      history.push('/start');
      window.location.reload();
    }
  };

  return (
    <div className="start-container-result">
       <h1 className="title-result">{message ? 'Mission Accomplished!' : 'Mission failed!'}</h1>
      <div className="start-article-result">
       
        <p>
          {message ? `Here you can follow the whole Mars Mission` : ``}
        </p>
        <p className="start-link5" onClick={() => handleClick}>
          {message ? `Mars mission` : `Try again`}
        </p>
      </div>
    </div>
  );
};

export default Result;
