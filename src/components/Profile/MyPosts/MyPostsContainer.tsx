import React, { ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {
    ActionType,
    ArrayPostsType2, PostsType, StoreType,
} from '../../../redux/store';

import {addPostAC, postChangeAC,} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';

import Dialogs, {DialogsType} from '../../Dialogs/Dialogs';
import {addMesAC, updateMesAC} from '../../../redux/dialogs-reducer';
import {connect} from 'react-redux';

// type MyPostsContainerType={
//     // store: StoreType
    // posts: Array<ArrayPostsType2>
//     //
//     // addPostCallback: (postMessage: string)=> void
//     // onPostChange: (newPostText: string)=> void
//     // dispatch: (action: ActionType) => void
//     // newPostText: string
// }



// const MyPostsContainer = () => {
//
// //props: MyPostsContainerType
//
//     return (
//         <StoreContext.Consumer>
//             { (store)=> {
//                 let state =  store.getState();
//
//                 const  addPost =()=> {
//                     store.dispatch(addPostAC(state.profilePage.newPostText))
//                 }
//                 const onPostChange =(text:string)=>{
//
//                     store.dispatch(postChangeAC(text))
//                 }
//                 return <MyPosts
//                           onPostChange={onPostChange}
//                           addPostCallback={addPost}
//                           newPostText={state.profilePage.newPostText}
//                           posts={state.profilePage.posts}
//                 />
//             }
//         }
//         </StoreContext.Consumer>
//     );
// };
let mapStateToProps =(state: any)=>{
    return {
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
let mapDispatchToProps =(dispatch: (action: ActionType) => void)=>{
    return {
        addPostCallback:(newPostText: string)=> {
            dispatch(addPostAC(newPostText))},
        onPostChange:(text:string)=>{
            dispatch(postChangeAC(text))
        }
    }
}
const MyPostsContainer =connect(mapStateToProps,mapDispatchToProps)(MyPosts)


export default MyPostsContainer;