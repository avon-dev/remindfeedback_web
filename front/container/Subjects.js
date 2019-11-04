import React, {useState} from 'react';
import { Row, Col, Table, Divider, Tag, Popover, Icon, Button, Popconfirm } from 'antd';
import UpdateSubject from '../container/updateSubject';
import AddSubject from '../container/addSubject';

const Subjects = () => {

    const [visible, setVisible] = useState(false);

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
                <UpdateSubject
                        update={update}
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

    const handleOk = () => {
        setVisible(false);
    }

    const handleCancel = () => {
        setVisible(false);
    }

    return(
        <>
            <Row>
                <Col span={6}></Col>
                <Col span={12} style={{marginTop:20}}>
                    <Row style={{textAlign:'right', marginBottom:15}}>
                        <Button type="primary" size="large" onClick={PopupAddSubject} ><strong>주제 추가</strong></Button>
                    </Row>
                    <Row>
                        <Table columns={columns} dataSource={data} />
                    </Row>
                </Col>
                <Col span={6}></Col>
            </Row>
            <div>
                <AddSubject
                    visible={visible}
                    handleOk={handleOk}
                    handleCancel={handleCancel}
                />
            </div>
        </>
    )
};

export default Subjects;