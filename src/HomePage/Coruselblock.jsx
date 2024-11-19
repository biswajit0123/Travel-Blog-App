import React from 'react'
import Corousel from './Corousel'
import { countries } from './CorouselData'

function Coruselblock() {

 
  return (
<>

<div className='relative bg-gray-400 w-full flex items-center justify-center '>
  <div className=''>
<h2 className='font-bold p-5 text-3xl text-center'>Places to Meet</h2>
<p className='font-medium p-2 text-2xl'>Best Destination Of the Year</p>
  </div>
    <Corousel slides={countries}/>
</div>
</>
  )
}

export default Coruselblock