import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'


import {ActionType, ArrayDialogsType2, ArrayMessagesType2, ArrayPostsType2, StoreType,} from '../../redux/store';
import {addMesAC, updateMesAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

// export type DialogsContainerType = {
//     store: StoreType
//     // dialogs: Array<ArrayDialogsType2>
//     // messages: Array<ArrayMessagesType2>
//     // posts: Array<ArrayPostsType2>
//     // addMessage: (newDialogsMessage: string)=> void
//     // dispatch: (action: ActionType) => void
//     // newMessageBody:string
//     // updateNewMessage: (newMessageValue: string)=> void
// }
const DialogsContainer = () => {
//props: DialogsAndMesType


    // let dialogsElements = props.dialogs.map(dialog =>
    // {return (<DialogItem name={dialog.name} id={dialog.id}/>)
    // })
    // let messagesElements = state.messages.map( message => <Message message={message.message} /> )
    // let newMessageBody = state.newMessageBody

    return (
        <StoreContext.Consumer>
            { (store)=>{
                    let state = store.getState().dialogsPage
                    const addMes = () => {
                        store.dispatch(addMesAC(state.newMessageBody))
                    }

                    const onNewMessageChange = (newMessageValue: string) => {
                        // let newMessageValue = e.target.value
                        store.dispatch(updateMesAC(newMessageValue))
                        // props.updateNewMessage(newMessageValue)
                    }
                  return  <Dialogs
                        sendMessage={addMes}
                        updateNewMessageBody={onNewMessageChange}
                        dialogsPage={store.getState().dialogsPage}   />
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;