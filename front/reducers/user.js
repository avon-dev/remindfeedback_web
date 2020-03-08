export const initialState = {
  isLoggedIn: false, // 로그인 여부
  isLoggingIn: false, // 로그인 시도중
  logInErrorReason: "", // 로그인 실패 사유

  isCheckedEmail: false, // 이메일 승인 여부
  isCheckingEmail: false, // 이메일 승인 시도중
  CheckedEmailErrorReason: "", // 이메일 승인 실패 사유

  isSignedUp: false, // 회원가입 성공
  isSigningUp: false, // 회원가입 시도중
  hasMessage: false, // 로그인, 회원가입 실패 - 메시지
  signUpErrorReason: "", // 회원가입 실패 사유

  isLoggingOut: false, // 로그아웃 시도중
  isLogout: false, // 로그아웃 여부
  logOutReason: "", // 로그아웃 실패 사유

  UnregisteringOut: false, // 회원탈퇴 시도중
  isUnregister: false, // 회원탈퇴 여부
  UnregisterReason: "", // 회원탈퇴 실패 사유

  isUpdatingPassword: false, // 비밀번호 변경 중
  isUpdatedPassword: false, // 비밀번호 변경 성공
  UpdatedPasswordReason: "", // 비밀번호 변경 실패 사유

  isLoadingMyInfo: false, // 마이페이지 로드 중
  isLoadedMyInfo: false, // 마이페이지 로드 성공
  LoadedMyInfoReason: "", // 마이페이지 로드 실패 사유

  isUpdatingMyInfo: false, // 마이페이지 업데이트 중
  isUpdatedMyInfo: false, // 마이페이지 업데이트 성공
  UpdatedMyInfoReason: "", // 마이페이지 업데이트 실패 사유

  isDeletingPhoto: false, // 마이페이지 사진 삭제 중
  isDeletedPhoto: false, // 마이페이지 사진 삭제 성공
  DeletedPhotoReason: "", // 마이페이지 사진 삭제 실패 사유

  me: {
    email: "",
    nickname: "",
    introduction: "",
    portrait: "",
    tutorial: null,
    msg: ""
  } // 내 정보
};

export const MOVE_TO_SIGNUP = "MOVE_TO_SIGNUP"; // 회원가입 창 이동

export const LOG_IN_REQUEST = "LOG_IN_REQUEST"; // 로그인 시도 중
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS"; // 로그인 성공
export const LOG_IN_HASEMAIL = "LOG_IN_HASEMAIL"; // 회원가입 이메일 있는 경우
export const LOG_IN_FAILURE = "LOG_IN_FAILURE"; // 로그인 실패

export const CHECK_EMAIL_REQUEST = "CHECK_EMAIL_REQUEST"; // 이메일 인증 시도 중
export const CHECK_EMAIL_SUCCESS = "CHECK_EMAIL_SUCCESS"; // 이메일 인증 성공
export const CHECK_EMAIL_FAILURE = "CHECK_EMAIL_FAILURE"; // 이메일 인증 실패

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST"; // 회원가입 시도 중
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS"; // 회원가입 성공
export const SIGN_UP_HASEMAIL = "SIGN_UP_HASEMAIL"; // 회원가입 이메일 있는 경우
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE"; // 회원가입 실패

export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST"; // 사용자 정보 가져오는 중
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS"; // 사용자 정보 가져오기 성공
export const LOAD_USER_FAILURE = "LOAD_USER_FAILURE"; // 사용자 정보 가져오기 실패

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST"; // 사용자 정보 업데이트 중
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS"; // 사용자 정보 업데이트 성공
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE"; // 사용자 정보 업데이트 실패

export const DELTE_USER_PHOTO_REQUEST = "DELTE_USER_PHOTO_REQUEST"; // 사용자 사진 삭제 중
export const DELTE_USER_PHOTO_SUCCESS = "DELTE_USER_PHOTO_SUCCESS"; // 사용자 사진 삭제 성공
export const DELTE_USER_PHOTO_FAILURE = "DELTE_USER_PHOTO_FAILURE"; // 사용자 사진 삭제 실패

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST"; // 로그아웃 시도 중
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS"; // 로그아웃 성공
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE"; // 로그아웃 실패

export const UNREGISTER_REQUEST = "UNREGISTER_REQUEST"; // 회원탈퇴 시도 중
export const UNREGISTER_SUCCESS = "UNREGISTER_SUCCESS"; // 회원탈퇴 성공
export const UNREGISTER_FAILURE = "UNREGISTER_FAILURE"; // 회원탈퇴 실패

