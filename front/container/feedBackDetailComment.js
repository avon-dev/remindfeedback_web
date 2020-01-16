import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Divider, Typography, Button, Icon, Comment, Tooltip, Avatar, Input, Form, Row ,Empty} from 'antd';
import moment from 'moment';
import {FEEDBACK_ITEM_COMMENT_REQUEST, 
        FEEDBACK_ITEM_COMPLETE_REQUEST,
        FEEDBACK_ITEM_COMMENT_ADD_REQUEST
        } from '../reducers/feedback';

const { TextArea } = Input;

const feedBackDetailComment = ({board_ids}) => {

    const dispatch = useDispatch();

    const commentReferenece = useRef();
    const {feedbackComment, feedbackItem} = useSelector(state => state.feedback);
    const [comment_content,setComments] = useState('');
    const [board_id, setBoard_id] = useState(0);

    useEffect(()=>{
        if(board_ids){
            setBoard_id(board_ids);
        }
    },[board_ids&&board_ids]);

    useEffect(()=>{
        if(feedbackItem.length>=1){
            setBoard_id(feedbackItem[0].id);
        }
    },[feedbackItem&&feedbackItem]);
   
    const comments = feedbackComment&&feedbackComment.map((v,i) => <Comment
        // style={{border:"1px solid #000000", padding:10}}
        key={v.fk_user_uid}
        name={v.id}
        author={<a>{v.id}</a>}
        avatar={
        <Avatar></Avatar>
        }
        content={
        <p>
           {v.comment_content}
        </p>
        }
        datetime={
        <Tooltip title={moment(v.createdAt).format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment(v.createdAt).format('YYYY-MM-DD HH:mm:ss')}</span>
        </Tooltip>
        }
    />)

    const emptyCard = <Empty 
                        description={
                            <span>
                            <strong>댓글이 없습니다.<br/>댓글을 써 주세요</strong>
                            </span>
                        }
                        />
                        

    const handleComments = (e) => {
        setComments(e.target.value);
    };

    const _onSubmit = useCallback((e) => {
        e.preventDefault();

        if(!comment_content){
            return alert('댓글을 써주세요');
        }
        dispatch({
            type:FEEDBACK_ITEM_COMMENT_ADD_REQUEST,
            data:{
                comment_content,board_id
            }
        });
        setComments('');
        commentReferenece.current.focus();
    },[comment_content]);

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
                {feedbackComment
                ?
                <Col span={22}>
                    {comments}
                </Col>
                :
                <Col span={22} style={{marginBottom:20}}>
                    {emptyCard}
                </Col>
                }
                <Col span={22} style={{padding:0, margin:0}}>
                    <Form onSubmit={_onSubmit}>
                        <Form.Item>
                            <Tooltip title="피드백에 관한 코멘트를 작성해주세요!">
                                <TextArea
                                    ref={commentReferenece} 
                                    key="comments"
                                    onChange={handleComments}
                                    value={comment_content}
                                    rows={3} 
                                />
                            </Tooltip>
                        </Form.Item>
                        <Form.Item style={{textAlign:'right'}}>
                            <Tooltip title="피드백에 관한 코멘트를 작성하고 버튼을 클릭해주세요!">
                                <Button htmlType="submit" type="primary">
                                    댓글등록
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