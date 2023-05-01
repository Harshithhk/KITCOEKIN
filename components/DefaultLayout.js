import ChatBot from "./ChatBot"
import Modal from "./Modal2"
import Navbar from "./Navbar/index"
import { useRouter } from "next/router"

import MetaTags from "./MetaTags"

function DefaultLayout(props) {
  const router = useRouter();

  return (<>
             
              <MetaTags route = {router.route}/>
          
              <div className="bg-white scroll-smooth mx-auto">
                <Navbar />
                <ChatBot />
                <div>{props.children}
                
                <Modal modalToggle = {props.modalToggle} setModalToggle = {props.setModalToggle} />
                </div>
              </div>
          </>)
}

export default DefaultLayout
