import TodoItem from './TodoItem'

const TodoList = ({items}) => {
    return (
        <ul className="todo-list">
            {items && items.map(item => {
                return <TodoItem key={item.id} id={item.id} title={item.title} complete={item.complete}/>
            })}
        </ul>
    )
}

export default TodoList