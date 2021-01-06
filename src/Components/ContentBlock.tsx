import React from 'react';
import { ImageContent } from './ImageContent';
import { ProfileName } from './ProfileName';
import { SocialSharing } from './SocialSharing';
import { TextContent } from './TextContent';

export const ContentBlock = () => {
    return (
    <div className="col-md-10"> 
       <div className="row">
            <ProfileName date="Jan 04"/>
            <TextContent/>
            <ImageContent/>
            <SocialSharing NrComments={2} NrRetweet={5} NrLove={4}  />
       </div>
    </div>
    );
}

