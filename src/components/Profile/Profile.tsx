import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfleInfo';
import {ActionType, ArrayPostsType2, StoreType,} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';

type PostsType = {
    // store: StoreType
    // posts: Array<ArrayPostsType2>
    // dispatch: (action: ActionType) => void
    // addPostCallback: (postMessage: string)=> void
    // newPostText: string
    // onPostChange: (newPostText: string)=> void
}
const Profile = (props: PostsType) => {


    return (
        <div >
            <ProfileInfo/>
            <MyPostsContainer
                // store={props.store}
            />

                {/*<MyPosts  dispatch={props.dispatch} postMessage={props.postMessage} posts={props.posts}/>*/}

        </div>
    );
};

export default Profile;