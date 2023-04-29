import React from "react";
// import SelectLocation from "../Map/selectLocation";
import dynamic from 'next/dynamic'

const SelectLocation = dynamic(() => import('..//Map/selectLocation'), {
    ssr: false,
  })
export default function Modal(props) {
  const [authToggle, setAuthToggle] = React.useState(0);
  const [showMap, setShowMap] = React.useState(0);
  const [locationName, setLocationName] = React.useState(null);
  const center = {
    lat: 51.505,
    lng: -0.09,
  }
  const [position, setPosition] = React.useState(center)
  
  
  return (
    <>
      {props.modalToggle ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className={`relative ${authToggle  ? "w-screen":"w-auto"}  md:w-screen my-6 mx-auto max-w-3xl max-h-screen`}>
              {/*content*/}
              <div className="border-0 my-2 rounded-lg shadow-lg relative flex flex-col w-full  bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start gap-6 justify-between p-5  border-b border-solid border-slate-200 rounded-t">
              
              <span><h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-lg dark:text-white">
                 {authToggle==0 ? "Sign in to your account":"Create your account" } 
              </h1></span>
                <button onClick={()=>{setAuthToggle(!authToggle)}} type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-slate-50 hover:text-primary focus:z-10 focus:ring-1  dark:bg-gray-800 dark:text-gray-400  dark:hover:text-white dark:hover:bg-gray-700">
                  {authToggle==0 ? "SignUp":"SignIn" } 
                  </button>

                 
                </div>
                <form className="" action="#">

                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {authToggle == 0 ? 

                  <div className="">
                    
                    <div className="mb-6">
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                      <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="flex items-start mb-6">
                      <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300   dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                      </div>
                      <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
              
                  </div>
                  : showMap ? <SelectLocation position={position} setPosition={setPosition} setShowMap={setShowMap} setLocationName={setLocationName} />:
                    <div>
                      

<div className="grid gap-2 mb-2 2xl:grid-cols-4 md:grid-cols-2">
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div>
            <label htmlFor="middle_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middle name</label>
            <input type="text" id="middle_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Max" required/>
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
        <div>
            <label htmlFor="date_of_birth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date Of Birth</label>
            <input type="date" id="date_of_birth" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="02/06/2000" required/>
        </div>    
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="number" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
        <div>
            <label htmlFor="pass_out_year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pass out Year</label>
            <input type="number" id="pass_out_year" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2019" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>   
        <div >
                <label for="branch" className="text-base font-medium text-gray-900"> Branch </label>
                <select id="branch" required name="branch" autocomplete="branch-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Biotechnology Engineering</option>
                  <option>Civil Engineering</option>
                  <option>Computer Sci. & Engineering</option>
                  <option>Computer Science & Business Systems</option>
                  <option>Computer Sci. & Engg. [Data Science]</option>
                  <option>Computer Sci. & Engg. [AI & ML]</option>
                  <option>Electrical Engineering</option>
                  <option>Electronics & Telecomm Engineering</option>
                  <option>Civil & Environmental Engineering</option>
                  <option>Mechanical Engineering</option>
                </select>
        </div>     
        <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current organisation</label>
            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hashinclude Org" required/>
        </div>  
        
        <div>
            <label htmlFor="designation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Designation</label>
            <input type="url" id="designation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Software Engineer" required/>
        </div>
        <div className="mb-2">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
    </div> 
    <div className="mb-2">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        
        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
    </div> 
    <div className="mb-2">
        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
        <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
    </div> 
    </div>
  
    <div className="mb-2">
        <label htmlFor="permanent" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Permanent address</label>
       <div className="grid gap-2 mb-2 2xl:grid-cols-4 md:grid-cols-2">
       <input type="text" id="permanent_street" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Street / House No."  required/>
        <input type="text" id="permanent_district" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="District" required/>
        <input type="text" id="permanent_state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="State" required/>
        <input type="text" id="permanent_country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Country" required/>

       </div>
    </div> 
    <div className="mb-2">
        <label htmlFor="current_address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current address</label>
        <input type="text" id="current_address" readonly="readonly" onClick={()=>{setShowMap(1)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select Location On Map" value={locationName} required/>
    </div> 
  
                    </div>
}

                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setModalToggle("")}
                  >
                    Close
                  </button>
                  <button
                    className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}