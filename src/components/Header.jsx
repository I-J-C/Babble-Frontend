import React from "react";
import Babbleheader from '../babbleLogo.png';
import bee from '../bee.png'
const Header = () => {
    return (
        <div>
            <img className="app-logo"src={Babbleheader} alt="logo"/>
            <img className="bee" src={bee} alt="bee"/>
            <h3> See what's buzzing on Babble</h3>
        </div>
    )
}

export default Header;