export const initialState = {
    friends:[],
    
    isLoadingFriends: false, // 친구 데이터 로드 중
    isLoadedFriends: false, // 친구 데이터 로드 성공
    LoadedFriendsErrorReason: '', // 친구 데이터 실패 사유

    isAddingFriends: false, // 친구 데이터 추가 중
    isAddedFriends: false, // 친구 데이터 추가 성공
    AddedFriendsErrorReason: '', // 친구 데이터 추가 실패 사유
}

export const FRIENDS_MAIN_READ_REQUEST = 'FRIENDS_MAIN_READ_REQUEST'; // 친구 메인 창 READ 시도 중
export const FRIENDS_MAIN_READ_SUCCESS = 'FRIENDS_MAIN_READ_SUCCESS'; // 친구 메인 창 READ 성공
export const FRIENDS_MAIN_READ_FAILURE = 'FRIENDS_MAIN_READ_FAILURE'; // 친구 메인 창 READ 실패

export const FRIENDS_MAIN_SEARCH_REQUEST = 'FRIENDS_MAIN_SEARCH_REQUEST'; // 친구 메인 창 SEARCH 시도 중
export const FRIENDS_MAIN_SEARCH_SUCCESS = 'FRIENDS_MAIN_SEARCH_SUCCESS'; // 친구 메인 창 SEARCH 성공
export const FRIENDS_MAIN_SEARCH_FAILURE = 'FRIENDS_MAIN_SEARCH_FAILURE'; // 친구 메인 창 SEARCH 실패

export const FRIENDS_BLOCK_REQUEST = 'FRIENDS_BLOCK_REQUEST'; // 친구 차단 시도 중
export const FRIENDS_BLOCK_SUCCESS = 'FRIENDS_BLOCK_SUCCESS'; // 친구 차단 성공
export const FRIENDS_BLOCK_FAILURE = 'FRIENDS_BLOCK_FAILURE'; // 친구 차단 실패

export const FRIENDS_ADD_READ_REQUEST = 'FRIENDS_ADD_READ_REQUEST'; // 친구 추가 모달 READ 시도 중
export const FRIENDS_ADD_READ_SUCCESS = 'FRIENDS_ADD_READ_SUCCESS'; // 친구 추가 모달 READ 성공
export const FRIENDS_ADD_READ_FAILURE = 'FRIENDS_ADD_READ_FAILURE'; // 친구 추가 모달 READ 실패

export const FRIENDS_ADD_SEARCH_REQUEST = 'FRIENDS_ADD_SEARCH_REQUEST'; // 친구 추가 모달 SEARCH 시도 중
export const FRIENDS_ADD_SEARCH_SUCCESS = 'FRIENDS_ADD_SEARCH_SUCCESS'; // 친구 추가 모달 SEARCH 성공
export const FRIENDS_ADD_SEARCH_FAILURE = 'FRIENDS_ADD_SEARCH_FAILURE'; // 친구 추가 모달 SEARCH 실패

export const FRIENDS_ADD_ADD_REQUEST = 'FRIENDS_ADD_ADD_REQUEST'; // 친구 추가 모달 친구 ADD 중
export const FRIENDS_ADD_ADD_SUCCESS = 'FRIENDS_ADD_ADD_SUCCESS'; // 친구 추가 모달 친구 ADD 성공
export const FRIENDS_ADD_ADD_FAILURE = 'FRIENDS_ADD_ADD_FAILURE'; // 친구 추가 모달 친구 ADD 실패

export const FRIENDS_RQ_READ_REQUEST = 'FRIENDS_RQ_READ_REQUEST'; // 친구 요청 모달 READ 시도 중
export const FRIENDS_RQ_READ_SUCCESS = 'FRIENDS_RQ_READ_SUCCESS'; // 친구 요청 모달 READ 성공
export const FRIENDS_RQ_READ_FAILURE = 'FRIENDS_RQ_READ_FAILURE'; // 친구 요청 모달 READ 실패

export const FRIENDS_RQ_ADD_REQUEST = 'FRIENDS_RQ_ADD_REQUEST'; // 친구 요청 모달 ADD 시도 중
export const FRIENDS_RQ_ADD_SUCCESS = 'FRIENDS_RQ_ADD_SUCCESS'; // 친구 요청 모달 ADD 성공
export const FRIENDS_RQ_ADD_FAILURE = 'FRIENDS_RQ_ADD_FAILURE'; // 친구 요청 모달 ADD 실패

