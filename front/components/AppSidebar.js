import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Icon,Button, Row, Switch , Col, Tooltip } from 'antd';
import AddFeedback from '../container/addFeedback';
import Link from 'next/link';
import { FEEDBACK_MODE } from '../reducers/feedbackMode';

const newFeedBack ={
  fontSize:17,
  fontWeight:'bold',
}

const Sidebar = {
  margin:7,
  padding:5,
}

const AppSidebar = () => {

  const dispatch = useDispatch();
  

  const [visible, setVisible] = useState();
  const [changeTheme, setChangeTheme] = useState(false);

  const showModal = () => {
    setVisible(true);
  }

  const handleCancel = e => {
    setVisible(false);
  };

  const handleOk  = e => {
    setVisible(false);
  };

  const handleSwitch  = async(value) => {
    await setChangeTheme(value?'dark':'light');
    await dispatch({
      type:FEEDBACK_MODE,
      data: value
    })
  };

    return(
      <>
      <Col span={24} style={Sidebar}>
          <Button
            disabled={changeTheme==="dark"?true:false}
            onClick={showModal}
            type="primary"
            size='large'
            style={newFeedBack}
        > + 새로운 피드백 작성</Button>
      </Col>
      <Col span={24} style={Sidebar}>
        <Col span={24} style={{textAlign:'center', marginBottom:15}}>
          <Tooltip title="내피드백 OR 요청받은 피드백">
            <Switch
              size="default"
              checkedChildren={<div style={{fontSize:15}}>요청받은 피드백</div>}
              unCheckedChildren={<div style={{fontSize:15}}>내 피드백</div>}
              onChange={handleSwitch}
            />
          </Tooltip>
        </Col>
        <Menu
            theme={changeTheme}
            style={{ width: '100%', borderRight:'2px solid black', height:'70vh' }}
            defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub2']}
            mode="vertical"
        >
        <Menu.Item disabled={changeTheme==="dark"?true:false} key="sub1" style={{color: changeTheme==="dark"?"#FFFFFF":"#000000"}}>
          <Icon type="ordered-list"/><strong>주제 관리</strong>
          <Link href="/subject">
          <a></a></Link> 
        </Menu.Item>
        <Menu.Item key="sub2" style={{color: changeTheme==="dark"?"#FFFFFF":"#000000"}}>
          <Icon type="team"/><strong>친구 관리</strong>
          <Link href="/friends">
          <a></a></Link> 
        </Menu.Item>
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