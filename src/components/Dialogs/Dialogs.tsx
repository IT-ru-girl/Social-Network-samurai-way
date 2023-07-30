import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'

import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {
    // ActionType,
    // ArrayDialogsType2,
    // ArrayMessagesType2,
    // ArrayPostsType2,
    DialogsAndMesType,
    // StoreType,
} from '../../redux/store';
import {addMesAC, updateMesAC} from '../../redux/dialogs-reducer';
import {DialogsFuncType} from './DialogsContainer';

export type DialogsType = {
    // store: StoreType
    // dialogs: Array<ArrayDialogsType2>
    // messages: Array<ArrayMessagesType2>
    // posts: Array<ArrayPostsType2>
    sendMessage: (newMessageBody: string)=> void
    // dispatch: (action: ActionType) => void
    // newMessageBody:string
    updateNewMessageBody: (newMessageValue:string) => void
    dialogsPage: DialogsAndMesType
}
const Dialogs = (props: DialogsFuncType) => {

    let state=props.dialogsPage

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)


    let messagesElements = state.messages.map( message => <Message message={message.message} key={message.id} /> )

    let newMessageBody = state.newMessageBody

    const addMes = () => {
        // props.dispatch(addMesAC(newMessageBody))
        props.sendMessage(newMessageBody)
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessageValue = e.currentTarget.value
        props.updateNewMessageBody(newMessageValue)
        // props.dispatch(updateMesAC(newMessageValue))
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea onChange={onNewMessageChange} placeholder={'Enter your message'} value={newMessageBody}></textarea>
                    </div>
                    <div>
                        <button onClick={addMes}>Add message</button>
                    </div>
                </div>
                {/*<Message dispatch={props.dispatch}*/}
                {/*         messages={props.messages}*/}
                {/*         newMessageBody={props.newMessageBody}*/}
                {/*/>*/}
            </div>
        </div>
    );
};

export default Dialogs;