import { combineReducers } from 'redux';
import friends from './friends';
import user from './user';
import feedback from './feedback';
import feedbackSubject from './feedbackSubject';
import feedbackMode from './feedbackMode';

const rootReducer = combineReducers({
    friends,
    user,
    feedback,
    feedbackSubject,
    feedbackMode,
});

export default rootReducer;