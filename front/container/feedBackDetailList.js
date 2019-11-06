import React from 'react';
import { Col, Button, Breadcrumb, Icon, Card, Popover } from 'antd';
import moment from 'moment';

const {Group} = Button;

const feedBackDetailList = () => {

    // 글
    const popUpWrite = () => {
        console.log('FeedBackDetail popUpWrite');
    }

    // 사진
    const popUpPhoto = () => {
        console.log('FeedBackDetail popUpPhoto');
    }

    // 비디오
    const popUpVideo = () => {
        console.log('FeedBackDetail popUpVideo');
    }

    // 녹음
    const popUpRecord = () => {
        console.log('FeedBackDetail popUpRecord');
    }

    // 피드백 디테일 리스트
    const subTitle = ['목요일반 발표 수업','목요일반 자바 수업','목요일반 php 수업','목요일반 안드로이드 수업'];

    const ItemCard = subTitle.map(data=>
        <Card 
            title="Test" 
            extra={<a href="#">More</a>} 
            style={{ width: '100%' }}
        >
            <p style={{color:'#000000'}}><strong>{data}</strong></p>
            <p style={{fontSize:10}}>{moment().format('YYYY-MM-DD HH:mm:ss')}</p>
        </Card>)

    return(
        <>  
            <Col span={12}>
                <Col span={2}></Col>
                <Col span={22} style={{textAlign:'right', marginBottom:10}}>
                    <Popover
                        content={<Group>
                            <Button type="primary" onClick={popUpWrite} icon="file-text">글</Button>
                            <Button type="primary" onClick={popUpPhoto} icon="picture">사진</Button>
                            <Button type="primary" onClick={popUpVideo} icon="video-camera">동영상</Button>
                            <Button type="primary" onClick={popUpRecord} icon="audio">녹음</Button>
                        </Group>}
                         trigger="click"
                    ><Button type="primary" onClick={popUpWrite}><strong>추가하기</strong></Button></Popover>
                </Col>
                <Col span={2}></Col>
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
                <Col span={2}></Col>
                <Col span={22} style={{marginBottom:10}}>
                    <div>
                        <span style={{fontSize:20, color:'#000000', marginRight:5}}><strong>조언자:</strong></span><span>아무개</span>
                    </div>
                    <div>
                        <span style={{fontSize:15, color:'#000000', marginRight:5}}><strong>생성일:</strong></span><span>{moment().format('YYYY-MM-DD HH:mm:ss')}</span>
                    </div>
                </Col>
                <Col span={2}></Col>
                <Col span={22}>
                    {ItemCard}
                </Col>     
            </Col>
        </>
    )
}

export default feedBackDetailList;