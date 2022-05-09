import { useEffect, useState, useCallback } from "react";
import Post from "./Post";


const PostContainer = () => {
    const axios = require('axios');
    const baseURL = 'https://babble-tr-ijc.herokuapp.com/blog'
    const [posts, setPosts] = useState([]);
    

    const getPosts = useCallback(() => {
        axios.get(baseURL)
        .then(response=>{
            console.log(response.data);
            setPosts(old=>[]);
        }).then(response=>{
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
        <div>
            {/* <button onClick={getPosts}>Get POSTS here</button> */}
            POST CONTAINER
            {posts?.map((post, index) => (
                <Post id={post._id} image={post.image} text={post.text} title={post.title} key={index} class={"blogpost"} />
            ))}
        </div>
    )
}

export default PostContainer;