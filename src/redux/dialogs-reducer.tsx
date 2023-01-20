import React from 'react';
import {ActionType, ArrayPostsType2, DialogsAndMesType} from './state';




const DialogsReducer = (state: DialogsAndMesType, action: ActionType) => {


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