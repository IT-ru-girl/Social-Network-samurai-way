import React from 'react';
import {ActionType, ArrayPostsType2, DataPropsType, PostsType} from './store';



const initialState: PostsType ={
    posts: [
        {id: 1, message: 'Hi', likesCount: 10},
        {id: 2, message: 'It is my first post', likesCount: 16},
    ],
    newPostText: 'blabla',
}
const ProfileReducer = (state: PostsType = initialState, action: ActionType) => {
    switch (action.type){
        case 'ADD-POST':{

            const newPost: ArrayPostsType2 = {
                id: 3,
                message: state.newPostText = action.newPostText,
                //this._state.profilePage.newPostText, убираем этот профайлпэйдж т к получается что главный стейт это и есть он
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = ''
            return state
//вообще после каждого кейса надо делать break , иначе мы будем проваливаться дальше, но мы будем просто возвращать стейт , когда посреди функции ретурн , функция перестает дальше работть, просто ретурна код нечитабелен
        }
            case 'UPDATE-NEW-POST-TEXT':{
                return state.newPostText = action.newText
            }

        default: return state
    }


}

export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        newPostText: newPostText
    } as const
}

export const postChangeAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}

export default ProfileReducer;