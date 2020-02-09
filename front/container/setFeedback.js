import React,{useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Card,Icon, message, Menu, Dropdown, Button, Breadcrumb,Typography } from 'antd';
import { subjectBtn } from '../css/Main';
import SetFeedbackContents from './setFeedbackContents';

const {Title} = Typography;

const setFeedback = ({myFeedback}) => {

    const dispatch = useDispatch();
    const { subject } = useSelector(state=> state.feedbackSubject);
    const { feedbackMode } = useSelector(state=> state.feedbackMode);
    const { feedback } = useSelector(state=> state.feedback);
    const { message, searchedFriends} = useSelector(state=> state.friends);

    const [inProgress, setInProgress] = useState(false);
    const [categoryId, setCategoryId] = useState(0);
    const [categoryName, setCategoryName] = useState('주제선택');
    

    useEffect(()=>{
        if(feedback.message){
            alert(feedback.message);
        }
    },[feedback.message&&feedback.message]);

    useEffect(()=>{
        if(message){
            alert(message);
        }
    },[message&&message]);

    const handleFilter = (e) => {
        setInProgress(!inProgress);
    }

    const onClickSubject = (e) => {
        setCategoryId(e.item.props.id);
        if(e.item.props.id==='0'){
            setCategoryName('주제선택');
        }else{
            setCategoryName(subject.find((v,i)=>v.category_id===e.item.props.id).category_title);
        }
        
    }

    const mainItem = <SetFeedbackContents
                        myFeedback={myFeedback}
                        inProgress={inProgress}
                        categoryId={categoryId}    
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
         
    const menu = subject&&subject.length>=1?
                    <Menu>
                        <Menu.Item key='all' onClick={onClickSubject} id='0'>
                                <div>
                                    <strong>주제선택</strong>
                                </div>
                        </Menu.Item>  
                        {subject.map((v,i)=>
                            <Menu.Item key={v.category_id+v.category_title}  onClick={onClickSubject} id={v.category_id}>
                                <div style={{color:v.category_color}}>
                                    <strong>{v.category_title}</strong>
                                </div>
                            </Menu.Item>
                        )}
                    </Menu>              
                    :
                    <div></div>

    const subjects = subject&&subject.length>=1?
                    <Dropdown overlay={menu} >
                        <Button 
                           
                            style={subjectBtn}
                            size='large'
                        > <strong>{categoryName}</strong> <Icon type="down" />
                        </Button>
                    </Dropdown>    
                    :
                    <div></div>

    const progress = myFeedback.length>=1?
            !inProgress?
            <div>
                <Button
                    onClick={handleFilter}
                    name="progress"
                    type="primary"
                    icon="loading"
                    shape="round"
                ><strong > 진행중</strong></Button>
            </div>
            :
            <div>
                <Button
                    onClick={handleFilter}
                    name="complete"
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
               {/* {filter}  */}
            </Col>
            {progress} 
            <div>
                {mainItem}  
            </div>
                   
        </>
    )
}

export default setFeedback;