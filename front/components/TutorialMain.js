import React, { useState } from 'react';
import { Layout,  Button, Modal, Steps, Collapse, Input, Popconfirm  } from 'antd';
import TutorialFirst from '../components/TutorialFirst';
import TutorialSecond from '../components/TutorialSecond';
import TutorialThird from '../components/TutorialThird';
import TutorialForth from '../components/TutorialForth';

const { Step } = Steps;
const { Panel } = Collapse;
const {Content} = Layout;

const steps = [
    {
      title: <div style={{fontSize:13}}><strong>Welcome</strong></div>,
      content:<><TutorialFirst/></>,
    },
    {
      title: <div style={{fontSize:13}}><strong>주제선정</strong></div>,
      content:<><TutorialSecond/></>,
    },
    {
      title: <div style={{fontSize:13}}><strong>피드백기능</strong></div>,
      content:<><TutorialThird/></>,
    },
    {
      title: <div style={{fontSize:13}}><strong>조언자기능</strong></div>,
      content:<><TutorialForth/></>,
    },
  ];

const TutorialMain = ({visible,handleCancel,handleOk}) => {

    const [current, setCurrent] = useState(0);

    const next = () =>  {
        const currents = current + 1;
        setCurrent(currents);
    }

    const prev = () =>  {
        const currents = current - 1;
        setCurrent(currents);
    }

    return(
        <>
           <Modal 
                key='tutorial'
                title={
                    <Steps current={current}>
                        {steps.map(item => (
                            <Step key={item.title} title={item.title} />
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
                                    />
                                    <Popconfirm title="이대로 괜찮습니까?" okText="네" cancelText="아니오">
                                        <Button type="danger" key="confirm" style={{width:'100%',marginTop:5}}>
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