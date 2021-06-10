import React from 'react'

export default function Nav(props) {

    return (
        <div className="nav">
        
            <h3>react hooks</h3>
            <div>
            {/* <a href="#/">Cart
                
                {countCart.length !== 0 ? (
                <span>{totalQty}</span>
                ) : (
                    <span>0</span>
                )}
            
            </a> */}
            <a href="#/">ITEMS
                <span>{props.items.length}</span>
            </a>
            
            <a href="#/">PLACEHOLDER</a>
            </div>


        


        </div>
    )
}
