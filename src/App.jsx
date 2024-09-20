import { useEffect, useState } from "react"
import './styles.css'
import { TodoForm } from './TodoForm'
import { List } from './List'

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id == id){
          return { ...todo, completed}
        }

        return todo

      })
    })
  }

  function addTodo(title){
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false
        },
      ]
     })
  }

  function removeTodo(id){
    setTodos(currentTodos =>{
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <TodoForm onSubmit={addTodo} />

      <h1 className='header'>Todo List</h1>
      <List todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
    </>
  )
}

export default App
