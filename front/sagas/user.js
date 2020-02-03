import {all, delay, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {
    LOG_IN_REQUEST,
    LOG_IN_HASEMAIL,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_HASEMAIL,
    SIGN_UP_FAILURE,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    DELTE_USER_PHOTO_REQUEST,
    DELTE_USER_PHOTO_SUCCESS,
    DELTE_USER_PHOTO_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    UNREGISTER_REQUEST,
    UNREGISTER_SUCCESS,
    UNREGISTER_FAILURE,
} from '../reducers/user';

const dev = process.env.NODE_ENV !== "production";
const prod = process.env.NODE_ENV === "production";

if(prod){
    axios.defaults.baseURL = "http://api.remindfeedback.com/";
}else{
    axios.defaults.baseURL = "http://localhost:8000";
}


// 마이페이지 LOAD
function logUserAPI(){
    return axios.get('/mypage',{
        withCredentials:true
    });
};

function* loadUser(){
    try {
        const result = yield call(logUserAPI);
        console.log(result.data,'loadUser');
        yield put({
            type:LOAD_USER_SUCCESS,
            data:result.data,
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

// 마이페이지 사진 Delete -> 없음
function deletePhotoAPI(data){
        return axios.patch('/mypage/portrait',data,{
            withCredentials:true,
        });
};

function* deletePhoto(action){
    try {
        const result = yield call(deletePhotoAPI, action.data);
        console.log(result.data);
        yield put({
            type:DELTE_USER_PHOTO_SUCCESS,
            data:result.data,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:DELTE_USER_PHOTO_FAILURE,
            error:e,
        });
    }
};

function* watchDeletePhoto() {
    yield takeLatest(DELTE_USER_PHOTO_REQUEST, deletePhoto);
};

// 마이페이지 UPDATE
function updateUserAPI(data){
    if(data.order==="portrait"){
        return axios.patch('/mypage/portrait', data.formData,{
            withCredentials:true,
        });
    }else{
        return axios.put('/mypage',data,{
            withCredentials:true,
        });
    }
    
};

function* updateUser(action){
    try {
        const result = yield call(updateUserAPI, action.data);
        console.log(result.data);
        yield put({
            type:UPDATE_USER_SUCCESS,
            data:result.data,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:UPDATE_USER_FAILURE,
            error:e,
        });
    }
};

function* watchUpateUser() {
    yield takeLatest(UPDATE_USER_REQUEST, updateUser);
};


// 로그아웃
function logOutAPI(){
    return axios.get('/auth/logout',{
        withCredentials:true
    });
};

function* logOut(){
    try {
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
    yield takeLatest(LOG_OUT_REQUEST, logOut);
};


// 회원탈퇴
function unregisterAPI(){
    return axios.get('/auth/unregister',{
        withCredentials:true
    });
};

function* unregister(){
    try {
        yield call(unregisterAPI);
        yield put({
            type:UNREGISTER_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type:UNREGISTER_FAILURE,
            error:e,
        });
    }
};

function* watchUnregister() {
    yield takeLatest(UNREGISTER_REQUEST, unregister);
};


// 로그인
function loginAPI(data){
    return axios.post('/auth/login', data,{
        withCredentials:true
    });
};

function* login(action){
    try {
        const result = yield call(loginAPI,action.data);
        console.log(result.data,'login');
        !result.data.success
        ?
        yield put({
            type:LOG_IN_HASEMAIL,
            data:result.data
        })
        :
        yield put({
            type:LOG_IN_SUCCESS,
            data:result.data
        })     
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
function signUpAPI(data){
    return axios.post('/auth/register', data);                       
};


function* signUp(action){
    try {
        const result = yield call(signUpAPI, action.data);
        console.log(result);
        !result.data.success
        ?
        yield put({
            type:SIGN_UP_HASEMAIL,
            data:result.data,
        })
        :
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
        fork(watchUpateUser),
        fork(watchDeletePhoto),
        fork(watchUnregister),
    ]);
}