import React from 'react'

const App = () => {

  const srcollFunction = () =>{
    console.log("page scrolling");
  }

  return (
    <div onWheel={srcollFunction}>
      
     <div className='box1'></div>
     <div className='box2'></div>
     <div className='box3'></div>


    </div>
  )
}

export default App
