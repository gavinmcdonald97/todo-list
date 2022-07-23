import React from 'react'

const Modal = ({ title, children }) => {
    return (
        <div className="modal">
            <h2 className="modal__title">{ title }</h2>
            { children }
        </div>
    )
}

export default Modal
