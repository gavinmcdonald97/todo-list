import { useState, useEffect } from 'react'
import Header from './layout/Header'
import TodoList from './components/TodoList'
import Modal from './components/Modal'
import AddTodoItemForm from './components/AddTodoItemForm'
import testData from './todo-test-data.json'
import './App.css'

const App = () => {

    const [todoItems, setTodoItems] = useState([])

    useEffect(() => {
        // Replace with API call when back-end is built
        setTodoItems(testData)
    }, [])

    const addTodoItem = (item) => {
        const lastItemID = todoItems[todoItems.length - 1].id
        const newItem = {
            id: lastItemID + 1,
            title: item,
            complete: false
        }
        setTodoItems([...todoItems, newItem])
    }

    return (
        <>
            <Header title="Todolist" />
            <main>
                <TodoList items={ todoItems } />
            </main>
            <aside>
                <Modal>
                    <AddTodoItemForm parentHandleSubmit={ addTodoItem } />
                </Modal>
            </aside>
        </>
    )
}

export default App
