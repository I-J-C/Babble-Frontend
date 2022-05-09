import { useEffect, useState } from "react";
import Post from "./Post";


const PostContainer = () => {
    const axios = require('axios');
    const baseURL = 'https://babble-tr-ijc.herokuapp.com/blog'
    const [posts, setPosts] = useState([]);
    let postData = [];

    const getPosts = () => {
        axios.get(baseURL)
        .then(response=>{
            console.log(response.data);
            postData = response.data;
            setPosts(old=>[]);
        }).then(response=>{
            for (let i=0; i<postData.length; i++) {
                setPosts(old=>[...old, postData[i]]);
        }
        })
    }

    useEffect(()=>{
        getPosts();
    }, [])

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