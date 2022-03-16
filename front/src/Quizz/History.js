import React, { useState } from "react";
import { Modal, Button } from "antd";
import {
  SmileOutlined,
  FrownOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

const History = () => {
  const questions = [
    {
      questionText: "On situe l’apparition de l’homme à :",
      answerOptions: [
        { answerText: "10 millions d'année avant J.C", isCorrect: false },
        { answerText: "5 millions d'année avant J.C", isCorrect: false },
        { answerText: "3 millions d'année avant J.C", isCorrect: true },
        {
          answerText: "8 millions d'année avant J.C",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "En 1 500 av. J.-C., la conquête du territoire français commence avec :",
      answerOptions: [
        { answerText: "Les Celtes", isCorrect: true },
        { answerText: "Les tribus belges", isCorrect: false },
        { answerText: "Les Avernes", isCorrect: false },
      ],
    },
    {
      questionText: "On situe l’âge de fer à :",
      answerOptions: [
        { answerText: "700 av.J.-C", isCorrect: false },
        { answerText: "1500 av.J.-C", isCorrect: true },
        { answerText: "300 ap.J-C", isCorrect: false },
      ],
    },
    {
      questionText: "L’Antiquité démarre :",
      answerOptions: [
        { answerText: "En 700 av.J.-C", isCorrect: false },
        { answerText: "En 1000 av.J.-C", isCorrect: false },
        { answerText: "En 476", isCorrect: true },
      ],
    },
    {
      questionText: "Vercingétorix est vaincu à Alésia en 52 av. J.-C. par :",
      answerOptions: [
        { answerText: "Charlemagne", isCorrect: false },
        { answerText: "Les vikings", isCorrect: false },
        { answerText: "Jules César", isCorrect: true },
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
          {score > 4 ? (
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
                Question {currentQuestion + 1}/{questions.length}
              </span>
            </div>
            <div>{questions[currentQuestion].questionText}</div>
          </div>
          <div
            style={{
              display: "inline-block",
              marginTop: 20,
            }}
          >
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <Button
                style={{ width: 250 }}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </Button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default History;
