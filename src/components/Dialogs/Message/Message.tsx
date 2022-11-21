import React from 'react';
import s from './../Dialogs.module.css'



type MessagePropsType = {
    message: string
    addPostCallback: (postMessage: string)=> void
}
const Message = (props: MessagePropsType) => {

    let newMes  =  React.createRef<HTMLTextAreaElement>()

    const  addMes = ()=>{
        if(newMes.current){
            props.addPostCallback(newMes.current.value )
        }

    }


    return (
        <div className={s.dialog}>
            <div>
                {props.message}
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