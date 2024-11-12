import React, { useEffect, useState } from 'react'

function SlidingBg() {
    const image = [
        "3ktnbuhr.bmp",
        "3o6vmc9n.bmp",
        "4jpekc5x.bmp",
        "e9f8948t.bmp",
        "ip3rvgiq.bmp",
        "pcmnv8i5.bmp",
        "v9wpmf0u.bmp",
      ];
      const [index,setIndex]=useState(0)  
      //for rendering only ones dependency set as empty array-->[]  
      useEffect(()=>{
          const interval=setInterval(()=>{
              setIndex((pre)=>pre+1)
          },5000)
          return()=> clearInterval(interval)
      },[])
  return (
    <div className=' fixed w-full h-screen left-0 top-0'>
       {/* {image.map((imgg, ind) => (
                <img
                    key={ind}
                    src={imgg}
                    alt={`Slide ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === ind ? 'opacity-100' : 'opacity-0'}`}
                />
            ))} */}
      <img src={"src/Images/"+image[index%image.length]} alt="" className={`w-full transition-opacity duration-1000 ease-in-out saturate-200 opacity-75`}/>
    </div>
  )
}

export default SlidingBg
