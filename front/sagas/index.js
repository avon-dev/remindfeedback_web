import {all, fork} from 'redux-saga/effects';
import user from './user';
import feedback from './feedback';
import friends from './friends';
import feedbackSubject from './feedbackSubject';

export default function* rootSaga(){
    yield all([
        fork(user),
        fork(feedback),
        fork(friends),
        fork(feedbackSubject),
    ]);
};
