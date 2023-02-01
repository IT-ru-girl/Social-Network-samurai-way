import profileReducer, {addPostAC, postChangeAC} from './profile-reducer';
import dialogsReducer, {addMesAC, updateMesAC} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

export type ArrayPostsType2 = {
    id: number,
    message: string,
    likesCount: number
}

export type ArrayDialogsType2 = {
    id: number,
    name: string
}

export type ArrayMessagesType2 = {
    id: number,
    message: string
}
export type SidebarType = {}

export type PostsType = {
    posts: Array<ArrayPostsType2>
    newPostText: string
}

export type DialogsAndMesType = {
    dialogs: Array<ArrayDialogsType2>
    messages: Array<ArrayMessagesType2>
    newMessageBody:string
}

export type DataPropsType = {
    profilePage: PostsType,
    dialogsPage: DialogsAndMesType,
    sidebar: SidebarType
}

// export type StateType = {
//     state: DataPropsType
// }

export type StoreType = {
    _state: DataPropsType,
    // onPostChange: (newPostText: string)=> void,
    // addPost: (postMessage: string) => void,
    _rerenderEntireTree: () => void,
    subscribe: (observer: () => void) => void,
    getState: () => DataPropsType
    dispatch: (action: ActionType) => void
    // addMessage: (newDialogsMessage: string)=> void
}


 export type  ActionType = AddPostActionType | ChangeNewTextActionType | AddMessageActionTYpe | UpdateNewMessageAC

 type AddPostActionType = ReturnType<typeof addPostAC>

type ChangeNewTextActionType = ReturnType<typeof postChangeAC>

type AddMessageActionTYpe = ReturnType<typeof addMesAC >

type UpdateNewMessageAC =ReturnType<typeof updateMesAC>


// данные нового сообщения должны уходить из компоненты, как аргумент функции креэйтора



const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 10},
                {id: 2, message: 'It is my first post', likesCount: 16},
               ],
            newPostText: 'blabla',

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Ksu'},
                {id: 2, name: 'Kate'},
                {id: 3, name: 'Dima'},
                {id: 4, name: 'Masha'},
                {id: 5, name: 'Sasha'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How a u'},
                {id: 3, message: 'Good'},
                {id: 4, message: 'and u'},
                {id: 5, message: 'Bye'},
            ],
            newMessageBody: ''
        },
        sidebar: []

    },

    _rerenderEntireTree() {
        console.log('state')
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    //у нас была отдельная функция, которая отслеживает изменения в поле ввода, передавала их в стейт и при пуше информация бралась уже из стейта
    getState() {
        return this._state
    },
    dispatch(action) {

        profileReducer(this._state.profilePage,action)
        dialogsReducer(this._state.dialogsPage, action)
        sidebarReducer(this._state.sidebar, action)
// мы делегировали преобразовали веток стейта редьюсерам
        this._rerenderEntireTree();
        // а дальше уведомили 'подписчиков'

    }

}
export default store;