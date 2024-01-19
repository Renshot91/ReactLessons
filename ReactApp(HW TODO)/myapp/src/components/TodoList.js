import TodoDay from "./TodoDay";

function TodoList({todos}) {
    return (
      <div>
        {todos.map(elem => <TodoDay 
                                key={elem.idDay} 
                                idDay={elem.idDay}
                                day={elem.day}  
                                todoItems={elem.todoItems}
                            />
        )}
      </div>
    );
}
  
  export default TodoList;
  