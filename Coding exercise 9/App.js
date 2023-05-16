import React from 'react';
import Todo from './Todo';
import './styles.css';

const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

// don't change the Component name "App"
export default function App() {
    const todoItems = DUMMY_TODOS.map((todo, index) => (
        <Todo key={index} text={todo} />
    ));

    return (
        <ul>
            {todoItems}
        </ul>
    );
}