export const UPDATE_PASSWORD_REQUEST = "UPDATE_PASSWORD_REQUEST"; // 비밀번호 변경 시도 중
export const UPDATE_PASSWORD_SUCCESS = "UPDATE_PASSWORD_SUCCESS"; // 비밀번호 변경 성공
export const UPDATE_PASSWORD_FAILURE = "UPDATE_PASSWORD_FAILURE"; // 비밀번호 변경 실패

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVE_TO_SIGNUP:
      return {
        ...state,
        isSigningUp: false,
        isSignedUp: false,
        hasMessage: false,
        isLoggingIn: false,
        isLogout: false,
        me: {
          email: "",
          nickname: "",
          introduction: "",
          portrait: "",
          tutorial: null,
          msg: ""
        },
        message: "",
        success: false
      };
    case LOG_IN_HASEMAIL:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        hasMessage: true,
        me: {
          ...state.me,
          email: "",
          nickname: "",
          msg: action.data
        }
      };

    case LOG_IN_REQUEST:
      return {
        ...state,
        isLoggingIn: true
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        hasMessage: false,
        me: {
          ...state.me,
          email: action.data.email,
          introduction: action.data.introduction,
          portrait: action.data.portrait,
          nickname: action.data.nickname,
          tutorial: action.data.tutorial
        },
        message: action.data.success ? action.data.message : ""
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        logInErrorReason: action.error,
        me: null
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        isSigningUp: true
      };
    case SIGN_UP_HASEMAIL:
      return {
        ...state,
        isSigningUp: false,
        isSignedUp: false,
        hasMessage: true,
        me: {
          ...state.me,
          email: "",
          nickname: "",
          msg: action.data.message
        }
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
        isSignedUp: true,
        hasMessage: false,
        me: {
          ...state.me,
          email: action.data.data.email,
          nickname: action.data.data.nickname,
          msg: action.data.message
        }
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isSigningUp: false,
        isSignedUp: false,
        hasMessage: false,
        signUpErrorReason: action.error,
        me: null
      };
    case LOAD_USER_REQUEST:
      return {
        ...state,
        isLoadingMyInfo: true,
        isLoadedMyInfo: false
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        isLoadingMyInfo: false,
        isLoadedMyInfo: true,
        me: {
          ...state.me,
          email: action.data.data.email,
          introduction: action.data.data.introduction,
          portrait: action.data.data.portrait,
          nickname: action.data.data.nickname
        }
      };
    case LOAD_USER_FAILURE:
      return {
        ...state,
        isLoadingMyInfo: false,
        isLoadedMyInfo: false,
        LoadedMyInfoReason: action.error,
        me: null
      };

    case UPDATE_USER_REQUEST:
      return {
        ...state,
        isUpatingMyInfo: true,
        isUpatdedMyInfo: false
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isUpatingMyInfo: false,
        isUpatdedMyInfo: true,
        me: {
          ...state.me,
          email: action.data.data.email,
          introduction: action.data.data.introduction,
          portrait: action.data.data.portrait,
          nickname: action.data.data.nickname
        },
        message: action.data.success ? action.data.message : ""
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        isUpatingMyInfo: false,
        isUpatdedMyInfo: false,
        UpatdedMyInfoReason: action.error,
        me: null
      };

    case DELTE_USER_PHOTO_REQUEST:
      return {
        ...state,
        isDeletingPhoto: true,
        isDeletedPhoto: false
      };
    case DELTE_USER_PHOTO_SUCCESS:
      return {
        ...state,
        isDeletingPhoto: false,
        isDeletedPhoto: true,
        me: {
          ...state.me,
          portrait: ""
        },
        message: action.data.success ? action.data.message : ""
      };
    case DELTE_USER_PHOTO_FAILURE:
      return {
        ...state,
        isDeletingPhoto: false,
        isDeletedPhoto: false,
        DeletedPhotoReason: action.error,
        me: null
      };

    case LOG_OUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        isLogout: false,
        isLoggedIn: false,
        me: {
          email: "",
          nickname: "",
          introduction: "",
          portrait: "",
          tutorial: null,
          msg: ""
        }
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingOut: false,
        isLogout: true
      };
    case LOG_OUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        isLogout: true,
        logOutReason: action.error
      };

    case UNREGISTER_REQUEST:
      return {
        ...state,
        UnregisteringOut: true,
        isUnregister: false
      };
    case UNREGISTER_SUCCESS:
      return {
        ...state,
        UnregisteringOut: false,
        isUnregister: true
      };
    case UNREGISTER_FAILURE:
      return {
        ...state,
        UnregisteringOut: false,
        isUnregister: false,
        UnregisterReason: action.error
      };

    case UPDATE_PASSWORD_REQUEST:
      return {
        ...state,
        isUpdatingPassword: true,
        isUpdatedPassword: false
      };
    case UPDATE_PASSWORD_SUCCESS:
      let message = action.data.message;
      let success = false;
      if (action.data.success) {
        success = true;
      }
      return {
        ...state,
        isUpdatingPassword: false,
        isUpdatedPassword: true,
        message: message,
        success: success
      };
    case UPDATE_PASSWORD_FAILURE:
      return {
        ...state,
        isUpdatingPassword: false,
        isUpdatedPassword: false,
        UpdatedPasswordReason: action.error
      };

    case CHECK_EMAIL_REQUEST:
      return {
        ...state,
        isCheckingEmail: true,
        isCheckedEmail: false
      };
    case CHECK_EMAIL_SUCCESS:
      let successs = false;
      let messages = action.data.message;
      if (action.data.success) {
        successs = true;
      }

      return {
        ...state,
        isCheckingEmail: false,
        isCheckedEmail: true,
        success: successs,
        message: messages
      };
    case CHECK_EMAIL_FAILURE:
      return {
        ...state,
        isCheckingEmail: false,
        isCheckedEmail: false,
        CheckedEmailErrorReason: action.error
      };
    default:
      return state;
  }
};
