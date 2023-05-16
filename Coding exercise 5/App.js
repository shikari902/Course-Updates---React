import React from 'react';
import './styles.css';

export default function App() {
    const clickHandler = () => {
        console.log("Stored!");
    }

    return <button onClick={clickHandler}>Bookmark</button>;
}
