import React from 'react';

interface ProfileNameProps{
    date: string
}

export const ProfileName: React.FC<ProfileNameProps> = ({date}) => {
    return (
    <>
     <span className="profile-title"><a href='#' >Masud Rana</a></span>
     &nbsp;&nbsp;
     <span className="profile-name"><a href='#' >@MindfulOnline </a></span>
     <span className="profile-name"><a href='#' >&nbsp;. {date}</a></span>
     </>  
    );
}

