import React from 'react';
import sodo_baccha from '../images/sodo_baccha.jpg';

export const ProfileImage = () => {
    return (
    <div className="col-md-2"> 
        <img src={sodo_baccha} alt="Avatar" className="avatar"></img>
    </div>
    );
}

