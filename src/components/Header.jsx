import React from "react";
import Babbleheader from '../babbleLogo.png';
const Header = () => {
    return (
        <div>
            <img className="app-logo"src={Babbleheader} alt="logo"/>
            <h3> An anonymous blog where everyone is welcomed to come babble</h3>
        </div>
    )
}

export default Header;