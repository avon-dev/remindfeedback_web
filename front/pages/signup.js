import React from "react";
import { Layout } from "antd";
import AppFooter from "../components/AppFooter";
import AppSignUp from "../container/signup";
import { layout, backgroundWhite, backgroundLightBlue } from "../css/Common";
const { Footer, Content, Header } = Layout;

const signup = () => {
  return (
    <>
      <Layout style={layout}>
        <Content style={backgroundWhite}>
          <AppSignUp />
        </Content>
      </Layout>
      <Footer style={backgroundLightBlue}>
        <AppFooter />
      </Footer>
    </>
  );
};

export default signup;
