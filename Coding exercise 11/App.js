import React, { useState } from 'react';

// don't change the Component name "App"
export default function App() {
  const [isRed, setIsRed] = useState(false);

  const toggleStyleHandler = () => {
    setIsRed((prevState) => !prevState);
  };

  return (
    <div>
      <p style={{ color: isRed ? 'red' : 'white' }}>Style me!</p>
      <button onClick={toggleStyleHandler}>Toggle style</button>
    </div>
  );
}
