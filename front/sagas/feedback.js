import {all, delay, fork, put, takeLatest, call, throttle } from 'redux-saga/effects';
import axios from 'axios';
import {
    FEEDBACK_TUTORIAL_REQUEST,
    FEEDBACK_TUTORIAL_SUCCESS,
    FEEDBACK_TUTORIAL_FAILURE,
    FEEDBACK_READ_REQUEST,
    FEEDBACK_READ_SUCCESS,
    FEEDBACK_READ_FAILURE,
    FEEDBACK_ADD_REQUEST,
    FEEDBACK_ADD_SUCCESS,
    FEEDBACK_ADD_FAILURE,
    FEEDBACK_UPDATE_REQUEST,
    FEEDBACK_UPDATE_SUCCESS,
    FEEDBACK_UPDATE_FAILURE,
    FEEDBACK_DELETE_REQUEST,
    FEEDBACK_DELETE_SUCCESS,
    FEEDBACK_DELETE_FAILURE,
    FEEDBACK_ITEM_READ_REQUEST,
    FEEDBACK_ITEM_READ_SUCCESS,
    FEEDBACK_ITEM_READ_FAILURE,
    FEEDBACK_ITEM_ADD_REQUEST,
    FEEDBACK_ITEM_ADD_SUCCESS,
    FEEDBACK_ITEM_ADD_FAILURE,
    FEEDBACK_ITEM_COMPLETE_REQUEST,
    FEEDBACK_ITEM_COMPLETE_SUCCESS,
    FEEDBACK_ITEM_COMPLETE_FAILURE,
    FEEDBACK_ITEM_COMMENT_REQUEST,
    FEEDBACK_ITEM_COMMENT_SUCCESS,
    FEEDBACK_ITEM_COMMENT_FAILURE,
} from '../reducers/feedback';

import {LOG_IN_SUCCESS} from '../reducers/user';

const dev = process.env.NODE_ENV !== "production";
const prod = process.env.NODE_ENV === "production";

if(prod){
    axios.defaults.baseURL = "http://54.180.118.35";
}else{
    axios.defaults.baseURL = "http://localhost:8000";
}

// Feedback 피드백 게시물 댓글 Read
function feedback_Item_Comment_API(){
    // return axios.get('/#');
};

function* feedback_Item_Comment(){
    try {
        yield delay(2000);
        yield call(feedback_Item_Comment_API);
        yield put({
            type:FEEDBACK_ITEM_COMMENT_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:FEEDBACK_ITEM_COMMENT_FAILURE,
            error:e,
        });
    }
};

function* watchFeedback_Item_Comment() {
    yield takeLatest(FEEDBACK_ITEM_COMMENT_REQUEST, feedback_Item_Comment);
};


// Feedback 피드백 게시물 세부사항 Read
function feedback_Item_Complete_API(){
    // return axios.get('/#');
};

function* feedback_Item_Complete(){
    try {
        yield delay(2000);
        yield call(feedback_Item_Complete_API);
        yield put({
            type:FEEDBACK_ITEM_COMPLETE_SUCCESS,
        });
    } catch (e) {
        yield put({
            type:FEEDBACK_ITEM_COMPLETE_FAILURE,
            error:e,
        });
    }
};

function* watchFeedback_Item_Complete() {
    yield takeLatest(FEEDBACK_ITEM_COMPLETE_REQUEST, feedback_Item_Complete);
};


// Feedback 피드백 게시물 Add
function feedback_Item_Add_API(data){
    switch(data.name){
        case "TEXT": return axios.post('/board/text/create',data,{withCredentials:true});
        case "PHOTO": return axios.post('/board/picture/create',data.formData,{withCredentials:true});
        case "VIDEO": return axios.post('/#');
        case "RECORD": return axios.post('/#');
        default: return console.error("에러발생");
    }
};

function* feedback_Item_Add(action){
    try {
        const result = yield call(feedback_Item_Add_API, action.data);
        console.log(result.data,"feedback_Item_Add");
        yield put({
            type:FEEDBACK_ITEM_ADD_SUCCESS,
            data:result.data,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:FEEDBACK_ITEM_ADD_FAILURE,
            error:e,
        });
    }
};

function* watchFeedback_Item_Add() {
    yield takeLatest(FEEDBACK_ITEM_ADD_REQUEST, feedback_Item_Add);
};


