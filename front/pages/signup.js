import React from "react";
import { Layout } from "antd";
import AppFooter from "../components/AppFooter";
import AppSignUp from "../container/signup";
import { layout, backgroundWhite, backgroundLightBlue } from "../css/Common";
const { Footer, Content, Header } = Layout;

const signup = () => {
  return (
    <>
      <Layout style={backgroundWhite}>
        <Content
          style={{ ...backgroundWhite, paddingTop: "3%", paddingBottom: "3%" }}
        >
          <AppSignUp />
        </Content>
      </Layout>
    </>
  );
};

export default signup;
