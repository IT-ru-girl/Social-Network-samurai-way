import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {
    ActionType,
    ArrayPostsType2, StoreType,
} from '../../../redux/store';

import {addPostAC, postChangeAC,} from '../../../redux/profile-reducer'
type PostsType = {
    // store: StoreType
    posts: Array<ArrayPostsType2>
    addPostCallback: (postMessage: string)=> void
    onPostChange: (newPostText: string)=> void
    // dispatch: (action: ActionType) => void
    newPostText: string
}




const MyPosts = (props: PostsType) => {


    let postsElements = props.posts.map(post => {
        return (
            <Post message={post.message} likeCount={post.likesCount}/>
        )
    })


    const  addPost =()=> {
        props.addPostCallback(props.newPostText)
        // props.dispatch({type: 'ADD-POST', newPostText: props.newPostText })
    }

    const onPostChange =(event: ChangeEvent<HTMLTextAreaElement>)=>{
      const newPostText = event.currentTarget.value
         props.onPostChange(newPostText)

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange}  ></textarea>
                </div>
                <div>
                    <button  onClick={addPost} >Add posts</button>
                </div>
            </div>
            <div>
                new post
            </div>
            <div className={s.posts}>
                {postsElements}
                {/*<Post message={posts[1].message} likeCount={posts[1].likesCount} />*/}
                {/*<Post message={posts[2].message} likeCount={posts[2].likesCount} />*/}
                {/*<Post message={posts[3].message} likeCount={posts[3].likesCount} />*/}
                {/*<Post message={posts[4].message} likeCount={posts[4].likesCount} />*/}
            </div>
        </div>
    );
};

export default MyPosts;