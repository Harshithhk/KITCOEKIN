import Navbar from "./Navbar"
import ChatBotButton from "./ChatBotButton"

function DefaultLayout(props) {
  return (
    <div className="bg-white max-w-[1536px] mx-auto">
      
      <Navbar />
      <ChatBotButton/>
      <div>{props.children}</div>
      
    </div>
  )
}

export default DefaultLayout
