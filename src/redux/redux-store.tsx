import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

import usersReducer from './users-reducer';




export const rootReducer = combineReducers ({
    profilePage: profileReducer,
    //  в стейте был profilePage, тперь он переокчевал сюда и за него отвечает его собсвтенный редьюсер
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
})

//если в тайпоф подсунунть обьект значит он протипизирует объект рутредьюсер
export type ReducersType = ReturnType<typeof rootReducer>
//дай мне вовзращаемый тип и возьми вот отсюда из галочек, typeof типизирует функцию, а ф что-то возвращает
export type StoreType = typeof store

export const store= createStore(rootReducer);

// console.log(store.getState());
// // export type StoreType= typeof store
// // @ts-ignore
// window.store= store
export default store