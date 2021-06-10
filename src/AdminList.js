import React from 'react'
import Item from './Item';

export default function AdminList(props) {

    const { removeItem, editItem, toggleActive, isEditing, handleToggle, handleNameChange, handlePriceChange, handleImageChange, onSubmitChange } = props

    return (
        <div className="cart">

                {props.items.map((item) => (
                    
                    <Item key={item.id} id={item.id} item={item} removeItem={removeItem} editItem={editItem} toggleActive={toggleActive} isEditing={isEditing} handleToggle={handleToggle} handleNameChange={handleNameChange} handlePriceChange={handlePriceChange} handleImageChange={handleImageChange} onSubmitChange={onSubmitChange} />

                ))}
           
        </div>
)}

// name={item.name} price={item.price} image={item.image}