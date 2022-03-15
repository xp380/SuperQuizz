import React, { useState } from "react";
import "./Code.css";

const Code = () => {
  const questions = [
    {
      questionText: "Quelle entreprise a développé React ?",
      answerOptions: [
        { answerText: "Facebook", isCorrect: true },
        { answerText: "Alibaba", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        {
          answerText: "Microsoft",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "Qui est le créateur de ce site web ?",
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
    <div>
      {showScore ? (
        <div>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div>
            <div>
              <span style={{ fontSize: 15, fontWeight: "bolder" }}>
                Question {currentQuestion + 1}/{questions.length}
              </span>
            </div>
            <div
              style={{ marginLeft: 500, fontSize: 15, fontWeight: "bolder" }}
            >
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="designAnswers">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className="buttonAnswers"
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

export default Code;
