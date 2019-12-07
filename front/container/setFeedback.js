import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card, Avatar, Icon, message, Menu, Dropdown, Button, Breadcrumb,Typography,Empty } from 'antd';
import moment from 'moment';
import { subjectBtn } from '../css/Main';

const {Title} = Typography;
const {Meta} = Card;

const setFeedback = ({myFeedback , category}) => {

    const [inProgress, setInProgress] = useState(false);

    // request server 
    // useEffect(()=>{

    // },[]);

    const mainItem = myFeedback.length>=1?
                     myFeedback.map((data)=> <Link key={data} href={`/feedbackdetail?${data}`} ><a><Card
                        key={data}
                        style={{ marginTop: 15, background:'#FFFF00' }}
                        cover={<div style={{background:'#DCDCDC', fontSize:10,textAlign:'right', fontWeight:"bold", fontStyle:"italic",paddingRight:15}}>
                                내 피드백</div>}
                        actions={[<div style={{ fontSize:10, textAlign:'right', fontWeight:"bold", fontStyle:"italic"}}>
                        {moment().format('YYYY MMMM Do , h:mm:ss a')}
                        </div>]}
                    >
                        <Meta
                            avatar={
                            <Avatar icon="user" />
                            }
                            title="제목"
                            description={data}
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
         
    const menu = category.length>=1?
                    <Menu>  
                        {category.map((v,i)=>
                            <Menu.Item key={v.category_id+v.category_title}>
                                <div style={{color:v.category_color}}>
                                    <strong>{v.category_title}</strong>
                                </div>
                            </Menu.Item>
                        )}
                    </Menu>              
                    :
                    <div></div>

    const subject = category.length>=1?
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

    const handleFilter = () => {
        setInProgress(!inProgress);
    }

    const handleMenuClick = (e) => {
        message.info(e.target.name);
    }  

    return(
        <>          
            <Col span={24} style={{textAlign:'center',marginTop:15, fontStyle:"italic", textShadow:"2px 2px 2px gray", }}>
                <Title level={2}><strong>내 피드백</strong></Title>
            </Col>
            <Col span={24} style={{marginTop:15, textAlign:'center'}}>
                {subject}
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