import Image from "next/image"

const Footer = () => {
  return (
    <footer className="z-50 pt-[100px] ">
      <section className="relative  h-[299.77px] sm:h-44 sm:bg-contain bg-bottom bg-no-repeat bg-cover bg-[url('/images/HomePage/FooterBG.jpg')]  ">
        <div className="absolute w-64 h-32 -translate-x-1/2 sm:h-20 sm:w-fit left-1/2 top-6">
          <img
            data-aos="fade-up"
            data-aos-delay="0"
            src="/images/Navbar/Logo.svg"
            className="h-full "
            alt="LOGO"
          />
        </div>
      </section>
      <section className="flex h-[320px] bg-[#443b3c] pt-6 ">
      <footer className="bg-[#443b3c] text-lg text-center text-white ">
          <div
            className="flex items-center  md:flex-col gap-4  border-b-2 border-transparent p-6  justify-center">
            <div className="mr-12 md:mr-0 md:text-sm block">
              <span>Get connected with us on social networks:</span>
            </div>
            <div className="flex justify-center">
              <a href="#!" className="mr-6 text-white hover:cursor-pointer hover:text-orange-400  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#!" className="mr-6 text-white hover:cursor-pointer hover:text-orange-400  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#!" className="mr-6 text-white hover:cursor-pointer hover:text-orange-400  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                    fillRule="evenodd"
                    clipRule="evenodd" />
                </svg>
              </a>
              <a href="#!" className="mr-6 text-white hover:cursor-pointer hover:text-orange-400  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#!" className="mr-6 text-white hover:cursor-pointer hover:text-orange-400  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a href="#!" className="text-white md:text-sm hover:cursor-pointer hover:text-orange-400 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="px-6 py-10 bg-[#443b3c] text-center md:text-left">
            <div className="grid-1 grid gap-8 md:grid-cols-2 grid-cols-4">
              <div className="">
                <h6
                  className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                  
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-4 w-4">
  <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
  <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
  <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
</svg>

                  KITCoEK 
                </h6>
                <p className="md:text-sm">
                  An institute established in 1983, KIT(Autonomous) reflects
                   the vision of leading industrialists and educationalists.
                  
                </p>
              </div>
              <div className="">
                <h6
                  className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  About
                </h6>
                <p className="mb-4">
                  <a href="#!" className="text-white md:text-sm hover:cursor-pointer hover:text-orange-400 "
                    >About KITCoEK</a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-white md:text-sm hover:cursor-pointer hover:text-orange-400 "
                    >Founder Trustees</a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-white md:text-sm hover:cursor-pointer hover:text-orange-400 "
                    >Board Of Directors</a>
                </p>
                <p>
                  <a href="#!" className="text-white md:text-sm hover:cursor-pointer hover:text-orange-400 "
                    > IQAC</a>
                </p>
              </div>
              <div className="">
                <h6
                  className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Useful links
                </h6>
                <p className="mb-4">
                  <a href="#!" className="text-white md:text-sm hover:cursor-pointer hover:text-orange-400 "
                    >Notice</a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-white md:text-sm hover:cursor-pointer hover:text-orange-400 "
                    >E-Cell</a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-white md:text-sm hover:cursor-pointer hover:text-orange-400 "
                    >Alumni</a>
                </p>
                <p>
                  <a href="#!" className="text-white md:text-sm hover:cursor-pointer hover:text-orange-400 "
                    >Apply to KIT</a>
                </p>
              </div>
              <div className=" ">
                <h6
                  className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Contact
                </h6>
                <p className="mb-4 flex items-center justify-center  md:justify-start">
                  <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5">
                    <path
                      d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path
                      d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg> 
                  </span>
                  <span className="hover:cursor-pointer hover:text-orange-400 text-start md:text-sm">R.S. No. 199B/1-3, Gokul - Shirgoan, Kolhapur - 416 234, Maharashtra </span>
                </p>
                <p className="mb-4 flex items-center justify-center md:justify-start ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5">
                    <path
                      d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path
                      d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  <span className="hover:cursor-pointer hover:text-orange-400 text-start md:text-sm">info@kitcoek.in</span>
                </p>
                <p className="mb-4 flex items-center justify-center md:justify-start ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd" />
                  </svg>
                  <span className="hover:cursor-pointer hover:text-orange-400 text-start md:text-sm">+917769001199</span>
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5">
  <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
  <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
</svg>

                  <span className="hover:cursor-pointer hover:text-orange-400 text-start md:text-sm"> +919168781199</span>
                </p>
              </div>
            </div>
          </div>

          <div className=" bg-[#443b3c] -mt-8 p-8 text-base text-center">
            <span>© 2023 Copyright : </span>
            <a className="font-semibold text-white "
              href="https://tailwind-elements.com/"
              > Hashinclude
            </a>
          </div>
        </footer> 
      </section>
    </footer>
  )
}
export default Footer
