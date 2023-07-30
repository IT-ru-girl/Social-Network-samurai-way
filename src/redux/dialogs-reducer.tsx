import React from 'react';
import {ActionType, } from './store';

export type DialogsType2 = {
    id: number,
    name: string
}

export type MessagesType2 = {
    id: number,
    message: string
}
const initialState = {
    dialogs: [
        {id: 1, name: 'Ksu'},
        {id: 2, name: 'Kate'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Masha'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Dasha'},
    ] as Array<DialogsType2>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How a u'},
        {id: 3, message: 'Good'},
        {id: 4, message: 'and u'},
        {id: 5, message: 'Bye'},
    ] as Array<MessagesType2>,
    newMessageBody: ''
}
export type InitialStateType = typeof initialState



const DialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    // let newState = {...state,
    // messages: [...state.messages]}
    // let newState;

    switch (action.type) {
        case 'ADD-MESSAGE': {
            let newDialogsMessage: string = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: newDialogsMessage}]
            }
            // let newDialogsMessage: string = state.newMessageBody

            // state.newMessageBody = ''
            // newState.newMessageBody = ''
            // state.messages.push({id: 6, message: newDialogsMessage},)
            // newState.messages.push({id: 6, message: newDialogsMessage},)

        }
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            // newState.newMessageBody = action.newMessageValue
            return {
                ...state,
                newMessageBody: action.newMessageValue
            }

            // state.newMessageBody = action.newMessageValue
        }
        default:
            return state
    }
};


export const addMesAC = (newDialogsMessage: string) => {
    return {
        type: 'ADD-MESSAGE',
        newDialogsMessage: newDialogsMessage
    } as const
}

export const updateMesAC = (newMessageValue: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessageValue: newMessageValue
    } as const
}
export default DialogsReducer;