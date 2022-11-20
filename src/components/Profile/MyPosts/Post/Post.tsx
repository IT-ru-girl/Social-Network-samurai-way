import React from 'react';
import s from './Post.module.css'

type MyPostsType={
    message: string
    likeCount: number
}


const Post = (props:MyPostsType) => {
    return (
        <div className={s.item}>
            <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"
                 alt=""/>
            {props.message }
            <div><span>like </span>{props.likeCount}</div>
        </div>
    );
};

export default Post;