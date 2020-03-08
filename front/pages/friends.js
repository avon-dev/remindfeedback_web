import React, { useEffect } from "react";
import AppSidebar from "../components/AppSidebar";
import AppTopbar from "../components/AppTopbar";
import AppFriends from "../container/friends";
import AppFooter from "../components/AppFooter";
import { layout, backgroundWhite, backgroundLightBlue } from "../css/Common";
import { Layout } from "antd";
import { FRIENDS_MAIN_READ_REQUEST } from "../reducers/friends";

import axios from "axios";
const { Footer, Content, Sider } = Layout;

const friends = () => {
  return (
    <>
      <Layout style={layout}>
        <AppTopbar />
        <Layout style={backgroundWhite}>
          <Sider style={backgroundWhite}>
            <AppSidebar />
          </Sider>
          <Content>
            <AppFriends />
          </Content>
        </Layout>
        <Footer style={backgroundLightBlue}>
          <AppFooter />
        </Footer>
      </Layout>
    </>
  );
};

friends.getInitialProps = async context => {
  console.log("서버냐", context.isServer);

  context.store.dispatch({
    type: FRIENDS_MAIN_READ_REQUEST
  });
};

export default friends;
