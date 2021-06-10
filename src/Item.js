import React, { useState } from 'react';

export default function Item(props) {

    const { removeItem, toggleActive, item } = props


    const [ isEditing, setIsEditing ] = useState(false);
    const toggle = () => {
        setIsEditing(!isEditing);
    }

    return (
            <div className="cartitem" key={item.id}>

                    {!isEditing

                    ?

                    (
                    <> 
                        {item.name}
                        <img src={item.image} alt={item.name}></img>
                        <button onClick={() => toggle()}><i className="far fa-edit"></i></button>
                        <button onClick={() => removeItem(item.id)}><i className="far fa-trash-alt"></i></button>
                        
                        <input type="checkbox" checked={item.isAvailable} onChange={() => toggleActive(item.id)}></input>
                        {item.isAvailable ? <span>in stock</span> : <span>currently unavailable</span> }
                    </>
                    )

                    :

                    (
                    <>
                    <span>Editing</span>
                    <button onClick={() => toggle()}><i className="far fa-save"></i></button>
                    <button onClick={() => removeItem(item.id)}><i className="far fa-window-close"></i></button>
                    <button onClick={() => removeItem(item.id)}><i className="far fa-trash-alt"></i></button>
                    </>
                    )
                    }
                    </div>
    )
}