export const FRIENDS_PROFILE_READ_REQUEST = 'FRIENDS_PROFILE_READ_REQUEST'; // 친구 프로필 모달 READ 시도 중
export const FRIENDS_PROFILE_READ_SUCCESS = 'FRIENDS_PROFILE_READ_SUCCESS'; // 친구 프로필 모달 READ 성공
export const FRIENDS_PROFILE_READ_FAILURE = 'FRIENDS_PROFILE_READ_FAILURE'; // 친구 프로필 모달 READ 실패

export const FRIENDS_PROFILE_ADD_REQUEST = 'FRIENDS_PROFILE_ADD_REQUEST'; // 친구 프로필 모달 사진 ADD 시도 중
export const FRIENDS_PROFILE_ADD_SUCCESS = 'FRIENDS_PROFILE_ADD_SUCCESS'; // 친구 프로필 모달 사진 ADD 성공
export const FRIENDS_PROFILE_ADD_FAILURE = 'FRIENDS_PROFILE_ADD_FAILURE'; // 친구 프로필 모달 사진 ADD 실패

export default (state = initialState, action) => {
    switch(action.type){
        // 친구 메인 창 READ
        case FRIENDS_MAIN_READ_REQUEST:
            return{
                isLoadingFriends: true, 
                isLoadedFriends: false,
            }
        case FRIENDS_MAIN_READ_SUCCESS:
            return{
                isLoadingFriends: false, 
                isLoadedFriends: true,
                friends:action.data.success?action.data.data:[],
                message:action.data.success?action.data.message:'',
            }
        case FRIENDS_MAIN_READ_FAILURE:
            return{
                isLoadingFriends: false, 
                isLoadedFriends: false,
                LoadedFriendsErrorReason:action.error
            }

        // 친구 메인 창 SEARCH
        case FRIENDS_MAIN_SEARCH_REQUEST:
            return{

            }
        case FRIENDS_MAIN_SEARCH_SUCCESS:
            return{
                
            }
        case FRIENDS_MAIN_SEARCH_FAILURE:
            return{
                
            }    

        // 친구 차단    
        case FRIENDS_BLOCK_REQUEST:
            return{

            }
        case FRIENDS_BLOCK_SUCCESS:
            return{
                
            }
        case FRIENDS_BLOCK_FAILURE:
            return{
                
            }
        
        // 친구 추가 모달 READ
        case FRIENDS_ADD_READ_REQUEST:
            return{

            }
        case FRIENDS_ADD_READ_SUCCESS:
            return{
                
            }
        case FRIENDS_ADD_READ_FAILURE:
            return{
                
            }

        // 친구 추가 모달 SEARCH
        case FRIENDS_ADD_SEARCH_REQUEST:
            return{

            }
        case FRIENDS_ADD_SEARCH_SUCCESS:
            return{
                
            }
        case FRIENDS_ADD_SEARCH_FAILURE:
            return{
                
            }

        //친구 추가 모달 친구 ADD
        case FRIENDS_ADD_ADD_REQUEST:
            return{
                isAddingFriends: true, 
                isAddedFriends: false,
            }
        case FRIENDS_ADD_ADD_SUCCESS:
            const status = action.data.data;
            if(status==="1"){
                // 친구를 요청한 상황
                
            }


            return{
                isAddingFriends: false, 
                isAddedFriends: true,
                friends:action.data.success?[...state.friends, action.data.data]:state.friends
            }
        case FRIENDS_ADD_ADD_FAILURE:
            return{
                isAddingFriends: false, 
                isAddedFriends: false,
                AddedFriendsErrorReason:action.error
            }

        // 친구 요청 모달 READ   
        case FRIENDS_RQ_READ_REQUEST:
            return{

            }
        case FRIENDS_RQ_READ_SUCCESS:
            return{
                
            }
        case FRIENDS_RQ_READ_FAILURE:
            return{
                
            }
            
        // 친구 요청 모달 ADD  
        case FRIENDS_RQ_ADD_REQUEST:
            return{

            }
        case FRIENDS_RQ_ADD_SUCCESS:
            return{
                
            }
        case FRIENDS_RQ_ADD_FAILURE:
            return{
                
            }

        // 친구 프로필 모달 READ   
        case FRIENDS_PROFILE_READ_REQUEST:
            return{

            }
        case FRIENDS_PROFILE_READ_SUCCESS:
            return{
                
            }
        case FRIENDS_PROFILE_READ_FAILURE:
            return{
                
            }
        
        // 친구 프로필 모달 ADD   
        case FRIENDS_PROFILE_ADD_REQUEST:
            return{

            }
        case FRIENDS_PROFILE_ADD_SUCCESS:
            return{
                
            }
        case FRIENDS_PROFILE_ADD_FAILURE:
            return{
                
            }     
        default: 
            return state;
    }
};