import React,{useState,useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Layout, Form, Input, Dropdown, Menu, Icon, Button, Col, Typography, DatePicker, Select  } from 'antd';
import { backgroundWhite, backgroundLightBlue} from '../css/Common';
import { subjectBtn, formBoder, formItemLayout } from '../css/Main';
import {FEEDBACK_ADD_REQUEST} from '../reducers/feedback';

const { Search } = Input;
const {Content} = Layout;
const {Title} = Typography;

const addFeedback = ({visible,handleCancel,handleOk}) => {
    const dispatch = useDispatch();
    
    const [subject,setSubject] = useState('AVON');
    const [title,setTitle] = useState('');
    const [date,setDate] = useState('');
    const [advisor,setAdvisor] = useState('');
    
    
    const _onSubmit = useCallback((e) => {
        console.log(subject,title,date,advisor);

        // dispatch({
        //     type: FEEDBACK_ADD_REQUEST,
        //     data:{
        //         subject,title,date,advisor 
        //     },
        // });
    },[subject,title,date,advisor]);

    const handleSubject = (value) =>  {
        setSubject(value);
    };

    const handleTitle = (e) =>  {
        setTitle(e.target.value);
    };

    const handleData = (e) =>  {
        setDate(e._d)
    };

    const handleAdvisor = (e) =>  {
        setAdvisor(e.target.value);
    };
    
    
    return(
        <>  
           <Modal
                key='addFeedback'
                title={
                    <div style={{textAlign:"center"}}><Title level={3}>새로운 피드백</Title></div>
                }
                visible={visible}
                onOk={handleOk}
                footer={[
                    <div key="add" style={{textAlign:'center'}}>
                        <Button key="back" onClick={handleCancel} style={{display:'none'}}>
                            <strong>취소</strong>
                        </Button>,
                        <Button key="submit" type="primary" size='large' style={{width:'100%'}} onClick={_onSubmit}>
                            <strong>피드백 생성</strong>
                        </Button>
                    </div>
                ]}
                onCancel={handleCancel}
                centered={true}
                >
                <Content style={backgroundWhite}>
                    <Form  {...formItemLayout} >
                        <Form.Item label={<strong>피드백 주제선택</strong>} >
                            <Col span={24}>
                                <Select defaultValue={subject} onChange={handleSubject} style={{width:'100%', textAlign:'left'}} >
                                    <Select.Option value="jack"><Icon type="user" /><strong>AVON</strong></Select.Option>
                                    <Select.Option value="lucy"><Icon type="user" /><strong>운동</strong></Select.Option>
                                </Select>
                            </Col>
                        </Form.Item>
                        <Form.Item label={<strong>피드백 제목</strong>} >
                            <Input
                                onChange={handleTitle}
                                value={title}
                                suffix={<Icon type='form' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="피드백 제목"
                                required
                            />
                        </Form.Item>
                        <Form.Item label={<strong>피드백 날짜</strong>} >
                            <Col span={24}  style={{ width: '100%' ,  borderRadius: 4 }}>
                                <DatePicker
                                    style={{width:'100%'}}
                                    onChange={handleData}
                                    placeholder="날짜 선택" 
                                />
                            </Col>   
                        </Form.Item>
                        <Form.Item label={<strong>피드백 조언자</strong>} >
                            <Col span={24}>
                                <Search
                                    value={advisor}
                                    onChange={handleAdvisor}
                                    style={{width:'100%'}}
                                    placeholder="조언자 이름을 입력하세요"
                                    enterButton="검색"
                                    required
                                />
                            </Col>   
                        </Form.Item>
                    </Form>
                </Content>
            </Modal>  
        </>
    )
};

export default addFeedback;