import React from 'react'

function Corousel({slides}) {
  return (<div className='carousel h-[400px] w-[700px] '>
    <div className='corousel_Wrapper relative '>
    {slides.map((s, index) => {
    return (
        <div className='corosel_card flex flex-1 absolute ' key={index}>
            <img src={s.imageUri} alt="" />
            <div className="card_overlay relative ">
                <h2 className='card_title absolute bottom-12 end-64 font-bold text-3xl text-blue-700'>
                {s.title}
                </h2>
            </div>
           
        
        </div>
    )
})}
    </div>


  </div>


 
  )
}

export default Corousel