import React from 'react'

export default function EditItem(props) {

    const { item, removeItem, toggle, isEditing, editItem, handleNameChange, handleImageChange, handlePriceChange } = props

    // should have diff props or a reusable custom hook for forms

    return (
        <div>
            <form className="form" onSubmit={(e) => {
                        e.preventDefault();
                        editItem(props.id, props.name, props.price, props.image);
                        props.onSubmitChange();
                        toggle(isEditing);
                    }}>
                        <h3>this is: {item.name}</h3>
                        <h3>this is: {item.id}</h3>
                        <input value={props.name} type="text" onChange={handleNameChange} placeholder={item.name}></input>

                        <h3>this is: {item.price}</h3>
                        <input value={props.price} type="text" onChange={handlePriceChange} placeholder={item.price}></input>

                        <h3>this is: {item.image}</h3>
                        <input value={props.image} type="text" onChange={handleImageChange} placeholder={item.price}></input>
                        <button><i className="far fa-save"></i></button>

            </form>

                <button onClick={() => toggle(isEditing)}><i className="far fa-window-close"></i></button>
                <button onClick={() => removeItem(item.id)}><i className="far fa-trash-alt"></i></button>

        </div>
    )
}
