import React,{useState,useCallback, useEffect} from 'react';
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
    const {isAdddingFeedback,isAddedFeedback,feedback} = useSelector(state => state.feedback);
    const [category,setCategory] = useState();
    const [title,setTitle] = useState('');
    const [write_date,setWrite_date] = useState('');
    const [adviser,setAdvisor] = useState('');
    
    
    const _onSubmit = useCallback((e) => {
        e.preventDefault();
        if(!title){
            return alert('피드백 제목을 입력해 주세요');
        }
        if(!write_date){
            return alert('피드백 날짜를 선택해 주세요');
        }
        if(!adviser){
            return alert('피드백 조언자를 입력해 주세요');
        }
        dispatch({
            type: FEEDBACK_ADD_REQUEST,
            data:{
                category,title,write_date,adviser 
            },
        });
    },[category,title,write_date,adviser]);

    const handleSubject = (value) =>  {
        setCategory(value);
    };

    const handleTitle = (e) =>  {
        setTitle(e.target.value);
    };

    const handleData = (e) =>  {
       if(e!==null){
        setWrite_date(e._d);
       }
    };

    const handleAdvisor = (e) =>  {
        setAdvisor(e.target.value);
    };

    useEffect(()=>{
        if(isAddedFeedback){
            setCategory('AVON');
            setAdvisor('');
            setTitle('');
            setWrite_date(null);
            handleCancel();
        }
    },[isAdddingFeedback&&isAdddingFeedback]);
    

    const feedback_category = (<Form.Item label={<strong>피드백 주제선택</strong>} >
                                    <Col span={24}>
                                    <Select defaultValue={feedback.category[0].category_title} onChange={handleSubject} style={{width:'100%', textAlign:'left'}} >
                                    {feedback.category.length>=1?
                                        feedback.category.map((v,i)=>
                                    <Select.Option key={v.category_id} value={v.category_id} style={{color:v.category_color}}><strong>{v.category_title}</strong></Select.Option>
                                        )
                                        : 
                                    <Select.Option value="default"style={{color:"#FFFFFF"}}><strong>Default</strong></Select.Option>    
                                    } 
                                    </Select>
                                    </Col>
                                </Form.Item>
                                );
    
    const feedback_title = (<Form.Item label={<strong>피드백 제목</strong>} >
                                <Input
                                    onChange={handleTitle}
                                    value={title}
                                    suffix={<Icon type='form' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="피드백 제목"
                                    required
                                />
                            </Form.Item>
                            );

    const feedback_date = (<Form.Item label={<strong>피드백 날짜</strong>} >
                            <Col span={24}  style={{ width: '100%' ,  borderRadius: 4 }}>
                                <DatePicker
                                    style={{width:'100%'}}
                                    onChange={handleData}
                                    placeholder="날짜 선택" 
                                />
                            </Col>   
                            </Form.Item>
                            );

    const feedback_advisor = (<Form.Item label={<strong>피드백 조언자</strong>} >
                                <Col span={24}>
                                    <Search
                                        value={adviser}
                                        onChange={handleAdvisor}
                                        style={{width:'100%'}}
                                        placeholder="조언자 이름을 입력하세요"
                                        enterButton="검색"
                                        required
                                    />
                                </Col>   
                            </Form.Item>
                            );
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
                        <Button key="submit" type="primary" size='large' style={{width:'100%'}} onClick={_onSubmit} loading={isAdddingFeedback}>
                            <strong>피드백 생성</strong>
                        </Button>
                    </div>
                ]}
                onCancel={handleCancel}
                centered={true}
                >
                <Content style={backgroundWhite}>
                    <Form  {...formItemLayout} >
                        {feedback_category}
                        {feedback_title}
                        {feedback_date}
                        {feedback_advisor}
                    </Form>
                </Content>
            </Modal>  
        </>
    )
};

export default addFeedback;