import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Conditional element variable
  let message;
  if (isLoggedIn) {
    message = <h1>Welcome back</h1>;
  } else {
    message = <h1>Please sign up.</h1>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      {message}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
}

export default App;
