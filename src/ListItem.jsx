export function ListItem({ id, title, completed, toggleTodo, removeTodo}){

    return(
        <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)}
          />
          {title}
          <button onClick={() => removeTodo(id)} className='btn btn-danger'>Delete</button>
        </label>
      </li>
    )
}
