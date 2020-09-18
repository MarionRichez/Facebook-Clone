import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://images.unsplash.com/photo-1568734066241-45094773addb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                profileSrc="https://images.unsplash.com/photo-1597096793378-0639088483e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                title="Sheena Earl"
            />
            <Story
                image="https://images.unsplash.com/photo-1582192330302-b24e8ad458b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80"
                profileSrc="https://images.unsplash.com/photo-1599986146464-d11377649c3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
                title="Van Darby"
            />
            <Story
                image="https://images.unsplash.com/photo-1588208265940-80a7c7d1619d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                profileSrc="https://images.unsplash.com/photo-1599488981203-d107749d9feb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                title="Angus Saunders"
            />
            <Story
                image="https://images.unsplash.com/photo-1559294824-627e9738df81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                profileSrc="https://images.unsplash.com/photo-1585282779872-6ec1b149e551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                title="Lewis Colton"
            />
            <Story
                image="https://images.unsplash.com/photo-1599824567234-b8bc5dbcd02e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
                profileSrc="https://images.unsplash.com/photo-1598639908604-9d184deda456?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                title="Tracy Evanson"
            />
        </div>
    )
}

export default StoryReel
