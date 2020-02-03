import React, { useState } from 'react';
import { Menu, Icon,Button, Row, Modal, Col } from 'antd';
import CheckPassword from '../container/checkPassword';
import Link from 'next/link';
const { SubMenu } = Menu;
import { useDispatch, useSelector } from 'react-redux';
import {UNREGISTER_REQUEST, LOG_OUT_REQUEST} from '../reducers/user';

const newFeedBack ={
  fontSize:17,
  fontWeight:'bold',
}

const Sidebar = {
  margin:7,
  padding:5,
}

const AppMypageSidebar = () => {
  const dispatch = useDispatch();

  const [buttonNumber, setButtonNumber] = useState('1');
  const [visible, setVisible] = useState(false);

  const PopupUpdatePassword = () => {
    setVisible(true);
  }

  const handleOk = () => {
    setVisible(false);
  }

  const handleCancel = () => {
    setVisible(false);
  }

  const handeleButton = (e) => {
    console.log(e.key);
    if(e.key==='2'){
      PopupUpdatePassword();
    }else if(e.key==='3'){
      //회원탈퇴
      confirm('정말로 탈퇴하시겠습니까?')
      &&
      dispatch({
        type:UNREGISTER_REQUEST
      })
      dispatch({
        type:LOG_OUT_REQUEST
      })
    }
    setButtonNumber(e.key);
  };

    return(
      <>
        <Col span={24} style={Sidebar}>
          <Menu
              theme="light"
              style={{ width: '100%', borderRight:'2px solid black', height:'100%' }}
              selectedKeys={[buttonNumber]}
              defaultOpenKeys={['sub2']}
              mode="inline"
          >
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="user" />
                <span style={{color:'black', fontWeight:'bold'}}>마이페이지</span>
              </span>
            }
          >
            <Menu.Item key="1" onClick={handeleButton}><Icon type="edit"/>내 정보 수정<Link href='/mypage' key='1'><a></a></Link></Menu.Item>
            <Menu.Item key="2" onClick={handeleButton}><Icon type="lock"/>비밀번호 변경</Menu.Item>
            <Menu.Item key="3" onClick={handeleButton}><Icon type="api"/>회원 탈퇴</Menu.Item>
          </SubMenu>
        </Menu>
        </Col>
        <div>
            <CheckPassword
              visible={visible}
              handleCancel={handleCancel}
              handleOk={handleOk}
            />
        </div>
      </> 
    );
};

export default AppMypageSidebar;