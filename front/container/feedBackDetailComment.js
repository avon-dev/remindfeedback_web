import React from 'react';
import { Col, Divider, Typography, Button, Icon, Comment, Tooltip, Avatar, Input, Form } from 'antd';
import moment from 'moment';

const { TextArea } = Input;

const feedBackDetailComment = () => {

    // 코멘트 리스트 
    const feedbacks = ['발표가 너무 구렸다.','발표가 너무 좋았다.','발표를 너무 잘했다.','발표만 보였다.'];

    const actions = [
        <span key="comment-basic-like">
        <Tooltip title="Like">
          <Icon
            type="like"
            // theme={action === 'liked' ? 'filled' : 'outlined'}
            // onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}></span>
      </span>,
      <span key="comment-basic-dislike">
      <Tooltip title="Dislike">
        <Icon
          type="dislike"
        //   theme={action === 'disliked' ? 'filled' : 'outlined'}
        //   onClick={this.dislike}
        />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: 'auto' }}></span>
    </span>,
    <span key="comment-basic-reply-to">Reply to</span>,
    ];

    const comments = feedbacks.map(data => <Comment
        // style={{border:"1px solid #000000", padding:10}}
        actions={actions}
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

    return(
        <>
            <Col span={11}>
                <Col span={22}>
                    {comments}
                </Col>
                <Col span={2}></Col>
                <Col span={22}>
                <Divider type="horizontal" style={{border:'1px solid black'}} />
                    <Form>
                        <Form.Item>
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item style={{textAlign:'right'}}>
                            <Button htmlType="submit" type="primary">
                                Add Comment
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={2}></Col>
            </Col> 
        </>
    )
}

export default feedBackDetailComment;