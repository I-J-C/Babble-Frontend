import { useEffect, useState, useCallback } from "react";
import Post from "./Post";


const PostContainer = (props) => {
    const axios = require('axios');
    const baseURL = 'https://babble-tr-ijc.herokuapp.com/blog';
    const [posts, setPosts] = useState([]);
    

    const getPosts = useCallback( () => {
        let postData = []
        axios.get(baseURL)
        .then(response=>{
            console.log(response.data);
            postData = response.data;
            setPosts(old=>[]);
        }).then(()=>{
            //trying to resove the unsafe references issue
            for (let i=0; i<postData.length; i++) {
                setPosts(old=>[...old, postData[i]]);
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
                <Post class={"blogpost"} id={post._id} image={post.image} text={post.text} title={post.title} key={index} openModal={props.openModal} setCurrentPost={props.setCurrentPost}/>
            ))}
        </div>
    )
}

export default PostContainer;