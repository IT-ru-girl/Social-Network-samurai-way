import React from 'react';


import s from './Users.module.css'


import  axios from 'axios';
import userPhoto from '../../assets/img/Avatar-Profile-Vector-PNG-Photos.png';



export type UsersPropsType ={
    // usersPage: InitialStateType,
    follow: (userId: number)=>void,
    unfollow: (userId: number)=> void,
    setUsers: (users: UserItem[])=> void
    users: UserItem[],
    totalUsersCount: number,
    pageSize: number
    currentPage:number
    setCurrentPage: (pageNumber: number)=> void
    setTotalUsersCount: (totalCount: number)=> void
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
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
             .then(res=>{ // возврващется промис с таким результатом
                 console.log(res)
                 this.props.setUsers(res.data.items)
                 this.props.setTotalUsersCount(res.data.totalCount)
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
 onPageChanged= (pageNumber: number)=>{
     this.props.setCurrentPage(pageNumber)
     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(res=>{ // возврващется промис с таким результатом
             this.props.setUsers(res.data.items)
         })
     }

  
render(): React.ReactNode {

         let pageCount= Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages =[];
    for ( let i=1; i<= pageCount; i++){
pages.push(i)
    }

 return <div>
  {/*<button onClick={this.getUsers} >GETUSERS</button>*/}
     <div className={s.num}>
         {pages.map(p =>{
            return  <span onClick={()=>{this.onPageChanged(p)}} className= {s.num +`${this.props.currentPage === p && s.selected}`}>{p}</span>
         })}
     </div>

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


