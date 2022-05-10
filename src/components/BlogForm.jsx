// import { useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const BlogForm = (props) => {
    const axios = require('axios');
    let textInput;
    let titleInput;
    let imageInput;


    return (
        <div>
               <Form>
                   <Form.Group>
                       <Form.Label>Title</Form.Label>
                       <Form.Control
                        type='text'
                        placeholder='Title'
                        defaultValue={props.currentPost.current?props.currentPost.current.title:""}
                        required
                       />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Image</Form.Label>
                       <Form.Control
                        type='text'
                        placeholder='Image URL'
                        defaultValue={props.currentPost.current?props.currentPost.current.image:""}
                        required
                       />
                       </Form.Group>
                       <Form.Group>
                        <Form.Label>Content</Form.Label>
                       <Form.Control
                        as='textarea'
                        placeholder='Text'
                        defaultValue={props.currentPost.current?props.currentPost.current.text:""}
                        required
                       />
                   </Form.Group>
               </Form>
        </div>
    )
}

export default BlogForm;
