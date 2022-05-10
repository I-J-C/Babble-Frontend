import {useEffect, useCallback} from 'react';
import React from "react";
const Post = (props) => {
    //props values: title, image, 
    const selectPost = () => {
       props.currentPost.current = props.post;
       console.log(props.currentPost)
    }

    const postRef = useCallback((node)=>{
        console.log(node);
    }, [props.currentPost])

    return (
        <div ref={postRef} className={props.class} onClick={() => {
            selectPost();
            props.setShow(true);
        }}>
            <img className="images"src={props.image} alt={props.title} />
            <div className="title"> {props.title}</div>
            <div> {props.text} </div>

            {/* ADD MODAL HERE */}
        </div>
    )
}

export default Post;