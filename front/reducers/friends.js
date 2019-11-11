export const initialState = {
    
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

            }
        case FRIENDS_MAIN_READ_SUCCESS:
            return{
                
            }
        case FRIENDS_MAIN_READ_FAILURE:
            return{
                
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

            }
        case FRIENDS_ADD_ADD_SUCCESS:
            return{
                
            }
        case FRIENDS_ADD_ADD_FAILURE:
            return{
                
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