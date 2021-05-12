import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Result.css';

const guides = [
  {
    id: 1,
    text: 'One Question per day will guide Percy closer to Ginny',
    url: './questions',
    link: 'start-link1',
  },
  {
    id: 2,
    text: 'For every correct answer Ginny sends one GPS-signal and...',
    url: './questions',
    link: 'start-link2',
  },
  {
    id: 3,
    text: 'she has only power for 7 more signals..',
    url: './questions',
    link: 'start-link3',
  },
  {
    id: 4,
    text: 'Help Percy find Ginny',
    url: './questions',
    link: 'start-link4',
  },
  { id: 5, text: 'Start', url: './questions', link: 'start-link5' },
];

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
      <div className="start-article">
        <h1>{message ? 'Mission Accomplished!' : 'Mission failed!'}</h1>
        <p
        /* className={guides[index].link}
          onClick={() => history.push('/questions')} */
        >
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
