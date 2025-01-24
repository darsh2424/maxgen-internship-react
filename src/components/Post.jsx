import React from 'react'

const Post = (props) => {
    const postData = props.postData
    return (
        <>
            <div className='post-container'>
                <h2>{props.heading}</h2>
                <div className='post-group'>
                    {postData.map((p, index) => (
                        <div className='post' key={index}>
                            <img className={props.boxShadow==="true"?("box-shadow"):("")} key={index} alt="post-img" src={p.imgUrl} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Post
