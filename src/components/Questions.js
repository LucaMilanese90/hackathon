import React, { useState, useEffect } from 'react';
import Answer from './Answer';
import audioSignal from '../assets/audio-signal.m4a';

const Questions = ({
  setGrid,
  position,
  setPosition,
  currentQuestion,
  setCurrentQuestion,
  setIsOpen,
  modalData,
}) => {
  const questions = [
    {
      questionText: 'How many moons does Mars have?',
      answerOptions: [
        { answerText: '2', isCorrect: true },
        { answerText: '4', isCorrect: false },
        { answerText: '8', isCorrect: false },
        { answerText: '12', isCorrect: false },
      ],
    },
    {
      questionText: 'Mars is …',
      answerOptions: [
        { answerText: 'Bigger than Earth', isCorrect: false },
        { answerText: 'Smaller than Earth', isCorrect: true },
        { answerText: 'The closest planet to Earth', isCorrect: false },
        { answerText: 'Warmer than Earth', isCorrect: false },
      ],
    },
    {
      questionText: 'What is Mars’s nickname?',
      answerOptions: [
        { answerText: 'The dusty planet', isCorrect: false },
        { answerText: 'The hot planet', isCorrect: false },
        { answerText: 'The orange planet', isCorrect: false },
        { answerText: 'The red planet', isCorrect: true },
      ],
    },
    {
      questionText: 'About how long would it take to travel to Mars?',
      answerOptions: [
        { answerText: 'Three days', isCorrect: false },
        { answerText: 'A month', isCorrect: false },
        { answerText: 'Eight Months', isCorrect: true },
        { answerText: 'Two years', isCorrect: false },
      ],
    },
    {
      questionText: 'How many astronauts walk on the surface of Mars?',
      answerOptions: [
        { answerText: '0', isCorrect: true },
        { answerText: '2', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
      ],
    },
    {
      questionText: 'Mars is the __ planet from the sun.',
      answerOptions: [
        { answerText: 'Second', isCorrect: false },
        { answerText: 'Third', isCorrect: false },
        { answerText: 'Fourth', isCorrect: true },
        { answerText: 'Sixth', isCorrect: false },
      ],
    },
    {
      questionText:
        'Mars’s atmosphere has too much of which gas, making it impossible for humans to breathe without a space suit?',
      answerOptions: [
        { answerText: 'Carbon dioxide', isCorrect: true },
        { answerText: 'Hydrogen', isCorrect: false },
        { answerText: 'Oxygen', isCorrect: false },
        { answerText: 'Nitrogen', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the largest mountain on Mars?',
      answerOptions: [
        { answerText: 'Olympus Mons', isCorrect: true },
        { answerText: 'Mount Everest', isCorrect: false },
        { answerText: 'Manua Loa', isCorrect: false },
        { answerText: 'Tamu Massif', isCorrect: false },
      ],
    },
    {
      questionText: 'How long is the day on Mars?',
      answerOptions: [
        { answerText: 'around 16h40m', isCorrect: false },
        { answerText: 'around 24h40m', isCorrect: true },
        { answerText: 'around 35h20m', isCorrect: false },
        { answerText: 'around 48h10m', isCorrect: false },
      ],
    },
    {
      questionText:
        'What was the name of the first NASA rover to land on Mars?',
      answerOptions: [
        { answerText: 'Spirit', isCorrect: false },
        { answerText: 'Mars 1', isCorrect: false },
        { answerText: 'Opportunity', isCorrect: false },
        { answerText: 'Sojourner ', isCorrect: true },
      ],
    },
  ];

  const positions = [
    [4, 3],
    [4, 4],
    [3, 4],
    [2, 4],
    [2, 3],
    [3, 3],
    [3, 2],
  ];

  const [showScore, setShowScore] = useState(false);
  //   const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [battery, setBattery] = useState(3);
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);
  //   const [correct, setCorrect] = useState('');

  let audio = new Audio(audioSignal);

  const start = () => {
    audio.play();
  };

  function openModal() {
    setIsOpen(true);
  }

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      //   const oldPosition = [...position];
      //   oldPosition[0] = oldPosition[0] - 1;
      //   oldPosition[1] = oldPosition[1] + 1;
      setPosition(positions[count]);
      setCount(count + 1);
      setMessage('Correct');
      start();
      //   console.log(position);
      //   console.log(score);
    }

    if (!isCorrect) {
      setBattery(battery - 1);
      setMessage('Wrong');
      //   console.log(battery);
    }

    const nextQuestion = currentQuestion + 1;
    if (score < 6 && battery > 1) {
      setCurrentQuestion(nextQuestion);
      //   openModal();
      //   setShowAnswer(true);
    } else {
      setShowScore(true);
    }
  };

  //   useEffect(() => {
  //     if (correct) {
  //       setScore(score + 1);
  //       const oldPosition = [...position];
  //       oldPosition[0] = oldPosition[0] - 1;
  //       oldPosition[1] = oldPosition[1] + 1;
  //       setPosition(oldPosition);
  //       console.log(position);
  //       console.log(score);
  //     }

  //     if (!correct) {
  //       setBattery(battery - 1);
  //       console.log(battery);
  //     }

  //     if (correct !== '' && score < 3 && battery > 1) {
  //       setCurrentQuestion(currentQuestion + 1);
  //     }
  //     if (score === 3 || battery < 1) {
  //       setShowScore(true);
  //     }
  //   }, [correct]);

  //   function openModal() {
  //     setIsOpen(true);
  //   }

  useEffect(() => {
    const grid = () => {
      const output = [];
      for (let i = 1; i <= 5; i++) {
        let row = [];
        for (let j = 1; j <= 5; j++) {
          row.push(`${i} - ${j}`);
        }
        output.push(row);
      }
      return output;
    };

    setGrid(grid());
  }, [setGrid]);

  return (
    <div className="questions-div">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="battery-section">
              <span>Charge level {battery}</span>
            </div>
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, i) => (
              <button
                key={i}
                onClick={() => {
                  /* (answsetIsCorrecterOption.isCorrect) */
                  handleAnswerOptionClick(answerOption.isCorrect);
                  /*  setCorrect(answerOption.isCorrect); */
                  setTimeout(() => {
                    openModal();
                  }, 1000);
                }}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Questions;
