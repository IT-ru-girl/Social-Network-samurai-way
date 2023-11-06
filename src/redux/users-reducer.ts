import React from 'react';
import {ActionType,  } from './store';
import {UserItem} from '../components/Users/UsersClass';



    //     {
    //         id: 1,
    //         followed: true,
    //         photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJdnAoPhDAD_9OFJsFKAy3s68r9-fYL1SlCqVCrS6&s',
    //         fullName: 'Dmitryi',
    //         status: 'I am a boss',
    //         location: {city: 'Moscow', country: 'Russia'}
    //     },
    //     {
    //         id: 2,
    //         followed: false,
    //         photoUrl:'https://avatars.mds.yandex.net/i?id=921d5a3910f248fccce7618bd0bae631dcdf566c-9221937-images-thumbs&n=13',
    //         fullName: 'ksu',
    //         status: 'I am a boss',
    //         location: {city: 'Sevastopol', country: 'Russia'}
    //     },
    //     {
    //         id: 3,
    //         followed: true,
    //         photoUrl:'https://avatars.mds.yandex.net/i?id=418f23c536ddefe114f3d5198371654751c1f11c-7052380-images-thumbs&n=13',
    //         fullName: 'Masha',
    //         status: 'I am a boss',
    //         location: {city: 'Kaliningrad', country: 'Russia'}
    //     },
    //

//  export type UserType = {
//     id: number,
//     photos:string,
//     followed: boolean,
//     name: string,
//     status: string,
//     location: LocationType
// }
const initialState :InitialStateType= {
    users: []}

 // export type InitialStateType = {
 //    users:UserType[]
 // }
 export type InitialStateType = {
    users:UserItem[]
 }
 //меняем типизацию на ту, которая приходит с сервака а не наша рукописная UserType


 //как я поняла это типизиция той части стейта , в которую включены юзеры, usersPage
const usersReducer = (state:InitialStateType  =initialState, action: ActionType):InitialStateType => {
    //важно типизировато то что редьюсер принимает и то что вовзращает , принимает он стейт юзеров и возвращет стет такого же типа, типизация должна совпадать
    switch (action.type) {
        case 'FOLLOW': {

            return {...state, users: state.users.map((u:UserItem)=> u.id === action.userId ? {...u,followed: true}: u)}
        }
        case 'UNFOLLOW' : {

            return {...state, users: state.users.map(u=> u.id === action.userId ? {...u,followed: false}: u)}
        }
        case 'SETUSER':{
            // return {...state, users: action.users} // взять пльзователей которые были и перезатереть теми, которые пришли
            return {...state, users: [...state.users, ...action.users]} // склеиваем 2 массива , те которые были и те которые пришли
        }
        default:
            return state
    }
}

export const followAC = (userid: number) => {
    return {
        type: 'FOLLOW',
        //чтобы понять какого пользователя фолловить , нужно поймать его айди, оно приедет к нам в параметры
        userId: userid
    } as const
}

export const unfollowAC = (userid: number) => {
    return {
        type: 'UNFOLLOW',
        userId: userid
    } as const
}

export const setUserAC = (users: UserItem[]) => {
    return {
        type: 'SETUSER',
        users: users
    } as const
}

export default usersReducer;