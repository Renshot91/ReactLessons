

function TodoItem(props){

    const {title, completed, id, delTodoById, changeTodo} = props

    return(
        <div 
            style={{backgroundColor: (completed) ? 'green' : 'red'}} 
            className="todo_card"
            onDoubleClick={() => delTodoById(id)}
            onClick={() => changeTodo(id)}
        >
            <h2>{title}</h2>
        </div>
    )
}

export default TodoItem