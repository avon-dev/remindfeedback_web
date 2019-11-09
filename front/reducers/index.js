import { combineReducers } from 'redux';
import friends from './friends';
import user from './user';
import getfeedback from './getfeedback';
import setfeedback from './setfeedback';
import feedbackSubject from './feedbackSubject';
import feedbackMode from './feedbackMode';

const rootReducer = combineReducers({
    friends,
    user,
    getfeedback,
    setfeedback,
    feedbackSubject,
    feedbackMode,
});

export default rootReducer;