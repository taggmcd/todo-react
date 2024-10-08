import { useState } from "react"

export function TodoForm({ onSubmit }){
    const [newItem, setNewItem ] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        if(newItem === "") return
        onSubmit(newItem)

        setNewItem("")
    }

    return(
        <form onSubmit={handleSubmit } className='new-item-form'>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
            <input
              type="text"
              value={newItem}
              onChange={e => setNewItem(e.target.value)}
              name="item"
              id="item"
              />
            <button className='btn'>Add</button>
        </div>
      </form>
    )
}