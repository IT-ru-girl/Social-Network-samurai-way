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
    onPostChange: (newPostText: string)=> void,
    addPost: (postMessage: string) => void,
    _rerenderEntireTree :() => void,
    subscribe : (observer: () => void)=> void,
    getState: ()=> DataPropsType
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
    addPost(postMessage: string) {

        const newPost: ArrayPostsType2 = {
            id: 5,
            message:this._state.profilePage.newPostText=postMessage,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''
        this._rerenderEntireTree();

    },
    _rerenderEntireTree()  {
        console.log('state')
    },
     subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    onPostChange(newText) {
        this._state.profilePage.newPostText = newText
        this._rerenderEntireTree();
    },
    getState(){
      return  this._state
    }

}





export default store;