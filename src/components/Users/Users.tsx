// import React from 'react';
//
//
// import s from './Users.module.css'
//
// // import {UsersPropsType} from './UsersContainer';
// import  axios from 'axios';
// import userPhoto from '../../assets/img/Avatar-Profile-Vector-PNG-Photos.png'
// import {InitialStateType} from '../../redux/users-reducer';
//
//
// export type UsersPropsType ={
//     // usersPage: InitialStateType,
//     follow: (userId: number)=>void,
//     unfollow: (userId: number)=> void,
//     setUsers: (users: UserItem[])=> void
//     users: UserItem[]
// }
// //мы оборачиваем Users контейнерной компонентой
//
// export type ResponseTypeUser={
//     items: UserItem[],
//     totalCount: number,
//     error:string | null
// }
//
// export type UserItem={
//     id: number,
//     name: string,
//     status:string | null,
//     photos: {
//         small:string | null,
//         large: string | null
//     },
//     followed: boolean
// }
//
//
//
// const Users = (props: UsersPropsType) => {
// // ф вызывается реактом и просто должна вернуть значение, мы не должны напрямую что-то в ней менять. как же получить пользователей?
// debugger
//       const getUsers= ()=>{
//
//           axios.get<ResponseTypeUser>('https://social-network.samuraijs.com/api/1.0/users')
//               .then(res=>{ // возврващется промис с таким результатом
//
//                   console.log(res.data.items[0].name)
//                   props.setUsers(res.data.items)
//               })
//       }
//         // props.setUser(
//         //     [// при первой отрисовки мы берем этот массив и сетаем его в юзеры
//         //         {
//         //             id: 1,
//         //             followed: true,
//         //             photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJdnAoPhDAD_9OFJsFKAy3s68r9-fYL1SlCqVCrS6&s',
//         //             fullName: 'Dmitryi',
//         //             status: 'I am a boss',
//         //             location: {city: 'Moscow', country: 'Russia'}
//         //         },
//         //         {
//         //             id: 2,
//         //             followed: false,
//         //             photoUrl:'https://avatars.mds.yandex.net/i?id=921d5a3910f248fccce7618bd0bae631dcdf566c-9221937-images-thumbs&n=13',
//         //             fullName: 'ksu',
//         //             status: 'I am a boss',
//         //             location: {city: 'Sevastopol', country: 'Russia'}
//         //         },
//         //         {
//         //             id: 3,
//         //             followed: true,
//         //             photoUrl:'https://avatars.mds.yandex.net/i?id=418f23c536ddefe114f3d5198371654751c1f11c-7052380-images-thumbs&n=13',
//         //             fullName: 'Masha',
//         //             status: 'I am a boss',
//         //             location: {city: 'Kaliningrad', country: 'Russia'}
//         //         },
//         //
//         //     ]
//         // )
//
//
//
//     return (
//
//         <div>
//             <button onClick={getUsers} >GETUSERS</button>
//             <h3>Users</h3>
//             {
//
//                 props.users.map((u)=> {
//                     return <div key={u.id}>
//                     <span>
//                         <div>
//                             <img  src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo} />
//                         </div>
//                         <div>{u.followed=== true
//                             ?  <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}</div>
//                     </span>
//                         <span>
//                         <span>
//                             <div>{u.name}</div>
//                             <div>{u.status}</div>
//                         </span>
//                         <span>
//                             <div>{'u.location.city'}</div>
//                             <div>{'u.location.country'}</div>
//                         </span>
//                     </span>
//                     </div>
//                 }
//                     )
//             }
//         </div>
//     );
// };
//
// export default Users;