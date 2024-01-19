import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context/TodoContext";

function TodoDay({day, todoItems, idDay}) {

    const {deleteDay} = useContext(TodoContext)

    return (
      <div className="day_wrapper">
        <h2>
            {day} 
        </h2>
        {todoItems.map(elem => <TodoItem 
                                        key={elem.id}
                                        id={elem.id}
                                        idDay={idDay}
                                        title={elem.title}
                                        priority={elem.priority}
                                    />
          )}
        <button className="xmark_day" onClick={() => deleteDay(idDay)}>X</button>
      </div>
    );
  }
  
  export default TodoDay;
  