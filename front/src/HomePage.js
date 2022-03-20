import React, { useState, useEffect, useRef } from "react";
import Code from "./Quizz/Code";
import History from "./Quizz/History";
import Joke from "./Quizz/Joke";
import Record from "./Quizz/Record";
import Time from "./Components/Time";
import Contact from "./Components/Contact";
import "./HomePage.css";
import { Layout, Tabs } from "antd";
import { ReloadOutlined, FieldTimeOutlined } from "@ant-design/icons";

const { Header, Footer, Content } = Layout;
const { TabPane } = Tabs;

const HomePage = () => {
  const [codeScore, setCodeScore] = useState(0);
  const [historyScore, setHistoryScore] = useState(0);
  const [jokeScore, setJokeScore] = useState(0);

  const [ok, setOk] = useState(false);
  const [timers, setTimers] = useState(60);
  const timerRef = useRef(null);
  const refreshPage = () => {
    window.location.reload(false);
  };

  timerRef.current = () => {
    const i = timers === 0 ? 30 : timers - 1;
    console.log(i);
    return setTimers(i);
  };

  useEffect(() => {
    console.log(ok);
    if (ok) {
      console.log("222", ok);
      const endTimer = setInterval(() => timerRef.current(), 1000);
      return () => clearInterval(endTimer);
    }
  }, [ok]);
  return (
    <div>
      <Layout>
        <Header className="head">
          <ReloadOutlined
            className="designReload"
            onClick={refreshPage}
          />
          <span
            className="designTitle"
          >
            SuperQuizz app
          </span>

          <FieldTimeOutlined
            className="designCountTimer"
            onClick={() => setOk(!ok)}
          />
        </Header>
        <Content className="layout-content">
          <Tabs
            className="deepContent"
            defaultActiveKey="1"
          >
            <TabPane tab="Code" key="1">
              <Code
                timeout={timers}
                score={codeScore}
                setScore={setCodeScore}
              />
            </TabPane>
            <TabPane tab="History" key="2">
              <History
                timeout={timers}
                score={historyScore}
                setScore={setHistoryScore}
              />
            </TabPane>
            <TabPane timeout={timers} tab="Joke" key="3">
              <Joke score={jokeScore} setScore={setJokeScore} />
            </TabPane>
            <TabPane tab="Score" key="4">
              <Record
                recordCode={codeScore}
                recordHistory={historyScore}
                recordJoke={jokeScore}
              />
            </TabPane>
            <TabPane tab="Contact" key="5">
              <Contact />
            </TabPane>
          </Tabs>
          <h1 className="designTimer" >
            Temps Limite:{timers}
          </h1>
        </Content>
      </Layout>
      <Footer className="foot">
        <Time />
      </Footer>
    </div>
  );
};

export default HomePage;
