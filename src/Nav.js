import React from 'react'

export default function Nav(props) {

    return (
        <div className="nav">
        
            <h3>react hooks</h3>
            <div>

            <a href="#/">TOTAL
                <span>{props.items.length}</span>
            </a>
            
            <a href="#/">PLACEHOLDER</a>
            </div>


        


        </div>
    )
}
