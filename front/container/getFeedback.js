import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card, Avatar, Icon, message, Menu, Dropdown, Button, Breadcrumb,Typography,Tooltip} from 'antd';
import GetFeedbackContents from './getFeedbackContents';
import GetFeedbackCategory from './getFeedbackCategory.js';
import {GETFEEDBACK_CATEGORY_READ_REQUEST} from '../reducers/feedback';

const dispatch = useDispatch();
const {Title} = Typography;
const {Meta} = Card;

const getFeedback = ({requestedFeedback}) => {

    const [inProgress, setInProgress] = useState(false);
    const [reqFeedbackCategoryVisble, setReqFeedbackCategoryVisible] = useState(false);

    // const mainItem = <GetFeedbackContents
    //                         myFeedback={requestedFeedback}
    //                         inProgress={inProgress}  
    //                     />

    const mainItem = requestedFeedback.length>=1?
                    requestedFeedback.map((data,i)=> <Link key={data} href={`/feedbackdetail?${data}`} ><a><Card
                        key={data}
                        style={{ marginTop: 15, background:'#8A2BE2' }}
                        cover={<div style={{background:'#DCDCDC', fontSize:10, textAlign:'right', fontWeight:"bold", fontStyle:"italic",paddingRight:15,}}>
                                요청받은 피드백</div>}
                        actions={[<div style={{ fontSize:10, textAlign:'right', fontWeight:"bold", fontStyle:"italic"}}>
                        {moment().format('YYYY MMMM Do , h:mm:ss a')}
                        </div>]}        
                        >
                        <Meta
                            avatar={
                                <Avatar icon="user" />
                            }
                            title="제목"
                            description={data}
                        />
                    </Card></a></Link>)
                    :
                    <Col span={24} style={{marginTop:30}}>
                    <Empty 
                    description={
                        <span>
                          <strong>피드백이 없습니다.<br/>피드백을 생성해 주세요</strong>
                        </span>
                      }
                    />
                    </Col>
    
    const filter =  requestedFeedback.length>=1?
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">
                            <Icon type="home" /><span>분류1</span>
                        </Breadcrumb.Item >
                        <Breadcrumb.Item href="#">
                            <Icon type="home" /><span>분류2</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="#">
                            <Icon type="home" /><span>분류3</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>                
                    :
                    <div></div>

    const progress = requestedFeedback.length>=1?
            inProgress?
            <div>
                <Button
                    onClick={handleFilter}
                    type="primary"
                    icon="loading"
                    shape="round"
                ><strong> 진행중</strong></Button>
            </div>
            :
            <div>
                <Button
                    onClick={handleFilter}
                    type="primary"
                    icon="check"
                    shape="round"
                ><strong> 진행완료 </strong></Button>
            </div>
            :
            <div></div>

    const handleFilter = () => {
        setInProgress(!inProgress);
    }

    const popUpReqFeedbackCategory = () => {
        const lastId = 0;
        dispatch({
            type:GETFEEDBACK_CATEGORY_READ_REQUEST,
            data:lastId,
        })
        setReqFeedbackCategoryVisible(true);
    }

    const reqFeedbackCategoryHandleCancel = () => {
        setReqFeedbackCategoryVisible(false);
    }

    return(
        <>          
            <Col span={24} style={{textAlign:'center',marginTop:15, fontStyle:"italic", textShadow:"2px 2px 2px gray", }}>
                <Title level={2}><strong>요청받은 피드백</strong>
                <span style={{marginLeft:15}}>
                    <Tooltip title="요청받은 피드백 목록입니다.">
                        <Button type="dashed" size="small" icon="caret-right" onClick={popUpReqFeedbackCategory}></Button>
                    </Tooltip>
                </span>
                </Title>
            </Col>
            <Col span={24} style={{marginTop:20, textAlign:'right'}}> 
                {/* {filter} */}
            </Col>
            {progress}
            <div>
                {/* {mainItem}   */}
            </div>
            {/* <GetFeedbackCategory
                reqFeedbackCategoryVisble={reqFeedbackCategoryVisble}
                reqFeedbackCategoryHandleCancel={reqFeedbackCategoryHandleCancel}
            />         */}
        </>
    )
}

export default getFeedback;