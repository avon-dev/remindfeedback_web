import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card, Avatar, Icon, message, Menu, Dropdown, Button, Breadcrumb,Typography,Empty } from 'antd';
import moment from 'moment';
import { subjectBtn } from '../css/Main';

const {Title} = Typography;
const {Meta} = Card;

const setFeedback = ({myFeedback}) => {


    const [inProgress, setInProgress] = useState(false);
    const { subject } = useSelector(state=> state.feedbackSubject);

    // useEffect(()=>{
    //     if(myFeedback.message){
    //         alert(feedback.myFeedback.message);
    //     }
    // },[myFeedback.message&&myFeedback.message]);

    const handleFilter = () => {
        setInProgress(!inProgress);
    }

    const handleMenuClick = (e) => {
        message.info(e.target.name);
    }  

    const setCategory = (val) => {
        const index = subject.findIndex((v,i) => parseInt(v.category_id)===parseInt(val));
        return subject[index].category_title;
};

    const setColor = (val) => {
        const index = subject.findIndex((v,i) => parseInt(v.category_id)===parseInt(val));
        return subject[index].category_color;
    };

    const mainItem = myFeedback.length>=1?
                     myFeedback.map((v,i)=> <Link key={v.id} as={`/feedbackdetail/${v.category}`} href={`/feedbackdetail?category_id=${v.category}`} ><a>
                        <Card
                        key={v.id}
                        style={{ marginTop: 15, background:setColor(v.category) }}
                        cover={<div style={{background:'#DCDCDC', fontSize:10,textAlign:'right', fontWeight:"bold", fontStyle:"italic",paddingRight:15}}>
                                {<strong>{setCategory(v.category)}</strong>}</div>}
                        actions={[<div style={{ fontSize:10, textAlign:'right', fontWeight:"bold", fontStyle:"italic"}}>
                        {moment(v.write_date).format('YYYY MMMM Do , h:mm:ss a')}
                        </div>]}
                    >
                        <Meta
                            avatar={
                            <Avatar>{v.adviser_uid.split('')[0]}</Avatar>
                            }
                            title={<strong>{v.title}</strong>}
                        />
                    </Card></a></Link>)
                    :
                    <Col span={24} style={{marginTop:30}}>
                    <Empty 
                    description={
                        <span>
                          <strong>피드백이 없습니다.<br/>피드백을 생성해 주세요</strong>
                        </span>
                      }
                    />
                    </Col>

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