import axios from 'axios';

export const getAllUsers = () => {
    const url = '/users';

    const requestConfig = {
        method: 'get',
        url,
    };

    const request = axios(requestConfig);

    return request;
};

export const updateUser = (uuid, payload) => {
    const url = `/users/${uuid}`;

    const requestConfig = {
        data: payload,
        method: 'put',
        url,
    };

    const request = axios(requestConfig);

    return request;
};
