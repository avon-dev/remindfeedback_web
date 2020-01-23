export const initialState = {
    feedbackMode:false,
    status:'progress',
    feedback:{},
    feedbackItem:[],
    feedbackComment:[],
    getFeedbackCategory:[],

    isAdddingFirstSubject: false, // 피드백 튜토리얼 첫번째 주제 저장 중
    isAddedFirstSubject: false, // 피드백 튜토리얼 첫번째 주제 저장 완료
    AddedFirstSubjectErrorReason: '', // 피드백 튜토리얼 첫번째 주제 저장 실패 사유

    isLoadingGetFeedbackCategory: false, // 요청 피드백 데이터 요청 목록 로드 중
    isLoadedGetFeedbackCategory: false, // 피드백 데이터 요청 목록 로드 성공
    LoadedGetFeedbackCategoryErrorReason: '', // 피드백 데이터 요청 목록 실패 사유

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

    isAddingFeedbackItem: false, // 피드백아이템 추가 중
    isAddedFeedbackItem: false, // 피드백아이템 추가완료
    AddedFeedbackItemErrorReason: '', // 피드백아이템 추가 실패 사유

    isUpdatingFeedbackItem: false, // 피드백아이템 추가 중
    isUpdatedFeedbackItem: false, // 피드백아이템 추가완료
    UpdatedFeedbackItemErrorReason: '', // 피드백아이템 추가 실패 사유

    isLoadingFeedbackComment: false, // 피드백 댓글 로드 중
    isLoadedFeedbackComment: false, // 피드백 댓글 로드완료
    LoadedFeedbackCommentErrorReason: '', // 피드백 댓글 로드 실패 사유

    isAddingFeedbackComment: false, // 피드백 댓글 추가 중
    isAddedFeedbackComment: false, // 피드백 댓글 추가 완료
    AddedFeedbackCommentErrorReason: '', // 피드백 댓글 추가 실패 사유

    isUpdatingFeedbackComment:false, // 피드백 댓글 수정 중
    isUpdatedFeedbackComment:false, // 피드백 댓글 수정 완료
    UpdatedFeedbackCommentErrorReason:'', // 피드백 댓글 수정 실패 사유

    isDeletingFeedbackComment:false, // 피드백 댓글 삭제 중
    isDeletedFeedbackComment:false, // 피드백 댓글 삭제 완료
    DeletedFeedbackCommentErrorReason:'', // 피드백 댓글 삭제 실패 사유

    isCompleting_req_Feedback: false, // 피드백 완료 요청 로드 중
    isCompleted_req_Feedback: false, // 피드백 완료 요청 로드완료
    Completed_req_FeedbackErrorReason: '', // 피드백 완료 요청 로드 실패 사유
}



export const FEEDBACK_TUTORIAL_REQUEST = 'FEEDBACK_TUTORIAL_REQUEST'; // 피드백 튜토리얼 시도 중
export const FEEDBACK_TUTORIAL_SUCCESS = 'FEEDBACK_TUTORIAL_SUCCESS'; // 피드백 튜토리얼 성공
export const FEEDBACK_TUTORIAL_FAILURE = 'FEEDBACK_TUTORIAL_FAILURE'; // 피드백 튜토리얼 실패

export const GETFEEDBACK_CATEGORY_READ_REQUEST = 'GETFEEDBACK_CATEGORY_READ_REQUEST'; // GET 피드백 카테고리 READ 시도 중
export const GETFEEDBACK_CATEGORY_READ_SUCCESS = 'GETFEEDBACK_CATEGORY_READ_SUCCESS'; // GET 피드백 카테고리 READ 성공
export const GETFEEDBACK_CATEGORY_READ_FAILURE = 'GETFEEDBACK_CATEGORY_READ_FAILURE'; // GET 피드백 카테고리 READ 실패

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

export const FEEDBACK_ITEM_UPDATE_REQUEST = 'FEEDBACK_ITEM_UPDATE_REQUEST'; // 피드백 게시물 UPDATE 시도 중
export const FEEDBACK_ITEM_UPDATE_SUCCESS = 'FEEDBACK_ITEM_UPDATE_SUCCESS'; // 피드백 게시물 UPDATE 성공
export const FEEDBACK_ITEM_UPDATE_FAILURE = 'FEEDBACK_ITEM_UPDATE_FAILURE'; // 피드백 게시물 UPDATE 실패

