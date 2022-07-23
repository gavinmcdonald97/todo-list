import React from 'react'
import { useState } from 'react'

const AddTodoItemForm = ({ parentHandleSubmit }) => {

    const [value, setValue] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        event.stopPropagation()
        parentHandleSubmit(value)
        setValue('')
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input type="text" required onChange={ handleChange } value={ value } />
            <button type="submit">Add item</button>
        </form>
    )
}

export default AddTodoItemForm
