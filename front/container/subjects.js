import React, {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Table, Typography, Tag, Popover, Icon, Button, Empty  } from 'antd';
import DeleteSubject from '../container/deleteSubject';
import AddSubject from '../container/addSubject';
import UpdateSubject from './updateSubject';

const {Text} = Typography;

const Subjects = () => {

    const { feedbackMode } = useSelector(state=> state.feedbackMode);

    const [visible, setVisible] = useState(false);
    const [updateVisible, setUpdateVisible] = useState(false);
    const [popOverVisible, setPopOverVisible] = useState(false);

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
                  let color = tag.length > 4 ? 'green' : 'geekblue';
                  if (tag === 'red') {
                    color = 'volcano';
                  }
                  return (
                    <Tag color={color} key={tag}>
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

    const data = [
        {
          key: '1',
          number: '1',
          subject: 'AVON',
          tags: ['green', 'blue'],
          update:['AVON']
        },
        {
          key: '2',
          number: '2',
          subject: '운동',
          tags: ['red'],
          update:['운동']
        },
        {
          key: '3',
          number: '3',
          subject: "Test",
          tags: ['blue', 'green'],
          update:["Test"],
        },
    ];

    const PopupAddSubject = () => {
        setVisible(true);
    }

    const handleCancel = () => {
        setVisible(false);
    }

    const PopupUpdateSubject = () => {
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
                updateVisible={updateVisible}
                handleUpdateCancel={handleUpdateCancel}
            />
        </div>
    </>    
    )
};

export default Subjects;
