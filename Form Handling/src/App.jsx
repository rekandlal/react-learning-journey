import React, { useState } from 'react';

const App = () => {

  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <input
            type="text"
            placeholder="Enter your name"
            className="input-box"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;