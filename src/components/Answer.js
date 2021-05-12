import { useState } from 'react';
const Answer = ({ setShowAnswer, setIsOpen, message, setPosition, count }) => {
  const [currentText, setCurrentText] = useState(1);

  function openModal() {
    setIsOpen(true);
  }

  const text = [
    {
      paragTrue: `You'll be guided to the next check point`,
      paragFalse: `Sorry, I have no new gps data for you`,
      buttonTrue: 'Move me forward',
      buttonFalse: 'Next',
    },
    {
      paragTrue: `Good luck for the next question`,
      paragFalse: `Good luck for the next question`,
      buttonTrue: 'Next',
      buttonFalse: 'Next',
    },
  ];

  const handleClick = () => {
    if (currentText === 1 && message) {
      setPosition(positions[count]);
      setCurrentText(currentText + 1);
    }

    if (currentText === 2 && message) {
      openModal();
      setCurrentText(currentText - 1);
      setShowAnswer(false);
    }

    if (currentText === 1 && !message) {
      setCurrentText(currentText + 1);
    }

    if (currentText === 2 && !message) {
      openModal();
      setCurrentText(currentText - 1);
      setShowAnswer(false);
    }
  };

  const positions = [
    [4, 3],
    [4, 4],
    [3, 4],
    [2, 4],
    [2, 3],
    [3, 3],
    [3, 2],
  ];

  return (
    <div>
      <h1>{message ? `Congrats!!!` : `Wrong!`}</h1>
      <p>
        {message
          ? text[currentText - 1].paragTrue
          : text[currentText - 1].paragFalse}
      </p>
      <button onClick={() => handleClick()}>
        {message
          ? text[currentText - 1].buttonTrue
          : text[currentText - 1].buttonFalse}
      </button>
    </div>
  );
};

export default Answer;
