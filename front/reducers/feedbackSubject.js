export const initialState = {
    
}

export const FEEDBACK_SUB_READ_REQUEST = 'FEEDBACK_SUB_READ_REQUEST'; // 피드백 주제 READ 시도 중
export const FEEDBACK_SUB_READ_SUCCESS = 'FEEDBACK_SUB_READ_SUCCESS'; // 피드백 주제 READ 성공
export const FEEDBACK_SUB_READ_FAILURE = 'FEEDBACK_SUB_READ_FAILURE'; // 피드백 주제 READ 실패

export const FEEDBACK_SUB_ADD_REQUEST = 'FEEDBACK_SUB_ADD_REQUEST'; // 피드백 주제 ADD 시도 중
export const FEEDBACK_SUB_ADD_SUCCESS = 'FEEDBACK_SUB_ADD_SUCCESS'; // 피드백 주제 ADD 성공
export const FEEDBACK_SUB_ADD_FAILURE = 'FEEDBACK_SUB_ADD_FAILURE'; // 피드백 주제 ADD 실패

export const FEEDBACK_SUB_UPDATE_REQUEST = 'FEEDBACK_SUB_UPDATE_REQUEST'; // 피드백 주제 UPDATE 시도 중
export const FEEDBACK_SUB_UPDATE_SUCCESS = 'FEEDBACK_SUB_UPDATE_SUCCESS'; // 피드백 주제 UPDATE 성공
export const FEEDBACK_SUB_UPDATE_FAILURE = 'FEEDBACK_SUB_UPDATE_FAILURE'; // 피드백 주제 UPDATE 실패

export const FEEDBACK_SUB_DELETE_REQUEST = 'FEEDBACK_SUB_DELETE_REQUEST'; // 피드백 주제 DELETE 시도 중
export const FEEDBACK_SUB_DELETE_SUCCESS = 'FEEDBACK_SUB_DELETE_SUCCESS'; // 피드백 주제 DELETE 성공
export const FEEDBACK_SUB_DELETE_FAILURE = 'FEEDBACK_SUB_DELETE_FAILURE'; // 피드백 주제 DELETE 실패

export default (state = initialState, action) => {
    switch(action.type){
        // 피드백 주제 READ
        case FEEDBACK_SUB_READ_REQUEST:
            return{

            };
        case FEEDBACK_SUB_READ_SUCCESS:
            return{
                
            };
        case FEEDBACK_SUB_READ_FAILURE:
            return{
                
            };
        // 피드백 주제 ADD    
        case FEEDBACK_SUB_ADD_REQUEST:
            return{

            };
        case FEEDBACK_SUB_ADD_SUCCESS:
            return{
                
            };
        case FEEDBACK_SUB_ADD_FAILURE:
            return{
                
            };

        // 피드백 주제 UPDATE 
        case FEEDBACK_SUB_UPDATE_REQUEST:
            return{

            };
        case FEEDBACK_SUB_UPDATE_SUCCESS:
            return{
                
            };
        case FEEDBACK_SUB_UPDATE_FAILURE:
            return{
                
            };

        // 피드백 주제 DELETE 
        case FEEDBACK_SUB_DELETE_REQUEST:
            return{

            };
        case FEEDBACK_SUB_DELETE_SUCCESS:
            return{
                
            };
        case FEEDBACK_SUB_DELETE_FAILURE:
            return{
                
            };
        
        default:
            return state;
    }

}