import profileReducer, {addPostAC, postChangeAC} from './profile-reducer';
import dialogsReducer, {addMesAC, DialogsAndMesType, updateMesAC} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer, {followAC, InitialStateType, setUserAC, unfollowAC} from './users-reducer';
import {StoreType} from './redux-store';

 type PostType = {
    id: number,
    message: string,
    likesCount: number
}

  export type ArrayDialogsType2 = {
    id: number,
    name: string
}
export type ArrayPostsType2 = {
    id: number,
    message: string,
    likesCount: number
}

  export type ArrayMessagesType2 = {
    id: number,
    message: string
}
export type SidebarType = {}

export type AllPostsType = {
    posts: Array<PostType>
    newPostText: string
}

// export type DialogsAndMesType = {
//     dialogs: Array<ArrayDialogsType2>
//     messages: Array<ArrayMessagesType2>
//     newMessageBody: string
// }

export type DataPropsType = {
    profilePage: AllPostsType,
    dialogsPage: DialogsAndMesType,
    sidebar: SidebarType
    usersPage: InitialStateType
}
//  type ArrayUsersType = {
//     users: UserType[],
// }

//  type UserType = {
//     id: number,
//     photoUrl:string,
//     followed: boolean,
//     name: string,
//     status: string,
//     location: LocationType
// }

//  export type LocationType = {
//     city: string,
//     country: string
// }
// export type StateType = {
//     state: DataPropsType
// }

// export type StoreType = {
//     _state: DataPropsType,
//     // onPostChange: (newPostText: string)=> void,
//     // addPost: (postMessage: string) => void,
//     _rerenderEntireTree: () => void,
//     subscribe: (observer: () => void) => void,
//     getState: () => DataPropsType
//     dispatch: (action: ActionType) => void
//     // addMessage: (newDialogsMessage: string)=> void
// }


export type  ActionType =
    AddPostActionType
    | ChangeNewTextActionType
    | AddMessageActionType
    | UpdateNewMessageAC
    | FollowActionType
    | UnFollowActionType
    | SetUserActionType

type AddPostActionType = ReturnType<typeof addPostAC>

type ChangeNewTextActionType = ReturnType<typeof postChangeAC>

type AddMessageActionType = ReturnType<typeof addMesAC>

type UpdateNewMessageAC = ReturnType<typeof updateMesAC>

type FollowActionType = ReturnType<typeof followAC>

type UnFollowActionType = ReturnType<typeof unfollowAC>

type SetUserActionType = ReturnType<typeof setUserAC>

// данные нового сообщения должны уходить из компоненты, как аргумент функции креэйтора


// const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi', likesCount: 10},
//                 {id: 2, message: 'It is my first post', likesCount: 16},
//             ],
//             newPostText: 'blabla',
//
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Ksu'},
//                 {id: 2, name: 'Kate'},
//                 {id: 3, name: 'Dima'},
//                 {id: 4, name: 'Masha'},
//                 {id: 5, name: 'Sasha'},
//             ],
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'How a u'},
//                 {id: 3, message: 'Good'},
//                 {id: 4, message: 'and u'},
//                 {id: 5, message: 'Bye'},
//             ],
//             newMessageBody: ''
//         },
//         sidebar: [],
//
//
//     },
//
//     _rerenderEntireTree() {
//         console.log('state')
//     },
//     subscribe(observer) {
//         this._rerenderEntireTree = observer;
//     },
//     //у нас была отдельная функция, которая отслеживает изменения в поле ввода, передавала их в стейт и при пуше информация бралась уже из стейта
//     getState() {
//         return this._state
//     },
//     dispatch(action) {
//         usersReducer(this._state.usersPage, action)
//         profileReducer(this._state.profilePage, action)
//         dialogsReducer(this._state.dialogsPage, action)
//         sidebarReducer(this._state.sidebar, action)
// // мы делегировали преобразование веток стейта редьюсерам
//         this._rerenderEntireTree();
//         // а дальше уведомили 'подписчиков'
//
//     }
//
// }
