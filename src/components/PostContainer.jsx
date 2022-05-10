import { useEffect, useState, useCallback } from "react";
import Post from "./Post";


const PostContainer = (props) => {
    const axios = require('axios');
    const baseURL = 'https://babble-tr-ijc.herokuapp.com/blog';
    const [posts, setPosts] = useState([]);
    

    const getPosts = useCallback( () => {
        axios.get(baseURL)
        .then(response=>{
            console.log(response.data);
            setPosts(old=>[]);
            for (let i=0; i<response.data.length; i++) {
                setPosts(old=>[...old, response.data[i]]);
        }
        })
    }, [axios])

    useEffect(()=>{
        getPosts();
    }, [getPosts])

    // const mapPosts = postData.map((post, index) => {
    //         <Post image={post.image} text={post.text} title={post.title} key={index} class={"blogpost"} />
    //     })

    // debugger;
    return (
        <div className="container">
            {/* <button onClick={getPosts}>Get POSTS here</button> */}
            
            {posts?.map((post, index) => (
                <Post class={"blogpost"} 
                id={post._id} 
                image={post.image} 
                text={post.text} 
                title={post.title} 
                key={index} 
                setShow={props.setShow} 
                setCurrentPost={props.setCurrentPost} 
                currentPost={props.currentPost}/>
            ))}
        </div>
    )
}

export default PostContainer;