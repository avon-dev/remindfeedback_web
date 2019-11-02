import React,{useState} from 'react';
import Link from 'next/link';
import { Menu, Icon, Input, Typography, Dropdown, Col, Row, Button, Avatar} from 'antd';
import AppTutorial from '../components/TutorialMain';
const { Title, Paragraph, Text } = Typography;

const { Search } = Input;

const icon = {
    float:'right',
    textAlign:'center',
};

const commonStyle = {
    color: '#ffffff',
    fontSize:25,
};

const AppTopbar = () => {

    const [visible, setVisible] = useState();

    const showModal = () => {
        setVisible(true);
    }

    const handleCancel = e => {
        setVisible(false);
    };

    const handleOk  = e => {
        setVisible(false);
    };

     
    const items = (
        <div>
            <Menu style={{border:"gray solid 1px"}}>
                <Menu.Item key="1">
                    <Icon type="user" />
                    <strong>마이페이지</strong>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="setting" />
                    <strong>환경설정</strong>
                </Menu.Item>
                <Menu.Item key="3" onClick={showModal}>
                    <Icon type="book" />
                    <strong>튜토리얼</strong>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="logout" />
                    <strong>로그아웃</strong>
                    <Link href="/logout" ><a>></a></Link>
                </Menu.Item>
            </Menu>
        </div>
    );

    return(
        <>
          <Menu mode="horizontal" key="topbar" style={{backgroundColor:'#0B4E92'}}>
            <Menu.Item key="home">
                <Button
                    shape="circle"
                    ghost={true}
                    style={{ border:'none' }}
                >
                <Icon type="home" style={{fontSize:'23px'}} />
                </Button>
            </Menu.Item>
            <Menu.Item key="search" style >
                <Search
                    placeholder="input search text"
                    style={{ width: 250 }}
                /> 
            </Menu.Item>
            <Menu.Item key="subject">
                <Row type='flex'>
                    <Col span={2}>
                        <Typography>
                            <Title style={commonStyle}>RemindFeedBack</Title>
                        </Typography>
                    </Col>
                </Row>  
            </Menu.Item> 
            <Menu.Item key="icon" style={icon}>
                <Row type='flex' gutter={30}>
                    <Col span={8}>
                        <Button
                            shape="circle"
                            ghost={true}
                            style={{ border:'none' }}
                        >
                        <Icon type="bell" style={{fontSize:'23px'}} />
                        </Button> 
                    </Col>
                    <Col span={8}>
                        <Dropdown overlay={items} trigger={['click']}>
                            <div>
                                <Button
                                    shape="circle"
                                    style={{background:'gray', border:'none' }}
                                >
                                <Avatar>U</Avatar>
                                </Button>
                            </div>
                        </Dropdown>
                    </Col>
                    <Col span={8}>
                        <Button
                            shape="circle"
                            ghost={true}
                            style={{ border:'none' }}
                        >
                        <Icon type="setting" style={{fontSize:'23px'}} />
                        </Button> 
                    </Col>
                </Row>
            </Menu.Item>
          </Menu>
          <div>
              <AppTutorial
                handleCancel={handleCancel}
                handleOk={handleOk}
                visible={visible}
              />
          </div>  
        </>
    );
};

export default AppTopbar;