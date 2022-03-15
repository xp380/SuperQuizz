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
          <ReloadOutlined style={{ fontSize: 30 }} onClick={refreshPage} />
          <div
            style={{
              color: "white",
              // position: "absolute",
              marginLeft: 200,
            }}
          >
            SuperQuizz app
          </div>
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
            {/* <TabPane tab="reload" key="5">
              <ReloadOutlined onClick={refreshPage} />
            </TabPane> */}
          </Tabs>
        </Content>
      </Layout>
      <Footer className="foot">
        <Time />
      </Footer>
    </div>
  );
}