export const FEEDBACK_ITEM_COMPLETE_REQ_REQUEST = 'FEEDBACK_ITEM_COMPLETE_REQUEST'; // 피드백 게시물 완료 시도 중
export const FEEDBACK_ITEM_COMPLETE_REQ_SUCCESS = 'FEEDBACK_ITEM_COMPLETE_SUCCESS'; // 피드백 게시물 완료 성공
export const FEEDBACK_ITEM_COMPLETE_REQ_FAILURE = 'FEEDBACK_ITEM_COMPLETE_FAILURE'; // 피드백 게시물 완료 실패

export const FEEDBACK_ITEM_COMMENT_REQUEST = 'FEEDBACK_ITEM_COMMENT_REQUEST'; // 피드백 게시물 댓글 READ 시도 중
export const FEEDBACK_ITEM_COMMENT_SUCCESS = 'FEEDBACK_ITEM_COMMENT_SUCCESS'; // 피드백 게시물 댓글 READ 성공
export const FEEDBACK_ITEM_COMMENT_FAILURE = 'FEEDBACK_ITEM_COMMENT_FAILURE'; // 피드백 게시물 댓글 READ 실패

export const FEEDBACK_ITEM_COMMENT_ADD_REQUEST = 'FEEDBACK_ITEM_COMMENT_ADD_REQUEST'; // 피드백 게시물 댓글 ADD 시도 중
export const FEEDBACK_ITEM_COMMENT_ADD_SUCCESS = 'FEEDBACK_ITEM_COMMENT_ADD_SUCCESS'; // 피드백 게시물 댓글 ADD 성공
export const FEEDBACK_ITEM_COMMENT_ADD_FAILURE = 'FEEDBACK_ITEM_COMMENT_ADD_FAILURE'; // 피드백 게시물 댓글 ADD 실패

export const FEEDBACK_ITEM_COMMENT_UPDATE_REQUEST = 'FEEDBACK_ITEM_COMMENT_UPDATE_REQUEST'; // 피드백 게시물 댓글 Update 시도 중
export const FEEDBACK_ITEM_COMMENT_UPDATE_SUCCESS = 'FEEDBACK_ITEM_COMMENT_UPDATE_SUCCESS'; // 피드백 게시물 댓글 Update 성공
export const FEEDBACK_ITEM_COMMENT_UPDATE_FAILURE = 'FEEDBACK_ITEM_COMMENT_UPDATE_FAILURE'; // 피드백 게시물 댓글 Update 실패

export const FEEDBACK_ITEM_COMMENT_DELETE_REQUEST = 'FEEDBACK_ITEM_COMMENT_DELETE_REQUEST'; // 피드백 게시물 댓글 DELETE 시도 중
export const FEEDBACK_ITEM_COMMENT_DELETE_SUCCESS = 'FEEDBACK_ITEM_COMMENT_DELETE_SUCCESS'; // 피드백 게시물 댓글 DELETE 성공
export const FEEDBACK_ITEM_COMMENT_DELETE_FAILURE = 'FEEDBACK_ITEM_COMMENT_DELETE_FAILURE'; // 피드백 게시물 댓글 DELETE 실패

