import React from 'react';
import s from './../Dialogs.module.css'



type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {

    let newMes =  React.createRef()

    const  addMes = ()=>{
        const text = newMes.current.value
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