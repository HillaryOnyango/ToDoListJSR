import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TodoCard from './Components/ToDoCard.jsx'
import TodoInput from './Components/ToDoInput.jsx'
import TodoList from './Components/ToDoList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
