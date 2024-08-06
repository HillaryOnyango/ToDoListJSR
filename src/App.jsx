import { useState } from "react"
import TodoInput from "./Components/TodoInput" 
import TodoList from "./Components/TodoList"

function App() {
  const [todos, setTodos]=useState([])
  const [todoValue, setTodoValue]= useState('')

  const handleAddTodos=(todo)=>{
    setTodos([...todos, todo]);
  }

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  }

  const handleEditTodo = (index, newTodo) => {
    const updatedTodos = todos.map((todo, i ) => (i === index ? newTodo : todo))
    setTodos(updatedTodos);
  }


  return (
    
    <main>
      <TodoInput
        hanndleAddTodos={handleAddTodos}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      
      <TodoList 
       todos={todos}
       handleDeleteTodo={handleDeleteTodo}
       handleEditTodo={handeleEditTodo}
      />
    
    </main>
  )
}

export default App
