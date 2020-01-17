import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Divider, Typography, Button, Icon, Comment, Tooltip, Avatar, Input, Form, Popconfirm ,Empty} from 'antd';
import moment from 'moment';
import {FEEDBACK_ITEM_COMMENT_REQUEST, 
        FEEDBACK_ITEM_COMPLETE_REQUEST,
        FEEDBACK_ITEM_COMMENT_ADD_REQUEST,
        FEEDBACK_ITEM_COMMENT_DELETE_REQUEST,
        FEEDBACK_ITEM_COMMENT_UPDATE_REQUEST,
        } from '../reducers/feedback';

const { TextArea } = Input;
const {Group} = Button;

const feedBackDetailComment = ({board_ids}) => {

    const dispatch = useDispatch();

    const commentReferenece = useRef();
    const commentIdReference = useRef();
    
    const {feedbackComment, feedbackItem} = useSelector(state => state.feedback);
    const [comment_content,setComments] = useState('');
    const [updateComment,setUpdateComment] = useState('');
    const [board_id, setBoard_id] = useState(0);
    const [commentId, setCommentId] = useState(0);
    const [changeMode, setChangeMode] = useState(0);
    const [changeWrite, setChangeWrite] = useState(false);
    const [changeDo, setChangeDo] = useState(true);
    
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


    const handleCommentUpdate = () => {
       
       if(changeWrite){
           // 서버로 보낸다.
           dispatch({
            type:FEEDBACK_ITEM_COMMENT_UPDATE_REQUEST,
            data:{
                comment_id:commentId, comment_content:updateComment
            }
           })
           setChangeWrite(false);
           setChangeDo(true);
       }else{
         setChangeWrite(true);
         
       }
    }

    const handleCommentWirte = (e) => {
        setUpdateComment(e.target.value);
    }

    const handleCommentId = (e) => {
        const {id, name} = e.target
        if(name==="update"){
            setChangeMode(1);
            setChangeDo(false);
            if(changeDo){
                setUpdateComment(feedbackComment.find((v,i)=>parseInt(v.id)===parseInt(id)).comment_content)
            }
        }else if(name==="delete"){
            setChangeMode(2);
        }else{
            setChangeMode(3);
        }
        setCommentId(id)
    }

    const handleCommentDelete = (e) => {
        e.preventDefault();
        dispatch({
            type:FEEDBACK_ITEM_COMMENT_DELETE_REQUEST,
            data:commentId
        })
    }

    const handleBack = () => {
        setChangeWrite(false);
        setChangeDo(true);
    }
    
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

    const comments = feedbackComment&&feedbackComment.map((v,i) => <Comment
        // style={{border:"1px solid #000000", padding:10}}
        actions ={[
            <div key="comment-update-delete">
            
            <Popconfirm 
                title={changeMode===1?"정말로 수정하시겠습니까?":changeMode===2?"정말로 삭제하시겠습니까?":"정말로 취소하시겠습니까?"}
                onConfirm={changeMode===1?handleCommentUpdate:changeMode===2?handleCommentDelete:handleBack}
                okText="네"
                cancelText="아니오"
                >
                <Group>
                    <Button
                        type="dashed"
                        name="update"
                        id={v.id}
                        size="small"
                        icon="edit"
                        onClick={handleCommentId}
                        />
                    {changeWrite&&parseInt(v.id)===parseInt(commentId)
                    ?
                    <Button
                        type="dashed"
                        name="back"
                        id={v.id}
                        size="small"
                        icon="arrow-left"
                        onClick={handleCommentId}
                    />
                    :    
                    <Button
                        type="dashed"
                        name="delete"
                        id={v.id}
                        size="small"
                        icon="delete"
                        onClick={handleCommentId}
                    />
                    } 
                </Group>
             </Popconfirm>
              
            </div>,
          ]}
        
        key={v.fk_user_uid+v.id}
        name={v.id}
        author={<a>{v.user.nickname}</a>}
        avatar={
        <Avatar 
            src={v.user.portrait&&`https://remindfeedback.s3.ap-northeast-2.amazonaws.com/${v.user.portrait}`}
        >{!v.user.portrait&&v.user.nickname.split('')[0]}</Avatar>
        }
        content={
        changeWrite&&parseInt(v.id)===parseInt(commentId)
        ?
        <TextArea
            value={updateComment}
            onChange={handleCommentWirte}
        />
        :
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

    return(
        <>
            <Col span={12} >
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