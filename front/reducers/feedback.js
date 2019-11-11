export const initialState = {
    
}

export const FEEDBACK_READ_REQUEST = 'FEEDBACK_READ_REQUEST'; // 피드백 READ 시도 중
export const FEEDBACK_READ_SUCCESS = 'FEEDBACK_READ_SUCCESS'; // 피드백 READ 성공
export const FEEDBACK_READ_FAILURE = 'FEEDBACK_READ_FAILURE'; // 피드백 READ 실패

export const FEEDBACK_ADD_REQUEST = 'FEEDBACK_ADD_REQUEST'; // 피드백 ADD 시도 중
export const FEEDBACK_ADD_SUCCESS = 'FEEDBACK_ADD_SUCCESS'; // 피드백 ADD 성공
export const FEEDBACK_ADD_FAILURE = 'FEEDBACK_ADD_FAILURE'; // 피드백 ADD 실패

export const FEEDBACK_ITEM_READ_REQUEST = 'FEEDBACK_ITEM_READ_REQUEST'; // 피드백 게시물 READ 시도 중
export const FEEDBACK_ITEM_READ_SUCCESS = 'FEEDBACK_ITEM_READ_SUCCESS'; // 피드백 게시물 READ 성공
export const FEEDBACK_ITEM_READ_FAILURE = 'FEEDBACK_ITEM_READ_FAILURE'; // 피드백 게시물 READ 실패

export const FEEDBACK_ITEM_ADD_REQUEST = 'FEEDBACK_ITEM_ADD_REQUEST'; // 피드백 게시물 ADD 시도 중
export const FEEDBACK_ITEM_ADD_SUCCESS = 'FEEDBACK_ITEM_ADD_SUCCESS'; // 피드백 게시물 ADD 성공
export const FEEDBACK_ITEM_ADD_FAILURE = 'FEEDBACK_ITEM_ADD_FAILURE'; // 피드백 게시물 ADD 실패

export const FEEDBACK_ITEM_COMPLETE_REQUEST = 'FEEDBACK_ITEM_COMPLETE_REQUEST'; // 피드백 게시물 완료 시도 중
export const FEEDBACK_ITEM_COMPLETE_SUCCESS = 'FEEDBACK_ITEM_COMPLETE_SUCCESS'; // 피드백 게시물 완료 성공
export const FEEDBACK_ITEM_COMPLETE_FAILURE = 'FEEDBACK_ITEM_COMPLETE_FAILURE'; // 피드백 게시물 완료 실패

export const FEEDBACK_ITEM_COMMENT_REQUEST = 'FEEDBACK_ITEM_COMMENT_REQUEST'; // 피드백 게시물 댓글 ADD 시도 중
export const FEEDBACK_ITEM_COMMENT_SUCCESS = 'FEEDBACK_ITEM_COMMENT_SUCCESS'; // 피드백 게시물 댓글 ADD 성공
export const FEEDBACK_ITEM_COMMENT_FAILURE = 'FEEDBACK_ITEM_COMMENT_FAILURE'; // 피드백 게시물 댓글 ADD 실패

export default (state = initialState, action) => {
    switch(action.type){
        
        // 피드백 READ
        case FEEDBACK_READ_REQUEST:
            return{

            };
        case FEEDBACK_READ_SUCCESS:
            return{
                
            };
        case FEEDBACK_READ_FAILURE:
            return{
                
            };

        // 피드백 ADD
        case FEEDBACK_ADD_REQUEST:
            return{

            };
        case FEEDBACK_ADD_SUCCESS:
            return{
                
            };
        case FEEDBACK_ADD_FAILURE:
            return{
                
            };

         // 피드백 게시물 READ 
        case FEEDBACK_ITEM_READ_REQUEST:
            return{

            };
        case FEEDBACK_ITEM_READ_SUCCESS:
            return{
                
            };
        case FEEDBACK_ITEM_READ_FAILURE:
            return{
                
            };

        // 피드백 게시물 ADD 
        case FEEDBACK_ITEM_ADD_REQUEST:
            return{

            };
        case FEEDBACK_ITEM_ADD_SUCCESS:
            return{
                
            };
        case FEEDBACK_ITEM_ADD_FAILURE:
            return{
                
            };

        // 피드백 게시물 완료 
        case FEEDBACK_ITEM_COMPLETE_REQUEST:
            return{

            };
        case FEEDBACK_ITEM_COMPLETE_SUCCESS:
            return{
                
            };
        case FEEDBACK_ITEM_COMPLETE_FAILURE:
            return{
                
            };

        // 피드백 게시물 댓글 ADD 
        case FEEDBACK_ITEM_COMMENT_REQUEST:
            return{

            };
        case FEEDBACK_ITEM_COMMENT_SUCCESS:
            return{
                
            };
        case FEEDBACK_ITEM_COMMENT_FAILURE:
            return{
                
            };
        
        default:
            return state;
    }
}
