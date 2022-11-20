import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfleInfo';
import { PostsType} from '../../redux/state';

const Profile = (props: PostsType) => {


    return (
        <div >
            <ProfileInfo/>
            <MyPosts posts={props.posts}  />
        </div>
    );
};

export default Profile;