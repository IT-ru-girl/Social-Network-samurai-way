import React from 'react';
import {ActionType, ArrayPostsType2, DialogsAndMesType} from './store';




const initialState: DialogsAndMesType ={
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
}

const DialogsReducer = (state: DialogsAndMesType =initialState, action: ActionType) => {


    switch (action.type){
        case 'ADD-MESSAGE': {
            let newDialogsMessage: string = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: newDialogsMessage},)
            return state
        }
        case 'UPDATE-NEW-MESSAGE-TEXT':{
            state.newMessageBody = action.newMessageValue
            return state
        }
        default: return state
    }
};


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
export default DialogsReducer;