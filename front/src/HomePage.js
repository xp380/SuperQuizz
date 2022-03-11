import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Code from "./Quizz/Code";
import History from "./Quizz/History";
import Joke from "./Quizz/Joke";
import "./HomePage.css";
import { Layout, Tabs } from "antd";
const { Header, Footer } = Layout;

const { TabPane } = Tabs;

export default function HomePage() {
  return (
    <div>
      <Layout>
        <Header className="head">Test0</Header>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Code" key="1">
            <Code />
          </TabPane>
          <TabPane tab="History" key="2">
            <History />
          </TabPane>
          <TabPane tab="Joke" key="3">
            <Joke />
          </TabPane>
        </Tabs>
      </Layout>

      <Footer className="foot">Test</Footer>
    </div>
  );
}
