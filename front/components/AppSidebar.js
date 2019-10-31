import React from 'react';
import { Menu, Icon,Button, Row } from 'antd';

const { SubMenu } = Menu;

const newFeedBack ={
  fontSize:25,
  fontWeight:'bold',
}

const Sidebar = {
  margin:5,
  padding:5
}

const AppSidebar = () => {
    return(
      <>
      <div style={Sidebar}>
        <Button
          type="primary"
          size='large'
          style={newFeedBack}
        > + 새로운 피드백 작성</Button>
      </div>
      <div style={Sidebar}>
        <Menu
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="ordered-list" />
              <span style={{color:'black', fontWeight:'bold'}}>주제 설정</span>
            </span>
          }
        >
          <Menu.Item key="1">AVON</Menu.Item>
          <Menu.Item key="2">운동</Menu.Item>
        </SubMenu>
      </Menu>
      </div> 
      </> 
    );
};

export default AppSidebar;