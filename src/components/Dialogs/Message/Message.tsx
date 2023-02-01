import React, {ChangeEvent} from 'react';
import s from './../Dialogs.module.css'
import {ActionType, ArrayMessagesType2} from '../../../redux/store';
import {addMesAC, updateMesAC} from '../../../redux/dialogs-reducer';


type MessagePropsType = {
    message: string

}
const Message = (props: MessagePropsType) => {


    return (
        <div className={s.message}>
            {props.message}
        </div>

    )
}

export default Message;