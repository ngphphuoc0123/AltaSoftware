// import React from 'react';
import axios from 'axios'
export const fetchAllPosts = async () => {
    return axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts'
    })
}

export const fetchComments = async (id) => {
    return axios({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    })
}

export const fetchUserPost = async (id) => {
    return axios({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    })
}

export const fetchDeletePost = async (id) => {
    return axios({
        method: 'DELETE',
        url: `https://jsonplaceholder.typicode.com/posts/${id}`
    })
}