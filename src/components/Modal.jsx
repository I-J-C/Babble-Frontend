//Source for inspiration: https://www.digitalocean.com/community/tutorials/react-modal-component
import { useEffect } from 'react';
const Modal = (props) => {
    const showHideModal = props.modalOn ? "modal display-block" : "modal display-none";
    const showHideDeleteButton = props.currentPost ? "display-block" : "display-none";
    const axios = require('axios');
    const baseURL = 'https://babble-tr-ijc.herokuapp.com/blog';
    let textInput = props.currentPost? props.currentPost.text: '';
    let titleInput = props.currentPost? props.currentPost.title: '';
    let imageInput = props.currentPost? props.currentPost.image: '';
    //axios post request
    const newPost = () => {
        axios.post(baseURL,{
            titleInput,
            imageInput,
            textInput
        })
        .then(response=>{
            console.log(response.data);
        })
        //then redirect to main?
    }
    //axios put request
    const updatePost = () => {
        axios.put(baseURL+'/'+props.currentPost._id,{
            titleInput,
            imageInput,
            textInput
        })
        .then(response=>{
            console.log(response.data);
        })
        //then redirect to main?
    }

    //axios delete request
    const deletePost = () => {
        axios.delete(baseURL+'/'+props.currentPost._id)
        .then(response=>{
            //redirect to main?
        })
    }

    useEffect (()=>{
        // textInput = props.currentPost? props.currentPost.text: '';
        // titleInput = props.currentPost? props.currentPost.title: '';
        // imageInput = props.currentPost? props.currentPost.image: '';
    }, [props.modalOn, props.currentPost])

    return (
        <div className={showHideModal}>
            <section className="modal-main">
            {/* <label> Course: 
                    <input type="text"
                    placeholder="Enter course here"
                    value={student.course}
                    onChange={(e) => {setStudent({ ...student, course: e.target.value})}}/>
                </label> */}
                MODAL
                {/* {form} */}
                <form className='modal-form'>
                <label>Title: <input className='title-input'
                              type="text" 
                              placeholder="title" 
                              defaultValue={props.currentPost?props.currentPost.title:""} 
                              onChange={(e)=>{
                                titleInput = e.target.value;
                }} /></label>
                <label>Image: <input className='image-input' type="text" defaultValue={props.currentPost?props.currentPost.image:""} onChange={(e)=>{
                    imageInput = e.target.value;
                }} /></label>
                <label>Text: <input className='text-input' type="text" defaultValue={props.currentPost?props.currentPost.text:""} onChange={(e)=>{
                    textInput = e.target.value;
                }} /></label>
            
                <button type='submit' className='submit-button'  onClick={(e)=>{
                    e.preventDefault();
                    if(props.currentPost) {
                        updatePost();
                    }else{
                        newPost();
                    }
                    props.setCurrentPost(old=>null);
                    props.closeModal();
                }}>Submit</button>
                <button type='submit' className={`delete-button ${showHideDeleteButton}`} onClick={(e)=>{
                    e.preventDefault();
                    //axios delete function here
                    deletePost();
                    //remove current post
                    props.setCurrentPost(old=>null);
                    //close modal
                    props.closeModal();
                }}></button>
                </form>
            </section>
        </div>
    )
}

export default Modal;