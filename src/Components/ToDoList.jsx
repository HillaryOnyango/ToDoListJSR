import React from 'react'
import  TodoCard  from './TodoCard'  // Changed to named import

export default function TodoList({ todos, handleDeleteTodo, handleEditTodo }) {
    
    if(!todos){
        return null
    }
        // Destructured props
    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => (
                <TodoCard 
                    key={todoIndex} 
                    index={todoIndex} 
                    handleDeleteTodo={handleDeleteTodo}
                    handleEditTodo={handleEditTodo}
                >
                    <p>{todo}</p>
                </TodoCard>
            ))}
        </ul>
    )
}