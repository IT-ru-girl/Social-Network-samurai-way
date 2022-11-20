import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        //header это название свойста объекта s={header: header...}
            <header className={s.header}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUEwts4uoA2Zk4uGFSWayTNfoLgraSoxF2g&usqp=CAU"
                    alt=""/>
            </header>

    );
};

export default Header;