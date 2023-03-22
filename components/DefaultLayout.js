import ChatBot from "./ChatBot"
import Navbar from "./Navbar/index"

function DefaultLayout(props) {
  return (
    <div className="bg-white scroll-smooth mx-auto">
      <Navbar />
      <ChatBot />
      <div>{props.children}</div>
    </div>
  )
}

export default DefaultLayout
