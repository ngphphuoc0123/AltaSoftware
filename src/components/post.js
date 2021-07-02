import React, { useEffect, useState } from 'react';
import { fetchAllPosts } from '../api/api';
import PostDetail from './postDetail';

const Post = () => {
    const [allPosts, setAllPosts] = useState([]);
    
    useEffect(() => {
        fetchAllPosts()
            .then(rs => setAllPosts(rs.data))
            .catch(err => console.log(err))
    }, [])

    if (allPosts) {
        return allPosts.map((item, key) =>
            <PostDetail post={item} key={key} />
        )
    }
}
export default Post;