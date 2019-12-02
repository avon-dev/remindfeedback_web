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
                subject:[{
                    index: action.data.index,
                    name:action.data.name,
                    color:action.data.color,
                }]      
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
            return{
                ...state,
                isAddingSubject:false,
                isAddedSubject:true,
                subject:[
                    ...state.subject,
                    {
                        index: action.data.index,
                        name:action.data.name,
                        color:action.data.color,  
                    }
                ]
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
            const subjectIndex = state.subject.findIndex(v => v.index === action.data.index);
            state.subject[subjectIndex] = {...action.data};
            const originalSubject = [...state.subject];
            return{
                ...state,
                isUpdatingSubject:false,
                isUpdatedSubject:true,
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
            return{
                ...state,
                isDeletingSubject:false,
                isDeletedSubject:true,
                subject:state.subject.filter((v,i) => i !== action.data.index),
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