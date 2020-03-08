import React, { useCallback, useRef, useEffect, useState } from "react";
import axios from "axios";
import AppSidebar from "../components/AppSidebar";
import AppTopbar from "../components/AppTopbar";
import AppFeedbackDetail from "../container/feedBackDetail";
import AppFooter from "../components/AppFooter";
import { useDispatch, useSelector } from "react-redux";
import {
  FEEDBACK_ITEM_READ_REQUEST,
  FEEDBACK_READ_REQUEST,
  FEEDBACK_ITEM_COMMENT_REQUEST
} from "../reducers/feedback";
import {
  layout,
  backgroundWhite,
  backgroundLightBlue,
  layouts
} from "../css/Common";
import { Layout } from "antd";
const { Footer, Content, Sider } = Layout;

const feedbackdetail = ({ feedback_id }) => {
  const dispatch = useDispatch();
  const { LoadedFeedbackErrorReason, feedbackItem, hasMoreItem } = useSelector(
    state => state.feedback
  );

  const countRef = useRef([]);

  const handleScrolls = useCallback(() => {
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 300
    ) {
      if (hasMoreItem) {
        const lastId = feedbackItem[feedbackItem.length - 1].id;
        if (!countRef.current.includes(lastId)) {
          dispatch({
            type: FEEDBACK_ITEM_READ_REQUEST,
            data: {
              feedbackid: feedback_id,
              lastid: lastId
            }
          });
          countRef.current.push(lastId);
        }
      }
    }
  }, [feedbackItem.length, hasMoreItem]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrolls);
    return () => {
      window.removeEventListener("scroll", handleScrolls);
    };
  }, [feedbackItem.length]);

  return (
    <>
      <Layout style={feedbackItem.length >= 7 ? layouts : layout}>
        <AppTopbar />
        <Layout style={backgroundWhite}>
          <Sider style={backgroundWhite}>
            <AppSidebar />
          </Sider>
          <Content>
            <AppFeedbackDetail feedback_id={feedback_id} />
          </Content>
        </Layout>
        <Footer style={backgroundLightBlue}>
          <AppFooter />
        </Footer>
      </Layout>
    </>
  );
};

feedbackdetail.getInitialProps = async context => {
  console.log("서버냐", context.isServer);
  const lastId = 0;

  const { feedbackMode } = context.store.getState();
  const feedbackModes = feedbackMode.feedbackMode;

  context.store.dispatch({
    type: FEEDBACK_ITEM_READ_REQUEST,
    data: {
      feedbackid: parseInt(context.query.id),
      lastid: lastId
    }
  });
  return { feedback_id: parseInt(context.query.id) };
};

export default feedbackdetail;