export const FEEDBACK_ITEM_ARRANGE_DATE = 'FEEDBACK_ITEM_ARRANGE_DATE'; // 피드백 게시물 데이터 정리

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

        // GET 피드백 카테고리 
        case GETFEEDBACK_CATEGORY_READ_REQUEST:
            return{
                ...state,
                isLoadedGetFeedbackCategory:true,
                isLoadedGetFeedbackCategory:false,
            };
        case GETFEEDBACK_CATEGORY_READ_SUCCESS:
            return{
               ...state,
               isLoadedGetFeedbackCategory:false,
               isLoadedGetFeedbackCategory:true,
               getFeedbackCategory:action.data.success?action.data.data:state.getFeedbackCategory
            };
        case GETFEEDBACK_CATEGORY_READ_FAILURE:
            return{
               ...state,
               isLoadedGetFeedbackCategory:false,
               isLoadedGetFeedbackCategory:false,
               LoadedGetFeedbackCategoryErrorReason:action.error
            };
        
        // 피드백 READ
        case FEEDBACK_READ_REQUEST:
            return{
                ...state,
                isLoadingFeedback:true,
                isLoadedFeedback:false,
                feedbackMode:action.data.feedbackModes,
                lastId:action.data.lastId,
                status:action.data.status&&action.data.status
            };
        case FEEDBACK_READ_SUCCESS:
            let added = [];
            let hasMore = true;
            if(parseInt(state.lastId)===0){
                // init feedback_read
                if(!state.feedbackMode){
                    // 내 피드백
                    added = action.data.data;
                    
                }else{
                    // 요청된 피드백
                    added = action.data.data;
                }
            }else{
                // 인피니티 스크롤링 feedback_read
                if(!state.feedbackMode){
                    // 내 피드백
                    let myFeedbackadded = action.data.data.myFeedback;
                    if(myFeedbackadded.length === 0){
                        added = state.feedback;
                    }else{
                        state.feedback.myFeedback.push(...myFeedbackadded);
                        added = state.feedback;
                    }
                    hasMore = myFeedbackadded.length===10?true:false; 
                }else{
                    // 요청된 피드백
                    
                }
            }

            return{
               ...state,
               isLoadingFeedback:false,
               isLoadedFeedback:true,
               hasMoreFeedback: hasMore,
               feedback:action.data.success?added:{},
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
                lastId:action.data.lastid,
            };
        case FEEDBACK_ITEM_READ_SUCCESS:
            let addedItem = [];
            let hasMoreItem = true;
            if(state.lastId===0){
                addedItem = action.data.data;
            }else{
                const item = action.data.data;
                addedItem = [...state.feedbackItem,...item];
                hasMoreItem = action.data.data.length===10?true:false;     
            }

            return{
                ...state,
                isLoadingFeedbackItem:false,
                isLoadedFeedbackItem:true,
                feedbackItem:action.data.success?addedItem:[],
                hasMoreItem:hasMoreItem
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
                ...state,
                isAddingFeedbackItem:true,
                isAddedFeedbackItem:false,
            };
        case FEEDBACK_ITEM_ADD_SUCCESS:
            return{
                ...state,
                isAddingFeedbackItem:true,
                isAddedFeedbackItem:false,
                feedbackItem:action.data.success?[action.data.data, ...state.feedbackItem]:state.feedbackItem,
            };
        case FEEDBACK_ITEM_ADD_FAILURE:
            return{
                ...state,
                isAddingFeedbackItem:true,
                isAddedFeedbackItem:false,
                AddedFeedbackItemErrorReason:action.error,
            };
            
        // 피드백 게시물 UPDATE 
        case FEEDBACK_ITEM_UPDATE_REQUEST:
            return{
                ...state,
                isUpdatingFeedbackItem:true,
                isUpdatedFeedbackItem:false,
            };
        case FEEDBACK_ITEM_UPDATE_SUCCESS:
            let updated = state.feedbackItem;
            if(action.data.success){
                const index = state.feedbackItem.findIndex((v,i)=>parseInt(v.id)===parseInt(action.data.data.id));
                state.feedbackItem[index] = {...action.data.data};
                updated = [...state.feedbackItem];
                message = action.data.message;
            }
            return{
                ...state,
                isUpdatingFeedbackItem:true,
                isUpdatedFeedbackItem:false,
                feedbackItem:updated,
                message:message,
            };
        case FEEDBACK_ITEM_UPDATE_FAILURE:
            return{
                ...state,
                isUpdatingFeedbackItem:true,
                isUpdatedFeedbackItem:false,
                UpdatedFeedbackItemErrorReason:action.error,
            };

        // 피드백 게시물 완료 요청
        case FEEDBACK_ITEM_COMPLETE_REQ_REQUEST:
            return{
                ...state,
                isCompleting_req_Feedback: true, 
                isCompleted_req_Feedback: false,
            };
        case FEEDBACK_ITEM_COMPLETE_REQ_SUCCESS:
            let updatedFeedbackAfterComplete = state.feedback;
            if(action.data.success){
                const index = state.feedback.myFeedback.findIndex((v,i)=>{parseInt(v.id)===parseInt(action.data.data.id)})
                state.feedback.myFeedback[index] = {...action.data.data};
                updatedFeedbackAfterComplete = state.feedback;
            }
            return{
                ...state,
                isCompleting_req_Feedback: false, 
                isCompleted_req_Feedback: true,
                feedback:updatedFeedbackAfterComplete,
                
            };
        case FEEDBACK_ITEM_COMPLETE_REQ_FAILURE:
            return{
                ...state,
                isCompleting_req_Feedback: false, 
                isCompleted_req_Feedback: false, 
                Completed_req_FeedbackErrorReason: '', 
            };

        // 피드백 게시물 댓글 READ 
        case FEEDBACK_ITEM_COMMENT_REQUEST:
            return{
                ...state,
                isLoadingFeedbackComment:true,
                isLoadedFeedbackComment:false,
            };
        case FEEDBACK_ITEM_COMMENT_SUCCESS:
            return{
                ...state,
                isLoadingFeedbackComment:false,
                isLoadedFeedbackComment:true,
                feedbackComment:action.data.success?action.data.data.filter((v,i)=>!v.deletedAt):state.feedbackComment 
            };
        case FEEDBACK_ITEM_COMMENT_FAILURE:
            return{
                ...state,
                isLoadingFeedbackComment:false,
                isLoadedFeedbackComment:false,
                LoadedFeedbackCommentErrorReason:action.error,
            };

        // 피드백 게시물 댓글 ADD 
        case FEEDBACK_ITEM_COMMENT_ADD_REQUEST:
            return{
                ...state,
                isAddingFeedbackComment:false,
                isAddedFeedbackComment:true,
            };
        case FEEDBACK_ITEM_COMMENT_ADD_SUCCESS:
            let addedComment = {};
            if(action.data.success){
                addedComment= {...action.data.data.comment, user:action.data.data.user};
            }
            return{
                ...state,
                isAddingFeedbackComment:true,
                isAddedFeedbackComment:false,
                feedbackComment:action.data.success?[...state.feedbackComment,addedComment]:state.feedbackComment
            };
        case FEEDBACK_ITEM_COMMENT_ADD_FAILURE:
            return{
                ...state,
                isAddingFeedbackComment:false,
                isAddedFeedbackComment:false,
                AddedFeedbackCommentErrorReason:action.error,
            };

        // 피드백 게시물 댓글 UPDATE 
        case FEEDBACK_ITEM_COMMENT_UPDATE_REQUEST:
            return{
                ...state,
                isUpdatingFeedbackComment:false,
                isUpdatedFeedbackComment:true,
            };
        case FEEDBACK_ITEM_COMMENT_UPDATE_SUCCESS:
            let updatedComment = state.feedbackComment;
            let messages = ''
            if(action.data.success){
                const index = state.feedbackComment.findIndex((v,i)=>parseInt(v.id)===parseInt(action.data.data.id))
                state.feedbackComment[index] = {...action.data.data};
                updatedComment = state.feedbackComment;
                // messages = action.data.message;
            }
            return{
                ...state,
                isUpdatingFeedbackComment:true,
                isUpdatedFeedbackComment:false,
                feedbackComment:updatedComment,
                // message:messages
            };
        case FEEDBACK_ITEM_COMMENT_UPDATE_FAILURE:
            return{
                ...state,
                isUpdatingFeedbackComment:false,
                isUpdatedFeedbackComment:false,
                UpdatedFeedbackCommentErrorReason:action.error,
            };
        
        // 피드백 게시물 댓글 DELETE 
        case FEEDBACK_ITEM_COMMENT_DELETE_REQUEST:
            return{
                ...state,
                isDeletingFeedbackComment:false,
                isDeletedFeedbackComment:true,
            };
        case FEEDBACK_ITEM_COMMENT_DELETE_SUCCESS:
            let deleteComment = state.feedbackComment;
            let messagese = '';
            if(action.data.success){
                const index = state.feedbackComment.findIndex((v,i)=>parseInt(v.id)===parseInt(action.data.data.comment_id));
                deleteComment = state.feedbackComment.filter((v,i)=>parseInt(i)!==parseInt(index));
                // messagese = action.data.message;
            }
            return{
                ...state,
                isDeletingFeedbackComment:true,
                isDeletedFeedbackComment:false,
                feedbackComment:deleteComment,
                // message:messagese
            };
        case FEEDBACK_ITEM_COMMENT_DELETE_FAILURE:
            return{
                ...state,
                isDeletingFeedbackComment:false,
                isDeletedFeedbackComment:false,
                DeletedFeedbackCommentErrorReason:action.error,
            };

        case FEEDBACK_ITEM_ARRANGE_DATE:
            return{
                ...state,
                message:'',
                feedbackItem:[],
                feedbackComment:[],
                
            };
        
        default:
            return state;
    }
}
