import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Icon,Button, Row, Switch , Col, Tooltip } from 'antd';
import AddFeedback from '../container/addFeedback';
import Link from 'next/link';
import { FEEDBACK_MODE } from '../reducers/feedbackMode';
import { FEEDBACK_CHANGE_MODE } from '../reducers/feedback';

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

  const dispatch = useDispatch();
  const {subject,isLoadedSubject} = useSelector(state=>state.feedbackSubject);
  const {isLoadedFriends} = useSelector(state=>state.friends);
  const {isLoadedFeedback,isLoadedFeedbackItem} = useSelector(state=>state.feedback);  
  const [visible, setVisible] = useState();
  const [changeTheme, setChangeTheme] = useState(false);
  const [check, setCheck] = useState(true);

  const category = subject?subject.map((v,i)=>
          <Menu.Item  key={v.category_id} style={{color: v.category_color?v.category_color:"#000000"}}>
            <Icon type="right" />
            <strong>{v.category_title}</strong>
          </Menu.Item>
    ):<Menu.Item  key="default" title={<strong>Default</strong>} />

  useEffect(()=>{
      if(isLoadedFeedback){
        setCheck(true);
      }
  },[isLoadedFeedback]);

  useEffect(()=>{
    if(isLoadedFriends||isLoadedFeedbackItem){
      setCheck(false);
    }
  },[isLoadedFriends||isLoadedFeedbackItem]);

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
    await dispatch({
      type:FEEDBACK_CHANGE_MODE,
      data:value
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
        {check&&
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
        }
        <Col span={24}>
        <Menu
            theme={changeTheme}
            style={{ width: '100%', borderRight:'2px solid black'}}
            defaultSelectedKeys={['1']}
            mode="inline"
        >
        <SubMenu key="title1"
          disabled={changeTheme==="dark"?true:false}
          style={{color: changeTheme==="dark"?"#FFFFFF":"#000000"}}
          title={
            <span>
              <Icon type="ordered-list"/>
              <strong>주제 관리</strong>
            </span>
          }>
          <Menu.Item  key="sub1" style={{color: changeTheme==="dark"?"#FFFFFF":"#000000"}}>
            <Icon type="setting"/><strong>주제 설정</strong>
            <Link href="/subject">
            <a></a></Link> 
          </Menu.Item>
          {category}
        </SubMenu>
        <Menu.Item key="sub2" style={{color: changeTheme==="dark"?"#FFFFFF":"#000000"}}>
          <Icon type="team"/><strong>친구 관리</strong>
          <Link href="/friends">
          <a></a></Link> 
        </Menu.Item>
      </Menu>
      </Col>
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