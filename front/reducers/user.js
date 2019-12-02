
export const initialState = {
    isLoggedIn: false, // 로그인 여부
    isLoggingIn: false, // 로그인 시도중
    logInErrorReason: '', // 로그인 실패 사유

    isSignedUp: false, // 회원가입 성공
    isSigningUp: false, // 회원가입 시도중
    hasMessage:false, // 로그인, 회원가입 실패 - 메시지
    signUpErrorReason: '', // 회원가입 실패 사유 

    isLoggingOut: false, // 로그아웃 시도중
    isLogout: false, // 로그아웃 여부
    logOutReason: '', // 로그아웃 실패 사유

    isLoadingMyInfo: false, // 마이페이지 로드 중
    isLoadedMyInfo: false, // 마이페이지 성공
    LoadedMyInfoReason: '', // 마이페이지 실패 사유

    me:{
        email: '',
        nickname: '',
        introduction:'',
        portrait:'',
        tutorial:null,
        msg:'',
    }, // 내 정보 
}

export const MOVE_TO_SIGNUP = 'MOVE_TO_SIGNUP'; // 회원가입 창 이동

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // 로그인 시도 중
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 로그인 성공
export const LOG_IN_HASEMAIL = 'LOG_IN_HASEMAIL'; // 회원가입 이메일 있는 경우
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 로그인 실패

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'; // 회원가입 시도 중
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'; // 회원가입 성공
export const SIGN_UP_HASEMAIL = 'SIGN_UP_HASEMAIL'; // 회원가입 이메일 있는 경우
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'; // 회원가입 실패

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'; // 사용자 정보 가져오는 중
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS'; // 사용자 정보 가져오기 성공
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE'; // 사용자 정보 가져오기 실패

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'; // 로그아웃 시도 중
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'; // 로그아웃 성공
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; // 로그아웃 실패

export default (state = initialState, action ) => {
    switch(action.type){
        case MOVE_TO_SIGNUP:
            return{
                ...state,
                isSigningUp: false,
                isSignedUp: false,
                hasMessage: false,
                me:{
                    ...state.me,
                    email: '',
                    password: '',
                    nickname: '',
                    msg:'',
                }
            }  
        case LOG_IN_HASEMAIL:
            return{
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
                hasMessage: true,
                me:{
                    ...state.me,
                    email:'',
                    nickname:'',
                    msg: action.data,
                },
            }

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
                hasMessage: false,
                me:{
                    ...state.me,
                    email:action.data.email,
                    introduction:action.data.introduction,
                    portrait:action.data.portrait,
                    nickname:action.data.nickname,
                    tutorial:action.data.tutorial,
                },
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
            }
        case SIGN_UP_HASEMAIL:
            return{
                ...state,
                isSigningUp: false,
                isSignedUp: false,
                hasMessage: true,
                me:{
                    ...state.me,
                    email:'',
                    nickname:'',
                    msg: action.data.msg,
                },
            }    
        case SIGN_UP_SUCCESS:
            return{
                ...state,
                isSigningUp: false,
                isSignedUp: true,
                hasMessage: false,
                me:{
                    ...state.me,
                   email:action.data.email,
                   nickname:action.data.nickname,
                   msg:'', 
                },
            }
        case SIGN_UP_FAILURE:
            return{
                ...state,
                isSigningUp: false,
                isSignedUp: false,
                hasMessage: false,
                signUpErrorReason:action.error,
                me:null,
            }
        case LOAD_USER_REQUEST:
            return{
                ...state,
                isLoadingMyInfo: true,
                isLoadedMyInfo:false,
            }
        case LOAD_USER_SUCCESS:
            return{
                ...state,
                isLoadingMyInfo: false,
                isLoadedMyInfo:true,
                me:{
                    ...state.me,
                    email:action.data.email,
                    introduction:action.data.introduction,
                    portrait:action.data.portrait,
                    nickname:action.data.nickname,
                    tutorial:action.data.tutorial,
                },
            }
        case LOAD_USER_FAILURE:
            return{
                ...state,
                isLoadingMyInfo:false,
                isLoadedMyInfo:false,
                LoadedMyInfoReason:action.error,
                me:null,
            }
        case LOG_OUT_REQUEST:
            return{
                ...state,
                isLoggingOut: true,
                isLogout:false,
            }
        case LOG_OUT_SUCCESS:
            return{
                ...state,
                isLoggingOut: false,
                isLogout:true,
            }
        case LOG_OUT_FAILURE:
            return{
                ...state,
                isLoggingOut: false,
                isLogout:false,
                logOutReason:action.error,
            }                    
        default:
            return state;    
    }
}

