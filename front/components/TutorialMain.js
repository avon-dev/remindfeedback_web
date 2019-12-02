import React, { useState } from 'react';
import { Layout,  Button, Modal, Steps, Collapse, Input, Popconfirm  } from 'antd';
import {useDispatch,useSelector} from 'react-redux';
import TutorialFirst from '../components/TutorialFirst';
import TutorialSecond from '../components/TutorialSecond';
import TutorialThird from '../components/TutorialThird';
import TutorialForth from '../components/TutorialForth';
import { FEEDBACK_TUTORIAL_REQUEST } from '../reducers/feedback';

const { Step } = Steps;
const { Panel } = Collapse;
const {Content} = Layout;

const steps = [
    {   
      key:'sub1',
      title: <div style={{fontSize:13}}><strong>Welcome</strong></div>,
      content:<><TutorialFirst/></>,
    },
    {
      key:'sub2',
      title: <div style={{fontSize:13}}><strong>주제선정</strong></div>,
      content:<><TutorialSecond/></>,
    },
    {
      key:'sub3',
      title: <div style={{fontSize:13}}><strong>피드백기능</strong></div>,
      content:<><TutorialThird/></>,
    },
    {
      key:'sub4',
      title: <div style={{fontSize:13}}><strong>조언자기능</strong></div>,
      content:<><TutorialForth/></>,
    },
  ];

const TutorialMain = ({visible,handleCancel,handleOk,handleSetFirstSubject,firstSubject}) => {

    const dispatch = useDispatch();
    const {isLoadingFirstSubject,isLoadedFirstSubject} = useSelector(state => state.feedback);
    const [current, setCurrent] = useState(0);

    const next = () =>  {
        const currents = current + 1;
        setCurrent(currents);
    }

    const prev = () =>  {
        const currents = current - 1;
        setCurrent(currents);
    }

    const onHandleSubject = (e) => {
        e.preventDefault();
        dispatch({
            type:FEEDBACK_TUTORIAL_REQUEST,
            data:firstSubject
        });
    }

    return(
        <>
           <Modal 
                key='mainModal1'
                title={
                    <Steps current={current} key='mainModal2'>
                        {steps.map(item => (
                            <Step key={item.key} title={item.title} />
                        ))}
                    </Steps>
                }
                bodyStyle={{padding:0}}
                visible={visible}
                onOk={handleOk}
                footer={[
                    <>
                    <div style={{textAlign:'center', marginBottom:5}}>
                        {current > 0 && (
                            <Button key="back" onClick={prev} style={{width:'100%'}}>
                                <strong>이전</strong>
                            </Button>
                        )}
                    </div>
                    <div style={{textAlign:'center', marginBottom:5}}>  
                        {current === 1 && (
                            <Collapse bordered={true}  size='large' style={{width:'100%'}}>
                                <Panel showArrow={false} header={<strong>주제 선정하기</strong>} key="1">
                                    <Input 
                                        placeholder='첫번째 주제를 작성해주세요'
                                        onChange={handleSetFirstSubject}
                                        value={firstSubject}
                                    />
                                    <Popconfirm title="이대로 괜찮습니까?" okText="네" cancelText="아니오">
                                        <Button type="danger" key="confirm" style={{width:'100%',marginTop:5}} onClick={onHandleSubject} loading={isLoadingFirstSubject}>
                                            <strong>확인</strong>
                                        </Button>
                                    </Popconfirm>
                                </Panel>
                            </Collapse>
                        )}
                     </div>
                    <div style={{textAlign:'center'}}>  
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={next} size='large' style={{width:'100%'}}>
                                <strong>다음</strong>
                            </Button>
                        )}
                     </div>
                     <div style={{textAlign:'center'}}>  
                        {current === steps.length - 1 && (
                            <Button type="primary" onClick={handleCancel} size='large' style={{width:'100%'}}>
                                <strong>시작하기</strong>
                            </Button>
                        )}
                     </div>
                     </> 
                ]}
                onCancel={handleCancel}
                >
                <Content>
                    {steps[current].content}
                </Content>
            </Modal> 
        </>
    )
};

export default TutorialMain;