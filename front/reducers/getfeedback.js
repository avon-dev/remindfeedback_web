export const initialState = {
    
}

export const GET_FEEDBACK_READ_REQUEST = 'GET_FEEDBACK_READ_REQUEST'; // GET피드백 READ 시도 중
export const GET_FEEDBACK_READ_SUCCESS = 'GET_FEEDBACK_READ_SUCCESS'; // GET피드백 READ 성공
export const GET_FEEDBACK_READ_FAILURE = 'GET_FEEDBACK_READ_FAILURE'; // GET피드백 READ 실패

export const GET_FEEDBACK_ADD_REQUEST = 'GET_FEEDBACK_ADD_REQUEST'; // GET피드백 ADD 시도 중
export const GET_FEEDBACK_ADD_SUCCESS = 'GET_FEEDBACK_ADD_SUCCESS'; // GET피드백 ADD 성공
export const GET_FEEDBACK_ADD_FAILURE = 'GET_FEEDBACK_ADD_FAILURE'; // GET피드백 ADD 실패

export const GET_FEEDBACK_ITEM_READ_REQUEST = 'GET_FEEDBACK_ITEM_READ_REQUEST'; // GET피드백 게시물 READ 시도 중
export const GET_FEEDBACK_ITEM_READ_SUCCESS = 'GET_FEEDBACK_ITEM_READ_SUCCESS'; // GET피드백 게시물 READ 성공
export const GET_FEEDBACK_ITEM_READ_FAILURE = 'GET_FEEDBACK_ITEM_READ_FAILURE'; // GET피드백 게시물 READ 실패

export const GET_FEEDBACK_ITEM_ADD_REQUEST = 'GET_FEEDBACK_ITEM_ADD_REQUEST'; // GET피드백 게시물 ADD 시도 중
export const GET_FEEDBACK_ITEM_ADD_SUCCESS = 'GET_FEEDBACK_ITEM_ADD_SUCCESS'; // GET피드백 게시물 ADD 성공
export const GET_FEEDBACK_ITEM_ADD_FAILURE = 'GET_FEEDBACK_ITEM_ADD_FAILURE'; // GET피드백 게시물 ADD 실패

export const GET_FEEDBACK_DETAIL_ITEM_READ_REQUEST = 'GET_FEEDBACK_DETAIL_ITEM_READ_REQUEST'; // GET피드백 게시물 세부 READ 시도 중
export const GET_FEEDBACK_DETAIL_ITEM_READ_SUCCESS = 'GET_FEEDBACK_DETAIL_ITEM_READ_SUCCESS'; // GET피드백 게시물 세부 READ 성공
export const GET_FEEDBACK_DETAIL_ITEM_READ_FAILURE = 'GET_FEEDBACK_DETAIL_ITEM_READ_FAILURE'; // GET피드백 게시물 세부 READ 실패

export const GET_FEEDBACK_ITEM_COMMENT_REQUEST = 'GET_FEEDBACK_ITEM_COMMENT_REQUEST'; // GET피드백 게시물 댓글 ADD 시도 중
export const GET_FEEDBACK_ITEM_COMMENT_SUCCESS = 'GET_FEEDBACK_ITEM_COMMENT_SUCCESS'; // GET피드백 게시물 댓글 ADD 성공
export const GET_FEEDBACK_ITEM_COMMENT_FAILURE = 'GET_FEEDBACK_ITEM_COMMENT_FAILURE'; // GET피드백 게시물 댓글 ADD 실패

export default (state = initialState, action) => {
    switch(action.type){
        
        // GET피드백 READ
        case GET_FEEDBACK_READ_REQUEST:
            return{

            };
        case GET_FEEDBACK_READ_SUCCESS:
            return{
                
            };
        case GET_FEEDBACK_READ_FAILURE:
            return{
                
            };

        // GET피드백 ADD
        case GET_FEEDBACK_ADD_REQUEST:
            return{

            };
        case GET_FEEDBACK_ADD_SUCCESS:
            return{
                
            };
        case GET_FEEDBACK_ADD_FAILURE:
            return{
                
            };

         // GET피드백 게시물 READ 
        case GET_FEEDBACK_ITEM_READ_REQUEST:
            return{

            };
        case GET_FEEDBACK_ITEM_READ_SUCCESS:
            return{
                
            };
        case GET_FEEDBACK_ITEM_READ_FAILURE:
            return{
                
            };

        // GET피드백 게시물 ADD 
        case GET_FEEDBACK_ITEM_ADD_REQUEST:
            return{

            };
        case GET_FEEDBACK_ITEM_ADD_SUCCESS:
            return{
                
            };
        case GET_FEEDBACK_ITEM_ADD_FAILURE:
            return{
                
            };

        // GET피드백 게시물 세부 READ 
        case GET_FEEDBACK_DETAIL_ITEM_READ_REQUEST:
            return{

            };
        case GET_FEEDBACK_DETAIL_ITEM_READ_SUCCESS:
            return{
                
            };
        case GET_FEEDBACK_DETAIL_ITEM_READ_FAILURE:
            return{
                
            };

        // GET피드백 게시물 댓글 ADD 
        case GET_FEEDBACK_ITEM_COMMENT_REQUEST:
            return{

            };
        case GET_FEEDBACK_ITEM_COMMENT_SUCCESS:
            return{
                
            };
        case GET_FEEDBACK_ITEM_COMMENT_FAILURE:
            return{
                
            };
        
        default:
            return state;
    }
}
