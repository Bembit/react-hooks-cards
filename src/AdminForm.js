import React, { useState } from 'react'

export default function AdminForm(props) {

    const [ isVisible, setIsVisible ] = useState(false);
    const toggle = () => {
        setIsVisible(!isVisible);
    }

    return (
        <>  
            {isVisible ?
                <>
                <button onClick={() => setIsVisible(toggle)}><i className="far fa-minus-square"></i></button> 
                <div>
                    <form className="form" onSubmit={(e) => {
                        e.preventDefault();
                        props.addNewItem(props.name, props.price, props.image);
                        props.onSubmitChange();
                    }}>
                        <h3>this is: {props.name}</h3>
                        <input required value={props.name} type="text" onChange={props.handleNameChange}></input>

                        <h3>this is: {props.price}</h3>
                        <input required value={props.price} type="text" onChange={props.handlePriceChange}></input>

                        <h3>this is: {props.image}</h3>
                        <input required value={props.image} type="text" onChange={props.handleImageChange}></input>

                        <button>Submit</button>
                    </form>
               </div>
               </>
            :
            <>
            <button onClick={() => setIsVisible(toggle)}><i className="far fa-plus-square"></i></button>
            <div></div>
            </>
            }

        </>
        
    )
}
