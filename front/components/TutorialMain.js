import React, { useState } from 'react';
import { Row, Col, Layout, Typography, Icon, Button, Modal} from 'antd';
import {shadowBorder, layoutCenter} from '../css/tutorial';
import {backgroundLightBlue, backgroundWhite} from '../css/Common';
const {Title, Text} = Typography;
const {Content} = Layout;

const TutorialMain = ({visible,handleCancel,handleOk}) => {
    return(
        <>
           <Modal 
                key='tutorial'
                title={
                    <div style={{textAlign:"center"}}><Title level={3}>튜토리얼</Title></div>
                }
                bodyStyle={{padding:0}}
                visible={visible}
                onOk={handleOk}
                footer={[
                    <div style={{textAlign:'center'}}>
                        <Button key="back" onClick={handleCancel} style={{display:'none'}}>
                            <strong>취소</strong>
                        </Button>,
                        <Button key="submit" type="primary" onClick={handleOk} size='large' style={{width:'100%'}}>
                            <strong>다음</strong>
                        </Button>
                    </div>
                ]}
                onCancel={handleCancel}
                >
                <Content>
                    <Row style={layoutCenter}>
                        <Col span={8}></Col>
                        <Col span={8} style={shadowBorder}>
                            <div style={{textAlign:'center'}}>
                                <Button>테스트</Button>
                            </div>
                            <div style={{marginTop:'5em'}}>
                                
                            </div>
                        </Col>
                        <Col span={8}></Col>
                    </Row>
                    <Row style={backgroundWhite}>
                        <Col span={24} style={{textAlign:'center', padding:20}}>
                            <Text><strong>Remind Feedback에 오신 여러분들 <br/> 환영합니다.</strong></Text> 
                        </Col>
                    </Row>
                </Content>
            </Modal> 
        </>
    )
};

export default TutorialMain;