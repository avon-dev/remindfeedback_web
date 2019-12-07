export const initialState = {

    isLoadingSubject:false, // 피드백 주제 로드 중
    isLoadedSubject:false, // 피드백 주제 로드 성공
    LoadedSubjectErrorReason: '', // 피드백 주제 실패 사유

    isAddingSubject:false, // 피드백 주제 저장 중
    isAddedSubject:false, // 피드백 주제 저장 성공
    AddedSubjectErrorReason: '', // 피드백 주제 저장 실패 사유

    isUpdatingSubject:false, // 피드백 주제 업데이트 중
    isUpdatedSubject:false, // 피드백 주제 업데이트 성공
    UpdatedSubjectErrorReason: '', // 피드백 주제 업데이트 실패 사유

    isDeletingSubject:false, // 피드백 주제 삭제 중
    isDeletedSubject:false, // 피드백 주제 삭제 성공
    DeletedSubjectErrorReason: '', // 피드백 주제 삭제 실패 사유

    subject:[]
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
                ...state,
                isLoadingSubject:true,
                isLoadedSubject:false,
            };
        case FEEDBACK_SUB_READ_SUCCESS:
            return{
                ...state,
                isLoadingSubject:false,
                isLoadedSubject:true,
                subject:action.data.success?action.data.data:state.subject,  
            };
        case FEEDBACK_SUB_READ_FAILURE:
            return{
                ...state,
                isLoadingSubject:false,
                isLoadedSubject:false,
                LoadedSubjectErrorReason:action.error,
            };
        // 피드백 주제 ADD    
        case FEEDBACK_SUB_ADD_REQUEST:
            return{
                ...state,
                isAddingSubject:true,
                isAddedSubject:false,

            };
        case FEEDBACK_SUB_ADD_SUCCESS:
            const addedData = action.data.success?action.data.data[action.data.data.length-1]:'';
            return{
                ...state,
                isAddingSubject:false,
                isAddedSubject:true,
                message:action.data.success?action.data.message:'',
                subject:action.data.success?[...state.subject, addedData]:state.subject
            };
        case FEEDBACK_SUB_ADD_FAILURE:
            return{
                ...state,
                isAddingSubject:false,
                isAddedSubject:false,
                AddedSubjectErrorReason:action.error,
            };

        // 피드백 주제 UPDATE 
        case FEEDBACK_SUB_UPDATE_REQUEST:
            return{
                ...state,
                isUpdatingSubject:true,
                isUpdatedSubject:false,
            };
        case FEEDBACK_SUB_UPDATE_SUCCESS:
            let originalSubject = [];
            let message = '';
            if(action.data.success){
                const subjectIndex = state.subject.findIndex(v => v.category_id === action.data.data.category_id);
                state.subject[subjectIndex] = {...action.data.data};
                originalSubject = [...state.subject];
                message = action.data.message;
            }else{
                originalSubject = [...state.subject];
                message = action.data.message;
            }
            return{
                ...state,
                isUpdatingSubject:false,
                isUpdatedSubject:true,
                message:message,
                subject:originalSubject
            };
        case FEEDBACK_SUB_UPDATE_FAILURE:
            return{
                ...state,
                isUpdatingSubject:false,
                isUpdatedSubject:true,
                UpdatedSubjectErrorReason:action.error,
            };

        // 피드백 주제 DELETE 
        case FEEDBACK_SUB_DELETE_REQUEST:
            return{
                ...state,
                isDeletingSubject:true,
                isDeletedSubject:false,
            };
        case FEEDBACK_SUB_DELETE_SUCCESS:
            
            const index = state.subject.findIndex(v=>parseInt(v.category_id)===parseInt(action.data.data));
            const deletedFeedback = state.subject.filter((v,i)=>i!==index);

            return{
                ...state,
                isDeletingSubject:false,
                isDeletedSubject:true,
                message:action.data.message,
                subject:action.data.success?deletedFeedback:state.subject,
            };
        case FEEDBACK_SUB_DELETE_FAILURE:
            return{
                ...state,
                isDeletingSubject:false,
                isDeletedSubject:false,
                DeletedSubjectErrorReason:action.error,
            };
        
        default:
            return state;
    }

}