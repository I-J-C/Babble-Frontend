
import React from "react";
const Post = (props) => {
    //props values: title, image, 
    return (
        <div className={props.class}>
            {/* <img src={props.image} alt={props.title} /> */}
            {props.title}
            {/* {props.text} */}
            {/* ADD MODAL HERE */}
        </div>
    )
}

export default Post;