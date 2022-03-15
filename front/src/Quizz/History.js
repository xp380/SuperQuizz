import React, { useState } from "react";

const History = () => {
  const questions = [
    {
      questionText: "Quel est le premier jeu de fire emblem ?",
      answerOptions: [
        { answerText: "Shadow Dragon & the Blade of Light", isCorrect: true },
        { answerText: "Three Houses", isCorrect: false },
        { answerText: "Sacred Stones", isCorrect: false },
        {
          answerText: "Path of Radiance",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "Qui est le créteur de ce site web ?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Vincent Kouoï", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "Quelle crise frappe en ce moment?",
      answerOptions: [
        { answerText: "Covid 19", isCorrect: true },
        { answerText: "Ebola", isCorrect: false },
        { answerText: "Crise économique", isCorrect: false },
        { answerText: "Sida", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
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
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
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

export default History;
