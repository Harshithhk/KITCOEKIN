import ChatBot from "./ChatBot"
import Modal from "./Modal2"
import Navbar from "./Navbar/index"
import { useRouter } from "next/router"
import { useState,useEffect } from "react"
import MetaTags from "./MetaTags"

function DefaultLayout(props) {
  const [windowWidth, setWindowWidth] = useState(null);

  const router = useRouter();
  useEffect(() => {
    console.log("width",window.innerWidth,"//",window.outerWidth)

    setWindowWidth(window.outerWidth)
    let zoomLevel = 0
    if(window.outerWidth > 1200 && window.outerWidth < 1300){
      zoomLevel = "45%"
    }else if (window.outerWidth > 1300 && window.outerWidth < 1400){
      zoomLevel = "65%"
    }else if (window.outerWidth > 1400 && window.outerWidth < 1500){
      zoomLevel = "75%"
    }else{
      zoomLevel = "100%"
    }

    // Change the zoom level when the component mounts
    document.body.style.zoom = zoomLevel;

    // Cleanup when the component unmounts
    return () => {
      document.body.style.zoom = ''; // Reset the zoom level
    };
  },[])
  
  

  return (<>
             
              <MetaTags route = {router.route}/>
          
              <div className={`bg-white scroll-smooth mx-auto max-w-[1920px] ${windowWidth > 1400 ? "min-w-[1400px]":windowWidth < 1400 && windowWidth > 760?"min-w-[1500px]":null}`}>
                <Navbar />
                {/* <ChatBot /> */}
                <div>{props.children}
                
                <Modal modalToggle = {props.modalToggle} setModalToggle = {props.setModalToggle} />
                </div>
              </div>
          </>)
}

export default DefaultLayout
