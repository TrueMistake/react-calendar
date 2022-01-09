
export interface AuthState {
    isAuth: boolean
}

export enum AuthActionEnum {
    SET_AUTH = "SET_AUTH"
}

interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH,
    payload: boolean
}

export type AuthAction = SetAuthAction

/*
interface SetUser {
    type: AuthActionEnum.SET_AUTH,
    payload: boolean
}
interface SetLoading {
    type: AuthActionEnum.SET_AUTH,
    payload: boolean
}*/
