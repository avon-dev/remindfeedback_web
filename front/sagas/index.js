import { all, fork } from "redux-saga/effects";
import user from "./user";
import feedback from "./feedback";
import friends from "./friends";
import feedbackSubject from "./feedbackSubject";
import axios from "axios";
const dev = process.env.NODE_ENV !== "production";
const prod = process.env.NODE_ENV === "production";

if (prod) {
  axios.defaults.baseURL = "https://api.remindfeedback.com/";
} else if (dev) {
  axios.defaults.baseURL = "http://localhost:3000";
}
export default function* rootSaga() {
  yield all([fork(user), fork(feedback), fork(friends), fork(feedbackSubject)]);
}
