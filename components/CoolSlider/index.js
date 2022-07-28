import React from "react";

const CoolSlider = () => {



    const [slide1, setSlide1] = React.useState(true)
    const [slide2, setSlide2] = React.useState(false)
    const [slide3, setSlide3] = React.useState(false)
    const [slide4, setSlide4] = React.useState(false)


    const container ={
        display: "flex",
        width: "90vw",
        margin: "80px auto",
        gap: "20px"
    }

    const slide = {
        display: 'flex',
        flex: 1,
        position: 'relative',
        cursor: 'pointer',
        transition: 'flex 0.7s ease-in',
    }
    
    const img ={
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '40px'
    }

    const active =  {

        display: 'flex',
        flex: 5,
        position: 'relative',
        cursor: 'pointer',
        transition: 'flex 0.7s ease-in',
    }
    
    return(
        <section style={container} className=" min-h-[90px] font-serif">
           
            <div onClick={()=>{setSlide1(slide1 = true,setSlide2(slide2=false),setSlide3(slide3=false),setSlide4(slide4=false))}} style={slide1?active:slide} className="rounded-xl">
            <img src="https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/>
            <h2 className="title absolute text-base text-white font-bold bottom-0 right-[20px]">Title</h2>
        </div>
        <div onClick={()=>{setSlide2(slide2 = true,setSlide1(slide1=false),setSlide3(slide3=false),setSlide4(slide4=false))}} style={slide2?active:slide} className="rounded-xl">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80" alt=""/>
            <h2 className="title absolute text-base text-white font-bold bottom-0 right-[20px]">Title</h2>
        </div>
        <div  onClick={()=>{setSlide3(slide3 = true,setSlide2(slide2=false),setSlide1(slide1=false),setSlide4(slide4=false))}}  style={slide3?active:slide} className="rounded-xl">
            <img src="https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/>
            <h2 className="title absolute text-base text-white font-bold bottom-0 right-[20px]">Title</h2>
        </div>
        <div  onClick={()=>{setSlide4(slide4 = true,setSlide1(slide1=false),setSlide2(slide2=false),setSlide3(slide3=false))}}  style={slide4?active:slide} className="rounded-xl">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80" alt=""/>
            <h2 className="title absolute text-base text-white font-bold bottom-0 right-[20px]">Title</h2>
        </div>
    </section>
    )

};

export default CoolSlider;