import React, { useState } from "react";
import { Button } from "antd";
import "./History.css";
import {
  SmileOutlined,
  FrownOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

const History = (props) => {
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
      realAnswers: "3 millions d'année avant J.C",
      clueAnswers:
        "https://i.f1g.fr/media/ext/704x396_crop/sante.lefigaro.fr/sites/default/files/media/field_media_image/4bc43a0a-19d1-11e2-8029-a0510b876afb-493x328.jpg",
    },
    {
      questionText:
        "En 1 500 av. J.-C., la conquête du territoire français commence avec :",
      answerOptions: [
        { answerText: "Les Celtes", isCorrect: true },
        { answerText: "Les tribus belges", isCorrect: false },
        { answerText: "Les Avernes", isCorrect: false },
      ],
      realAnswers: "Les Celtes",
      clueAnswers:
        "https://i.la-croix.com/1400x933/smart/2016/08/07/1200780589/Une-cavalerie-celte-traversant-cours-Illustration-Giuseppe-Rava_0.jpg",
    },
    {
      questionText: "On situe l’âge de fer à :",
      answerOptions: [
        { answerText: "700 av.J.-C", isCorrect: false },
        { answerText: "1500 av.J.-C", isCorrect: true },
        { answerText: "300 ap.J-C", isCorrect: false },
      ],
      realAnswers: "1500 av.J.-C",
      clueAnswers:
        "https://www.larousse.fr/encyclopedie/data/images/1309818-%C3%82ge_du_fer_par_G_Mathieu.jpg",
    },
    {
      questionText: "L’Antiquité démarre :",
      answerOptions: [
        { answerText: "En 700 av.J.-C", isCorrect: false },
        { answerText: "En 1000 av.J.-C", isCorrect: false },
        { answerText: "En 476", isCorrect: true },
      ],
      realAnswers: "En 476",
      clueAnswers:
        "https://jeretiens.net/wp-content/uploads/2016/08/ligne_du_temps.jpg",
    },
    {
      questionText: "Vercingétorix est vaincu à Alésia en 52 av. J.-C. par :",
      answerOptions: [
        { answerText: "Charlemagne", isCorrect: false },
        { answerText: "Les vikings", isCorrect: false },
        { answerText: "Jules César", isCorrect: true },
      ],
      realAnswers: "Jules César",
      clueAnswers:
        "http://img.over-blog-kiwi.com/1/48/43/10/20150305/ob_537cfa_vercin.jpg",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);

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

  return (
    <div>
      {showScore ? (
        <div className="questionsHistory" >
          You scored {props.score} out of {questions.length} <br />
          {props.score > 4 ? (
            <div>
              Congratulation !!! <SmileOutlined />
            </div>
          ) : (
            <div>
              Too bad, You will do it better next time <br />
              <FrownOutlined />
              <br />
              Les réponses:
              {questions.map((data) => (
                <ul style={{ marginLeft: 500 }}>
                  <li style={{ marginRight: 600 }}>{data.realAnswers}</li>
                </ul>
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          <div>
            <div>
              <span className="currentQuestionHistory">
                Question {currentQuestion + 1}/{questions.length}
              </span>
            </div>
            <div
              className="questionsDesignCurrent"
            >
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <span
            className="buttonAnswersHistory"

          >
            <LeftOutlined
              className="iconsHistory"
              onClick={() => handleAnswerNavigation()}
            />
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <div>
                <Button
                  className="historyButtons"
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </Button>{" "}
              </div>
            ))}

            <RightOutlined
              className="iconsHistory"
              onClick={() => handleAnswerOptionClick()}
            />
          </span>

          <img
            className="pictureHistory"
            src={questions[currentQuestion].clueAnswers}
            alt=""
          ></img>
        </>
      )}
    </div>
  );
};

export default History;
