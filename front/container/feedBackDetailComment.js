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
    // <span key="comment-basic-reply-to">Reply to</span>,
    ];

    const comments = feedbacks.map(data => <Comment
        // style={{border:"1px solid #000000", padding:10}}
        key={data}
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
                <Col offset={1}/>
                <Col span={22}>
                    {comments}
                </Col>
                <Col span={22} style={{padding:0, margin:0}}>
                    <Form>
                        <Form.Item>
                            <Tooltip title="피드백에 관한 코멘트를 작성해주세요!">
                                <TextArea rows={4} />
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
                <Col offset={1}/>
                <Col offset={1}/>
                <Col span={22}><Divider type="horizontal" style={{border:'2px solid black'}} /></Col>
                <Col offset={1}/>
                <Col offset={1}/>
                <Col span={22} style={{textAlign:'center'}}>
                    <Tooltip title="피드백 완료 후 완료 요청버튼을 클릭 해주세요!">
                        <Button 
                            style={{width:'100%', background:'#0B4E92', color:'#FFFFFF'}}
                            size="large"
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