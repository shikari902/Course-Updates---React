import React, { useState } from 'react';

// don't change the Component name "App"
export default function App() {
  const [showAlert, setShowAlert] = useState(false);

  const showWarningHandler = () => {
    setShowAlert(true);
  };

  const hideWarningHandler = () => {
    setShowAlert(false);
  };

  return (
    <div>
      {showAlert && (
        <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={hideWarningHandler}>Dismiss</button>
        </div>
      )}
      <button onClick={showWarningHandler}>Delete</button>
    </div>
  );
}
