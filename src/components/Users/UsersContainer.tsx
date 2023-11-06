import React from 'react';
import {connect} from 'react-redux';

import {ActionType } from '../../redux/store';
import {followAC, InitialStateType, setUserAC, unfollowAC, } from '../../redux/users-reducer';
import {ReducersType} from '../../redux/redux-store';
import { Dispatch } from 'redux';
import {UserItem, Users} from './UsersClass';

type MapStateToPropsType = {
    users:UserItem[]
}
type MapDispatchToProps={
    follow: (userId: number)=>void,
    unfollow: (userId: number)=> void,
    setUsers: (users: UserItem[])=> void
}
const mapStateToProps = (state: ReducersType):MapStateToPropsType => {
    //здесь в типизации стейта должен быть тип всего приложения!!
    return {
        users: state.usersPage.users
    }
    // msttate to props как раз возращает частичку стейта usersPage  и типизировать нужно ее, а принимает весь стейт в себя
}


//мы оборачиваем Users контейнерной компонентой и эти колбэки попадут через пропсы в компоненту users

// export type UsersPropsType = MapStateToPropsType & MapDispatchToProps


let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    //типизация диспатч проверяет диспатчим ли мы экшн-объект, у которого есть свойство-тип и обязательно должен быть Type  в этом объекте    -----или что-то другое
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserItem[]) => {
            dispatch(setUserAC(users))
        }
// ф диспатчит пользователей которых ей передали в экшн криэйтор формирует экшн с этими пользователями  и диспатчит в ощий стор
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);