import React, { useState } from "react";
import Code from "./Quizz/Code";
import History from "./Quizz/History";
import Joke from "./Quizz/Joke";
import Record from "./Quizz/Record";
import Time from "./Components/Time";
import Contact from "./Components/Contact";
import "./HomePage.css";
import { Layout, Tabs } from "antd";
import { ReloadOutlined } from "@ant-design/icons";

const { Header, Footer, Content } = Layout;
const { TabPane } = Tabs;

const HomePage = () => {
  const [codeScore, setCodeScore] = useState(0);
  const [historyScore, setHistoryScore] = useState(0);
  const [jokeScore, setJokeScore] = useState(0);
  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div>
      <Layout>
        <Header className="head">
          <ReloadOutlined
            style={{ fontSize: 30, marginTop: 20 }}
            onClick={refreshPage}
          />
          <span
            style={{
              color: "white",
              fontWeight: "bolder",
              fontSize: 25,
              marginLeft: 600,
            }}
          >
            SuperQuizz app
          </span>
        </Header>
        <Content className="layout-content">
          <Tabs
            style={{ fontSize: 15, fontWeight: "bolder" }}
            defaultActiveKey="1"
          >
            <TabPane tab="Code" key="1">
              <Code score={codeScore} setScore={setCodeScore} />
            </TabPane>
            <TabPane tab="History" key="2">
              <History score={historyScore} setScore={setHistoryScore} />
            </TabPane>
            <TabPane tab="Joke" key="3">
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
        </Content>
      </Layout>
      <Footer className="foot">
        <Time />
      </Footer>
    </div>
  );
};

export default HomePage;
