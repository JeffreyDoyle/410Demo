import {
    GET_ALL_POSTS_REQUEST,
    GET_ALL_POSTS_SUCCESS,
    GET_ALL_POSTS_FAILED,
    DELETE_ALL_POSTS_REQUEST,
    DELETE_ALL_POSTS_SUCCESS,
    DELETE_ALL_POSTS_FAILED
} from '../actions/posts.js';

export const initialState = {
    posts: [],
    meta: {
        loading: false,
        error: false,
    }
};

export default function postsReducer(state = initialState, action = {}) {
    switch (action.type) {
        case GET_ALL_POSTS_REQUEST:
        case DELETE_ALL_POSTS_REQUEST:
            return {
                ...state,
                meta: {
                    ...state.meta,
                    loading: true,
                }
            };
        case GET_ALL_POSTS_SUCCESS:
        case DELETE_ALL_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                meta: initialState.meta,
            };
        case GET_ALL_POSTS_FAILED:
        case DELETE_ALL_POSTS_FAILED:
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
