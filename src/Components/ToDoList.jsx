import React from 'react'
import { TodoCard } from './ToDoCard.jsx'  // Changed to named import

export default function TodoList({ todos, ...otherProps }) {  // Destructured props
    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => (
                <TodoCard 
                    key={todoIndex} 
                    index={todoIndex} 
                    {...otherProps}
                >
                    <p>{todo}</p>
                </TodoCard>
            ))}
        </ul>
    )
}