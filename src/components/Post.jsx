
const Post = (props) => {
    //props values: title, image, 
    return (
        <div className={props.class}>
            {/* <img src={props.image} alt={props.title} /> */}
            {props.title}
            {/* {props.text} */}
        </div>
    )
}

export default Post;