import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TodoCard from './Components/TodoCard.jsx'
import TodoInput from './Components/TodoInput.jsx'
import TodoList from './Components/TodoList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
