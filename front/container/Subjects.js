import React, {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Table, Typography, Tag, Popover, Alert , Button, Empty  } from 'antd';
import DeleteSubject from '../container/deleteSubject';
import AddSubject from '../container/addSubject';
import UpdateSubject from './updateSubject';

const {Text} = Typography;

const Subjects = () => {

    const { feedbackMode } = useSelector(state=> state.feedbackMode);
    const { subject, isAddedSubject, isDeletedSubject, message  } = useSelector(state=> state.feedbackSubject);

    const [visible, setVisible] = useState(false);
    const [updateVisible, setUpdateVisible] = useState(false);
    const [popOverVisible, setPopOverVisible] = useState(false);
    const [category_title, setCategory_title] = useState('');


    const columns = [
        {
            title: 'NO',
            dataIndex: 'number',
            key: 'number',
            align:'center',
        },
        {
            title: '주제',
            dataIndex: 'subject',
            key: 'subject',
            align:'center',
            render: subject => <a>{subject}</a>,
        },
        {
            title: '색깔',
            key: 'tags',
            dataIndex: 'tags',
            align:'center',
            render: tags => (
              <span>
                {tags.map(tag => {
                  return (
                    <Tag color={tag} key={tag}>
                      {tag.toUpperCase()}
                    </Tag>
                  );
                })}
              </span>
            ),
          },
          {
            title: '수정/삭제',
            dataIndex: 'update',
            key: 'update',
            align:'center',
            render: update => (
                <DeleteSubject
                        update={update}
                        PopupUpdateSubject={PopupUpdateSubject}
                        popOverVisible={popOverVisible}
                        handleVisible={handleVisible}
                />
            )
            
          },
        ]

    const data = subject.map((data, index)=>{
      return ({
        key: data.category_id + data.category_title,
        number: index+1,
        subject: data.category_title,
        tags: [data.category_color],
        update: [{category_title:data.category_title, category_id:data.category_id}],
      })
    });

    useEffect(()=>{
      if(isAddedSubject){
        handleCancel();
      }
    },[isAddedSubject&&isAddedSubject]);
       
    useEffect(()=>{
      if(isDeletedSubject){
         alert(message);
      }
    },[isDeletedSubject&&isDeletedSubject]);
   
    const PopupAddSubject = () => {
        setVisible(true);
    }

    const handleCancel = () => {
        setVisible(false);
    }

    const PopupUpdateSubject = (e) => {
      const index = subject.findIndex(v=>parseInt(v.category_id)===parseInt(e.target.id));
      const category_title = subject[index].category_title;
      setCategory_title(category_title);
      setUpdateVisible(true);
      setPopOverVisible(false);
    }

    const handleUpdateCancel = () => {
      setUpdateVisible(false);
    }

    const handleVisible = () => {
      setPopOverVisible(true)
    }

    const setFeedback = <Col span={12} style={{marginTop:20}}>
                            <Row style={{textAlign:'right', marginBottom:15}}>
                                <Button type="primary" size="large" onClick={PopupAddSubject}><strong>주제 추가</strong></Button>
                            </Row>
                            <Row> 
                                <Table columns={columns} dataSource={data} />
                            </Row>
                        </Col>

    const getFeedback = <Col span={12} style={{marginTop:20}}>
        <Row>
            <Empty
              description={<div style={{marginTop:70, fontSize:25, }}><Text><strong>내 피드백으로 전환해주세요~</strong></Text></div>}
            />
        </Row>
    </Col>

    return(
      
      <>
        <Row>
            <Col span={6}></Col>
            {feedbackMode?getFeedback:setFeedback} 
            <Col span={6}></Col>
        </Row>
        <div>
            <AddSubject
                visible={visible}
                handleCancel={handleCancel}
            />
        </div>
        <div>
            <UpdateSubject
                category_title={category_title}
                updateVisible={updateVisible}
                handleUpdateCancel={handleUpdateCancel}
            />
        </div>
        <div>
        </div>
    </>    
    )
};

export default Subjects;