import React, { useState } from 'react';
import { Menu, Icon,Button, Row, Modal, Col } from 'antd';
import AddFeedback from '../container/addFeedback';
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

const AppSidebar = () => {
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

    return(
      <>
      <Col span={24} style={Sidebar}>
        <Button
          onClick={showModal}
          type="primary"
          size='large'
          style={newFeedBack}
        > + 새로운 피드백 작성</Button>
      </Col>
      <Col span={24} style={Sidebar}>
        <Menu
            style={{ width: '100%', borderRight:'2px solid black', height:'100%' }}
            defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub2']}
            mode="vertical"
        >
        <Menu.Item key="sub1" style={{color:"#000000"}}>
          <Icon type="ordered-list"/><strong>주제 관리</strong>
          <Link href="/subject">
          <a></a></Link> 
        </Menu.Item>
        <Menu.Item key="sub2" style={{color:"#000000"}}>
          <Icon type="team"/><strong>친구 관리</strong>
          <Link href="/friends">
          <a></a></Link> 
        </Menu.Item>
        {/* <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="ordered-list" />
              <span style={{color:'black', fontWeight:'bold'}}>주제</span>
            </span>
          }
        >
          <Menu.Item key="1">AVON</Menu.Item>
          <Menu.Item key="2">운동</Menu.Item>
        </SubMenu> */}
      </Menu>
      </Col>
      <div>
        <AddFeedback
          handleCancel={handleCancel}
          handleOk={handleOk}
          visible={visible}
        /> 
      </div>
      </> 
    );
};

export default AppSidebar;