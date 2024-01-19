import { useState } from 'react';
import './App.css';
import AddForm from './components/AddForm';
import TodoList from './components/TodoList';
import { TodoContext } from './context/TodoContext';

function App() {

  const days = ["ПНД", "ВТР", "СРД", "ЧТВ", "ПТН", "СБТ", "ВСК"]

  const data = [
    {idDay: 1, day: 'ПНД', todoItems: [
      {id: 1, title: 'ПОмыть руки', priority: 0},
      {id: 2, title: 'ПОмыть руки', priority: 0},
      {id: 3, title: 'ПОмыть руки', priority: 1}
    ]},
    {idDay: 2 ,day: 'ВТ', todoItems: [
      {id: 4, title: 'ПОмыть руки 123', priority: 0},
      {id: 5, title: 'ПОмыть руки', priority: 1},
      {id: 6, title: 'ПОмыть руки', priority: 1}
    ]}
  ]

  const [todos, setTodos] = useState(data)

  const deleteDay = (id) => {
    const filtered_task = todos.filter(elem => elem.idDay !== id)
    setTodos(filtered_task)
  }

  const deleteTodo = (idDay, id) => {
    const result = todos.map(elem => {
      if (idDay === elem.idDay){
        elem.todoItems = elem.todoItems.filter(elem => elem.id !== id)
      }
      return elem
    })
    const findDay = result.find(elem => elem.idDay === idDay)
    if (findDay.todoItems.length === 0){
      deleteDay(idDay)
    } else {
      setTodos(result)
    }
  }

  const addTodo = (obj) => {
    const {idDay, title, priority} = obj
    const newTodo = {
      id: Date.now(),
      title,
      priority
    }
    if (todos.some(elem => elem.idDay === idDay)){
      let changed_todos = todos.map(elem => {
        if (elem.idDay === idDay){
          elem.todoItems = [...elem.todoItems, newTodo].sort((a,b) => a.priority - b.priority)
        }
        return elem
      })
      setTodos(changed_todos)
    } else {
      const new_day = {
        idDay,
        day: days[idDay-1],
        todoItems: [newTodo]
      }
      let changed_todos = [...todos, new_day].sort((a,b) => a.idDay - b.idDay)
      setTodos(changed_todos)
    }
  }

  return (
    <div>
      <TodoContext.Provider value={{deleteDay, deleteTodo}}>
        <AddForm addTodo={addTodo} days={days}/>
        <TodoList todos={todos}/>
      </TodoContext.Provider>
    </div>
  );
}

export default App;



