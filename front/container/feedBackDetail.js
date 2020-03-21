import React, { useEffect, useState } from "react";
import { Row, Col, Divider, Typography, Button, Input } from "antd";
import FeedBackDetailLists from "../container/feedBackDetailList";
import FeedBackDetailComments from "../container/feedBackDetailComment";
import { useDispatch, useSelector } from "react-redux";
import { FEEDBACK_ITEM_ARRANGE_DATE } from "../reducers/feedback";
const { Title, Text } = Typography;

const feedBackDetail = ({ feedback_id }) => {
  const dispatch = useDispatch();
  const { feedback } = useSelector(state => state.feedback);
  const { feedbackMode } = useSelector(state => state.feedbackMode);

  const [feedbackTitle, setFeedbackTitle] = useState("");
  const [board_id, setBoard_id] = useState(0);

  useEffect(() => {
    if (feedbackMode) {
      // 요청받은 피드백
      if (feedback.yourFeedback) {
        setFeedbackTitle(
          feedback.yourFeedback.find(
            (v, i) => parseInt(v.id) === parseInt(feedback_id)
          ).title
        );
      }
    } else {
      // 요청한 피드백
      if (feedback.myFeedback) {
        setFeedbackTitle(
          feedback.myFeedback.find(
            (v, i) => parseInt(v.id) === parseInt(feedback_id)
          ).title
        );
      }
    }

    return () => {
      dispatch({
        type: FEEDBACK_ITEM_ARRANGE_DATE
      });
    };
  }, []);

  const handleComment = e => {
    setBoard_id(e);
  };
  return (
    <>
      <Row>
        <Col span={1} />
        <Col
          span={23}
          style={{ textAlign: "center", marginTop: 25, marginBottom: 25 }}
        >
          <Title level={3} style={{color:'gray'}}>
            <strong>제목 : {feedbackTitle}</strong>
          </Title>
        </Col>
        <Col span={1} />
      </Row>
      <Row>
        <Col span={1} />
        <Col span={22}>
          <FeedBackDetailLists
            feedback_id={feedback_id}
            handleComment={handleComment}
          />
          {/* <Col span={1} style={{textAlign:'center'}}>
                            <Divider type="vertical" style={{border:'2px solid black', height:'100vh',}} />
                        </Col> */}
          <FeedBackDetailComments
            feedback_id={feedback_id}
            board_ids={board_id}
          />
        </Col>
      </Row>
    </>
  );
};

export default feedBackDetail;
