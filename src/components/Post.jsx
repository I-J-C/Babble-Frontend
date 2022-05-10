
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
            <img className="images"src={props.image} alt={props.title} />
            <div className="title"> {props.title}</div>
            <div> {props.text} </div>

            {/* ADD MODAL HERE */}
        </div>
    )
}

export default Post;