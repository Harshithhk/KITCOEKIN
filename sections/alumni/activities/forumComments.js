import React from "react";

const ForumComments = () =>{
    return( <section className=" py-8 lg:py-16">
    <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900">Discussion (20)</h2>
      </div>
      <form className="mb-6">
      <div className="grid grid-cols-2 ">
      <div className="m-2">
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">First name</label>
            <input type="text" id="first_name" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
        <div className="m-2">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
        <input type="email" id="email" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
        </div>
      </div>
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200  dark:border-gray-700">
              <label for="comment" className="sr-only">Your comment</label>
              <textarea id="comment" rows="6"
                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none  dark:placeholder-gray-400 "
                  placeholder="Write a comment..." required></textarea>
          </div>
          <button type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
              Post comment
          </button>
      </form>
      <article className="p-6 mb-6 text-base  rounded-lg ">
          <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-2 w-6 h-6 rounded-full">
                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                            </svg>

                          Michael Gough</p>
                  <p className="text-sm text-gray-600 "><time pubdate datetime="2022-02-08"
                          title="February 8th, 2022">Feb. 8, 2022</time></p>
              </div>
              <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400  rounded-lg  focus:ring-4 focus:outline-none focus:ring-gray-50   dark:focus:ring-gray-600"
                  type="button">
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                      </path>
                  </svg>
                  <span className="sr-only">Comment settings</span>
              </button>
             
              <div id="dropdownComment1"
                  className="hidden z-10 w-36  rounded divide-y  shadow  dark:divide-gray-600">
                  <ul className="py-1 text-sm text-gray-700 "
                      aria-labelledby="dropdownMenuIconHorizontalButton">
                      <li>
                          <a href="#"
                              className="block py-2 px-4   ">Edit</a>
                      </li>
                      <li>
                          <a href="#"
                              className="block py-2 px-4   ">Remove</a>
                      </li>
                      <li>
                          <a href="#"
                              className="block py-2 px-4   ">Report</a>
                      </li>
                  </ul>
              </div>
          </footer>
          <p className="text-gray-500 ">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
              instruments for the UX designers. The knowledge of the design tools are as important as the
              creation of the design strategy.</p>
          <div className="flex items-center mt-4 space-x-4">
              <button type="button"
                  className="flex items-center text-sm text-gray-500 hover:underline ">
                  <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  Reply
              </button>
          </div>
      </article>
      <article className="p-6 mb-6 ml-6 lg:ml-12 text-base  rounded-lg ">
          <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-2 w-6 h-6 rounded-full">
                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                            </svg>Jese Leos</p>
                  <p className="text-sm text-gray-600 "><time pubdate datetime="2022-02-12"
                          title="February 12th, 2022">Feb. 12, 2022</time></p>
              </div>
              <button id="dropdownComment2Button" data-dropdown-toggle="dropdownComment2"
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400  rounded-lg  focus:ring-4 focus:outline-none focus:ring-gray-50   dark:focus:ring-gray-600"
                  type="button">
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                      </path>
                  </svg>
                  <span className="sr-only">Comment settings</span>
              </button>
             
              <div id="dropdownComment2"
                  className="hidden z-10 w-36  rounded divide-y  shadow  dark:divide-gray-600">
                  <ul className="py-1 text-sm text-gray-700 "
                      aria-labelledby="dropdownMenuIconHorizontalButton">
                      <li>
                          <a href="#"
                              className="block py-2 px-4   ">Edit</a>
                      </li>
                      <li>
                          <a href="#"
                              className="block py-2 px-4   ">Remove</a>
                      </li>
                      <li>
                          <a href="#"
                              className="block py-2 px-4   ">Report</a>
                      </li>
                  </ul>
              </div>
          </footer>
          <p className="text-gray-500 ">Much appreciated! Glad you liked it ☺️</p>
          <div className="flex items-center mt-4 space-x-4">
              <button type="button"
                  className="flex items-center text-sm text-gray-500 hover:underline ">
                  <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  Reply
              </button>
          </div>
      </article>
      <article className="p-6 mb-6 text-base  border-t border-gray-200 dark:border-gray-700 ">
          <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-2 w-6 h-6 rounded-full">
                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                            </svg>Bonnie Green</p>
                  <p className="text-sm text-gray-600 "><time pubdate datetime="2022-03-12"
                          title="March 12th, 2022">Mar. 12, 2022</time></p>
              </div>
              <button id="dropdownComment3Button" data-dropdown-toggle="dropdownComment3"
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400  rounded-lg  focus:ring-4 focus:outline-none focus:ring-gray-50   dark:focus:ring-gray-600"
                  type="button">
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                      </path>
                  </svg>
                  <span className="sr-only">Comment settings</span>
              </button>
             
              <div id="dropdownComment3"
                  className="hidden z-10 w-36  rounded divide-y  shadow  dark:divide-gray-600">
                  <ul className="py-1 text-sm text-gray-700 "
                      aria-labelledby="dropdownMenuIconHorizontalButton">
                      <li>
                          <a href="#"
                              className="block py-2 px-4   ">Edit</a>
                      </li>
                      <li>
                          <a href="#"
                              className="block py-2 px-4   ">Remove</a>
                      </li>
                      <li>
                          <a href="#"
                              className="block py-2 px-4   ">Report</a>
                      </li>
                  </ul>
              </div>
          </footer>
          <p className="text-gray-500 ">The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.</p>
          <div className="flex items-center mt-4 space-x-4">
              <button type="button"
                  className="flex items-center text-sm text-gray-500 hover:underline ">
                  <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  Reply
              </button>
          </div>
      </article>
      <article className="p-6 text-base  border-t border-gray-200 dark:border-gray-700 ">
          <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-2 w-6 h-6 rounded-full">
                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                            </svg>Helene Engels</p>
                  <p className="text-sm text-gray-600 "><time pubdate datetime="2022-06-23"
                          title="June 23rd, 2022">Jun. 23, 2022</time></p>
              </div>
              <button id="dropdownComment4Button" data-dropdown-toggle="dropdownComment4"
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400  rounded-lg  focus:ring-4 focus:outline-none focus:ring-gray-50   dark:focus:ring-gray-600"
                  type="button">
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                      </path>
                  </svg>
              </button>
             
              <div id="dropdownComment4"
                  className="hidden z-10 w-36  rounded divide-y  shadow  dark:divide-gray-600">
                  <ul className="py-1 text-sm text-gray-700 "
                      aria-labelledby="dropdownMenuIconHorizontalButton">
                      <li>
                          <a href="#"
                              className="block py-2 px-4   ">Edit</a>
                      </li>
                      <li>
                          <a href="#"
                              className="block py-2 px-4   ">Remove</a>
                      </li>
                      <li>
                          <a href="#"
                              className="block py-2 px-4   ">Report</a>
                      </li>
                  </ul>
              </div>
          </footer>
          <p className="text-gray-500 ">Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.</p>
          <div className="flex items-center mt-4 space-x-4">
              <button type="button"
                  className="flex items-center text-sm text-gray-500 hover:underline ">
                  <svg aria-hidden="true" className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  Reply
              </button>
          </div>
      </article>
    </div>
  </section>)
}

export default ForumComments;