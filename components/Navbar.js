import { useRouter } from "next/router"

const Navbar = () => {
  const router = useRouter()
  console.log(router.route)
  return (
    <nav
      className={`h-[88px] md:h-[88px] sm:h-12  flex items-center px-12 sm:px-6 ${
        router.route != "/" ? "bg-[#24346D]" : ""
      }`}
    >
      <img
        src="/images/Navbar/Logo.svg"
        className="h-16 sm:h-full py-1 "
        alt=""
        srcSet=""
      />
      <ul
        className={`sm:hidden flex justify-between w-3/4 ml-auto text-lg ${
          router.route != "/" ? "text-white" : "text-[#666666]"
        } `}
      >
        <a href="/about">
          <li
            href="/about"
            className={`flex items-center font-bold  cursor-pointer  ${
              router.route != "/" ? "text-white" : "text-black"
            }`}
          >
            ABOUT
          </li>
        </a>
        <li href="#" className="flex items-center cursor-pointer">
          ADMISSIONS
        </li>
        <li href="#" className="flex items-center cursor-pointer">
          DEPARTMENTS
        </li>
        <li href="#" className="flex items-center cursor-pointer">
          T&P CELL
        </li>
        <li href="#" className="flex items-center cursor-pointer">
          OTHERS
        </li>
        <li href="#" className="flex items-center cursor-pointer">
          <img src="/images/Navbar/Phone.svg" className="mr-2" alt="" />
          CONTACT
        </li>
        <li href="#" className="flex items-center cursor-pointer">
          <img src="/images/Navbar/Mention.svg" className="mr-2" alt="" />
          APPLY
        </li>
        <li
          href="#"
          className="flex items-center w-32 h-12  text-white rounded-[75px] bg-primary overflow-hidden px-4 py-2 cursor-pointer"
        >
          <img
            src="/images/Navbar/Search_Magnifying_Glass.svg"
            className="mr-2"
            alt=""
          />
          SEARCH
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
