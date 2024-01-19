import { useEffect, useState } from 'react';
import './App.css';
import AddFrom from './components/AddForm';
import TodoList from './components/TodoList';

function App() {
  const start_todos = [
    {id: 1, title: 'Помыть руки', completed: true},
    {id: 2, title: 'Сделать зарядку', completed: false},
    {id: 3, title: 'Наконец изучить React', completed: true}
  ]

  const defaultState = JSON.parse(localStorage.getItem('todos')) ?? start_todos

  const [todos, setTodos] = useState(defaultState)

  const delTodoById = (id) => {
    const filtered_todos = todos.filter((elem) => elem.id !== id)
    setTodos(filtered_todos)
  }
  const changeTodo = (id) => {
    const changed_todos = todos.map(elem => {
      if (elem.id === id){
        elem.completed = !elem.completed
      }
      return elem
    })
    setTodos(changed_todos)
  }
  const addTodo = (title) => {
    let new_todo = {
      id: Date.now(),
      title,
      completed: false
    }
    setTodos([...todos, new_todo])
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  // Мини
  // Задача: создать контекст и поместить туда функции changeTodo и delTodoById

  return (
    <div>
      <AddFrom addTodo={addTodo}/>
      <TodoList todos={todos} changeTodo={changeTodo} delTodoById={delTodoById}/>
    </div>
  );
}

export default App;
