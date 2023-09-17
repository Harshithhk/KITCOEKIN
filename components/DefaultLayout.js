import ChatBot from "./ChatBot"
import Modal from "./Modal2"
import Navbar from "./Navbar/index"
import { useRouter } from "next/router"
import { useState,useEffect } from "react"
import MetaTags from "./MetaTags"

function DefaultLayout(props) {
  const [minWidth, setMinWidth] = useState(null);

  const router = useRouter();
  useEffect(() => {
    const tempMinWidth = window.innerWidth > 1400 ? 1400 : 1600
    setMinWidth(tempMinWidth)
  },[])
  
  return (<>
             
              <MetaTags route = {router.route}/>
          
              <div className={`bg-white scroll-smooth mx-auto max-w-[1920px] min-w-[${minWidth}px]`}>
                <Navbar />
                {/* <ChatBot /> */}
                <div>{props.children}
                
                <Modal modalToggle = {props.modalToggle} setModalToggle = {props.setModalToggle} />
                </div>
              </div>
          </>)
}

export default DefaultLayout
