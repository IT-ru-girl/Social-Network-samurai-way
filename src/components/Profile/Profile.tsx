import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfleInfo';
import {AddPostActionType, ArrayPostsType2, ChangeNewTextActionType,} from '../../redux/state';

type PostsType = {
    posts: Array<ArrayPostsType2>
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
    // addPostCallback: (postMessage: string)=> void
    newPostText: string
    // onPostChange: (newPostText: string)=> void
}
const Profile = (props: PostsType) => {


    return (
        <div >
            <ProfileInfo/>
            <MyPosts  dispatch={props.dispatch} newPostText={props.newPostText} posts={props.posts} />
        </div>
    );
};

export default Profile;