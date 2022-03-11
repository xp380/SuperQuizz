import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./HomePage.css";

import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

const foot = {
  borderTop: "1px solid #e8e8e8",
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
  backgroundColor: "#001529",
  color: "white",
  height: 50,
};

export default function HomePage() {
  return (
    <div>
      <Layout>
        <Header className="head">Test</Header>
        <Content className="content">Contenu</Content>
      </Layout>

      <Footer style={foot}>Test</Footer>
    </div>
  );
}
