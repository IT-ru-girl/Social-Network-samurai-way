import React from 'react';
import s from './Dialogs.module.css'

import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {ActionType, ArrayDialogsType2, ArrayMessagesType2, ArrayPostsType2,} from '../../redux/state';

export type DialogsAndMesType = {
    dialogs: Array<ArrayDialogsType2>
    messages: Array<ArrayMessagesType2>
    posts: Array<ArrayPostsType2>
    // addMessage: (newDialogsMessage: string)=> void
    dispatch: (action: ActionType) => void
    newMessageBody:string
}
const Dialogs = (props: DialogsAndMesType) => {

    let dialogsElements = props.dialogs.map(dialog => {
        return (
            <DialogItem name={dialog.name} id={dialog.id}/>
        )
    })

    // let messagesElements = props.messages.map(message => {
    //     return (

    //     )
    // })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                <Message dispatch={props.dispatch}
                         messages={props.messages}
                         newMessageBody={props.newMessageBody}
                />
            </div>
        </div>
    );
};

export default Dialogs;