import {all, delay, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
} from '../reducers/user';

axios.defaults.baseURL = 'http://localhost:8000/auth';

// 마이페이지
function* logUserAPI(){
    // return axios.get('/#');
};

function* loadUser(){
    try {
        yield delay(2000);
        yield call(logUserAPI);
        yield put({
            type:LOAD_USER_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:LOAD_USER_FAILURE,
            error:e,
        });
    }
};

function* watchLoadUser() {
    yield takeLatest(LOAD_USER_REQUEST, loadUser);
};


// 로그아웃
function* logOutAPI(){
    // return axios.get('/#');
};

function* logoOut(){
    try {
        yield delay(2000);
        yield call(logOutAPI);
        yield put({
            type:LOG_OUT_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:LOG_OUT_FAILURE,
            error:e,
        });
    }
};

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logoOut);
};


// 로그인
function* loginAPI(loginData){
    // return axios.get();
};

function* login(action){
    try {
        yield delay(2000);
        yield call(loginAPI,action.data);
        yield put({
            type:LOG_IN_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:LOG_IN_FAILURE,
            error:e,
        });
    }
};

function* watchLogin(){
    yield takeLatest( LOG_IN_REQUEST, login);
}; 


// 회원가입
function* signUpAPI(data){
    // return axios.post('/signup', data);
};


function* signUp(action){
    try {
        yield delay(2000);
        const result = yield call(signUpAPI,action.data);
        yield put({
            type:SIGN_UP_SUCCESS,
            data:result.data,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:SIGN_UP_FAILURE,
            error:e,
        });
    }
};

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
};

export default function* userSaga(){
    yield all([
        fork(watchLogin),
        fork(watchSignUp),
        fork(watchLogOut),
        fork(watchLoadUser),
    ]);
}