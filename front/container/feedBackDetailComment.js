import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Divider, Typography, Button, Icon, Comment, Tooltip, Avatar, Input, Form, Row } from 'antd';
import moment from 'moment';
import {FEEDBACK_ITEM_COMMENT_REQUEST} from '../reducers/feedback';
import {FEEDBACK_ITEM_COMPLETE_REQUEST} from '../reducers/feedback';
const { TextArea } = Input;

const feedBackDetailComment = () => {

    const dispatch = useDispatch();

    const [comment,setComments] = useState('');

    // 코멘트 리스트 
    const feedbacks = ['발표가 너무 구렸다.','발표가 너무 좋았다.','발표가 너무 좋았다.'];

    const comments = feedbacks.map(data => <Comment
        // style={{border:"1px solid #000000", padding:10}}
        key={data}
        author={<a>최지석</a>}
        avatar={
        <Avatar
        >U</Avatar>
        }
        content={
        <p>
           {data}
        </p>
        }
        datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
        </Tooltip>
        }
    />)

    const handleComments = (e) => {
        setComments(e.target.value);
    };

    const _onSubmit = useCallback(() => {
        dispatch({
            type:FEEDBACK_ITEM_COMMENT_REQUEST,
            data:{
                comment,
            }
        });
    },[comment]);

    const handleComplete = useCallback(() => {
        dispatch({
            type:FEEDBACK_ITEM_COMPLETE_REQUEST,
            data:{
                
            }
        });
    },[]);

    return(
        <>
            <Col span={10} style={{position:"fixed", right:0}}>
                <Col span={22}>
                    {comments}
                </Col>
                <Col span={22} style={{padding:0, margin:0}}>
                    <Form onSubmit={_onSubmit}>
                        <Form.Item>
                            <Tooltip title="피드백에 관한 코멘트를 작성해주세요!">
                                <TextArea 
                                    key="comments"
                                    onChange={handleComments}
                                    value={comment}
                                    rows={3} 
                                />
                            </Tooltip>
                        </Form.Item>
                        <Form.Item style={{textAlign:'right'}}>
                            <Tooltip title="피드백에 관한 코멘트를 작성하고 버튼을 클릭해주세요!">
                                <Button htmlType="submit" type="primary">
                                    Add Comment
                                </Button>
                            </Tooltip>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={22} style={{textAlign:'center'}}>
                    <Tooltip title="피드백 완료 후 완료 요청버튼을 클릭 해주세요!">
                        <Button 
                            style={{width:'100%', background:'#0B4E92', color:'#FFFFFF'}}
                            size="large"
                            onClick={handleComplete}
                        ><strong>완료 요청</strong>
                        </Button>
                    </Tooltip>
                </Col>
                
                <Col offset={1}/>
            </Col> 
        </>
    )
}

export default feedBackDetailComment;