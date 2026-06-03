import React from 'react'

const App = () => {

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log("Form Submitted")
  } 

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <div className="container">
          <input
            type="text"
            placeholder="Enter your name"
            className="input-box"
          />

          <button className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
