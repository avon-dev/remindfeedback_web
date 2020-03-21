import {
  all,
  delay,
  fork,
  put,
  takeLatest,
  call,
  throttle
} from "redux-saga/effects";
import axios from "axios";
import {
  GETFEEDBACK_CATEGORY_READ_REQUEST,
  GETFEEDBACK_CATEGORY_READ_SUCCESS,
  GETFEEDBACK_CATEGORY_READ_FAILURE,
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
  FEEDBACK_ITEM_UPDATE_REQUEST,
  FEEDBACK_ITEM_UPDATE_SUCCESS,
  FEEDBACK_ITEM_UPDATE_FAILURE,
  FEEDBACK_ITEM_COMPLETE_REQ_REQUEST,
  FEEDBACK_ITEM_COMPLETE_REQ_SUCCESS,
  FEEDBACK_ITEM_COMPLETE_REQ_FAILURE,
  FEEDBACK_ITEM_COMMENT_REQUEST,
  FEEDBACK_ITEM_COMMENT_SUCCESS,
  FEEDBACK_ITEM_COMMENT_FAILURE,
  FEEDBACK_ITEM_COMMENT_ADD_REQUEST,
  FEEDBACK_ITEM_COMMENT_ADD_SUCCESS,
  FEEDBACK_ITEM_COMMENT_ADD_FAILURE,
  FEEDBACK_ITEM_COMMENT_UPDATE_REQUEST,
  FEEDBACK_ITEM_COMMENT_UPDATE_SUCCESS,
  FEEDBACK_ITEM_COMMENT_UPDATE_FAILURE,
  FEEDBACK_ITEM_COMMENT_DELETE_REQUEST,
  FEEDBACK_ITEM_COMMENT_DELETE_SUCCESS,
  FEEDBACK_ITEM_COMMENT_DELETE_FAILURE
} from "../reducers/feedback";
import { FEEDBACK_SUB_READ_REQUEST } from "../reducers/feedbackSubject";

import { LOG_IN_SUCCESS } from "../reducers/user";

// const dev = process.env.NODE_ENV !== "production";
// const prod = process.env.NODE_ENV === "production";

// if (prod) {
//   axios.defaults.baseURL = "https://api.remindfeedback.com/";
// } else if (dev) {
//   axios.defaults.baseURL = "http://localhost:3000";
// }

// Feedback 피드백 게시물 댓글 Add
function feedback_Item_Add_Comment_API(data) {
  return axios.post("/comments/", data, {
    withCredentials: true
  });
}

function* feedback_Item_Add_Comment(action) {
  try {
    const result = yield call(feedback_Item_Add_Comment_API, action.data);
    console.log(result.data, "feedback_Item_Add_Comment");
    yield put({
      type: FEEDBACK_ITEM_COMMENT_ADD_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: FEEDBACK_ITEM_COMMENT_ADD_FAILURE,
      error: e
    });
  }
}

function* watchFeedback_Item_Add_Comment() {
  yield takeLatest(
    FEEDBACK_ITEM_COMMENT_ADD_REQUEST,
    feedback_Item_Add_Comment
  );
}

// Feedback 피드백 게시물 댓글 Update
function feedback_Item_Update_Comment_API(data) {
  return axios.put(`/comments/${data.comment_id}`, data, {
    withCredentials: true
  });
}

function* feedback_Item_Update_Comment(action) {
  try {
    const result = yield call(feedback_Item_Update_Comment_API, action.data);
    console.log(result.data, "feedback_Item_Update_Comment");
    yield put({
      type: FEEDBACK_ITEM_COMMENT_UPDATE_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: FEEDBACK_ITEM_COMMENT_UPDATE_FAILURE,
      error: e
    });
  }
}

function* watchFeedback_Item_Update_Comment() {
  yield takeLatest(
    FEEDBACK_ITEM_COMMENT_UPDATE_REQUEST,
    feedback_Item_Update_Comment
  );
}

// Feedback 피드백 게시물 댓글 Delete
function feedback_Item_Delete_Comment_API(data) {
  return axios.delete(`/comments/${data}`, {
    withCredentials: true
  });
}

function* feedback_Item_Delete_Comment(action) {
  try {
    const result = yield call(feedback_Item_Delete_Comment_API, action.data);
    console.log(result.data, "feedback_Item_Delete_Comment");
    yield put({
      type: FEEDBACK_ITEM_COMMENT_DELETE_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: FEEDBACK_ITEM_COMMENT_DELETE_FAILURE,
      error: e
    });
  }
}

function* watchFeedback_Item_Delete_Comment() {
  yield takeLatest(
    FEEDBACK_ITEM_COMMENT_DELETE_REQUEST,
    feedback_Item_Delete_Comment
  );
}

