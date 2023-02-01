import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {
    ActionType,
    ArrayPostsType2, StoreType,
} from '../../../redux/store';

import {addPostAC, postChangeAC,} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

// type MyPostsContainerType={
//     // store: StoreType
    // posts: Array<ArrayPostsType2>
//     //
//     // addPostCallback: (postMessage: string)=> void
//     // onPostChange: (newPostText: string)=> void
//     // dispatch: (action: ActionType) => void
//     // newPostText: string
// }



const MyPostsContainer = () => {

//props: MyPostsContainerType

    return (
        <StoreContext.Consumer>{
            (store)=> {
                let state =  store.getState();

                const  addPost =()=> {

                    store.dispatch(addPostAC(state.dialogsPage.newMessageBody))
                }
                const onPostChange =(text:string)=>{

                    store.dispatch(postChangeAC(text))
                }
                return <MyPosts
                          onPostChange={onPostChange}
                          addPostCallback={addPost}
                          newPostText={state.profilePage.newPostText}
                          posts={state.profilePage.posts}
                />
            }
        }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;