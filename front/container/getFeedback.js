import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card, Avatar, Icon, message, Menu, Dropdown, Button, Breadcrumb,Typography,Tooltip, Empty} from 'antd';
import GetFeedbackContents from './getFeedbackContents';
import GetFeedbackCategory from './getFeedbackCategory';
import {GETFEEDBACK_CATEGORY_READ_REQUEST} from '../reducers/feedback';


const {Title} = Typography;
const {Meta} = Card;

const getFeedback = ({requestedFeedback}) => {

    const dispatch = useDispatch();
    const [inProgress, setInProgress] = useState(false);
    const [reqFeedbackCategoryVisble, setReqFeedbackCategoryVisible] = useState(false);

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

    const mainItem = <GetFeedbackContents
                            myFeedback={requestedFeedback}
                            inProgress={inProgress}  
                        />

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
            !inProgress?
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

    

    return(
        <>          
            <Col span={24} style={{textAlign:'center',marginTop:15, fontStyle:"italic", textShadow:"2px 2px 2px gray", }}>
                <Title level={2}><strong>요청받은 피드백</strong>
                {/* <span style={{marginLeft:15}}>
                    <Tooltip title="요청받은 피드백 목록입니다.">
                        <Button type="dashed" size="small" icon="caret-right" onClick={popUpReqFeedbackCategory}></Button>
                    </Tooltip>
                </span> */}
                </Title>
            </Col>
            <Col span={24} style={{marginTop:20, textAlign:'right'}}> 
                {/* {filter} */}
            </Col>
            {progress}
            <div>
                {mainItem}  
            </div>
            <GetFeedbackCategory
                reqFeedbackCategoryVisble={reqFeedbackCategoryVisble}
                reqFeedbackCategoryHandleCancel={reqFeedbackCategoryHandleCancel}
            />        
        </>
    )
}

export default getFeedback;