import { useState } from 'react'
import './App.css'

import Todo from './components/Todo'
import { addTodo, useStore,clearTodo,toggle} from './store';

function App() {

  let [input,setInput] = useState("");
  let todo = useStore((state) => state.todo)
  let show = useStore((state) => state.show);



  let visibleTodos = () => {
    if(show==="completed") return todo.filter((e) => e.isDone)
    return todo
  }





 
let handleClick = () => {
  addTodo(input)
  setInput("")
}



  return (
    <>
      <input type="text"
        value={input}
        placeholder='enter your todos'
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>ADD</button>
      <button onClick={clearTodo}>clear</button>
      <button onClick={() => toggle("completed")}>completed</button>
      
      {visibleTodos().map((e,idx) => <Todo key={idx} id={e.id}/>)}
    </>
  )
}

export default App
