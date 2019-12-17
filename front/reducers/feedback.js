export const initialState = {
    feedbackMode:false,

    feedback:{},
    feedbackItem:{},

    isAdddingFirstSubject: false, // 피드백 튜토리얼 첫번째 주제 저장 중
    isAddedFirstSubject: false, // 피드백 튜토리얼 첫번째 주제 저장 완료
    AddedFirstSubjectErrorReason: '', // 피드백 튜토리얼 첫번째 주제 저장 실패 사유

    isLoadingFeedback: false, // 피드백 데이터 로드 중
    isLoadedFeedback: false, // 피드백 데이터 로드 성공
    LoadedFeedbackErrorReason: '', // 피드백 데이터 실패 사유

    isAdddingFeedback: false, // 피드백 추가 중
    isAddedFeedback: false, // 피드백 추가 완료
    AddedFeedbackErrorReason: '', // 피드백 추가 실패 사유

    isUpdatingFeedback: false, // 피드백 업데이트 중
    isUpdatedFeedback: false, // 피드백 업데이트 완료
    UpdatedFeedbackErrorReason: '', // 피드백 업데이트 실패 사유

    isDeletingFeedback: false, // 피드백 삭제 중
    isDeletedFeedback: false, // 피드백 삭제 완료
    DeletedFeedbackErrorReason: '', // 피드백 삭제 실패 사유

    isLoadingFeedbackItem: false, // 피드백아이템 로드 중
    isLoadedFeedbackItem: false, // 피드백아이템 로드완료
    LoadedFeedbackItemErrorReason: '', // 피드백아이템 로드 실패 사유
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

export const FEEDBACK_UPDATE_REQUEST = 'FEEDBACK_UPDATE_REQUEST'; // 피드백 Update 시도 중
export const FEEDBACK_UPDATE_SUCCESS = 'FEEDBACK_UPDATE_SUCCESS'; // 피드백 Update 성공
export const FEEDBACK_UPDATE_FAILURE = 'FEEDBACK_UPDATE_FAILURE'; // 피드백 Update 실패

export const FEEDBACK_DELETE_REQUEST = 'FEEDBACK_DELETE_REQUEST'; // 피드백 DELETE 시도 중
export const FEEDBACK_DELETE_SUCCESS = 'FEEDBACK_DELETE_SUCCESS'; // 피드백 DELETE 성공
export const FEEDBACK_DELETE_FAILURE = 'FEEDBACK_DELETE_FAILURE'; // 피드백 DELETE 실패

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
                feedbackMode:action.data.feedbackModes,
                feedback:action.data.lastId === 0 ? {} : state.feedback,
                hasMoreFeedback: action.lastId?state.hasMoreFeedback:true,
            };
        case FEEDBACK_READ_SUCCESS:
            // let added = {};
            // if(action.data.success){
            //     if(!state.feedbackMode){
            //         // 내 피드백
            //         added = action.data.data;
            //     }else{
            //         // 요청된 피드백
            //     }
            // }else{

            // }
            
            return{
               ...state,
               isLoadingFeedback:false,
               isLoadedFeedback:true,
               feedback:action.data.success?action.data.data:{},
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
            const addedFeedback = action.data.success?action.data.data:{};

            return{
                ...state,
                isAdddingFeedback:false,
                isAddedFeedback:true,
                message:action.data.message,
                feedback:{
                    ...state.feedback, 
                    myFeedback:[
                        addedFeedback, ...state.feedback.myFeedback
                    ]
                }
            };
        case FEEDBACK_ADD_FAILURE:
            return{
                ...state,
                isAdddingFeedback:false,
                isAddedFeedback:false,
                AddedFeedbackErrorReason:action.error,
            };
        
         // 피드백 UPDATE 
         case FEEDBACK_UPDATE_REQUEST:
            return{
                ...state,
                isUpdatingFeedback:true,
                isUpdatedFeedback:false,
            };
        case FEEDBACK_UPDATE_SUCCESS:
            let updatedFeedback = state.feedback.myFeedback;
            let message = '';
            if(action.data.success){
                const index = state.feedback.myFeedback.findIndex((v,i)=>parseInt(v.id)===parseInt(action.data.data.id));
                state.feedback.myFeedback[index] = {...action.data.data};
                updatedFeedback = [...state.feedback.myFeedback];
                message = action.data.message; 
            }
            return{
                ...state,
                isUpdatingFeedback:false,
                isUpdatedFeedback:true,
                feedback:{
                    ...state.feedback,
                    myFeedback:updatedFeedback
                },
                message:message,
            };
        case FEEDBACK_UPDATE_FAILURE:
            return{
                ...state,
                isUpdatingFeedback:false,
                isUpdatedFeedback:false,
                UpdatedFeedbackErrorReason:action.error, 
            };

         // 피드백 DELETE 
         case FEEDBACK_DELETE_REQUEST:
            return{
                ...state,
                isDeletingFeedback:true,
                isDeletedFeedback:false,
            };
            
        case FEEDBACK_DELETE_SUCCESS:
            let deletedFeedback = state.feedback.myFeedback;
            if(action.data.success){
                const index = state.feedback.myFeedback.findIndex((v,i)=>parseInt(v.id)===parseInt(action.data.data.id));
                deletedFeedback = state.feedback.myFeedback.filter((v,i)=>i!==index);
            }
            return{
                ...state,
                isDeletingFeedback:false,
                isDeletedFeedback:true,
                feedback:{
                    ...state.feedback,
                    myFeedback:deletedFeedback
                },
                message: action.data.success?action.data.message:''
            };
        case FEEDBACK_DELETE_FAILURE:
            return{
                ...state,
                isDeletingFeedback:false,
                isDeletedFeedback:false,
                DeletedFeedbackErrorReason:action.error
            };

         // 피드백 게시물 READ 
        case FEEDBACK_ITEM_READ_REQUEST:
            return{
                ...state,
                isLoadingFeedbackItem:true,
                isLoadedFeedbackItem:false,
            };
        case FEEDBACK_ITEM_READ_SUCCESS:
            return{
                ...state,
                isLoadingFeedbackItem:false,
                isLoadedFeedbackItem:true,
            };
        case FEEDBACK_ITEM_READ_FAILURE:
            return{
                ...state,
                isLoadingFeedbackItem:false,
                isLoadedFeedbackItem:false,
                LoadedFeedbackItemErrorReason:action.error,
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
