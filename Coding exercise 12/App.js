import React, { useState } from 'react';

// don't change the Component name "App"
export default function App() {
  const [isActive, setIsActive] = useState(false);

  const toggleStyleHandler = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div>
      <p className={isActive ? 'active' : ''}>Style me!</p>
      <button onClick={toggleStyleHandler}>Toggle style</button>
    </div>
  );
}
