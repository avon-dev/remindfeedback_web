export const initialState = {
    
}

export const SET_FEEDBACK_READ_REQUEST = 'SET_FEEDBACK_READ_REQUEST'; // SET피드백 READ 시도 중
export const SET_FEEDBACK_READ_SUCCESS = 'SET_FEEDBACK_READ_SUCCESS'; // SET피드백 READ 성공
export const SET_FEEDBACK_READ_FAILURE = 'SET_FEEDBACK_READ_FAILURE'; // SET피드백 READ 실패

export const SET_FEEDBACK_ADD_REQUEST = 'SET_FEEDBACK_ADD_REQUEST'; // SET피드백 ADD 시도 중
export const SET_FEEDBACK_ADD_SUCCESS = 'SET_FEEDBACK_ADD_SUCCESS'; // SET피드백 ADD 성공
export const SET_FEEDBACK_ADD_FAILURE = 'SET_FEEDBACK_ADD_FAILURE'; // SET피드백 ADD 실패

export const SET_FEEDBACK_ITEM_READ_REQUEST = 'SET_FEEDBACK_ITEM_READ_REQUEST'; // SET피드백 게시물 READ 시도 중
export const SET_FEEDBACK_ITEM_READ_SUCCESS = 'SET_FEEDBACK_ITEM_READ_SUCCESS'; // SET피드백 게시물 READ 성공
export const SET_FEEDBACK_ITEM_READ_FAILURE = 'SET_FEEDBACK_ITEM_READ_FAILURE'; // SET피드백 게시물 READ 실패

export const SET_FEEDBACK_ITEM_ADD_REQUEST = 'SET_FEEDBACK_ITEM_ADD_REQUEST'; // SET피드백 게시물 ADD 시도 중
export const SET_FEEDBACK_ITEM_ADD_SUCCESS = 'SET_FEEDBACK_ITEM_ADD_SUCCESS'; // SET피드백 게시물 ADD 성공
export const SET_FEEDBACK_ITEM_ADD_FAILURE = 'SET_FEEDBACK_ITEM_ADD_FAILURE'; // SET피드백 게시물 ADD 실패

export const SET_FEEDBACK_DETAIL_ITEM_READ_REQUEST = 'SET_FEEDBACK_DETAIL_ITEM_READ_REQUEST'; // SET피드백 게시물 세부 READ 시도 중
export const SET_FEEDBACK_DETAIL_ITEM_READ_SUCCESS = 'SET_FEEDBACK_DETAIL_ITEM_READ_SUCCESS'; // SET피드백 게시물 세부 READ 성공
export const SET_FEEDBACK_DETAIL_ITEM_READ_FAILURE = 'SET_FEEDBACK_DETAIL_ITEM_READ_FAILURE'; // SET피드백 게시물 세부 READ 실패

export const SET_FEEDBACK_ITEM_COMMENT_REQUEST = 'SET_FEEDBACK_ITEM_COMMENT_REQUEST'; // SET피드백 게시물 댓글 ADD 시도 중
export const SET_FEEDBACK_ITEM_COMMENT_SUCCESS = 'SET_FEEDBACK_ITEM_COMMENT_SUCCESS'; // SET피드백 게시물 댓글 ADD 성공
export const SET_FEEDBACK_ITEM_COMMENT_FAILURE = 'SET_FEEDBACK_ITEM_COMMENT_FAILURE'; // SET피드백 게시물 댓글 ADD 실패

export default (state = initialState, action) => {
    switch(action.type){
        
        // SET피드백 READ
        case SET_FEEDBACK_READ_REQUEST:
            return{

            };
        case SET_FEEDBACK_READ_SUCCESS:
            return{
                
            };
        case SET_FEEDBACK_READ_FAILURE:
            return{
                
            };

        // SET피드백 ADD
        case SET_FEEDBACK_ADD_REQUEST:
            return{

            };
        case SET_FEEDBACK_ADD_SUCCESS:
            return{
                
            };
        case SET_FEEDBACK_ADD_FAILURE:
            return{
                
            };

         // SET피드백 게시물 READ 
        case SET_FEEDBACK_ITEM_READ_REQUEST:
            return{

            };
        case SET_FEEDBACK_ITEM_READ_SUCCESS:
            return{
                
            };
        case SET_FEEDBACK_ITEM_READ_FAILURE:
            return{
                
            };

        // SET피드백 게시물 ADD 
        case SET_FEEDBACK_ITEM_ADD_REQUEST:
            return{

            };
        case SET_FEEDBACK_ITEM_ADD_SUCCESS:
            return{
                
            };
        case SET_FEEDBACK_ITEM_ADD_FAILURE:
            return{
                
            };

        // SET피드백 게시물 세부 READ 
        case SET_FEEDBACK_DETAIL_ITEM_READ_REQUEST:
            return{

            };
        case SET_FEEDBACK_DETAIL_ITEM_READ_SUCCESS:
            return{
                
            };
        case SET_FEEDBACK_DETAIL_ITEM_READ_FAILURE:
            return{
                
            };

        // SET피드백 게시물 댓글 ADD 
        case SET_FEEDBACK_ITEM_COMMENT_REQUEST:
            return{

            };
        case SET_FEEDBACK_ITEM_COMMENT_SUCCESS:
            return{
                
            };
        case SET_FEEDBACK_ITEM_COMMENT_FAILURE:
            return{
                
            };
        
        default:
            return state;
    }
}