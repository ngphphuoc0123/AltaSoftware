import React, { useEffect, useState } from 'react';
import { fetchComments, fetchDeletePost } from '../api/api';
import ShowCmt from './showCmt';

const PostDetail = ({ post }) => {
    const [showComment, setShowComment] = useState(false)
    const [cmt, setCmt] = useState()
    useEffect(() => {
        fetchComments(post.id).then(rs => setCmt(rs.data))
    }, [])
    return (
        <>
            <div className='post'>
                <div className='post-title'>
                    POST {post.title}
                </div>
                <div className='handlePost'>
                    <div className='showComment' onClick={() => { setShowComment(!showComment) }}>
                        Comments
                    </div >
                    <div className='del' onClick={() => { fetchDeletePost(post.id) }}>Delete</div>
                </div>
                {showComment && <ShowCmt cmt={cmt} />}
            </div>
        </>
    )
}
export default PostDetail;
