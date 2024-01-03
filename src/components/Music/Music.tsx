import React from 'react';

const Music = () => {

    const users = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Alice'},
        {id: 3, name: 'Bob'},
        // Добавьте ещё пользователей по вашему выбору
    ];

const onClickHandler =(id: any)=> {
    users.filter((u)=>{
       return  u.id !== id })
}
    return (
        <div>
            {users.map(u => {
                return <ul>
                    <li key={u.id}>{u.name}</li>
                    <button onClick={onClickHandler}>Delete</button>
                </ul>
            })}
        </div>

    );
};

export default Music;