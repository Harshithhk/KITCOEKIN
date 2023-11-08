import ChatBot from "./ChatBot"
import Modal from "./Modal2"
import Navbar from "./Navbar/index"
import { useRouter } from "next/router"
import { useState,useEffect } from "react"
import MetaTags from "./MetaTags"
import SocialMediaIcons from "./socialMediaIcons"

function DefaultLayout(props) {
  const [windowWidth, setWindowWidth] = useState(null);

  const router = useRouter();

  
  useEffect(() => {

    
  },[])
  useEffect(() => {
    
    setWindowWidth(window.outerWidth)

    let overFlowX = 1500 - window.outerWidth
    let zoomLevel = (99 - ((overFlowX * 100)/1500))+"%"
    
    if(overFlowX > 0 && window.outerWidth > 760){
      
      // Change the zoom level when the component mounts
      document.body.style.zoom = zoomLevel;
  
      // Cleanup when the component unmounts
      return () => {
        document.body.style.zoom = ''; // Reset the zoom level
      };
    }

    

  }, [])
  

  return (<>
             
              <MetaTags route = {router.route}/>
          
              <div id="DefaultLayout" className={` scroll-smooth mx-auto max-w-[1920px] ${windowWidth < 1400 && windowWidth > 760?"min-w-[1500px]":null}`}>
                <Navbar />
                <SocialMediaIcons />
                {/* <ChatBot /> */}
                <div>{props.children}
                
                <Modal modalToggle = {props.modalToggle} setModalToggle = {props.setModalToggle} />
                </div>
              </div>
          </>)
}

export default DefaultLayout
