import React from 'react';
import s from './Dialogs.module.css'

import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {ArrayDialogsType2, ArrayMessagesType2, ArrayPostsType2,} from '../../redux/state';

export type DialogsAndMesType = {
    dialogs: Array<ArrayDialogsType2>
    messages: Array<ArrayMessagesType2>
    addPostCallback: (postMessage: string)=> void
    posts: Array<ArrayPostsType2>

}
const Dialogs = (props: DialogsAndMesType) => {

    let dialogsElements = props.dialogs.map(dialog => {
        return (
            <DialogItem name={dialog.name} id={dialog.id}/>
        )
    })

    let messagesElements = props.messages.map(message => {
        return (
            <Message  posts={props.posts} message={message.message} addPostCallback={props.addPostCallback}/>
        )
    })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                {/*<DialogItem name="Anna" id="2"/>*/}
                {/*<DialogItem name="Masha" id="3"/>*/}
                {/*<DialogItem name="Kate" id="3"/>*/}
                {/*<DialogItem name="Danya" id="4"/>*/}
                {/*<DialogItem name="Andrey" id="5"/>*/}
                {/*<div className={s.dialog + ' ' + s.active}>*/}
                {/*    <NavLink to={'/dialogs/1'+ props.id}>{props.name}</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to='/dialogs/2' >Anna</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to='/dialogs/3' >Masha</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to='/dialogs/4' >Kate</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to='/dialogs/5' >Danya</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to='/dialogs/6' >Andrey</NavLink>*/}
                {/*</div>*/}
            </div>
            <div className={s.messages}>
                {messagesElements}
                {/*<Message message={messagesData[1].message}/>*/}
                {/*<Message message={messagesData[2].message}/>*/}
                {/*<Message message={messagesData[3].message}/>*/}
                {/*<div className={s.message}>Hi</div>*/}
                {/*<div className={s.message}>How are u</div>*/}
                {/*<div className={s.message}>good</div>*/}
            </div>
        </div>
    );
};

export default Dialogs;