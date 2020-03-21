import React, { useState, useEffect } from "react";
import { layoutCenter, backgroundWhite } from "../css/Common";
import { shadowBorder } from "../css/Index";
import { Row, Col, Layout, Typography, Progress } from "antd";
import logoImg from "../img/logo1.png";
import Router from "next/router";
const { Content } = Layout;
const { Text } = Typography;

const Home = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const progressbar = setInterval(() => {
      let count = percent + 10;
      if (percent > 100) {
        setPercent(100);
      }
      setPercent(count);
    }, 500);

    if (percent === 100) {
      clearInterval(progressbar);
      Router.push("/login");
    }
  }, [percent]);

  return (
    <>
      <Layout style={backgroundWhite}>
        <Content>
          <Row style={layoutCenter}>
            <Col span={8}></Col>
            <Col span={8} style={shadowBorder}>
              <Col
                span={24}
                style={{ textAlign: "center", marginBottom: 5, padding: 15 }}
              >
                <img src={logoImg} width="50%" />
              </Col>
              <Col span={24} style={{ textAlign: "center" }}>
                <Text style={{ fontSize: 30, color: "#000000" }}>
                  <strong>RemindFeedback</strong>
                </Text>
              </Col>
              <Col span={24} style={{ marginTop: "2em" }}>
                <Progress percent={percent} size="default" status="active" />
              </Col>
            </Col>
            <Col span={8}></Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default Home;
