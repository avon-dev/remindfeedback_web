import React from "react";
import { Layout } from "antd";
import AppFooter from "../components/AppFooter";
import AppLogin from "../container/login";
import { layout, backgroundWhite, backgroundLightBlue } from "../css/Common";
const { Footer, Content, Header } = Layout;

const login = () => {
  return (
    <>
      <Layout style={layout}>
        <Content style={backgroundWhite}>
          <AppLogin />
        </Content>
      </Layout>
      <Footer style={backgroundLightBlue}>
        <AppFooter />
      </Footer>
    </>
  );
};

export default login;
