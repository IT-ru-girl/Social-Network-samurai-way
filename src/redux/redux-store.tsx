import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import {StoreType} from './store';




let reducers = combineReducers ({
    profilePage: profileReducer,
    //  в стейте был profilePage, тперь он переокчевал сюда и за него отвечает его собсвтенный редьюсер
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})


export type ReducersType = ReturnType<typeof reducers>


export const store= createStore(reducers);

// export type StoreType= typeof store

export default store