import React from "react";
import Code from "./Quizz/Code";
import History from "./Quizz/History";
import Joke from "./Quizz/Joke";
import Time from "./Components/Time";
import Contact from "./Components/Contact";
import "./HomePage.css";
import { Layout, Tabs } from "antd";
import { ReloadOutlined } from "@ant-design/icons";

const { Header, Footer, Content } = Layout;
const { TabPane } = Tabs;

export default function HomePage() {
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
              <Code />
            </TabPane>
            <TabPane tab="History" key="2">
              <History />
            </TabPane>
            <TabPane tab="Joke" key="3">
              <Joke />
            </TabPane>
            <TabPane tab="Contact" key="4">
              <Contact />
            </TabPane>
          </Tabs>
        </Content>
      </Layout>
      <Footer className="foot">
        <Time />
        <p
          style={{
            marginLeft: "80%",
            fontWeight: "bolder",
            fontSize: 20,
            height: 20,
          }}
        >
          Contact
        </p>
      </Footer>
    </div>
  );
}
