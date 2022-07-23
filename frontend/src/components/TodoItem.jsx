import React from 'react'
import { useState } from 'react'

const TodoItem = ({ id, title, complete }) => {

    const [ isComplete, setIsComplete ] = useState(complete)

    const handleChange = () => {
        setIsComplete(!isComplete)
    }

    return (
        <li className="todo-list__item" data-complete={ isComplete }>
            <input type="checkbox" onChange={ handleChange } checked={ isComplete } />
            { title }
        </li>
    )
}

export default TodoItem
