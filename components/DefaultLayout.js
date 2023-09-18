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
