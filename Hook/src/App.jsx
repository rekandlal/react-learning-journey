import React, { useState } from 'react'

  const App = () => {

    // via this a is not update or reflect the update in screen
    // so we try directly interaction we website
    
    // let a = 20;

    // function changeA(){
    //   console.log(a);
      
    //   a = a + 1
    // }

    // since, we have don't directly interact with webiste, we should go  through react
    // now, usestate comes into the picture

    // function changeA(){
    //   setA(a + 1)
    // }

    // const [a, setA] = useState(10)

    const [likes, setLikes] = useState(10)

    function like(){
        setLikes(likes + 1)
    }

    function unLike(){
        setLikes(likes - 1)
    }

    
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-4">
      <h1 className="text-4xl font-bold text-gray-800">
        Likes {likes}
      </h1>

      <div className="flex gap-4">
        <button onClick = {like} className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Increase
        </button>

        <button onClick = {unLike} className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Decrease
        </button>

      </div>

    </div>
  )
}

export default App
