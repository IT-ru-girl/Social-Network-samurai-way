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

export const addPostAC = (postMessage: string) => {
    return {
        type: 'ADD-POST',
        postMessage: postMessage
    } as const
}

export const postChangeAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}

export const addMesAC = (newDialogsMessage:string) => {
    return {
        type: 'ADD-MESSAGE',
        newDialogsMessage: newDialogsMessage
    } as const
}

export const updateMesAC = (newMessageValue:string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessageValue:newMessageValue
    } as const
}
// данные нового сообщения должны уходить из компоненты, как аргумент функции креэйтора



const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 10},
                {id: 2, message: 'How a u', likesCount: 16},
                {id: 3, message: 'Good', likesCount: 18},
                {id: 4, message: 'and u', likesCount: 19},
                {id: 5, message: 'Bye', likesCount: 20},
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
    // addPost(postMessage: string) {
    //
    //     const newPost: ArrayPostsType2 = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText = postMessage,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = ''
    //     this._rerenderEntireTree();
    //
    // },
    // addMessage(newDialogsMessage: string) {
    //     const newMes: ArrayMessagesType2 = {
    //         id: 6,
    //         message:  newDialogsMessage
    //     }
    //     this._state.dialogsPage.messages.push(newMes);
    //     // this._state.dialogsPage.messages = ''
    //     this._rerenderEntireTree();
    //
    // },
    _rerenderEntireTree() {
        console.log('state')
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    // onPostChange(newText) {
    //     this._state.profilePage.newPostText = newText
    //     this._rerenderEntireTree();
    // },
    //у нас была отдельная функция, которая отслеживает изменения в поле ввода, передавала ее в стейт и при пуше информация бралась уже из стейта
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: ArrayPostsType2 = {
                id: 5,
                message: this._state.profilePage.newPostText = action.postMessage,
                //this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._rerenderEntireTree();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._rerenderEntireTree();
        } else if (action.type === 'ADD-MESSAGE') {
            // данные нового сообщения должны уходить из компоненты, как аргумент функции креэйтора

            let newDialogsMessage: string = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 6, message: newDialogsMessage},)
            this._rerenderEntireTree();
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageBody = action.newMessageValue
            this._rerenderEntireTree();
        }

    }

}
export default store;