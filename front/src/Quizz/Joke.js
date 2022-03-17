import React, { useState } from "react";
import { Modal, Button } from "antd";
import {
  SmileOutlined,
  FrownOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import "./Joke.css";

const Joke = () => {
  const questions = [
    {
      questionText: "Quelle est la couleur banane jaune ?",
      answerOptions: [
        { answerText: "Jaune", isCorrect: true },
        { answerText: "Verte", isCorrect: true },
        { answerText: "Marron", isCorrect: true },
        {
          answerText: "Rouge",
          isCorrect: true,
        },
      ],
    },
    {
      questionText: "Qu'est ce qui crie plus fort qu'un cochon?",
      answerOptions: [
        { answerText: "Un cochon", isCorrect: true },
        { answerText: "Un chien", isCorrect: true },
        { answerText: "2 cochons", isCorrect: true },
        { answerText: "Un mouton", isCorrect: true },
      ],
    },
    {
      questionText: "Que dit un zéro quand il rencontre un huit ?",
      answerOptions: [
        { answerText: "Pousse-toi !", isCorrect: true },
        { answerText: "T'es grand !", isCorrect: true },
        { answerText: "T'as mis une ceinture ?", isCorrect: true },
      ],
    },
    {
      questionText: "Pourquoi les éléphants n'aiment-ils pas les ordinateurs ?",
      answerOptions: [
        { answerText: "Parce qu'il y a des souris", isCorrect: true },
        {
          answerText: "Parce qu'ils ne savent pas ce que c'est",
          isCorrect: true,
        },
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
        <div style={{ textAlign: "center", marginTop: 200, fontSize: 30 }}>
          You scored {score} out of {questions.length} <br />
          {score > 2 ? (
            <div>
              Congratulation !!! <SmileOutlined />
            </div>
          ) : (
            <div>
              Too bad, You will do it better next time <br />
              <FrownOutlined />
            </div>
          )}
        </div>
      ) : (
        <>
          <div>
            <div>
              <span style={{ fontSize: 15, fontWeight: "bolder" }}>
                Question {currentQuestion + 1}
              </span>
              /{questions.length}
            </div>
            <div
              style={{ marginLeft: 500, fontSize: 15, fontWeight: "bolder" }}
            >
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div>
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
export default Joke;
