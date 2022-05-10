import React from "react";
import Babbleheader from '../babbleLogo.png';
const Header = () => {
    return (
        <div>
            <img className="app-logo"src={Babbleheader} alt="logo"/>
            <h3> See what's buzzing on Babble</h3>
        </div>
    )
}

export default Header;