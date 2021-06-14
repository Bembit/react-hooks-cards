import React from 'react'

export default function Nav(props) {

    const { items } = props

    const isAvailable = items.filter((item) => item.isAvailable === false).length;

    return (
        <div className="nav">
        
            <h3>react hooks</h3>
            <div>
            
            <a href="#/">TOTAL
                <span>{props.items.length}</span>
            </a>
            <a href="#/">OUTOFSTOCK

                - {isAvailable}

            </a>
            
            </div>

        </div>
    )
}
