import React, { useState } from 'react';
import EditItem from './EditItem';

export default function Item(props) {

    const { id, removeItem, toggleActive, editItem, item } = props

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
                        <EditItem item={item} id={id} removeItem={removeItem} editItem={editItem} isEditing={isEditing} toggle={toggle}></EditItem>
                    </>
                    )
                    }
                    </div>
    )
}
