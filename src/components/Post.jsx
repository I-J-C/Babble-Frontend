
import React from "react";
const Post = (props) => {
    //props values: title, image, 
    return (
        <div className={props.class}>
            <img className="images"src={props.image} alt={props.title} />
            <div className="title"> {props.title}</div>
            <div> {props.text} </div>
            {/* ADD MODAL HERE */}
        </div>
    )
}

export default Post;