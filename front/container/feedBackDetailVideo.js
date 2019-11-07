import React,{useState} from 'react';
import Link from 'next/link';
import { Modal, Layout, Form, Input, Icon, Button, Col, Typography, Row } from 'antd';
import { backgroundWhite, backgroundLightBlue} from '../css/Common';
import {formItemLayout} from '../css/Subject';


const {Content} = Layout;
const {Title} = Typography;

const feedBackDetailVideo = ({videoVisible,videoHandleCancel,videoHandleOk}) => {

    const [color,setColor] =  useState();

    const _onsubmit = () => {

    };

    return(
        <>
            <Modal
                key='feedBackDetailWrite'
                title={
                    <div style={{textAlign:"center"}}><Title level={3}>동영상</Title></div>
                }
                visible={videoVisible}
                onOk={videoHandleOk}
                footer={[
                    <div key="add" style={{textAlign:'center'}}>
                        <Button key="back" onClick={videoHandleCancel} style={{display:'none'}}>
                            <strong>취소</strong>
                        </Button>,
                        <Button key="submit" type="primary" size='large' onClick={videoHandleOk} style={{width:'100%'}}>
                            <Link href='/updatepassword' key='2'><a><strong>확인</strong></a></Link>
                        </Button>
                    </div>
                ]}
                onCancel={videoHandleCancel}
                centered={true}
            >
                <Content style={backgroundWhite}>
                    <Form {...formItemLayout} onSubmit={_onsubmit}>
                       <Row>
                            <Col span={24}>
                                <Form.Item label={<strong>비밀번호 입력</strong>}>
                                    <Input
                                        prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="비밀번호를 입력해주세요"
                                    />
                                </Form.Item>
                            </Col>
                       </Row> 
                    </Form>
                </Content>
            </Modal>
        </>
    )
};

export default feedBackDetailVideo;
