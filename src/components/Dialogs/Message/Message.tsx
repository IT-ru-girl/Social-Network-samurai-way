import React, {ChangeEvent} from 'react';
import s from './../Dialogs.module.css'
import {ActionType, ArrayMessagesType2 } from '../../../redux/state';
import {addMesAC, updateMesAC} from '../../../redux/dialogs-reducer';



type MessagePropsType = {
    // message: string
    messages: Array<ArrayMessagesType2>
    // posts: Array<ArrayPostsType2>
    dispatch: (action: ActionType) => void
    // addMessage: (newDialogsMessage: string)=> void
    newMessageBody:string
}
const Message = (props: MessagePropsType) => {

    let newMes  =  props.newMessageBody
        // React.createRef<HTMLTextAreaElement>()  с сылками текстэриа работает без ончэйнджа

    const  addMes = ()=>{

        props.dispatch(addMesAC(newMes))
    }
 const onNewMessageChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
    let newMessageValue = e.target.value
     props.dispatch(updateMesAC(newMessageValue))
 }

    return (
        <div className={s.dialog}>
            <div>
                {/*{props.message}*/}
                <hr/>
                {props.messages.map(p=> <div key={p.id}><b>{p.message}</b></div>)}
            </div>
            <div>
                <textarea onChange={onNewMessageChange} placeholder={'Enter your message'} value={newMes}></textarea>
            </div>
                <div>
                    <button onClick={addMes}>Add message</button>
                </div>
        </div>

    )
}


export default Message;