import * as PostsService from '../services/posts.js';

export const GET_ALL_POSTS_REQUEST = 'GET_ALL_POSTS_REQUEST';
export const GET_ALL_POSTS_SUCCESS = 'GET_ALL_POSTS_SUCCESS';
export const GET_ALL_POSTS_FAILED = 'GET_ALL_POSTS_FAILED';

export const DELETE_ALL_POSTS_REQUEST = 'DELETE_ALL_POSTS_REQUEST';
export const DELETE_ALL_POSTS_SUCCESS = 'DELETE_ALL_POSTS_SUCCESS';
export const DELETE_ALL_POSTS_FAILED = 'DELETE_ALL_POSTS_FAILED';

export const getAllPosts = () => {
    const request = PostsService.getAllPosts();

    return (dispatch) => {
        return dispatch({
            type: GET_ALL_POSTS_REQUEST,
        });
        request.then((payload) => dispatch({
            type: GET_ALL_POSTS_SUCCESS,
            payload,
        })).catch((error) => dispatch({
            type: GET_ALL_POSTS_FAILED,
            error,
        }));
    }
};

export const deleteAllPosts = () => {
    const request = PostsService.deleteAllPosts();

    return (dispatch) => {
        return dispatch({
            type: DELETE_ALL_POSTS_REQUEST,
        });
        request.then((payload) => dispatch({
            type: DELETE_ALL_POSTS_SUCCESS,
            payload,
        })).catch((error) => dispatch({
            type: DELETE_ALL_POSTS_FAILED,
            error,
        }));
    }
};
