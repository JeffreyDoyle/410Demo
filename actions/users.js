import * as UsersService from '../services/users.js';

export const GET_ALL_USERS_REQUEST = 'GET_ALL_USERS_REQUEST';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_FAILED = 'GET_ALL_USERS_FAILED';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

export const getAllUsers = () => {
    const request = UsersService.getAllUsers();

    return (dispatch) => {
        return dispatch({
            type: GET_ALL_USERS_REQUEST,
        });
        request.then((payload) => dispatch({
            type: GET_ALL_USERS_SUCCESS,
            payload,
        })).catch((error) => dispatch({
            type: GET_ALL_USERS_FAILED,
            error,
        }));
    }
};

export const updateUser = (payload, uuid) => {
    const request = UsersService.updateUser(payload, uuid);

    return (dispatch) => {
        return dispatch({
            type: UPDATE_USER_REQUEST,
        });
        request.then((payload) => dispatch({
            type: UPDATE_USER_SUCCESS,
            payload,
        })).catch((error) => dispatch({
            type: UPDATE_USER_FAILED,
            error,
        }));
    }
};
