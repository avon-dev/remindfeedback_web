import React,{useState,useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Modal, Layout, Form, Input, Dropdown, Menu, Icon, Button, Col, Typography, DatePicker, Select  } from 'antd';
import { backgroundWhite, backgroundLightBlue} from '../css/Common';
import { subjectBtn, formBoder, formItemLayout } from '../css/Main';
import {FEEDBACK_ADD_REQUEST,FEEDBACK_UPDATE_REQUEST} from '../reducers/feedback';


const { Search } = Input;
const {Content} = Layout;
const {Title} = Typography;

const addFeedback = ({visible,handleCancel,handleOk,feedback_titles,feedback_adviser_uid,feedback_write_date,category_titles,order,feedback_id}) => {

    const dispatch = useDispatch();
    const {isAdddingFeedback,isAddedFeedback,isUpdatingFeedback} = useSelector(state => state.feedback);
    const {subject} = useSelector(state => state.feedbackSubject);
    
    const [category,setCategory] = useState(0);
    const [title,setTitle] = useState('');
    const [write_date,setWrite_date] = useState(moment());
    const [adviser,setAdvisor] = useState('');
    
    const _onSubmit = useCallback(async (e) => {
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
        if(FEEDBACK_UPDATE_REQUEST===order){
            const category =  await subject&&subject.findIndex((v,i)=>v.category_title===category_titles);
            await dispatch({
                type: FEEDBACK_UPDATE_REQUEST,
                data:{
                    category,title,write_date,adviser,feedback_id 
                }
            })
        }else{
            dispatch({
                type: FEEDBACK_ADD_REQUEST,
                data:{
                    category,title,write_date,adviser 
                },
            });
        }
        
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
            setCategory('');
            setAdvisor('');
            setTitle('');
            setWrite_date(null);
            handleCancel();
        }
    },[isAdddingFeedback&&isAdddingFeedback]);

    useEffect(()=>{
        if(feedback_titles||category_titles||feedback_adviser_uid||feedback_write_date){
            setTitle(feedback_titles);
            setCategory(category_titles);
            setAdvisor(feedback_adviser_uid);
            setWrite_date(feedback_write_date); 
        }  
    },[feedback_titles,category_titles,feedback_adviser_uid,feedback_write_date]);

    const feedback_category = (<Form.Item label={<strong>피드백 주제선택</strong>} >
                                    <Col span={24}>
                                    <Select value={category?category:subject[0].category_title} onChange={handleSubject} style={{width:'100%', textAlign:'left'}} >
                                    {subject.length>=1?
                                        subject.map((v,i)=>
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
                                    value={write_date?moment(write_date):write_date} 
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
                <div style={{textAlign:"center"}}><Title level={3}>{order===FEEDBACK_UPDATE_REQUEST?"수정할 피드백":"새로운 피드백"}</Title></div>
                }
                visible={visible}
                onOk={handleOk}
                footer={[
                    <div key="add" style={{textAlign:'center'}}>
                        <Button key="back" onClick={handleCancel} style={{display:'none'}}>
                            <strong>취소</strong>
                        </Button>,
                        <Button key="submit" type="primary" size='large' style={{width:'100%'}} onClick={_onSubmit} loading={isUpdatingFeedback?isUpdatingFeedback:isAdddingFeedback}>
                            {order===FEEDBACK_UPDATE_REQUEST?<strong>피드백 수정</strong>:<strong>피드백 생성</strong>}
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