import React from 'react';
import s from './../Dialogs.module.css'
import {ArrayPostsType2} from '../../../redux/state';



type MessagePropsType = {
    message: string
    posts: Array<ArrayPostsType2>
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
                <hr/>
                {props.posts.map(p=> <div key={p.id}><b>{p.message}</b></div>)}
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