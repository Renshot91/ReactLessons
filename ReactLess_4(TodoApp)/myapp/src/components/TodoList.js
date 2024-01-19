import TodoItem from "./TodoItem"


function TodoList(props){
 
    const {todos, delTodoById, changeTodo} = props

    return(
        <div>
            {todos.map(elem => <TodoItem
                                    key={elem.id}
                                    id={elem.id}
                                    title={elem.title}
                                    completed={elem.completed}
                                    delTodoById={delTodoById}
                                    changeTodo={changeTodo}
                                />)}
        </div>
    )
}

export default TodoList