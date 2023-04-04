import ChatBot from "./ChatBot"
import Modal from "./Modal2"
import Navbar from "./Navbar/index"

function DefaultLayout(props) {
  return (
    <div className="bg-white scroll-smooth mx-auto">
      <Navbar />
      <ChatBot />
      <div>{props.children}
      
      <Modal modalToggle = {props.modalToggle} setModalToggle = {props.setModalToggle} />
      </div>
    </div>
  )
}

export default DefaultLayout
