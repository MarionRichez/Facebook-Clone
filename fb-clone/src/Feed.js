import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post
                profilePic="https//avatars2.githubbusercontent.com/u/247129567s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
                message="WOW this works"
                timestamp="This is a timestamp"
                username="noir"
                image="https://code.org/shared/images/social-media/codeorg2019_social.png"

            />
        </div>
    )
}

export default Feed
