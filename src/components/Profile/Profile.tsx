import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfleInfo';
import {ActionType, ArrayPostsType2,} from '../../redux/state';

type PostsType = {
    posts: Array<ArrayPostsType2>
    dispatch: (action: ActionType) => void
    // addPostCallback: (postMessage: string)=> void
    postMessage: string
    // onPostChange: (newPostText: string)=> void
}
const Profile = (props: PostsType) => {


    return (
        <div >
            <ProfileInfo/>
            <MyPosts  dispatch={props.dispatch} postMessage={props.postMessage} posts={props.posts} />
        </div>
    );
};

export default Profile;