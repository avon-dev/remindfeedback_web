import { combineReducers } from 'redux';
import friends from './friends';
import user from './user';
import feedback from './getfeedback';
import feedbackSubject from './feedbackSubject';

const rootReducer = combineReducers({
    friends,
    user,
    feedback,
    feedbackSubject,
});

export default rootReducer;