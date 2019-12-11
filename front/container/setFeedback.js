import React,{useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Card,Icon, message, Menu, Dropdown, Button, Breadcrumb,Typography } from 'antd';
import { subjectBtn } from '../css/Main';

import SetFeedbackContents from './setFeedbackContents';

const {Title} = Typography;

const setFeedback = ({myFeedback}) => {

    
    const { subject } = useSelector(state=> state.feedbackSubject);
    const { feedback } = useSelector(state=> state.feedback);

    const [inProgress, setInProgress] = useState(false);
    

    useEffect(()=>{
        if(feedback.message){
            alert(feedback.message);
        }
    },[feedback.message&&feedback.message]);


    const handleFilter = () => {
        setInProgress(!inProgress);
    }

    const mainItem = <SetFeedbackContents
                        myFeedback={myFeedback}    
                    />

    const filter =  myFeedback.length>=1?
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">
                            <Icon type="home" /><span>분류1</span>
                        </Breadcrumb.Item >
                        <Breadcrumb.Item href="#">
                            <Icon type="home" /><span>분류2</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="#">
                            <Icon type="home" /><span>분류3</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>                
                    :
                    <div></div>
         
    const menu = subject.length>=1?
                    <Menu>  
                        {subject.map((v,i)=>
                            <Menu.Item key={v.category_id+v.category_title}>
                                <div style={{color:v.category_color}}>
                                    <strong>{v.category_title}</strong>
                                </div>
                            </Menu.Item>
                        )}
                    </Menu>              
                    :
                    <div></div>

    const subjects = subject.length>=1?
                    <Dropdown overlay={menu}>
                        <Button 
                            style={subjectBtn}
                            size='large'
                        > <strong>주제선택</strong> <Icon type="down" />
                        </Button>
                    </Dropdown>    
                    :
                    <div></div>

    const progress = myFeedback.length>=1?
            inProgress?
            <div>
                <Button
                    onClick={handleFilter}
                    type="primary"
                    icon="loading"
                    shape="round"
                ><strong> 진행중</strong></Button>
            </div>
            :
            <div>
                <Button
                    onClick={handleFilter}
                    type="primary"
                    icon="check"
                    shape="round"
                ><strong> 진행완료 </strong></Button>
            </div>
            :
            <div></div>

    return(
        <>          
            <Col span={24} style={{textAlign:'center',marginTop:15, fontStyle:"italic", textShadow:"2px 2px 2px gray", }}>
                <Title level={2}><strong>내 피드백</strong></Title>
            </Col>
            <Col span={24} style={{marginTop:15, textAlign:'center'}}>
                {subjects}
            </Col>
            <Col span={24} style={{marginTop:20, textAlign:'right'}}> 
               {filter} 
            </Col>
            {progress} 
            <div>
                {mainItem}  
            </div>
                   
        </>
    )
}

export default setFeedback;