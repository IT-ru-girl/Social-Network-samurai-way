import React from 'react';


import s from './Users.module.css'


import  axios from 'axios';
import userPhoto from '../../assets/img/Avatar-Profile-Vector-PNG-Photos.png';



export type UsersPropsType ={
    // usersPage: InitialStateType,
    follow: (userId: number)=>void,
    unfollow: (userId: number)=> void,
    setUsers: (users: UserItem[])=> void
    users: UserItem[]
}
//мы оборачиваем Users контейнерной компонентой

export type ResponseTypeUser={
    items: UserItem[],
    totalCount: number,
    error:string | null
}

export type UserItem={
    id: number,
    name: string,
    status:string | null,
    photos: {
        small:string | null,
        large: string | null
    },
    followed: boolean
}
 export class Users extends React.Component<UsersPropsType>   {
// extend обязательно,чтобы он произошел нужно писать import React from 'react';

     componentDidMount() {
         axios.get('https://social-network.samuraijs.com/api/1.0/users')
             .then(res=>{ // возврващется промис с таким результатом

                 console.log(res)
                 this.props.setUsers(res.data.items)
             })
     }

     // getUsers = () => {
     //      axios.get('https://social-network.samuraijs.com/api/1.0/users')
     //          .then(res=>{ // возврващется промис с таким результатом
     //
     //              console.log(res)
     //              this.props.setUsers(res.data.items)
     //          })
     //  }
//запись была такой потому что юзеров мы получали по кнопке get users


  
render(): React.ReactNode {
 return <div>
  {/*<button onClick={this.getUsers} >GETUSERS</button>*/}
  <h3>Users</h3>
  {this.props.users.map((u:UserItem) => <div key={u.id}>
                    <span>
                        <div>
                            <img  src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo} />
                        </div>
                        <div>{u.followed=== true
                            ?  <button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button> : <button onClick={()=>{this.props.follow(u.id)}}>Follow</button>}</div>
                    </span>
         <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.city'}</div>
                            <div>{'u.location.country'}</div>
                        </span>
                    </span>
        </div>)}
 </div>

 }}


