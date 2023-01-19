import React from 'react';
import s from './ProfileInfo.module.css'

 type ProfileInfoPropsType ={

 }
const ProfileInfo = (props:ProfileInfoPropsType) => {
    return (
        <div >
            <div >
                <img className={s.img} src="https://imba.ru/web/image/18757/7.png?access_token=6efb0b5f-0c34-4c3f-aa19-a4ccda63b368" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava+desc
            </div>
        </div>
    );
};

export default ProfileInfo;