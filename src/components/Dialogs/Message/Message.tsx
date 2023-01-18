import React from 'react';
import s from './../Dialogs.module.css'
import {ActionType, addMesAC,  ArrayMessagesType2, ArrayPostsType2} from '../../../redux/state';



type MessagePropsType = {
    // message: string
    messages: Array<ArrayMessagesType2>
    // posts: Array<ArrayPostsType2>
    dispatch: (action: ActionType) => void
    // addMessage: (newDialogsMessage: string)=> void
}
const Message = (props: MessagePropsType) => {

    let newMes  =  React.createRef<HTMLTextAreaElement>()

    const  addMes = ()=>{

        if(newMes.current){
            console.log(newMes.current.value)
            props.dispatch(addMesAC(newMes.current.value))
        }

    }


    return (
        <div className={s.dialog}>
            <div>
                {/*{props.message}*/}
                <hr/>
                {props.messages.map(p=> <div key={p.id}><b>{p.message}</b></div>)}
            </div>
            <div>
                <textarea ref={newMes}></textarea>
            </div>
                <div>
                    <button   onClick={addMes}>Add message</button>
                </div>
        </div>

    )
}


export default Message;