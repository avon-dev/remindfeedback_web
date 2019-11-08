export const initialState = {
    
}

export const GET_FEEDBACK_SUB_READ_REQUEST = 'GET_FEEDBACK_SUB_READ_REQUEST'; // GET피드백 주제 READ 시도 중
export const GET_FEEDBACK_SUB_READ_SUCCESS = 'GET_FEEDBACK_SUB_READ_SUCCESS'; // GET피드백 주제 READ 성공
export const GET_FEEDBACK_SUB_READ_FAILURE = 'GET_FEEDBACK_SUB_READ_FAILURE'; // GET피드백 주제 READ 실패

export const GET_FEEDBACK_SUB_ADD_REQUEST = 'GET_FEEDBACK_SUB_ADD_REQUEST'; // GET피드백 주제 ADD 시도 중
export const GET_FEEDBACK_SUB_ADD_SUCCESS = 'GET_FEEDBACK_SUB_ADD_SUCCESS'; // GET피드백 주제 ADD 성공
export const GET_FEEDBACK_SUB_ADD_FAILURE = 'GET_FEEDBACK_SUB_ADD_FAILURE'; // GET피드백 주제 ADD 실패

export const GET_FEEDBACK_SUB_UPDATE_REQUEST = 'GET_FEEDBACK_SUB_UPDATE_REQUEST'; // GET피드백 주제 UPDATE 시도 중
export const GET_FEEDBACK_SUB_UPDATE_SUCCESS = 'GET_FEEDBACK_SUB_UPDATE_SUCCESS'; // GET피드백 주제 UPDATE 성공
export const GET_FEEDBACK_SUB_UPDATE_FAILURE = 'GET_FEEDBACK_SUB_UPDATE_FAILURE'; // GET피드백 주제 UPDATE 실패

export const GET_FEEDBACK_SUB_DELETE_REQUEST = 'GET_FEEDBACK_SUB_DELETE_REQUEST'; // GET피드백 주제 DELETE 시도 중
export const GET_FEEDBACK_SUB_DELETE_SUCCESS = 'GET_FEEDBACK_SUB_DELETE_SUCCESS'; // GET피드백 주제 DELETE 성공
export const GET_FEEDBACK_SUB_DELETE_FAILURE = 'GET_FEEDBACK_SUB_DELETE_FAILURE'; // GET피드백 주제 DELETE 실패

export default (state = initialState, action) => {
    switch(action.type){
        // GET피드백 주제 READ
        case GET_FEEDBACK_SUB_READ_REQUEST:
            return{

            };
        case GET_FEEDBACK_SUB_READ_SUCCESS:
            return{
                
            };
        case GET_FEEDBACK_SUB_READ_FAILURE:
            return{
                
            };
        // GET피드백 주제 ADD    
        case GET_FEEDBACK_SUB_ADD_REQUEST:
            return{

            };
        case GET_FEEDBACK_SUB_ADD_SUCCESS:
            return{
                
            };
        case GET_FEEDBACK_SUB_ADD_FAILURE:
            return{
                
            };

        // GET피드백 주제 UPDATE 
        case GET_FEEDBACK_SUB_UPDATE_REQUEST:
            return{

            };
        case GET_FEEDBACK_SUB_UPDATE_SUCCESS:
            return{
                
            };
        case GET_FEEDBACK_SUB_UPDATE_FAILURE:
            return{
                
            };

        // GET피드백 주제 DELETE 
        case GET_FEEDBACK_SUB_DELETE_REQUEST:
            return{

            };
        case GET_FEEDBACK_SUB_DELETE_SUCCESS:
            return{
                
            };
        case GET_FEEDBACK_SUB_DELETE_FAILURE:
            return{
                
            };
        
        default:
            return state;
    }

}