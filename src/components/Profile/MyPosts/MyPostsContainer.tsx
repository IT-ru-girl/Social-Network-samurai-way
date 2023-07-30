import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {
    ActionType, ArrayPostsType2,
} from '../../../redux/store';

import {addPostAC, postChangeAC,} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';


import {connect} from 'react-redux';
import {ReducersType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';

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

type MapStateToPropsType = {
    posts: Array<ArrayPostsType2>,
    newPostText: string
}
let mapStateToProps = (state: ReducersType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
type MapDispatchToProps = {
    addPostCallback: (newPostText: string) => void;
    onPostChange: (text: string) => void

}
export type PostsFuncType = MapStateToPropsType & MapDispatchToProps
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addPostCallback: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        },
        onPostChange: (text: string) => {
            dispatch(postChangeAC(text))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;