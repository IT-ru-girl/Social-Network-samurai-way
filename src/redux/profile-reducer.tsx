import React from 'react';
import {ActionType, AllPostsType, DataPropsType, } from './store';




export type PostType = {
    id: number,
    message: string,
    likesCount: number
}

const initialState: AllPostsType ={
    posts: [
        {id: 1, message: 'Hi', likesCount: 10},
        {id: 2, message: 'It is my first post', likesCount: 16},
    ] as Array<PostType>,
    newPostText: 'blabla',
}

export type InitialStateType = typeof initialState
const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type){
        case 'ADD-POST':{

            const newPost: PostType = {
                id: 3,
                message: state.newPostText = action.newPostText,
                //this._state.profilePage.newPostText, убираем этот профайлпэйдж т к получается что главный стейт это и есть он
                likesCount: 0
            };
            // let newState ={...state}
            // newState.posts= [...state.posts]
            //  state.posts.push(newPost);
            // newState.posts.push(newPost)
            //  state.newPostText = ''
            // newState.newPostText=''

            return {...state,
                posts:[...state.posts,newPost],
                newPostText:''}

//вообще после каждого кейса надо делать break , иначе мы будем проваливаться дальше, но мы будем просто возвращать стейт , когда посреди функции ретурн , функция перестает дальше работть, просто ретурна код нечитабелен
        }
            case 'UPDATE-NEW-POST-TEXT':{

                // let newState ={...state}
                // newState.newPostText=action.newText
                return {...state,newPostText: action.newText}
                // state.newPostText = action.newText
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

export default profileReducer;