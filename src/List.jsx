import { ListItem } from "./ListItem"

export function List({todos, toggleTodo, removeTodo }){

    return(
        <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return (
            <ListItem { ...todo } key={todo.id} toggleTodo={toggleTodo} removeTodo={removeTodo} />
          )
        })
      }
      </ul>
    )
}