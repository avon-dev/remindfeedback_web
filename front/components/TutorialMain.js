import React, { useState } from "react";
import {
  Layout,
  Button,
  Modal,
  Steps,
  Collapse,
  Input,
  Popconfirm
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import TutorialFirst from "../components/TutorialFirst";
import TutorialSecond from "../components/TutorialSecond";
import TutorialThird from "../components/TutorialThird";
import TutorialForth from "../components/TutorialForth";
import { FEEDBACK_TUTORIAL_REQUEST } from "../reducers/feedback";

const { Step } = Steps;
const { Panel } = Collapse;
const { Content } = Layout;

const TutorialMain = ({
  next,
  current,
  visible,
  handleCancel,
  handleOk,
  handleSetFirstSubject,
  firstSubject,
  secondTitle,
  thirdTitle,
  fourthTitle,
  secondSubTitle,
  secondSubPlaceHolder,
  firstContentTitle,
  secondContentTitle,
  thirdContentTitle,
  fourthContentTitle,
  secondHandleFunction,
  thirdSubTitle,
  thirdSubPlaceHolder,
  thirdSub2_PlaceHolder,
  visiblePaner,
  handleSetNewPassword,
  newPassword,
  handleStart,
  code
}) => {
  const steps = [
    {
      key: "sub1",
      title: (
        <div style={{ fontSize: 13 }}>
          <strong>Welcome</strong>
        </div>
      ),
      content: (
        <>
          <TutorialFirst firstTitle={firstContentTitle} />
        </>
      )
    },
    {
      key: "sub2",
      title: (
        <div style={{ fontSize: 13 }}>
          <strong>{secondTitle}</strong>
        </div>
      ),
      content: (
        <>
          <TutorialSecond secondTitle={secondContentTitle} />
        </>
      )
    },
    {
      key: "sub3",
      title: (
        <div style={{ fontSize: 13 }}>
          <strong>{thirdTitle}</strong>
        </div>
      ),
      content: (
        <>
          <TutorialThird thirdTitle={thirdContentTitle} />
        </>
      )
    },
    {
      key: "sub4",
      title: (
        <div style={{ fontSize: 13 }}>
          <strong>{fourthTitle}</strong>
        </div>
      ),
      content: (
        <>
          <TutorialForth fourthTitle={fourthContentTitle} />
        </>
      )
    }
  ];

  const prev = () => {
    const currents = current - 1;
    setCurrent(currents);
  };

  return (
    <>
      <Modal
        key="mainModal1"
        title={
          <Steps current={current} key="mainModal2">
            {steps.map(item => (
              <Step key={item.key} title={item.title} />
            ))}
          </Steps>
        }
        bodyStyle={{ padding: 0 }}
        visible={visible}
        onOk={handleOk}
        footer={[
          <>
            {code && (
              <div style={{ textAlign: "center", marginBottom: 5 }}>
                {current > 0 && (
                  <Button key="back" onClick={prev} style={{ width: "100%" }}>
                    <strong>이전</strong>
                  </Button>
                )}
              </div>
            )}
            <div style={{ textAlign: "center", marginBottom: 5 }}>
              {current === 1 && (
                <Collapse
                  bordered={true}
                  size="large"
                  style={{ width: "100%" }}
                >
                  <Panel
                    disabled={visiblePaner}
                    showArrow={false}
                    header={<strong>{secondSubTitle}</strong>}
                    key="1"
                  >
                    <Input
                      placeholder={secondSubPlaceHolder}
                      onChange={handleSetFirstSubject}
                      value={firstSubject}
                    />

                    <Popconfirm
                      title="이대로 괜찮습니까?"
                      okText="네"
                      cancelText="아니오"
                      onConfirm={secondHandleFunction.bind(this, current)}
                    >
                      <Button
                        type="danger"
                        key="confirm"
                        style={{ width: "100%", marginTop: 5 }}
                        disabled={visiblePaner}
                      >
                        <strong>확인</strong>
                      </Button>
                    </Popconfirm>
                  </Panel>
                </Collapse>
              )}
              {current === 2 && (
                <Collapse
                  bordered={true}
                  size="large"
                  style={{ width: "100%" }}
                >
                  <Panel
                    disabled={visiblePaner}
                    showArrow={false}
                    header={<strong>{thirdSubTitle}</strong>}
                    key="1"
                  >
                    <>
                      <Input
                        placeholder={thirdSubPlaceHolder}
                        onChange={handleSetFirstSubject}
                        value={firstSubject}
                      />
                      <Input
                        placeholder={thirdSub2_PlaceHolder}
                        onChange={handleSetNewPassword}
                        value={newPassword}
                        style={{ marginTop: 5 }}
                      />
                    </>
                    <Popconfirm
                      title="이대로 괜찮습니까?"
                      okText="네"
                      cancelText="아니오"
                      onConfirm={secondHandleFunction.bind(this, current)}
                    >
                      <Button
                        type="danger"
                        key="confirm"
                        style={{ width: "100%", marginTop: 5 }}
                        disabled={visiblePaner}
                      >
                        <strong>확인</strong>
                      </Button>
                    </Popconfirm>
                  </Panel>
                </Collapse>
              )}
            </div>
            <div style={{ textAlign: "center" }}>
              {current < steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={next}
                  size="large"
                  style={{ width: "100%" }}
                  disabled={current !== 0 && !visiblePaner}
                >
                  <strong>다음</strong>
                </Button>
              )}
            </div>
            <div style={{ textAlign: "center" }}>
              {current === steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={handleStart}
                  size="large"
                  style={{ width: "100%" }}
                >
                  <strong>시작하기</strong>
                </Button>
              )}
            </div>
          </>
        ]}
        onCancel={handleCancel}
      >
        <Content>{steps[current].content}</Content>
      </Modal>
    </>
  );
};

export default TutorialMain;
