import { all, delay, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";

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
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILURE,
  CHECK_EMAIL_REQUEST,
  CHECK_EMAIL_SUCCESS,
  CHECK_EMAIL_FAILURE,
  FEEDBACK_TUTORIAL_REQUEST,
  FEEDBACK_TUTORIAL_SUCCESS,
  FEEDBACK_TUTORIAL_FAILURE,
} from "../reducers/user";

// const dev = process.env.NODE_ENV !== "production";
// const prod = process.env.NODE_ENV === "production";

// if (prod) {
//   axios.defaults.baseURL = "https://api.remindfeedback.com/";
// } else if (dev) {
//   axios.defaults.baseURL = "http://localhost:3000";
// }

// Feedback 튜토리얼
function feedback_Tutorial_API(data) {
  return axios.patch('/auth/tutorial',data,{
      withCredentials:true
  });
}

function* feedback_Tutorial(action) {
  try {
    const result = yield call(feedback_Tutorial_API, action.data);
    if(result.data.success){
      console.log(result.data,"feedback_Tutorial")
      yield put({
        type: FEEDBACK_TUTORIAL_SUCCESS,
        data: result.data
      });
    }else{
      console.error(error,'feedback_Tutorial');
    }
   
  } catch (e) {
    yield put({
      type: FEEDBACK_TUTORIAL_FAILURE,
      error: e
    });
  }
}

function* watchFeedback_Toturial() {
  yield takeLatest(FEEDBACK_TUTORIAL_REQUEST, feedback_Tutorial);
}

// 마이페이지 LOAD
function logUserAPI() {
  return axios.get("/mypage", {
    withCredentials: true
  });
}

function* loadUser() {
  try {
    const result = yield call(logUserAPI);
    console.log(result.data, "loadUser");
    yield put({
      type: LOAD_USER_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_USER_FAILURE,
      error: e
    });
  }
}

function* watchLoadUser() {
  yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

// 마이페이지 사진 Delete -> 없음
function deletePhotoAPI(data) {
  return axios.patch("/mypage/portrait", data, {
    withCredentials: true
  });
}

function* deletePhoto(action) {
  try {
    const result = yield call(deletePhotoAPI, action.data);
    console.log(result.data);
    yield put({
      type: DELTE_USER_PHOTO_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: DELTE_USER_PHOTO_FAILURE,
      error: e
    });
  }
}

function* watchDeletePhoto() {
  yield takeLatest(DELTE_USER_PHOTO_REQUEST, deletePhoto);
}

// 마이페이지 UPDATE
function updateUserAPI(data) {
  if (data.order === "portrait") {
    return axios.patch("/mypage/portrait", data.formData, {
      withCredentials: true
    });
  } else {
    return axios.put("/mypage", data, {
      withCredentials: true
    });
  }
}

function* updateUser(action) {
  try {
    const result = yield call(updateUserAPI, action.data);
    console.log(result.data);
    yield put({
      type: UPDATE_USER_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: UPDATE_USER_FAILURE,
      error: e
    });
  }
}

function* watchUpateUser() {
  yield takeLatest(UPDATE_USER_REQUEST, updateUser);
}

// 로그아웃
function logOutAPI() {
  return axios.get("/auth/logout", {
    withCredentials: true
  });
}

function* logOut() {
  try {
    const result = yield call(logOutAPI);
    console.log(result.data);
    yield put({
      type: LOG_OUT_SUCCESS
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_OUT_FAILURE,
      error: e
    });
  }
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

// 비밀번호 변경
function updatePasswordAPI(data) {
  console.log(data);
  if (data.current === 1) {
    return axios.post("/auth/password", data, {
      withCredentials: true
    });
  } else if (data.current === 2) {
    return axios.patch("/auth/password", data, {
      withCredentials: true
    });
  } else {
    console.error("ERROR");
  }
}

function* updatePassword(action) {
  try {
    const result = yield call(updatePasswordAPI, action.data);
    console.log(result, "updatePassword");
    yield put({
      type: UPDATE_PASSWORD_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: UPDATE_PASSWORD_FAILURE,
      error: e
    });
  }
}

function* watchUpdatePassword() {
  yield takeLatest(UPDATE_PASSWORD_REQUEST, updatePassword);
}

// 이메일 인증
function checkEmailAPI(data) {
  return axios.post("/auth/email", data, {
    withCredentials: true
  });
}

function* checkEmail(action) {
  try {
    const result = yield call(checkEmailAPI, action.data);
    console.log(result.data, "checkEmail");
    yield put({
      type: CHECK_EMAIL_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: CHECK_EMAIL_FAILURE,
      error: e
    });
  }
}

function* watchCheckEmail() {
  yield takeLatest(CHECK_EMAIL_REQUEST, checkEmail);
}

// 회원탈퇴
function unregisterAPI() {
  return axios.get("/auth/unregister", {
    withCredentials: true
  });
}

function* unregister() {
  try {
    yield call(unregisterAPI);
    yield put({
      type: UNREGISTER_SUCCESS
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: UNREGISTER_FAILURE,
      error: e
    });
  }
}

function* watchUnregister() {
  yield takeLatest(UNREGISTER_REQUEST, unregister);
}

// 로그인
function loginAPI(data) {
  return axios.post("/auth/login", data, {
    withCredentials: true
  });
}

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);
    console.log(result.data, "login");
    !result.data.success
      ? yield put({
          type: LOG_IN_HASEMAIL,
          data: result.data
        })
      : yield put({
          type: LOG_IN_SUCCESS,
          data: result.data
        });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
      error: e
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

// 회원가입
function signUpAPI(data) {
  return axios.post("/auth/register", data);
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    console.log(result);
    !result.data.success
      ? yield put({
          type: SIGN_UP_HASEMAIL,
          data: result.data
        })
      : yield put({
          type: SIGN_UP_SUCCESS,
          data: result.data
        });
  } catch (e) {
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e
    });
  }
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchFeedback_Toturial),
    fork(watchLogin),
    fork(watchSignUp),
    fork(watchLogOut),
    fork(watchLoadUser),
    fork(watchUpateUser),
    fork(watchDeletePhoto),
    fork(watchUnregister),
    fork(watchUpdatePassword),
    fork(watchCheckEmail)
  ]);
}
