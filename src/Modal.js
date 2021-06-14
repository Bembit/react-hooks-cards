import React from 'react'

export default function Modal(props) {

    const { item } = props;

    if (!props.show) {
        return null
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-title">
                <img src={item.image} alt={item.name}></img>
                {item.name}
                </div>
                <div className="modal-body">
                {item.price}
                </div>
                <div className="modal-footer">
                {item.image}
                </div>
                <button onClick={props.onClose}><i class="far fa-times-circle"></i></button>
            </div>
        </div>
    )
}