// Feedback 피드백 게시물 댓글 Read
function feedback_Item_Comment_API(data) {
  console.log(data, "feedback_Item_Comment_API");

  const board_id = parseInt(data.board_id);
  const sort = data.sort;
  return axios.get(
    `/comments/all/page/${board_id ? board_id : board_id}/${
      data.page ? data.page : 1
    }/${5}/${sort === 0 ? sort : 1}`,
    {
      withCredentials: true
    }
  );
}

function* feedback_Item_Comment(action) {
  try {
    const result = yield call(feedback_Item_Comment_API, action.data);

    console.log(result.data, "feedback_Item_Comment");
    yield put({
      type: FEEDBACK_ITEM_COMMENT_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: FEEDBACK_ITEM_COMMENT_FAILURE,
      error: e
    });
  }
}

function* watchFeedback_Item_Comment() {
  yield takeLatest(FEEDBACK_ITEM_COMMENT_REQUEST, feedback_Item_Comment);
}

// Feedback 피드백 게시물 완료 요청
function feedback_Item_Complete_API(data) {
  switch (data.type) {
    case "request":
      return axios.patch(`/feedbacks/request/${data.feedback_id}`, data, {
        withCredentials: true
      });
    case "accept":
      return axios.patch(`/feedbacks/approval/${data.feedback_id}`, data, {
        withCredentials: true
      });
    case "reject":
      return axios.patch(`/feedbacks/rejection/${data.feedback_id}`, data, {
        withCredentials: true
      });
    default:
      break;
  }
}

function* feedback_Item_Complete(action) {
  try {
    const result = yield call(feedback_Item_Complete_API, action.data);
    console.log(result.data, "feedback_Item_Complete");
    yield put({
      type: FEEDBACK_ITEM_COMPLETE_REQ_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: FEEDBACK_ITEM_COMPLETE_REQ_FAILURE,
      error: e
    });
  }
}

function* watchFeedback_Item_Complete() {
  yield takeLatest(FEEDBACK_ITEM_COMPLETE_REQ_REQUEST, feedback_Item_Complete);
}

// Feedback 피드백 게시물 Update
function feedback_Item_Update_API(data) {
  console.log(data);
  switch (data.name) {
    case "TEXT_UPDATE":
      return axios.put(`/board/cards/text/${data.feedBackItemId}`, data, {
        withCredentials: true
      });
    case "PHOTO_UPDATE":
      return axios.put(
        `/board/cards/picture/${data.feedBackItemId}`,
        data.formData,
        { withCredentials: true }
      );
    case "VIDEO_UPDATE":
      return axios.put("/#");
    case "RECORD_UPDATE":
      return axios.put("/#");
    default:
      return console.error("에러발생");
  }
}

function* feedback_Item_Update(action) {
  try {
    const result = yield call(feedback_Item_Update_API, action.data);
    console.log(result.data, "feedback_Item_Update");
    yield put({
      type: FEEDBACK_ITEM_UPDATE_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: FEEDBACK_ITEM_UPDATE_FAILURE,
      error: e
    });
  }
}

function* watchFeedback_Item_Update() {
  yield takeLatest(FEEDBACK_ITEM_UPDATE_REQUEST, feedback_Item_Update);
}

// Feedback 피드백 게시물 Add
function feedback_Item_Add_API(data) {
  switch (data.name) {
    case "TEXT":
      return axios.post("/board/cards/text", data, { withCredentials: true });
    case "PHOTO":
      return axios.post("/board/cards/picture", data.formData, {
        withCredentials: true
      });
    case "VIDEO":
      return axios.post("/#");
    case "RECORD":
      return axios.post("/#");
    default:
      return console.error("에러발생");
  }
}

function* feedback_Item_Add(action) {
  try {
    const result = yield call(feedback_Item_Add_API, action.data);
    console.log(result.data, "feedback_Item_Add");
    yield put({
      type: FEEDBACK_ITEM_ADD_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: FEEDBACK_ITEM_ADD_FAILURE,
      error: e
    });
  }
}

function* watchFeedback_Item_Add() {
  yield takeLatest(FEEDBACK_ITEM_ADD_REQUEST, feedback_Item_Add);
}

// Feedback 피드백 게시물 Read
function feedback_Item_Read_API(data) {
  return axios.get(`/board/cards/${parseInt(data.feedbackid)}/${data.lastid}`, {
    withCredentials: true
  });
}

