export const initialState = {

    feedback:[],

    isAdddingFirstSubject: false, // 피드백 튜토리얼 첫번째 주제 저장 중
    isAddedFirstSubject: false, // 피드백 튜토리얼 첫번째 주제 저장 완료
    AddedFirstSubjectErrorReason: '', // 피드백 튜토리얼 첫번째 주제 저장 실패 사유

    isLoadingFeedback: false, // 피드백 데이터 로드 중
    isLoadedFeedback: false, // 피드백 데이터 로드 성공
    LoadedFeedbackErrorReason: '', // 피드백 데이터 실패 사유

    isAdddingFeedback: false, // 피드백 추가 중
    isAddedFeedback: false, // 피드백 추가 완료
    AddedFeedbackErrorReason: '', // 피드백 추가 실패 사유
}

export const FEEDBACK_TUTORIAL_REQUEST = 'FEEDBACK_TUTORIAL_REQUEST'; // 피드백 튜토리얼 시도 중
export const FEEDBACK_TUTORIAL_SUCCESS = 'FEEDBACK_TUTORIAL_SUCCESS'; // 피드백 튜토리얼 성공
export const FEEDBACK_TUTORIAL_FAILURE = 'FEEDBACK_TUTORIAL_FAILURE'; // 피드백 튜토리얼 실패

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

        // 피드백 튜토리얼 
        case FEEDBACK_TUTORIAL_REQUEST:
            return{
                ...state,
                isAdddingFirstSubject:true,
                isAddedFirstSubject:false,
            };
        case FEEDBACK_TUTORIAL_SUCCESS:
            return{
               ...state,
               isAdddingFirstSubject:false,
               isAddedFirstSubject:true,
            };
        case FEEDBACK_TUTORIAL_FAILURE:
            return{
               ...state,
               isAdddingFirstSubject:false,
               isAddedFirstSubject:false,
               AddedFirstSubjectErrorReason:action.error
            };
        
        // 피드백 READ
        case FEEDBACK_READ_REQUEST:
            return{
                ...state,
                isLoadingFeedback:true,
                isLoadedFeedback:false,
                feedback:action.lastId===0? [] : state.feedback,
                hasMoreFeedback: action.lastId?state.hasMoreFeedback:true,
            };
        case FEEDBACK_READ_SUCCESS:
            return{
               ...state,
               isLoadingFeedback:false,
               isLoadedFeedback:true,
               feedback:state.feedback.concat(action.data.feedback),
            };
        case FEEDBACK_READ_FAILURE:
            return{
                ...state,
                isLoadingFeedback:false,
                isLoadedFeedback:false,
                LoadedFeedbackErrorReason:action.error
            };

        // 피드백 ADD
        case FEEDBACK_ADD_REQUEST:
            return{
                ...state,
                isAdddingFeedback:true,
                isAddedFeedback:false,
            };
        case FEEDBACK_ADD_SUCCESS:
            return{
                ...state,
                isAdddingFeedback:false,
                isAddedFeedback:true,

            };
        case FEEDBACK_ADD_FAILURE:
            return{
                ...state,
                isAdddingFeedback:false,
                isAddedFeedback:false,
                AddedFeedbackErrorReason:action.error,
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
