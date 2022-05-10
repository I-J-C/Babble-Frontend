//Source for inspiration: https://www.digitalocean.com/community/tutorials/react-modal-component
const Modal = (props) => {
    const showHideClass = props.modalOn ? "modal display-block" : "modal display-none";
    const axios = require('axios');
    const baseURL = 'https://babble-tr-ijc.herokuapp.com/blog';

    //axios post request

    //axios put request


    //axios delete request


    //conditional form for modal
    const form = () => {
        if (props.currentPost) {
            //insert populated form here
            //submit and delete buttons
        }
        //empty form here
        //submit button only
    }

    return (
        <div className={showHideClass}>
            <section className="modal-main">
                {form}
            </section>
        </div>
    )
}

export default Modal;