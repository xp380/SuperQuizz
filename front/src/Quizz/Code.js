import React, { useState } from "react";
import { Modal, Button } from "antd";
import {
  SmileOutlined,
  FrownOutlined,
  CloseCircleOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import "./Code.css";

const Code = (props) => {
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
      clueAnswers: "Le film Social Network",
    },
    {
      questionText: "Qui est le créateur de ce site web ?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Vincent Kouoï", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
      clueAnswers: "Ça commence par la lettre V",
    },
    {
      questionText:
        "Quelle méthode pour afficher les données d'un tableau en javascript",
      answerOptions: [
        { answerText: "map", isCorrect: true },
        { answerText: "filter", isCorrect: false },
        { answerText: "reduce", isCorrect: false },
        { answerText: "forEach", isCorrect: false },
      ],
      clueAnswers: "map est une carte qui affiche tout son contenu",
    },
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  // const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      props.setScore(props.score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleAnswerNavigation = () => {
    const previousQuestion = currentQuestion - 1;
    if (previousQuestion < questions.length) {
      setCurrentQuestion(previousQuestion);
    } else {
      setShowScore(true);
    }
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const close = (
    <div className="designclose">
      <CloseCircleOutlined />
    </div>
  );

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      {showScore ? (
        <div className="resultHistory">
          You scored {props.score} out of {questions.length} <br />
          {props.score > 2 ? (
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
              <span className="questionsCode" >
                Question {currentQuestion + 1}/{questions.length}
              </span>
            </div>
            <div
              className="questionsCodeCurrent"
            >
              {questions[currentQuestion].questionText}
              <Button
                className="clueAnswersCode"
                type="primary"
                onClick={showModal}
              >
                Indice
              </Button>
            </div>
            <Modal
              visible={isModalVisible}
              closeIcon={close}
              onCancel={handleCancel}
              footer={false}
              width={600}
            >
              <div>{questions[currentQuestion].clueAnswers}</div>
            </Modal>
          </div>
          <div className="designAnswers">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <Button
                className="buttonAnswers"
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </Button>
            ))}
            <LeftOutlined
              className="LeftCode"
              onClick={() => handleAnswerNavigation()}
            />
            <RightOutlined
              className="RightCode"
              onClick={() => handleAnswerOptionClick()}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Code;
