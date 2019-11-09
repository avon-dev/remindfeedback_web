import {all, delay, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {
    FEEDBACK_READ_REQUEST,
    FEEDBACK_READ_SUCCESS,
    FEEDBACK_READ_FAILURE,
    FEEDBACK_ADD_REQUEST,
    FEEDBACK_ADD_SUCCESS,
    FEEDBACK_ADD_FAILURE,
    FEEDBACK_ITEM_READ_REQUEST,
    FEEDBACK_ITEM_READ_SUCCESS,
    FEEDBACK_ITEM_READ_FAILURE,
    FEEDBACK_ITEM_ADD_REQUEST,
    FEEDBACK_ITEM_ADD_SUCCESS,
    FEEDBACK_ITEM_ADD_FAILURE,
    FEEDBACK_DETAIL_ITEM_READ_REQUEST,
    FEEDBACK_DETAIL_ITEM_READ_SUCCESS,
    FEEDBACK_DETAIL_ITEM_READ_FAILURE,
    FEEDBACK_ITEM_COMMENT_REQUEST,
    FEEDBACK_ITEM_COMMENT_SUCCESS,
    FEEDBACK_ITEM_COMMENT_FAILURE,
} from '../reducers/getfeedback';


// Feedback 피드백 게시물 댓글 Read
function* feedback_Item_Comment_API(){
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
function* feedback_Item_Detail_API(){
    // return axios.get('/#');
};

function* feedback_Item_Detail(){
    try {
        yield delay(2000);
        yield call(feedback_Item_Detail_API);
        yield put({
            type:FEEDBACK_DETAIL_ITEM_READ_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:FEEDBACK_DETAIL_ITEM_READ_FAILURE,
            error:e,
        });
    }
};

function* watchFeedback_Item_Detail() {
    yield takeLatest(FEEDBACK_DETAIL_ITEM_READ_REQUEST, feedback_Item_Detail);
};


// Feedback 피드백 게시물 Add
function* feedback_Item_Add_API(){
    // return axios.post('/#');
};

function* feedback_Item_Add(){
    try {
        yield delay(2000);
        yield call(feedback_Item_Add_API);
        yield put({
            type:FEEDBACK_ITEM_ADD_SUCCESS,
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
function* feedback_Item_Read_API(){
    // return axios.get('/#');
};

function* feedback_Item_Read(){
    try {
        yield delay(2000);
        yield call(feedback_Item_Read_API);
        yield put({
            type:FEEDBACK_ITEM_READ_SUCCESS,
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


// Feedback 새 피드백 Add
function* feedback_Add_API(){
    // return axios.post();
};

function* feedback_Add(){
    try {
        yield delay(2000);
        yield call(feedback_Add_API);
        yield put({
            type:FEEDBACK_ADD_SUCCESS,
        });
    } catch (e) {
        console.error(e);
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
function* feedback_Read_API(){
    // return axios.get('/#');
};


function* feedback_Read(){
    try {
        yield delay(2000);
        yield call(feedback_Read_API);
        yield put({
            type:FEEDBACK_READ_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:FEEDBACK_READ_FAILURE,
            error:e,
        });
    }
};

function* watchFeedback_Read() {
    yield takeLatest(FEEDBACK_READ_REQUEST, feedback_Read);
};

export default function* feedbackSaga(){
    yield all([
        fork(watchFeedback_Read),
        fork(watchFeedback_Add),
        fork(watchFeedback_Item_Read),
        fork(watchFeedback_Item_Add),
        fork(watchFeedback_Item_Detail),
        fork(watchFeedback_Item_Comment),
    ]);
}