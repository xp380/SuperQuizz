import React, { useState } from "react";
import {
  SmileOutlined,
  FrownOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import "./Joke.css";

const Joke = (props) => {
  const questions = [
    {
      questionText: "Quelle est la couleur de la banane ?",
      answerOptions: [
        {
          answerText:
            "https://media.paperblog.fr/i/443/4430180/cest-fou-quon-peut-faire-avec-banane-L-XOgRHR.jpeg",
          isCorrect: true,
        },
        {
          answerText:
            "https://www.demotivateur.fr/images-buzz/cover/600171544618a9b52d78df_Sans-titre-2021-11-09T165925.301.jpg",
          isCorrect: true,
        },
        {
          answerText:
            "http://www.bien-manger-selon-les-saisons.com/produits-de-saison/fruits/images/fruit-banane-rouge.jpg",
          isCorrect: true,
        },
      ],
    },
    {
      questionText: "Qu'est ce qui crie plus fort qu'un cochon?",
      answerOptions: [
        {
          answerText:
            "https://pharmapets.imgix.net/media/amasty/blog/326-chien-agressif-900x600_optimized.jpg",
          isCorrect: true,
        },
        {
          answerText:
            "https://www.chassepassion.net/wp-content/uploads/2011/09/raton-laveur.jpg",
          isCorrect: true,
        },
        {
          answerText:
            "https://www.sciencesetavenir.fr/assets/img/2007/06/01/cover-r4x3w400-57df1ea6b481d-tigre.jpg",
          isCorrect: true,
        },
      ],
    },
    {
      questionText: "Quel est le chat le plus paresseux dans le monde ?",
      answerOptions: [
        {
          answerText:
            "https://lechat.com/wp-content/uploads/2021/10/LES-MOTS-DU-CHAT-.png",
          isCorrect: true,
        },
        {
          answerText:
            "http://idata.over-blog.com/3/89/02/75/passe-partout/a-24437.jpg",
          isCorrect: true,
        },
        {
          answerText:
            "https://www.woopets.fr/assets/ckeditor/2020/sep/all/9305/originale/chatslazyfaineants2.jpg",
          isCorrect: true,
        },
      ],
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
        <div style={{ textAlign: "center", marginTop: 200, fontSize: 30 }}>
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
            <LeftOutlined
              className="leftJoke"
              onClick={() => handleAnswerNavigation()}
            />
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                style={{ marginLeft: 250, marginTop: 30 }}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                <img
                  className="pictureJoke"
                  src={answerOption.answerText}
                  alt=""
                ></img>
              </button>
            ))}
            <RightOutlined
              className="rightJoke"
              onClick={() => handleAnswerOptionClick()}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default Joke;
