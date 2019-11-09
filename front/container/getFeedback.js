import React,{useState} from 'react';
import Link from 'next/link';
import { Row, Col, Card, Avatar, Icon, message, Menu, Dropdown, Button, Breadcrumb,Typography} from 'antd';
import moment from 'moment';
import { subjectBtn } from '../css/Main';


const {Title} = Typography;
const {Meta} = Card;

const getFeedback = () => {

    const [inProgress, setInProgress] = useState(false);

    const text = ['하하하','호호호','후후후','키키키'];
    
    const mainItem = text.map((data)=> <Link key={data} href={`/feedbackdetail?${data}`} ><a><Card
                        key={data}
                        style={{ marginTop: 15, background:'#8A2BE2' }}
                        cover={<div style={{background:'#DCDCDC', fontSize:10, textAlign:'right', fontWeight:"bold", fontStyle:"italic",paddingRight:15}}>
                                요청받은 피드백</div>}
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

    const handleMenuClick = (e) => {
        message.info(e.target.name);
    }       

    const menu = (
        <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            <Icon type="user" />
            <strong>AVON</strong>
        </Menu.Item>
        <Menu.Item key="2">
            <Icon type="user" />
            <strong>운동</strong>
        </Menu.Item>
        </Menu>
    );   

    const handleFilter = () => {
        setInProgress(!inProgress);
    }

    return(
        <>          
            <Col span={24} style={{textAlign:'center',marginTop:15, fontStyle:"italic", textShadow:"2px 2px 2px gray", }}>
                <Title level={2}><strong>요청받은 피드백</strong></Title>
            </Col>
            <Col span={24} style={{marginTop:20, textAlign:'right'}}> 
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
            </Col>
            {inProgress?
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
            } 
            <div>
                {mainItem}  
            </div>
                    
        </>
    )
}

export default getFeedback;