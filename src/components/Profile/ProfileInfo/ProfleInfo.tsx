import React from 'react';
import s from './ProfileInfo.module.css'

 type ProfileInfoPropsType ={

 }
const ProfileInfo = (props:ProfileInfoPropsType) => {
    return (
        <div >
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava+desc
            </div>
        </div>
    );
};

export default ProfileInfo;