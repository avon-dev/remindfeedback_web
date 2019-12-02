import React,{useState, useEffect} from 'react';
import Link from 'next/link';
import { Menu, Icon, Input, Typography, Dropdown, Col, Row, Button, Avatar, Popconfirm} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import AppTutorial from '../components/TutorialMain';
import AppAlert from '../container/alert';
import { FEEDBACK_TUTORIAL_REQUEST } from '../reducers/feedback';

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

    const dispatch = useDispatch();
    const { me } = useSelector( state => state.user);
    const [visible, setVisible] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);
    const [firstSubject, setFirstSubject] = useState('첫번째 피드백');

    const showModal = () => {
        setVisible(true);
    }

    const handleCancel = e => {
        e.preventDefault();
        dispatch({
            type:FEEDBACK_TUTORIAL_REQUEST,
            data:firstSubject,
        });
        setVisible(false);
    };

    const handleSetFirstSubject = (e) => {
        setFirstSubject(e.target.value);
    }

    const handleOk  = e => {
        setVisible(false);
    };

    useEffect(()=>{
        if(me.tutorial){
            setVisible(true);
        }
    },[]);

     
    const items = (
        <div>
            <Menu style={{border:"gray solid 1px"}}>
                <Menu.Item key="1">
                    <Icon type="user"/>
                    <strong>마이페이지</strong>
                    <Link href="/mypage" ><a>></a></Link>
                </Menu.Item>
                <Menu.Item key="2" onClick={showModal}>
                    <Icon type="book" />
                    <strong>튜토리얼</strong>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="logout" />
                    <strong>로그아웃</strong>
                    <Link href="/logout" ><a>></a></Link>
                </Menu.Item>
            </Menu>
        </div>
    );

    const handleAlert = () => {
        console.log('handleAlert');
        setAlertVisible(!alertVisible);
    }

    const alerthHandleCancel = () => {
        console.log('alerthHandleCancel');
        setAlertVisible(false);
    }

    const alerthHandleOk = () => {
        console.log('alerthHandleOk');
        setAlertVisible(false);
    }

    return(
        <>
          <Menu mode="horizontal" key="topbar" style={{backgroundColor:'#0B4E92'}}>
            <Menu.Item key="home">
                <Link href="/main">
                    <a>
                        <Icon type="home" style={{fontSize:'23px', color:'#FFFFFF'}} />
                    </a>
                </Link>    
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
                            onClick={handleAlert}
                            shape="circle"
                            ghost={true}
                            style={{ border:'none' }}
                        >
                        <Icon type="bell" style={{fontSize:'23px'}} />
                        </Button>
                        <AppAlert
                            alerthHandleCancel={alerthHandleCancel}
                            alerthHandleOk={alerthHandleOk}
                            alertVisible={alertVisible}
                         /> 
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
                firstSubject={firstSubject}
                handleSetFirstSubject={handleSetFirstSubject}
              />
          </div>
          <div>
              
          </div>    
        </>
    );
};

export default AppTopbar;