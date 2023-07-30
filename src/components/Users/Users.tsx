import React from 'react';


import s from './Users.module.css'

import {UsersPropsType} from './UsersContainer';

// export type UsersStateType ={
//     usersPage: InitialStateType,
//     follow: (userId: number)=>void,
//     unfollow: (userId: number)=> void,
//     setUser: (users: UserType[])=> void
// }
//мы оборачиваем Users контейнерной компонентой
const Users = (props: UsersPropsType) => {
    if(props.usersPage.users.length===0){
        props.setUser(
            [// при первой отрисовки мы берем этот массив и сетаем его в юзеры
                {
                    id: 1,
                    followed: true,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJdnAoPhDAD_9OFJsFKAy3s68r9-fYL1SlCqVCrS6&s',
                    fullName: 'Dmitryi',
                    status: 'I am a boss',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 2,
                    followed: false,
                    photoUrl:'https://avatars.mds.yandex.net/i?id=921d5a3910f248fccce7618bd0bae631dcdf566c-9221937-images-thumbs&n=13',
                    fullName: 'ksu',
                    status: 'I am a boss',
                    location: {city: 'Sevastopol', country: 'Russia'}
                },
                {
                    id: 3,
                    followed: true,
                    photoUrl:'https://avatars.mds.yandex.net/i?id=418f23c536ddefe114f3d5198371654751c1f11c-7052380-images-thumbs&n=13',
                    fullName: 'Masha',
                    status: 'I am a boss',
                    location: {city: 'Kaliningrad', country: 'Russia'}
                },

            ]
        )
    }


    return (

        <div>
            <h3>Users</h3>
            {

                props.usersPage.users.map(u=> {
                    return <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.photo} src={u.photoUrl} alt=""/>
                        </div>
                        <div>{u.followed=== true ?<button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}</div>
                    </span>
                        <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                    </div>
                }
                    )
            }
        </div>
    );
};

export default Users;