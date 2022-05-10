import React from "react";
const AddPost = (props) => {
    return (
        <div onClick={props.handleShow} className="add-post">
            ADD POST
        </div>
    )
}

export default AddPost;