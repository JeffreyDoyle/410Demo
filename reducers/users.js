import {
    GET_ALL_USERS_REQUEST,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAILED,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED
} from '../actions/users.js';

export const initialState = {
    users: [],
    meta: {
        loading: false,
        error: false,
    }
};

export default function usersReducer(state = initialState, action = {}) {
    switch (action.type) {
        case UPDATE_USER_REQUEST:
        case GET_ALL_USERS_REQUEST:
            return {
                ...state,
                meta: {
                    ...state.meta,
                    loading: true,
                }
            };
        case GET_ALL_USERS_SUCCESS:
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                users: action.payload,
                meta: initialState.meta,
            };
        case GET_ALL_USERS_FAILED:
        case UPDATE_USER_FAILED:
            return {
                ...state,
                meta: {
                    loading: false,
                    error: true,
                }
            };
        default:
            return state;
    }
}
