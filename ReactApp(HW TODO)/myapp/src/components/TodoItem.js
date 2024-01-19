import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";


function TodoItem({title, id, idDay, priority}) {

    const {deleteTodo} = useContext(TodoContext)

    return (
      <div className="todo_item">
        <p style={{color: (+priority) ? 'green' : 'red'}}>
            {title}
        </p>
        <button className="xmark_todo" onClick={() => deleteTodo(idDay, id)}>x</button>
      </div>
    );
  }
  
  export default TodoItem;
  