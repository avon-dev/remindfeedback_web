import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Popover, Icon, Button, Popconfirm} from 'antd';
import {FEEDBACK_SUB_DELETE_REQUEST} from '../reducers/feedbackSubject';

const deleteSubject = ({update,PopupUpdateSubject,popOverVisible,handleVisible}) => {
    
    const dispatch = useDispatch();

    const [id,setId] = useState('');

    const handleDelete = (e) => {
        setId(e.target.name); 
    }
   
    const handleConfirm = useCallback(() => {
        dispatch({
            type:FEEDBACK_SUB_DELETE_REQUEST,
            data:{
                id,
            },
        });
    },[id]);

    return(
        update.map((update) => {
            return(
                <Popover
                // onVisibleChange={handleVisible}
                // visible={popOverVisible}
                key={update}
                title={update}
                placement="rightBottom"
                overlayStyle={{textAlign:'center'}}
                content={
                    <>
                        <div id={update} style={{display:'flex', justifyContent:'space-around' }}>
                            <Button key="modify" type="primary" name={update} size="small" onClick={PopupUpdateSubject}>수정</Button> 
                            <Popconfirm
                                key = {update}
                                onConfirm={handleConfirm}
                                title="정말로 삭제하시겠습니까?"  
                                okText="네"
                                cancelText="아니오"
                            >
                                <Button key={update} type="danger" name={update}  onClick={handleDelete} size="small">삭제</Button> 
                            </Popconfirm>
                        </div>
                    </>
                }
                trigger="click"
            >
                <Button type="link" key={update} >
                    <Icon type="more" key={update}/>
                </Button>
            </Popover>      
        )})
    )
}

export default deleteSubject;