
import React from "react";
const Post = (props) => {
    //props values: title, image, 
    const selectPost = async () => {
       await props.setCurrentPost(old=>props.post)
       await props.openModal()
    }
    return (
        <div className={props.class} onClick={() => {
            selectPost();
        }}>
            {/* <img src={props.image} alt={props.title} /> */}
            {props.title}
            {/* {props.text} */}
            {/* ADD MODAL HERE */}
        </div>
    )
}

export default Post;