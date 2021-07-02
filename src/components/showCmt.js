import React from 'react';

const ShowCmt = ({ cmt }) => {
    return (cmt.map(item =>
        <div className='comment'>
             {item.body}
        </div>
    )
    )
}
export default ShowCmt;