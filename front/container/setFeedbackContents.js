import React,{useState, useEffect} from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Card, Avatar, Icon,Button,Empty, Popconfirm } from 'antd';
import moment from 'moment';
import {FEEDBACK_DELETE_REQUEST, FEEDBACK_UPDATE_REQUEST} from '../reducers/feedback';
import UpdateFeedback from '../container/addFeedback';
const {Meta} = Card;

const setFeedbackContents = ({myFeedback}) => {

    const dispatch = useDispatch();
    const { subject } = useSelector(state=> state.feedbackSubject);
    const { isDeletingFeedback,isUpdatedFeedback } = useSelector(state=> state.feedback);

    const [feedback_id, setFeedback_id] = useState();
    const [feedback_title, setFeedback_title] = useState();
    const [feedback_adviser_uid, setFeedback_adviser_uid] = useState();
    const [feedback_write_date, setFeedback_write_date] = useState();
    const [category_title, setCategory_title] = useState();
    const [visible, setVisible] = useState();

    useEffect(()=>{
        if(isUpdatedFeedback){
            setVisible(false);
        }
    },[isUpdatedFeedback&&isUpdatedFeedback]);


    const setCategory = (val) => {
        const index = subject.findIndex((v,i) => parseInt(v.category_id)===parseInt(val));
        return subject[index].category_title;
    };

    const setColor = (val) => {
        const index = subject.findIndex((v,i) => parseInt(v.category_id)===parseInt(val));
        return subject[index].category_color;
    };

    const handleDelete = () => {
        feedback_id&&
        dispatch({
            type:FEEDBACK_DELETE_REQUEST,
            feedback_id,
        });
    }

    const dDay = (createdAt, write_date) => {
        const c = moment(createdAt,'YYYY-MM-DD');
        const w = moment(write_date,'YYYY-MM-DD');
        return w.diff(c,'days');
    }

    const handleConfirm = (e) => {
        setFeedback_id(e.target.id);
     }

     const showModal = async(e) => {
        e.preventDefault();
        setFeedback_id(e.target.id);
        const [{adviser_uid,title,createdAt,category}] = await myFeedback.filter((v,i)=>parseInt(e.target.id)===parseInt(v.id));
        await setFeedback_adviser_uid(adviser_uid);
        await setFeedback_title(title);
        await setFeedback_write_date(createdAt);
        const [{category_title}] = await subject.filter((v,i)=>v.category_id===category);
        await setCategory_title(category_title);
        await setVisible(true);
      }
    
      const handleCancel = e => {
        setVisible(false);
      };
    
      const handleOk  = e => {
        setVisible(false);
      };


    return(
        <>
        {
           myFeedback.length>=1?
           myFeedback.map((v,i)=> 
              <Card
              // title={<div style={{background:'#DCDCDC', padding:0, margin:0}}>
              // {<strong>{setCategory(v.category)}</strong>}</div>}
              // extra={}
              key={v.id}
              style={{ marginTop: 15, background:setColor(v.category) }}
              cover={<div style={{background:'#DCDCDC', fontSize:12,textAlign:'right', fontWeight:"bold", fontStyle:"italic",paddingRight:15}}>
                      {moment(v.createdAt).format('YYYY MMMM Do , h:mm:ss a')}</div>}
              actions={[
                  <Button id={v.id} onClick={showModal} type="dashed"><Icon type="edit" style={{ fontSize: '18px', color: '#08c' }} /></Button>
                  ,
                  <Popconfirm
                  key={v.id}
                  title="정말로 삭제하시겠습니까?"
                  onConfirm={handleDelete}
                  okText="네"
                  cancelText="아니오"
                  loading={isDeletingFeedback}
                  >
                  <Button id ={v.id} onClick={handleConfirm} type="dashed"><Icon type="delete"style={{ fontSize: '18px', color: '#08c' }} /></Button>
                  </Popconfirm>  
              
              ]}
          >
              <Link key={v.id} as={`/feedbackdetail/${v.id}`} href={`/feedbackdetail?id=${v.id}`} ><a><Meta
                  avatar={
                  <Avatar>{v.adviser_uid.split('')[0]}</Avatar>
                  }
                title={<><Col span={7} style={{background:"#FFFFFF",textAlign:"center", margin:5, borderRadius:100, color:"red"}}><strong>D-</strong>{dDay(v.createdAt, v.write_date)}</Col><Col span={17}/>
                        <Col span={24} style={{fontSize:23}}><strong>{v.title}</strong></Col></>}
              /></a></Link>
          </Card>)
          :
          <Col span={24} style={{marginTop:30}}>
          <Empty 
          description={
              <span>
                <strong>피드백이 없습니다.<br/>피드백을 생성해 주세요</strong>
              </span>
            }
          />
          </Col> 
        }
        <div>
        <UpdateFeedback
            order={FEEDBACK_UPDATE_REQUEST}
            feedback_id={feedback_id}
            feedback_titles={feedback_title}
            feedback_adviser_uid={feedback_adviser_uid}
            feedback_write_date={feedback_write_date}
            category_titles={category_title}
            handleCancel={handleCancel}
            handleOk={handleOk}
            visible={visible}
        /> 
        </div>
        </>
    )
}

export default setFeedbackContents;