function* feedback_Item_Read(action) {
  try {
    const result = yield call(feedback_Item_Read_API, action.data);
    console.log(result, "feedback_Item_Read");
    yield put({
      type: FEEDBACK_ITEM_READ_SUCCESS,
      data: result.data
    });

    console.log(action.data.lastid, "hahaha");
    if (yield action.data.lastid === 0 && result.data.data.length >= 1) {
      console.log("드러옴", result.data.data[0].id, action.data.sort);
      // const action = {data:{board_id:result.data.data[0].id, sort:action.data.sort}};
      // feedback_Item_Comment(action)
      console.log(action, "action");
      yield put({
        type: FEEDBACK_ITEM_COMMENT_REQUEST,
        data: { board_id: result.data.data[0].id, sort: action.data.sort }
      });
    }
  } catch (e) {
    console.error(e);
    yield put({
      type: FEEDBACK_ITEM_READ_FAILURE,
      error: e
    });
  }
}

function* watchFeedback_Item_Read() {
  yield takeLatest(FEEDBACK_ITEM_READ_REQUEST, feedback_Item_Read);
}

// Feedback 피드백 Delete
function feedback_Delete_API(feedback_id) {
  return axios.delete(`/feedbacks/${feedback_id}`, {
    withCredentials: true
  });
}

function* feedback_Delete(action) {
  try {
    const result = yield call(feedback_Delete_API, action.feedback_id);
    console.log(result.data, "feedback_Delete");
    yield put({
      type: FEEDBACK_DELETE_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: FEEDBACK_DELETE_FAILURE,
      error: e
    });
  }
}

function* watchFeedback_Delete() {
  yield takeLatest(FEEDBACK_DELETE_REQUEST, feedback_Delete);
}

// Feedback 피드백 Update
function feedback_Update_API(data) {
  return axios.put(`/feedbacks/${data.feedback_id}`, data, {
    withCredentials: true
  });
}

function* feedback_Update(action) {
  try {
    const result = yield call(feedback_Update_API, action.data);
    yield put({
      type: FEEDBACK_UPDATE_SUCCESS,
      data: result.data
    });
  } catch (e) {
    yield put({
      type: FEEDBACK_UPDATE_FAILURE,
      error: e
    });
  }
}

function* watchFeedback_Update() {
  yield takeLatest(FEEDBACK_UPDATE_REQUEST, feedback_Update);
}

// Feedback 새 피드백 Add
function feedback_Add_API(data) {
  return axios.post("/feedbacks", data, {
    withCredentials: true
  });
}

function* feedback_Add(action) {
  try {
    const result = yield call(feedback_Add_API, action.data);
    console.log(result.data, "feedback_Add");
    yield put({
      type: FEEDBACK_ADD_SUCCESS,
      data: result.data
    });
  } catch (e) {
    yield put({
      type: FEEDBACK_ADD_FAILURE,
      error: e
    });
  }
}

function* watchFeedback_Add() {
  yield takeLatest(FEEDBACK_ADD_REQUEST, feedback_Add);
}

// Feedback 메인화면 Read

function feedback_Read_API(data) {
  axios.interceptors.request.use(config => {
    console.log(config, "config");
    return config;
  });

  return axios.get(`/feedbacks/${data.lastId}`, {
    withCredentials: true
  });
}

function* feedback_Read(action) {
  try {
    const result = yield call(feedback_Read_API, action.data);
    console.log(result.data, "feedback_Read");
    yield put({
      type: FEEDBACK_READ_SUCCESS,
      data: result.data
    });
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data.data.user
    });
  } catch (e) {
    yield put({
      type: FEEDBACK_READ_FAILURE,
      error: e
    });
  }
}

function* watchFeedback_Read() {
  yield throttle(2000, FEEDBACK_READ_REQUEST, feedback_Read);
}

// GetFeedback 카테고리 목록
function getfeedback_Category_API(data) {
  return axios.get(`/feedbacks/your/${data}`, {
    withCredentials: true
  });
}

function* getfeedback_Category(action) {
  try {
    const result = yield call(getfeedback_Category_API, action.data);
    console.log(result, "getfeedback_Category");
    yield put({
      type: GETFEEDBACK_CATEGORY_READ_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: GETFEEDBACK_CATEGORY_READ_FAILURE,
      error: e
    });
  }
}

function* watchGetFeedback_Category() {
  yield takeLatest(GETFEEDBACK_CATEGORY_READ_REQUEST, getfeedback_Category);
}

export default function* feedbackSaga() {
  yield all([
    fork(watchFeedback_Read),
    fork(watchFeedback_Add),
    fork(watchFeedback_Update),
    fork(watchFeedback_Delete),
    fork(watchFeedback_Item_Read),
    fork(watchFeedback_Item_Add),
    fork(watchFeedback_Item_Update),
    fork(watchFeedback_Item_Complete),
    fork(watchFeedback_Item_Comment),
    fork(watchFeedback_Item_Add_Comment),
    fork(watchFeedback_Item_Update_Comment),
    fork(watchFeedback_Item_Delete_Comment),
    fork(watchGetFeedback_Category)
  ]);
}
