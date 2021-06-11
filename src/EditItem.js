import React from 'react';
import useFormHook from './useFormHook';

export default function EditItem(props) {
   
    const { id, item, removeItem, toggle, isEditing, editItem } = props

    const [ fields, handleFieldChange, reset ] = useFormHook({
        name: "",
        price: "",
        image: ""
    });

    return (
        <div>
                <form className="form" onSubmit={(e) => {
                            e.preventDefault();
                            editItem(id, fields.name, fields.price, fields.image);
                            reset();
                            toggle(isEditing);
                        }}>
                            <h3>this is: {item.name}</h3>
                            <h3>this is: {item.id}</h3>
                            <input id="name" value={fields.name} type="text" onChange={handleFieldChange} placeholder={fields.name}></input>

                            <h3>this is: {item.price}</h3>
                            <input id="price" value={fields.price} type="text" onChange={handleFieldChange} placeholder={fields.price}></input>

                            <h3>this is: {item.image}</h3>
                            <input id="image" value={fields.image} type="text" onChange={handleFieldChange} placeholder={fields.image}></input>
                            <button><i className="far fa-save"></i></button>

                </form>

                <button onClick={() => toggle(isEditing)}><i className="far fa-window-close"></i></button>
                <button onClick={() => removeItem(item.id)}><i className="far fa-trash-alt"></i></button>

        </div>
    )

}