import Navbar from "./Navbar"

function DefaultLayout(props) {
  return (
    <div className="bg-white max-w-[1440px] mx-auto">
      <Navbar />
      <div>{props.children}</div>
    </div>
  )
}

export default DefaultLayout