// Feedback 피드백 게시물 Read
function feedback_Item_Read_API(data){
    return axios.get(`/board/${parseInt(data.feedbackid)}/${data.lastid}`,{
        withCredentials:true,
    });
};

function* feedback_Item_Read(action){
    try {
        const result = yield call(feedback_Item_Read_API, action.data);
        console.log(result.data,"feedback_Item_Read");
        yield put({
            type:FEEDBACK_ITEM_READ_SUCCESS,
            data:result.data,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:FEEDBACK_ITEM_READ_FAILURE,
            error:e,
        });
    }
};

function* watchFeedback_Item_Read() {
    yield takeLatest(FEEDBACK_ITEM_READ_REQUEST, feedback_Item_Read);
};

// Feedback 피드백 Delete
function feedback_Delete_API(feedback_id){
    return axios.delete(`/feedback/${feedback_id}`,{
        withCredentials:true
    });
};

function* feedback_Delete(action){
    try {
        const result = yield call(feedback_Delete_API, action.feedback_id);
        yield put({
            type:FEEDBACK_DELETE_SUCCESS,
            data:result.data,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:FEEDBACK_DELETE_FAILURE,
            error:e,
        });
    }
};

function* watchFeedback_Delete(){
    yield takeLatest( FEEDBACK_DELETE_REQUEST, feedback_Delete);
}; 

// Feedback 피드백 Update
function feedback_Update_API(data){
    
    return axios.put(`/feedback/update/${data.feedback_id}`,data,{
        withCredentials:true
    });
};

function* feedback_Update(action){
    try {
        const result = yield call(feedback_Update_API, action.data);
        yield put({
            type:FEEDBACK_UPDATE_SUCCESS,
            data:result.data,
        });
    } catch (e) {
        yield put({
            type:FEEDBACK_UPDATE_FAILURE,
            error:e,
        });
    }
};

function* watchFeedback_Update(){
    yield takeLatest( FEEDBACK_UPDATE_REQUEST, feedback_Update);
}; 

// Feedback 새 피드백 Add
function feedback_Add_API(data){
    return axios.post('/feedback/create',data,{
        withCredentials:true
    });
};

function* feedback_Add(action){
    try {
        const result = yield call(feedback_Add_API, action.data);
        yield put({
            type:FEEDBACK_ADD_SUCCESS,
            data:result.data,
        });
    } catch (e) {
        yield put({
            type:FEEDBACK_ADD_FAILURE,
            error:e,
        });
    }
};

function* watchFeedback_Add(){
    yield takeLatest( FEEDBACK_ADD_REQUEST, feedback_Add);
}; 


// Feedback 메인화면 Read
function feedback_Read_API(data){
    
    return axios.get(`/feedback/all/${data.lastId}`,{
        withCredentials:true
    });
};

function* feedback_Read(action){
    try {
        const result = yield call(feedback_Read_API, action.data);
        console.log("result",result.data);
        yield put({
            type:FEEDBACK_READ_SUCCESS,
            data:result.data,
        });
        yield put({
            type:LOG_IN_SUCCESS,
            data:result.data.data.user,
        });
    } catch (e) {
        yield put({
            type:FEEDBACK_READ_FAILURE,
            error:e,
        });
    }
};

function* watchFeedback_Read() {
    yield throttle(2000 , FEEDBACK_READ_REQUEST, feedback_Read);
};

// Feedback 튜토리얼
function feedback_Tutorial_API(data){
    // return axios.get('http://54.180.118.35/auth/me',{
    //     withCredentials:true
    // });
};


function* feedback_Tutorial(action){
    try {
        const result = yield call(feedback_Tutorial_API, action.data);
        yield put({
            type:FEEDBACK_TUTORIAL_SUCCESS,
            data:result.data
        }) 
    } catch (e) {
        yield put({
            type:FEEDBACK_TUTORIAL_FAILURE,
            error:e,
        });
    }
};

function* watchFeedback_Toturial() {
    yield takeLatest(FEEDBACK_TUTORIAL_REQUEST, feedback_Tutorial);
};

export default function* feedbackSaga(){
    yield all([
        fork(watchFeedback_Toturial),
        fork(watchFeedback_Read),
        fork(watchFeedback_Add),
        fork(watchFeedback_Update),
        fork(watchFeedback_Delete),
        fork(watchFeedback_Item_Read),
        fork(watchFeedback_Item_Add),
        fork(watchFeedback_Item_Complete),
        fork(watchFeedback_Item_Comment),
    ]);
}