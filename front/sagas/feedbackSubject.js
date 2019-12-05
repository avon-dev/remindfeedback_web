import {all, delay, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {
    FEEDBACK_SUB_READ_REQUEST,
    FEEDBACK_SUB_READ_SUCCESS,
    FEEDBACK_SUB_READ_FAILURE,
    FEEDBACK_SUB_ADD_REQUEST,
    FEEDBACK_SUB_ADD_SUCCESS,
    FEEDBACK_SUB_ADD_FAILURE,
    FEEDBACK_SUB_UPDATE_REQUEST,
    FEEDBACK_SUB_UPDATE_SUCCESS,
    FEEDBACK_SUB_UPDATE_FAILURE,
    FEEDBACK_SUB_DELETE_REQUEST,
    FEEDBACK_SUB_DELETE_SUCCESS,
    FEEDBACK_SUB_DELETE_FAILURE,
} from '../reducers/feedbackSubject';

const dev = process.env.NODE_ENV !== "production";
const prod = process.env.NODE_ENV === "production";

axios.defaults.baseURL = "http://localhost:8000"

if(prod){
    axios.defaults.baseURL = "http://54.180.118.35";
}else{
    axios.defaults.baseURL = "http://localhost:8000";
}

// 피드백 주제 Delete
function feedback_Sub_Delete_API(data){
    // return axios.delete('/#');
};

function* feedback_Sub_Delete(action){
    try {
        yield delay(2000);
        yield call(feedback_Sub_Delete_API, action.data);
        yield put({
            type:FEEDBACK_SUB_DELETE_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:FEEDBACK_SUB_DELETE_FAILURE,
            error:e,
        });
    }
};

function* watchFeedback_Sub_Delete() {
    yield takeLatest(FEEDBACK_SUB_DELETE_REQUEST, feedback_Sub_Delete);
};


// 피드백 주제 Update
function feedback_Sub_Update_API(data){
    // return axios.patch('/#');
};

function* feedback_Sub_Update(action){
    try {
        yield delay(2000);
        yield call(feedback_Sub_Update_API, action.data);
        yield put({
            type:FEEDBACK_SUB_UPDATE_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:FEEDBACK_SUB_UPDATE_FAILURE,
            error:e,
        });
    }
};

function* watchFeedback_Sub_Update() {
    yield takeLatest(FEEDBACK_SUB_UPDATE_REQUEST, feedback_Sub_Update);
};


// 피드백 주제 Add
function feedback_Sub_Add_API(data){
    return axios.post('/feedback/insert', data ,{
        withCredentials:true,
    });
};

function* feedback_Sub_Add(action){
    try {
        const result = yield call(feedback_Sub_Add_API, action.data);
        yield put({
            type:FEEDBACK_SUB_ADD_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:FEEDBACK_SUB_ADD_FAILURE,
            error:e,
        });
    }
};

function* watchFeedback_Sub_Add(){
    yield takeLatest( FEEDBACK_SUB_ADD_REQUEST, feedback_Sub_Add);
}; 


// 피드백 주제 메인 Read
function feedback_Sub_Read_API(){
    return axios.get('/category/selectall',{
        withCredentials:true,
    });
};

function* feedback_Sub_Read(){
    try {
        const result = yield call(feedback_Sub_Read_API);
        const r = result.data;
        console.log(r);
        yield put({
            type:FEEDBACK_SUB_READ_SUCCESS,
            data:result.data,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:FEEDBACK_SUB_READ_FAILURE,
            error:e,
        });
    }
};

function* watchFeedback_Sub_Read() {
    yield takeLatest(FEEDBACK_SUB_READ_REQUEST, feedback_Sub_Read);
};

export default function* feedbackSubjectSaga(){
    yield all([
        fork(watchFeedback_Sub_Read),
        fork(watchFeedback_Sub_Add),
        fork(watchFeedback_Sub_Update),
        fork(watchFeedback_Sub_Delete),
    ]);
}