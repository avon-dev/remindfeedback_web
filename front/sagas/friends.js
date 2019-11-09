import {all, delay, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {
    FRIENDS_MAIN_READ_REQUEST,
    FRIENDS_MAIN_READ_SUCCESS,
    FRIENDS_MAIN_READ_FAILURE,
    FRIENDS_BLOCK_REQUEST,
    FRIENDS_BLOCK_SUCCESS,
    FRIENDS_BLOCK_FAILURE,
    FRIENDS_ADD_READ_REQUEST,
    FRIENDS_ADD_READ_SUCCESS,
    FRIENDS_ADD_READ_FAILURE,
    FRIENDS_ADD_ADD_REQUEST,
    FRIENDS_ADD_ADD_SUCCESS,
    FRIENDS_ADD_ADD_FAILURE,
    FRIENDS_RQ_READ_REQUEST,
    FRIENDS_RQ_READ_SUCCESS,
    FRIENDS_RQ_READ_FAILURE,
    FRIENDS_RQ_ADD_REQUEST,
    FRIENDS_RQ_ADD_SUCCESS,
    FRIENDS_RQ_ADD_FAILURE,
    FRIENDS_PROFILE_READ_REQUEST,
    FRIENDS_PROFILE_READ_SUCCESS,
    FRIENDS_PROFILE_READ_FAILURE,
    FRIENDS_PROFILE_ADD_REQUEST,
    FRIENDS_PROFILE_ADD_SUCCESS,
    FRIENDS_PROFILE_ADD_FAILURE,
} from '../reducers/friends';

// 친구 프로필 Add
function* friends_Pro_Add_API(){
    // return axios.post('/#');
};

function* friends_Pro_Add(){
    try {
        yield delay(2000);
        yield call(friends_Pro_Add_API);
        yield put({
            type:FRIENDS_PROFILE_ADD_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:FRIENDS_PROFILE_ADD_FAILURE,
            error:e,
        });
    }
};

function* watchFriends_Pro_Add() {
    yield takeLatest(FRIENDS_PROFILE_ADD_REQUEST, friends_Pro_Add);
};


// 친구 프로필 Read
function* friends_Pro_Read_API(){
    // return axios.get('/#');
};

function* friends_Pro_Read(){
    try {
        yield delay(2000);
        yield call(friends_Pro_Read_API);
        yield put({
            type:FRIENDS_PROFILE_READ_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:FRIENDS_PROFILE_READ_FAILURE,
            error:e,
        });
    }
};

function* watchFriends_Pro_Read() {
    yield takeLatest(FRIENDS_PROFILE_READ_REQUEST, friends_Pro_Read);
};


// 친구 요청 모달 Add
function* friends_Req_Add_API(){
    // return axios.post('/#');
};

function* friends_Req_Add(){
    try {
        yield delay(2000);
        yield call(friends_Req_Add_API);
        yield put({
            type:FRIENDS_RQ_ADD_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:FRIENDS_RQ_ADD_FAILURE,
            error:e,
        });
    }
};

function* watchFriends_Req_Add() {
    yield takeLatest(FRIENDS_RQ_ADD_REQUEST, friends_Req_Add);
};


// 친구 요청 모달 Read
function* friends_Req_Read_API(){
    // return axios.get('/#');
};

function* friends_Req_Read(){
    try {
        yield delay(2000);
        yield call(friends_Req_Read_API);
        yield put({
            type:FRIENDS_RQ_READ_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:FRIENDS_RQ_READ_FAILURE,
            error:e,
        });
    }
};

function* watchFriends_Req_Read() {
    yield takeLatest(FRIENDS_RQ_READ_REQUEST, friends_Req_Read);
};


// 친구 추가 모달 Add
function* friends_Add_Add_API(){
    // return axios.post('/#');
};

function* friends_Add_Add(){
    try {
        yield delay(2000);
        yield call(friends_Add_Add_API);
        yield put({
            type:FRIENDS_ADD_ADD_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:FRIENDS_ADD_ADD_FAILURE,
            error:e,
        });
    }
};

function* watchFriends_Add_Add() {
    yield takeLatest(FRIENDS_ADD_ADD_REQUEST, friends_Add_Add);
};


// 친구 추가 모달 Read
function* friends_Add_Read_API(){
    // return axios.get('/#');
};

function* friends_Add_Read(){
    try {
        yield delay(2000);
        yield call(friends_Add_Read_API);
        yield put({
            type:FRIENDS_ADD_READ_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:FRIENDS_ADD_READ_FAILURE,
            error:e,
        });
    }
};

function* watchFriends_Add_Read() {
    yield takeLatest(FRIENDS_ADD_READ_REQUEST, friends_Add_Read);
};


// 친구 차단
function* friends_Block_API(){
    // return axios.get();
};

function* friends_Block(){
    try {
        yield delay(2000);
        yield call(friends_Block_API);
        yield put({
            type:FRIENDS_BLOCK_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:FRIENDS_BLOCK_FAILURE,
            error:e,
        });
    }
};

function* watchFriends_Block(){
    yield takeLatest( FRIENDS_BLOCK_REQUEST, friends_Block);
}; 


// 친구 메인창 Read
function* friends_Read_API(){
    // return axios.get('/#');
};


function* friends_Read(){
    try {
        yield delay(2000);
        yield call(friends_Read_API);
        yield put({
            type:FRIENDS_MAIN_READ_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:FRIENDS_MAIN_READ_FAILURE,
            error:e,
        });
    }
};

function* watchFriends_Read() {
    yield takeLatest(FRIENDS_MAIN_READ_REQUEST, friends_Read);
};

export default function* friendsSaga(){
    yield all([
        fork(watchFriends_Read),
        fork(watchFriends_Block),
        fork(watchFriends_Add_Read),
        fork(watchFriends_Add_Add),
        fork(watchFriends_Req_Read),
        fork(watchFriends_Req_Add),
        fork(watchFriends_Pro_Read),
        fork(watchFriends_Pro_Add),
    ]);
}