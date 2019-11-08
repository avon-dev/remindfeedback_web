
export const initialState = {
    isLoggedIn: false, // 로그인 여부
    isLoggingIn: false, // 로그인 시도중
    logInErrorReason: '', // 로그인 실패 사유

    isSignedUp: false, // 회원가입 성공
    isSigningUp: false, // 회원가입 시도중
    signUpErrorReason: '', // 회원가입 실패 사유 

    isLoggingOut: false, // 로그아웃 시도중
    isisLoggingOut: false, // 로그아웃 여부
    logOutReason: '', // 로그아웃 실패 사유

    me:{
        email: '',
        password: '',
        nickname: '',
    }, // 내 정보 
}

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // 로그인 시도 중
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 로그인 성공
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 로그인 실패

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'; // 회원가입 시도 중
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'; // 회원가입 성공
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'; // 회원가입 실패

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'; // 사용자 정보 가져오는 중
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS'; // 사용자 정보 가져오기 성공
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE'; // 사용자 정보 가져오기 실패

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'; // 로그아웃 시도 중
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'; // 로그아웃 성공
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; // 로그아웃 실패

export default (state = initialState, action ) => {
    switch(action.type){
        case LOG_IN_REQUEST:
            return{
                ...state,
                isLoggingIn: true,
            }
        case LOG_IN_SUCCESS:
            return{
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                me:dummyUser,
            }
        case LOG_IN_FAILURE:
            return{
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
                logInErrorReason:action.error,
                me:null,
            }
        case SIGN_UP_REQUEST:
            return{
                ...state,
                isSigningUp: true,
                me:{
                    email:action.email,
                    password:action.email,
                    nickname:action.nickname, 
                 },
            }
        case SIGN_UP_SUCCESS:
            return{
                ...state,
                isSigningUp: false,
                isSignedUp: true,
                me:{
                   email:action.email,
                   password:action.email,
                   nickname:action.nickname, 
                },
            }
        case SIGN_UP_FAILURE:
            return{
                ...state,
                isSigningUp: false,
                isSignedUp: false,
                signUpErrorReason:action.error,
                me:null,
            }            
        default:
            return state;    
    }
}

