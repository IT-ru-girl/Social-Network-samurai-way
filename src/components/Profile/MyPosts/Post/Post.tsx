import React from 'react';
import s from './Post.module.css'

type MyPostsType={
    message: string
    likeCount: number
}


const Post = (props:MyPostsType) => {
    return (
        <div className={s.item}>
            <img src="https://amiel.club/uploads/posts/2022-03/1647762891_4-amiel-club-p-kartinki-litsa-cheloveka-4.jpg"
                 alt=""/>
            {props.message }
            <div><span>like </span>{props.likeCount}</div>
        </div>
    );
};

export default Post;