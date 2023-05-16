import React, { useState } from 'react';
import './styles.css';

export default function App() {
    const [counter, setCounter] = useState(0);

    const clickHandler = () => {
        setCounter((prevCounter) => prevCounter + 1);
    }

    return (
        <div>
            <p id="counter">{counter}</p>
            <button onClick={clickHandler}>Increment</button>
        </div>
    );
}
