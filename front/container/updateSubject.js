import React,{useState, useEffect, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CirclePicker } from 'react-color';
import { Modal, Layout, Form, Input, Icon, Button, Col, Typography, Row } from 'antd';
import { backgroundWhite, backgroundLightBlue} from '../css/Common';
import {formItemLayout} from '../css/Subject';
import {FEEDBACK_SUB_UPDATE_REQUEST} from '../reducers/feedbackSubject';

const {Content} = Layout;
const {Title} = Typography;

const updateSubject = ({updateVisible,handleUpdateCancel}) => {

    const dispath = useDispatch();

    const [color,setColor] =  useState();
    const [title,setTitle] =  useState();

    // request server 
    useEffect(()=>{

    },[]);

    const _onsubmit = useCallback(() => {
        dispath({
            type:FEEDBACK_SUB_UPDATE_REQUEST,
            data:{
                color,title,
            }
        });
    },[color,title]);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }; 

    const handleChangeComplete = (color) => {
        setColor(color.hex);
    };

    const handleChange = (color) => {
        setColor(color.hex);
    };

    return(
        <>
            <Modal
                key='updateSubjectModal'
                title={
                    <div style={{textAlign:"center"}}><Title level={3}>주제 수정</Title></div>
                }
                visible={updateVisible}
                footer={[
                    <div key="add" style={{textAlign:'center'}}>
                        <Button key="back" onClick={handleUpdateCancel} style={{display:'none'}}>
                            <strong>취소</strong>
                        </Button>,
                        <Button key="submit" type="primary" size='large' onClick={_onsubmit} style={{width:'100%'}}>
                            <strong>주제 수정</strong>
                        </Button>
                    </div>
                ]}
                onCancel={handleUpdateCancel}
                centered={true}
            >
                <Content style={backgroundWhite}>
                    <Form {...formItemLayout}>
                       <Row>
                            <Col span={24}>
                                <Form.Item label={<strong>주제 이름</strong>}>
                                    <Input
                                        prefix={<Icon type='home' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="제목"
                                        onChange={handleTitle}
                                        value={title}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label={<strong>색상 설정</strong>}>
                                    <CirclePicker
                                        color={color}
                                        onChangeComplete={handleChangeComplete}
                                        onChange={handleChange}
                                        width="10"
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

export default updateSubject;
