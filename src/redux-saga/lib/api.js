import axios from 'axios';

export const getPost = (userId) => {
    return axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
};
