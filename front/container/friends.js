import React, {useState, useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Input, Icon, Button, Card, Avatar, Popover,Popconfirm } from 'antd';
import AddFriends from '../container/addFriends';
import RequestFriends from '../container/requestFriends';
import ProfileFriends from '../components/ProfileFriends';
import {FRIENDS_MAIN_SEARCH_REQUEST} from '../reducers/friends';
import {FRIENDS_MAIN_READ_REQUEST} from '../reducers/friends';
import {FRIENDS_BLOCK_REQUEST} from '../reducers/friends';

const ButtonGroup = Button.Group;
const { Meta } = Card;
const { Search } = Input;

const Friends = () => {
 
    const dispatch = useDispatch();

    const [addVisible, setAddVisible] = useState(false);
    const [requestVisible, setRequestVisible] = useState(false);
    const [profileVisible, setProfileVisible] = useState(false);
    const [profileName, setProfileName] = useState('');
    const [id,setId] = useState('');

    // request server 
    useEffect(()=>{

    },[]);

    const title = [
      {
        name:'최종수',
        color:'#f56a00'
      },
      {
        name:'권기현',
        color:'#7265e6'
      },
      {
        name:'구지운',
        color:'#ffbf00'
      },
      {
        name:'최지석',
        color:'#00a2ae'
      },
      {
        name:'최유연',
        color:'#DEB887'
      },
      {
        name:'김상초',
        color:'#7FFF00'
      },
    ];
 
    
    // 친구 차단
    const handleConfirm = useCallback(() => {
      dispatch({
        type:FRIENDS_BLOCK_REQUEST,
        data:{
          id,
        }
      });
    },[]);

    const handleBlock = (e) => {
      setId(e.target.name); 
    }

    // 친구 추가
    const PopupAddFriends = () => {
      setAddVisible(true);
    }

    const addHandleOk = () => {
      setAddVisible(false);
    }

    const addHandleCancel = () => {
      setAddVisible(false);
    }

    // 친구 요청
    const PopupRequestFriends = () => {
      setRequestVisible(true);
    }

    const requestHandleOk = () => {
      setRequestVisible(false);
    }

    const requestHandleCancel = () => {
      setRequestVisible(false);
    }

    // 프로필 보기
    const PopupProfile = (e) => {
      console.log(e.target.name);
      setProfileName(e.target.name);
      setProfileVisible(true);
    }

    const profileHandleOk = () => {
      setProfileVisible(false);
    }

    const profileHandleCancel = () => {
      setProfileVisible(false);
    }

    // 친구 검색
    const handleSearch = useCallback((value) => {
      dispatch({
        type: FRIENDS_MAIN_SEARCH_REQUEST,
        data:{
          value,
        }
      });
    },[]);

    const Item = title.map((item)=> {
      return(
        <Card key={item.name} extra={<Popover
                          key={item.name}
                          title={item.name}
                          placement="rightBottom"
                          overlayStyle={{textAlign:'center'}}
                          content={
                              <>
                                  <div id={item.name} style={{display:'flex', justifyContent:'space-around' }}>
                                      <Popconfirm
                                          onConfirm={handleConfirm}
                                          title="정말로 차단하시겠습니까?"  
                                          okText="네"
                                          cancelText="아니오"
                                      >
                                          <Button key="ban" type="danger" name={item.name} onClick={handleBlock} size="small">차단</Button> 
                                      </Popconfirm>
                                  </div>
                              </>
                          }
                          trigger="click"
                      >
                          <Button type="link" key={item.name} >
                              <Icon type="more" key={item.name}/>
                          </Button>
                    </Popover> }>
          <Meta
            avatar={
              <Button onClick={PopupProfile} shape="circle-outline" key={item.name} name={item.name} ><Avatar style={{background:item.color}}>U</Avatar></Button>
            }
            title={item.name}
            description="Description"
          />
        </Card>
      )
    })

    return(
        <>
            <Row>
                <Col span={6}></Col>
                <Col span={12} style={{marginTop:20}}>
                    <Col span={24} style={{textAlign:'right', marginBottom:15}}>
                        <ButtonGroup>
                          <Button type="primary" size="large" onClick={PopupAddFriends} >
                            <Icon type="plus" style={{marginRight:3}}></Icon>
                            <strong>친구 추가</strong>
                          </Button>
                          <Button type="primary" size="large" onClick={PopupRequestFriends} >
                            <Icon type="shrink" style={{marginRight:3}}></Icon>
                            <strong>친구 요청</strong>
                          </Button>
                        </ButtonGroup>
                    </Col>
                    <Col span={24} style={{marginBottom:15}}>
                        <Search
                          placeholder="이메일을 검색하세요"
                          enterButton="검색"
                          size="large"
                          onSearch={handleSearch}
                        />
                    </Col>
                    <Col span={24}>
                        {Item}
                    </Col>
                </Col>
                <Col span={6}></Col>
            </Row>
            <div>
                <AddFriends
                    addVisible={addVisible}
                    addHandleOk={addHandleOk}
                    addHandleCancel={addHandleCancel}
                />
            </div>
            <div>
              <RequestFriends
                  requestVisible={requestVisible}
                  requestHandleOk={requestHandleOk}
                  requestHandleCancel={requestHandleCancel}
                />
            </div>
            <div>
              <ProfileFriends
                  profileVisible={profileVisible}
                  profileHandleOk={profileHandleOk}
                  profileHandleCancel={profileHandleCancel}
                  profileName={profileName}
                />
            </div>
        </>
    )
};

export default Friends;