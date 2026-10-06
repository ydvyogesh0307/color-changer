import React, { useState } from 'react'

function App  ()  {

  const [color , setcolor] = useState("grey")
  localStorage.setItem("setcolor", "color")
  
  return (
    <>
<div  className='w-full  h-screen duration-100' 

style={{backgroundColor:color}}
>
<div className='fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
<div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl' >

    
      <button
      onClick={()=> setcolor("red")}
       className="min-h-[3rem] px-8  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-red-600 text-gray-800">Red
        </button>
         <button
         onClick={()=> setcolor("green")}
       className="min-h-[3rem] px-8  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-green-600 text-gray-800">Green
        </button>
         <button
         onClick={()=> setcolor("blue")}
       className="min-h-[3rem] px-8  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-blue-600 text-gray-800">Blue
        </button>
        <button
         onClick={()=> setcolor("black")}
       className="min-h-[3rem] px-8  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-black text-white">Black
        </button>
         <button
         onClick={()=> setcolor("yellow")}
       className="min-h-[3rem] px-8  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-yellow-600 text-gray-800">Yellow
        </button>
         <button
         onClick={()=> setcolor("white")}
       className="min-h-[3rem] px-8  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-300 text-black">White
        </button>


</div>

</div>
</div>



    </>
  )

  
}

export default App
