import React, { useState } from 'react';
import { Menu, Icon,Button, Row, Modal, Col } from 'antd';
import CheckPassword from '../container/checkPassword';
import Link from 'next/link';
const { SubMenu } = Menu;

const newFeedBack ={
  fontSize:17,
  fontWeight:'bold',
}

const Sidebar = {
  margin:7,
  padding:5,
}

const AppMypageSidebar = () => {
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