import React, { useState, useEffect } from 'react';

const Questions = ({ setMapA, position, setPosition }) => {
  const questions = [
    {
      questionText: 'Question 1... ?',
      answerOptions: [
        { answerText: 'AAAAAAAAAAA', isCorrect: false },
        { answerText: 'BBBBBBBBBBB', isCorrect: false },
        { answerText: 'CCCCCCCCCCC', isCorrect: true },
        { answerText: 'DDDDDDDDDDD', isCorrect: false },
      ],
    },
    {
      questionText: 'Question 2... ?',
      answerOptions: [
        { answerText: 'AAAAAAAAAAA', isCorrect: false },
        { answerText: 'BBBBBBBBBBB', isCorrect: false },
        { answerText: 'CCCCCCCCCCC', isCorrect: true },
        { answerText: 'DDDDDDDDDDD', isCorrect: false },
      ],
    },
    {
      questionText: 'Question 3... ?',
      answerOptions: [
        { answerText: 'AAAAAAAAAAA', isCorrect: false },
        { answerText: 'BBBBBBBBBBB', isCorrect: false },
        { answerText: 'CCCCCCCCCCC', isCorrect: true },
        { answerText: 'DDDDDDDDDDD', isCorrect: false },
      ],
    },
    {
      questionText: 'Question 4... ?',
      answerOptions: [
        { answerText: 'AAAAAAAAAAA', isCorrect: false },
        { answerText: 'BBBBBBBBBBB', isCorrect: false },
        { answerText: 'CCCCCCCCCCC', isCorrect: true },
        { answerText: 'DDDDDDDDDDD', isCorrect: false },
      ],
    },
    {
      questionText: 'Question 5... ?',
      answerOptions: [
        { answerText: 'AAAAAAAAAAA', isCorrect: false },
        { answerText: 'BBBBBBBBBBB', isCorrect: false },
        { answerText: 'CCCCCCCCCCC', isCorrect: true },
        { answerText: 'DDDDDDDDDDD', isCorrect: false },
      ],
    },
    {
      questionText: 'Question 6... ?',
      answerOptions: [
        { answerText: 'AAAAAAAAAAA', isCorrect: false },
        { answerText: 'BBBBBBBBBBB', isCorrect: false },
        { answerText: 'CCCCCCCCCCC', isCorrect: true },
        { answerText: 'DDDDDDDDDDD', isCorrect: false },
      ],
    },
    {
      questionText: 'Question 7... ?',
      answerOptions: [
        { answerText: 'AAAAAAAAAAA', isCorrect: false },
        { answerText: 'BBBBBBBBBBB', isCorrect: false },
        { answerText: 'CCCCCCCCCCC', isCorrect: true },
        { answerText: 'DDDDDDDDDDD', isCorrect: false },
      ],
    },
    {
      questionText: 'Question 8... ?',
      answerOptions: [
        { answerText: 'AAAAAAAAAAA', isCorrect: false },
        { answerText: 'BBBBBBBBBBB', isCorrect: false },
        { answerText: 'CCCCCCCCCCC', isCorrect: true },
        { answerText: 'DDDDDDDDDDD', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      const oldPosition = [...position];
      oldPosition[0] = oldPosition[0] - 1;
      oldPosition[1] = oldPosition[1] + 1;
      setPosition(oldPosition);
      console.log(position);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  useEffect(() => {
    const grid = () => {
      const output = [];
      for (let i = 1; i <= 8; i++) {
        let row = [];
        for (let j = 1; j <= 8; j++) {
          row.push(`${i} - ${j}`);
        }
        output.push(row);
      }
      return output;
    };

    setMapA(grid());
  }, [setMapA]);

  return (
    <div className="questions-div">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
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
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
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
