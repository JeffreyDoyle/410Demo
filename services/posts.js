import axios from 'axios';

export const getAllPosts = () => {
    const url = '/posts';

    const requestConfig = {
        method: 'get',
        url,
    };

    const request = axios(requestConfig);

    return request;
};

export const deleteAllPosts = () => {
    const url = '/posts';

    const requestConfig = {
        method: 'delete',
        url,
    };

    const request = axios(requestConfig);

    return request;
};
