import React from 'react'

const App = () => {

  const srcollFunction = (dir) =>{

    if(dir > 0){
      console.log("seedha srcolling");

    }else{
      console.log("ulta scrolling");

    }
  }

  return (
    <div onWheel={(elem) => {
      srcollFunction(elem.deltaY);
    }}>
      
     <div className='box1'></div>
     <div className='box2'></div>
     <div className='box3'></div>


    </div>
  )
}

export default App
