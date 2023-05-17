import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/alumni/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"
import React, { useEffect } from "react"
import { useState } from "react"
import dynamic from 'next/dynamic'


const SelectLocation = dynamic(() => import('../components/Map/selectLocation'), {
    ssr: false,
  })
const CseEngineeringMous = () => {

    const [showMap, setShowMap] = React.useState(0);
    const [location, setLocation] = React.useState({
        display_name:"",
        address:"",
        lat:0,
        log:0,
    });
    const center = {
        lat: 51.505,
        lng: -0.09,
    }
    const [position, setPosition] = React.useState(center)
//   map ^

    const [editProfile, setEditProfile] = React.useState(false)
    const [name, setName] = React.useState("false")
    const [tempName, setTempName] = useState(name);
    const [profileData,setProfileData] = useState({
        photoUrl:"",
        name:{
        first_name: "first_name",
        middle_name: "middle_name",
        last_name: "last_name",
        },
        date_of_birth: "date_of_birth",
        phone:"phone",
        pass_out_year: "pass_out_year",
        branch: "branch",
        company: "company",
        designation: "designation",
        email: "email",
        password: "password",
        permanent_address:{
        permanent_street : "permanent_street",
        permanent_district: "permanent_district",
        permanent_state: "permanent_state",
        permanent_country: "permanent_country",
        },
        current_address : {
            display_name:"display_name",
            address:"",
            lat:0,
            lon:0,
        }
    });
    const [tempProfileData,setTempProfileData] = useState({
        photoUrl:"Text",
        name:{
        first_name: "first_name",
        middle_name: "middle_name",
        last_name: "last_name",
        },
        date_of_birth: "date_of_birth",
        phone:"phone",
        pass_out_year: "pass_out_year",
        branch: "branch",
        company: "company",
        designation: "designation",
        email: "email",
        password: "password",
        permanent_address:{
        permanent_street : "permanent_street",
        permanent_district: "permanent_district",
        permanent_state: "permanent_state",
        permanent_country: "permanent_country",
        },
        current_address : {
            display_name:"display_name",
            address:"",
            lat:0,
            lon:0,
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [parentKey, childKey] = name.split('.');
            setTempProfileData((prevState) => ({
              ...prevState,
              [parentKey]: {
                ...prevState[parentKey],
                [childKey]: value,
              },
            }));
          } else {
            setTempProfileData((prevState) => ({
              ...prevState,
              [name]: value,
            }));
          }

          const file = e.target.files?e.target.files[0]:null; // Get the first selected file

  if (file) {
    const fileLocation = URL.createObjectURL(file);
    console.log('File location:', fileLocation);

    setTempProfileData((prevState) => ({
      ...prevState,
      photoUrl: fileLocation,
    }));
    setProfileData((prevState) => ({
        ...prevState,
        photoUrl: fileLocation,
      }));
  }
      };
      

      useEffect(()=>{
        setTempProfileData((prevState) => ({
            ...prevState,
            ["current_address"]: {
              ...prevState["current_address"],
              ["display_name"]: location.display_name,
              ["address"]: location.address,
              ["lat"]: location.lat,
              ["lon"]: location.lon,
            },
          }));
      },[location])

      const handleSaveClick = () => {
        setEditProfile(false);
        setProfileData(tempProfileData);
      };

      useEffect(()=>{console.log("profile",profileData)},[profileData])

    return (
        <DefaultLayout>
            <div className="w-full ">
                <section className="flex flex-col h-[250px] items-center w-full relative">
                    <img
                        src="/images/AboutUs/bgcircle.png"
                        className="w-24 h-24 absolute top-0 left-[25%] z-10 sm:w-16 sm:h-16 sm:top-[5%]"
                        alt=""
                    />

                    <img
                        src="/images/AboutUs/bgcircle.png"
                        className="w-32 h-32 absolute top-[10%] left-[5%] z-10 sm:w-24 sm:h-24 sm:top-[35%]"
                        alt=""
                    />

                    <img
                        src="/images/AboutUs/bgcircle.png"
                        className="w-40 h-40 absolute top-[10%] left-[60%] z-10 sm:w-20 sm:h-20 sm:top-[17%]"
                        alt=""
                    />
                    <img
                        src="/images/AboutUs/bgcircle.png"
                        className="w-28 h-28 absolute top-[12.5%] left-[85%] z-10 sm:hidden"
                        alt=""
                    />
                    <div className="absolute w-full h-[250px] top-0 left-0 bg-[#24346D] z-0"></div>
                    <h1
                        data-aos="zoom-in"
                        data-aos-delay="0"
                        className="w-[75%] mt-14 sm:text-xl  text-4xl font-bold text-center text-white z-20"
                    >
                        Alumni Profile
                    </h1>
                    <br></br>
                    <br></br>
                    <h6
                        data-aos="zoom-in"
                        data-aos-delay="0"
                        className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
                    >
                      <a href="alumni">
            <span className="hover:text-primary hover:cursor-pointer">
              {" "}
              
              Alumni Home
            </span>{" "}</a> <span className=" ">|</span> Alumni Profile

                    </h6>
                </section>
                {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}

                <section className="overflow-hidden max-w-auto mx-auto md:mx-0  bg-secondary">



                <div className="grid grid-cols-3  sm:px-0 px-2 sm:flex sm:flex-col pb-20 mt-6">

                <section className="col-start-1  col-end-3 sm:mr-0 sm:ml-0 sm:mt-6 sm:px-4 sm:pb-10   pb-20 mx-10  h-fit   ">
                            <div className="mt-6 sm:mt-0 sm:ml-1 mb-4 sm:mb-2 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit justify-between">
                               <div className="flex h-fit items-center align-middle">
                               <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                PROFILE DETAILS
                               </div>
                               
                               {
                                editProfile?
                                <div onClick={()=>{setEditProfile(false),handleSaveClick()}} className="border-2 p-1 sm:p-2 sm:border-[1px] rounded-lg border-primary hover:border-orange-300 text-xl sm:text-xs text-primary hover:cursor-pointer hover:text-orange-300">Save Changes</div>
                                :
                                <div onClick={()=>{setEditProfile(true)}} className="border-2 p-1 sm:p-2 sm:border-[1px] rounded-lg border-primary hover:border-orange-300 text-xl sm:text-xs text-primary hover:cursor-pointer hover:text-orange-300">Edit Profile</div>

                               }
                            </div>
                            <p className="text-xs mb-9 text-[#24346D] ml-7 sm:ml-4">Update your photo and personal details here</p>
                            {/* -------------- */}
                           
                            <div className="grid grid-cols-1 divide-y-2 ">

                                    <div className="grid grid-cols-2 py-5">
                                        <div className=" font-semibold text-lg sm:text-sm">Your Photo</div>
                                        <div className="text-lg sm:text-sm flex sm:flex-col gap-4">
                                        {profileData.photoUrl.length > 5?
                                            <img className="w-32 h-36 rounded" src={profileData.photoUrl?profileData.photoUrl:"images/awatar.png"} alt="Large avatar"/>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-28 h-28 text-[#24346D]">
                                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                                            </svg>
                                        }
                                        

                                            {editProfile?
                                                <div className="flex items-center justify-center w-full  ">
                                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-fit border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                        <div className="flex flex-col items-center justify-center pt-5 sm:pt-4 sm:pb-5 pb-6">
                                                            <svg aria-hidden="true" className="w-10 sm:w-8 sm:h-8 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                            <p className="mb-2 text-sm sm:text-xs text-gray-500 dark:text-gray-400"><span className="font-semibold">Click To Upload</span> </p>
                                                            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG  (MAX. 800x400px)</p>
                                                        </div>
                                                        <input id="dropzone-file" name="photoUrl" onChange={handleChange}  type="file" className="hidden" />
                                                    </label>
                                                </div>
                                             :null}


                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 py-5">
                                        <div className=" font-semibold text-lg sm:text-sm">Name</div>
                                        {editProfile?
                                            <div className=" space-y-2"> 
                                                <input type="text" id="first_name" name="name.first_name" onChange={handleChange} value={tempProfileData.name.first_name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
                                                <input type="text" id="middle_name" name="name.middle_name" onChange={handleChange} value={tempProfileData.name.middle_name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
                                                <input type="text" id="last_name" name="name.last_name" onChange={handleChange} value={tempProfileData.name.last_name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
                                            </div>
                                            :
                                            <div className="text-lg sm:text-sm">{profileData.name.first_name } {profileData.name.middle_name} {profileData.name.last_name}</div>
                                        }
                                        
                                    </div>

                                    <div className="grid grid-cols-2 py-5">
                                        <div className=" font-semibold text-lg sm:text-sm">Date Of Birth</div>
                                        {editProfile?
                                            <input type="date" id="date_of_birth" name="date_of_birth" onChange={handleChange} value={tempProfileData.date_of_birth} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="02/06/2000" required/>
                                            :
                                            <div className="text-lg sm:text-sm">{profileData.date_of_birth }</div>
                                        }
                                    </div>
                                    <div className="grid grid-cols-2 py-5">
                                        <div className=" font-semibold text-lg sm:text-sm">Phone number</div>
                                        {editProfile?
                                            <input type="number" id="phone" name="phone" onChange={handleChange} value={tempProfileData.phone} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                                            :
                                            <div className="text-lg sm:text-sm">{profileData.phone }</div>
                                        }                                    </div>
                                    <div className="grid grid-cols-2 py-5">
                                        <div className=" font-semibold text-lg sm:text-sm">Email address</div>
                                        {editProfile?
                                            <input type="email" id="email" name="email" onChange={handleChange} value={tempProfileData.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
                                            :
                                            <div className="text-lg sm:text-sm">{profileData.email }</div>
                                        }
                                    </div>
                                    <div className="grid grid-cols-2 py-5">
                                        <div className=" font-semibold text-lg sm:text-sm">Password</div>
                                        {editProfile?
                                            <input type="password" id="password" name="password" onChange={handleChange} value={tempProfileData.password} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                                            :
                                            <div className="text-lg sm:text-sm">{profileData.password }</div>
                                        }
                                    </div>
                                    <div className="grid grid-cols-2 py-5">
                                        <div className=" font-semibold text-lg sm:text-sm">Pass out Year</div>
                                        {editProfile?
                                        <input type="number" id="pass_out_year" name="pass_out_year" onChange={handleChange} value={tempProfileData.pass_out_year} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2019" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>

                                            :
                                            <div className="text-lg sm:text-sm">{profileData.pass_out_year }</div>
                                        }                                    </div>
                                    <div className="grid grid-cols-2 py-5">
                                        <div className=" font-semibold text-lg sm:text-sm">Branch</div>
                                        {editProfile?
                                            <select id="branch" required name="branch"  onChange={handleChange} value={tempProfileData.branch} autoComplete="branch-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option value=""  selected>Select</option>
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
                                            :
                                            <div className="text-lg sm:text-sm">{profileData.branch }</div>
                                        }                                    </div>
                                    <div className="grid grid-cols-2 py-5">
                                        <div className=" font-semibold text-lg sm:text-sm">Current organisation</div>
                                        {editProfile?
                                            <input type="text" id="company" name="company" onChange={handleChange} value={tempProfileData.company} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hashinclude Org" required/>
                                            :
                                            <div className="text-lg sm:text-sm">{profileData.company }</div>
                                        }                                    </div>
                                    <div className="grid grid-cols-2 py-5">
                                        <div className=" font-semibold text-lg sm:text-sm">Designation</div>
                                        {editProfile?
                                            <input type="url" id="designation" name="designation" onChange={handleChange} value={tempProfileData.designation} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Software Engineer" required/>
                                            :
                                            <div className="text-lg sm:text-sm">{profileData.designation }</div>
                                        }                                    </div>
                                    
                                    <div className="grid grid-cols-2 py-5">
                                        <div className=" font-semibold text-lg sm:text-sm">Permanent address</div>
                                        {editProfile?
                                            <div className=" space-y-2"> 
                                                <input type="text" id="permanent_street" name="permanent_address.permanent_street" onChange={handleChange} value={tempProfileData.permanent_address.permanent_street} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Street / House No."  required/>
                                                <input type="text" id="permanent_district" name="permanent_address.permanent_district" onChange={handleChange} value={tempProfileData.permanent_address.permanent_district} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="District" required/>
                                                <input type="text" id="permanent_state" name="permanent_address.permanent_state" onChange={handleChange} value={tempProfileData.permanent_address.permanent_state} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="State" required/>
                                                <input type="text" id="permanent_country" name="permanent_address.permanent_country" onChange={handleChange} value={tempProfileData.permanent_address.permanent_country} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Country" required/>
                                            </div>
                                            :
                                            <div className="text-lg sm:text-sm">{tempProfileData.permanent_address.permanent_street}, {tempProfileData.permanent_address.permanent_district}, {tempProfileData.permanent_address.permanent_state}, {tempProfileData.permanent_address.permanent_country}</div>
                                        }
                                    </div>
                                    <div className="grid grid-cols-2 py-5">
                                        <div className=" font-semibold text-lg sm:text-sm">Current address</div>
                                        {editProfile?
                                            <input type="text" id="current_address" readOnly="readonly" onClick={()=>{setShowMap(1)}}  name="current_address"  value={tempProfileData.current_address.display_name}   className="bg-gray-50 border border-gray-300 hover:cursor-pointer text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select Location On Map" required/>
                                            :
                                            <div className="text-lg sm:text-sm">{profileData.current_address.display_name }</div>
                                            
                                        }
                                        
                                    </div>
                                    {editProfile?showMap?<SelectLocation position={position}  setPosition={setPosition} setShowMap={setShowMap} setLocation={setLocation} />:null:null}
                            </div>
                         
                        </section>


                        {/* -------------col2--------------- */}
                        <div className="flex flex-col justify-start sm:mx-1"><QuickLinksCard/>  </div>


                    </div>
                </section>
                <Footer />
            </div>
        </DefaultLayout>
    )
}

export default CseEngineeringMous
