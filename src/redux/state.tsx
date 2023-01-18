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


 export type  ActionType = AddPostActionType | ChangeNewTextActionType | AddMessageActionTYpe
 type AddPostActionType = ReturnType<typeof addPostAC>
//      {
//     type: 'ADD-POST'
//     postMessage: string
// }

 type ChangeNewTextActionType = ReturnType<typeof postChangeAC>
//  {
//     type: 'UPDATE-NEW-POST-TEXT'
//     newText: string
// }

type AddMessageActionTYpe = ReturnType<typeof addMesAC >

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
            ]
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

            const newMes: ArrayMessagesType2 = {
                id: 6,
                message: action.newDialogsMessage
            }
            this._state.dialogsPage.messages.push(newMes);
            // this._state.dialogsPage.messages = ''
            this._rerenderEntireTree();
        }
    }

}


export default store;