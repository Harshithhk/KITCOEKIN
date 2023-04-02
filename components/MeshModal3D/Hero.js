import React from 'react'

const Hero = ()=>{
    return(
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center tracking-wider">
                <h1 className="text-5xl sm:w-fit sm:text-4xl font-bold font-kaushan pb-4">
                    KITCOEK Empowering VR to 
                </h1> 
                <h3 className="text-2xl font-bold font-kaushan pb-4">
                enhance people's lives.
                </h3>
            </div>
            <div className="p-2">
                <button className='p-2 w-[380px] sm:w-full text-xl font-kaushan'>
                Medical VR Developemt , Game VR Developemt , Corporate VR Developemt , Presentation VR Developemt
                </button>
            </div>
        </div>
    )
}
export default Hero