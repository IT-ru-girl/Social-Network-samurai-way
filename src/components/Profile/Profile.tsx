import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfleInfo';
import {ArrayPostsType2,} from '../../redux/state';

type PostsType = {
    posts: Array<ArrayPostsType2>

    addPostCallback: (postMessage: string)=> void
    newPostText: string
    onPostChange: (newPostText: string)=> void
}
const Profile = (props: PostsType) => {


    return (
        <div >
            <ProfileInfo/>
            <MyPosts  onPostChange={props.onPostChange} newPostText={props.newPostText} posts={props.posts} addPostCallback={props.addPostCallback} />
        </div>
    );
};

export default Profile;