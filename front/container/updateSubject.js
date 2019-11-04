import React from 'react';
import { Popover, Icon, Button, Popconfirm } from 'antd';

const updateSubject = ({update}) => {
    return(
        update.map((update) => {
            return(
                <Popover
                key={update}
                title={update}
                placement="rightBottom"
                overlayStyle={{textAlign:'center'}}
                content={
                    <>
                        <div id={update} style={{display:'flex', justifyContent:'space-around' }}>
                            <Popconfirm
                                title="정말로 수정하시겠습니까?"  
                                okText="네"
                                cancelText="아니오"
                            >
                                <Button key="modify" type="primary" name={update} size="small">수정</Button> 
                            </Popconfirm>

                            <Popconfirm
                                title="정말로 삭제하시겠습니까?"  
                                okText="네"
                                cancelText="아니오"
                            >
                                <Button key="delete" type="danger" name={update} size="small">삭제</Button> 
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

export default updateSubject;