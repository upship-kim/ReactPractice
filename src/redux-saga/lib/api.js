import axios from 'axios';

export const getPost = (userId) => {
    return axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
};

export const getAlbum = (id) => {
    return axios.get(
        `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
    );
};

export const getTodoList = () => {
    return axios.get('https://jsonplaceholder.typicode.com/todos');
};
