export const initialState = {
  feedbackMode: false
};

export const FEEDBACK_MODE = "FEEDBACK_MODE"; // GET피드백 -> SET 피드백

export default (state = initialState, action) => {
  switch (action.type) {
    case FEEDBACK_MODE: {
      return {
        feedbackMode: action.data
      };
    }
    default:
      return state;
  }
};
