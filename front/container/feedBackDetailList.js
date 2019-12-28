import React, { useState } from 'react';
import { Col, Button, Breadcrumb, Icon, Card, Popover, Pagination, Tooltip  } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import AppWrite from '../container/feedBackDetailWrite';
import AppPhoto from '../container/feedBackPhoto';
import AppVideo from '../container/feedBackDetailVideo';
import AppRecord from '../container/feedBackDetailRecord';

const {Group} = Button;

const feedBackDetailList = ({feedback_id}) => {

    const dispatch = useDispatch();
    const {feedbackItem} = useSelector(state=>state.feedback);

    const [name, setName] = useState(false);
    const [Visible, setVisible] = useState(false);
    const [writeVisible, setWriteVisible] = useState(false);
    const [photoVisible, setPhotoVisible] = useState(false);
    const [videoVisible, setVideoVisible] = useState(false);
    const [recordVisible, setRecordVisible] = useState(false);

    // Popover 추가하기
    const popUpAdd = () => {
        setVisible(!Visible);
    }

    // 글
    const writeHandleCancel = () => {
        console.log('FeedBackDetail writeHandleCancel');
        setWriteVisible(false);
    }

    // 사진
    const photoHandleCancel = () => {
        console.log('FeedBackDetail photoHandleCancel');
        setPhotoVisible(false);
    }

    // 비디오
    const videoHandleCancel = () => {
        console.log('FeedBackDetail videoHandleCancel');
        setVideoVisible(false);
    }

    // 녹음
    const recordHandleCancel = () => {
        console.log('FeedBackDetail recordHandleCancel');
        setRecordVisible(false);
    }

    const popUpModal = (e) => {
            setName(e.target.name);
            setVisible(false);
        if(e.target.name=== "TEXT"){
            setWriteVisible(true);
        }else if(e.target.name=== "PHOTO"){
            setPhotoVisible(true);
        }else if(e.target.name=== "VIDEO"){
            setVideoVisible(true);
        }else if(e.target.name=== "RECORD"){
            setRecordVisible(true);  
        }
    }

    // 피드백 디테일 리스트
    const subTitle = ['목요일반 발표 수업','목요일반 자바 수업','목요일반 php 수업','목요일반 안드로이드 수업'];

    const ItemCard = feedbackItem.map((v,i)=>
        <Card 
            key={v.id}
            title={v.board_title} 
            extra={<Tooltip title="더 자세한 사항을 보려면 More 버튼을 클릭해주세요!"><a href="#">More</a></Tooltip>} 
            style={{ width: '100%' }}
        >
            <p style={{color:'#000000'}}><strong>{v.board_content}</strong></p>
            <p style={{fontSize:10}}>{moment(v.createdAt).format('YYYY-MM-DD HH:mm:ss')}</p>
        </Card>)

    return(
        <>  
            <Col span={12} >
                <Col offset={1}/>
                <Col span={22} style={{textAlign:'right', marginBottom:10}}>
                    <Popover
                        key="addModal"
                        visible={Visible}
                        content={<Group>
                            <Button type="primary" name="TEXT" onClick={popUpModal} icon="file-text">글</Button>
                            <Button type="primary" name="PHOTO" onClick={popUpModal} icon="picture">사진</Button>
                            <Button type="primary" name="VIDEO" onClick={popUpModal} icon="video-camera">동영상</Button>
                            <Button type="primary" name="RECORD" onClick={popUpModal} icon="audio">녹음</Button>
                        </Group>}
                         trigger="click"
                    ><Button type="primary" onClick={popUpAdd}><strong>추가하기</strong></Button></Popover>
                </Col>
                <Col offset={1}/>
                <Col offset={1}/>
                <Col span={22} style={{textAlign:'right', marginBottom:10}}>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">
                            <Icon type="home" /><span>전체</span>
                        </Breadcrumb.Item >
                        <Breadcrumb.Item href="#">
                            <Icon type="home" /><span>글</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="#">
                            <Icon type="home" /><span>사진</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="#">
                            <Icon type="home" /><span>동영상</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="#">
                            <Icon type="home" /><span>녹음</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
                <Col offset={1}/>
                <Col offset={1}/>
                <Col span={22} style={{marginBottom:10}}>
                    <div>
                        <span style={{fontSize:20, color:'#000000', marginRight:5}}><strong>조언자:</strong></span><span>아무개</span>
                    </div>
                    <div>
                        <span style={{fontSize:15, color:'#000000', marginRight:5}}><strong>생성일:</strong></span><span>{CreatedAt}</span>
                    </div>
                </Col>
                <Col offset={1}/>
                <Col offset={1}/>
                <Col span={22}>
                    {ItemCard}
                </Col>
                <Col offset={1}/>
                <Col offset={1}/>
                <Col span={22} style={{marginTop:20, marginBottom:20, textAlign:'center'}}>
                    <Pagination efaultCurrent={1} total={50}/>
                </Col>
                <Col offset={1}/>     
            </Col>
            <div>
              <AppWrite
                 writeVisible={writeVisible}   
                 writeHandleCancel={writeHandleCancel}
                 name={name}
                 feedback_id={feedback_id}           
              />                  
            </div>
            <div>
              <AppPhoto
                 photoVisible={photoVisible}   
                 photoHandleCancel={photoHandleCancel}
                 name={name}
                 feedback_id={feedback_id}              
              />                  
            </div>
            <div>
              <AppVideo
                 videoVisible={videoVisible}   
                 videoHandleCancel={videoHandleCancel}
                 name={name}
                 feedback_id={feedback_id}              
              />                  
            </div>
            <div>
              <AppRecord
                 recordVisible={recordVisible}   
                 recordHandleCancel={recordHandleCancel}
                 name={name}
                 feedback_id={feedback_id}              
              />                  
            </div>
        </>
    )
}

export default feedBackDetailList;