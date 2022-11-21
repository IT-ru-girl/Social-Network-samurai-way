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
export type SidebarType ={

}
export type PostsType = {
    posts: Array<ArrayPostsType2>
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


let state: (DataPropsType) = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 10},
            {id: 2, message: 'How a u', likesCount: 16},
            {id: 3, message: 'Good', likesCount: 18},
            {id: 4, message: 'and u', likesCount: 19},
            {id: 5, message: 'Bye', likesCount: 20},
        ],

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

}

 export let addPost = (postMessage: string) =>{
    const newPost: ArrayPostsType2 ={
        id:5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
}
export default state;