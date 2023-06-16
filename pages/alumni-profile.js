import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/alumni/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"
import React, { useEffect } from "react"
import { useState } from "react"
import dynamic from 'next/dynamic'
import axios from "axios"
import { getTokenData,isUserSignedIn } from "../utils/auth"
import { useRouter } from "next/router"
import PreLoader from "../components/preLoader"

const SelectLocation = dynamic(() => import('../components/Map/selectLocation'), {
    ssr: false,
  })

  

const CseEngineeringMous = (props) => {

    const router = useRouter()

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

    const [preLoader, setPreLoader] = React.useState(0);

    const [editProfile, setEditProfile] = React.useState(false)
    const [modalToggle, setModalToggle] = React.useState("");

    const [tempProfileData,setTempProfileData] = useState({
        "photoUrl":"",
    "name":{
        "first_name":"",
        "middle_name":"",
        "last_name":""
    },
    "date_of_birth":"",
    "phone":"",
    "pass_out_year":"",
    "branch":"",
    "company":"",
    "designation":"",
    "email":"",
    "password":"",
    "permanent_address":{
        "permanent_street":"",
        "permanent_district":"",
        "permanent_state":"",
        "permanent_country":""
    },
    "current_address":{
        "display_name":"",
        "address":{},
        "lat":{"$numberDouble":"19.1638176"},
        "lon":{"$numberDouble":"77.3111008"}
    },
    "accountStatus":"PENDING",
    "image":{},
    "bytes":""
    });

    useEffect(async()=>{
        try {
            let token = localStorage.getItem('token')
            if(isUserSignedIn()){
                 let response = await axios.post(process.env.SERVER_API+"/api/alumni/profile", { id: getTokenData(token).id },{
                    headers: {
                      'Authorization': token
                    },
                  });
                
                 if (response.status === 200) {
                    setTempProfileData(response.data)
                } else {
                    console.log('Post request failed');
                }
            }else{
                router.push('/alumni');
            }
        } catch (error) {
            console.log("From Profile Error:",error.message)
        }
      
    },[])

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

            if (file && name=='image') {
                const fileLocation = URL.createObjectURL(file);

                setTempProfileData((prevState) => ({
                ...prevState,
                photoUrl: fileLocation,
                }));

                setTempProfileData((prevState) => ({
                    ...prevState,
                    image: file,
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

      const handleSaveClick = async () => {
       try {
        setPreLoader(1)
        let token = localStorage.getItem('token')

        const formData = new FormData();
        formData.append('image', tempProfileData.image); // Append the selected file to the FormData object

        formData.append("document", JSON.stringify(tempProfileData));

        await axios.put(process.env.SERVER_API+"/api/alumni/", formData,{
                    headers: {
                      'Authorization': token
                    },
                  }).then((response)=>{
                    setPreLoader(0)
                    setEditProfile(false);
                  }).catch((err)=>{
                    console.log(err)
                  })
       } catch (error) {
         console.log(error)
       }
        
      };


    return (
        <DefaultLayout modalToggle = {modalToggle} setModalToggle = {setModalToggle}> 
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
                               
                               
                               <button onClick={()=>{setEditProfile(1)}} type="button" className="flex  items-center justify-center px-4 sm:px-2 py-2 text-sm sm:text-xs font-medium text-white rounded-lg bg-orange-400 hover:bg-primary    ">
										
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`h-5 w-5 mr-2 sm:h-3 sm:w-3 sm:mr-1 `}>
                                            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                                            <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                                        </svg>


                                        Edit Profile
                                      </button>
                               
                                {/* <div onClick={()=>{setEditProfile(true)}} className="border-2 p-1 sm:p-2 sm:border-[1px] rounded-lg border-primary hover:border-orange-300 text-xl sm:text-xs text-primary hover:cursor-pointer hover:text-orange-300">Edit Profile</div> */}

                             
                            </div>
                            <p className="text-xs mb-9 text-[#24346D] ml-7 sm:ml-4">Update your photo and personal details here</p>
                            {/* -------------- */}
                           

                            {
                                editProfile ?
                                <div>
                                        <div className="flex m-6 gap-6">
                                                <div className=" bg-[#24346D] h-[170px] w-[190px]  shadow-lg flex items-center justify-center rounded-lg  ">
                                                        
                                                        {tempProfileData.photoUrl ?
                                                                            <img className="h-[170px] w-[190px] p-1 rounded-lg" src={tempProfileData.photoUrl?tempProfileData.photoUrl:"images/awatar.png"} alt="Large avatar"/>
                                                                            :
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-28 h-28 text-white">
                                                                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                                                                            </svg>
                                                                        }
                                                    
                                                    </div>
                                                <div className="flex items-center justify-center w-1/4 sm:w-1/2 ">
                                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-fit border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                        <div className="flex flex-col items-center justify-center pt-5 sm:pt-4 sm:pb-5 pb-6">
                                                            <svg aria-hidden="true" className="w-10 sm:w-8 sm:h-8 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                            <p className="mb-2 text-sm sm:text-xs text-[#24346D] dark:text-gray-400"><span className="font-semibold">Click To Upload</span> </p>
                                                            <p className="text-xs text-[#24346D] dark:text-gray-400 text-center">PNG, JPG  (MAX. 800x400px)</p>
                                                        </div>
                                                        <input id="dropzone-file" name="image" onChange={handleChange}  type="file" className="hidden" />
                                                    </label>
                                                </div>
                                                </div>
                                <div className="my-2">
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your bytes</label>
                                    <textarea id="message" rows="4" name="bytes" onChange={handleChange} value={tempProfileData.bytes} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                                </div>
                                <div className="grid gap-2 mb-2 2xl:grid-cols-4 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                        <input type="text" id="first_name"name="name.first_name" onChange={handleChange}  value={tempProfileData.name.first_name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="middle_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middle name</label>
                                        <input type="text" id="middle_name" name="name.middle_name" onChange={handleChange}  value={tempProfileData.name.middle_name}className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Max" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                        <input type="text" id="last_name" name="name.last_name" onChange={handleChange}  value={tempProfileData.name.last_name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="date_of_birth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date Of Birth</label>
                                        <input type="date" id="date_of_birth" name="date_of_birth" onChange={handleChange}  value={tempProfileData.date_of_birth} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="02/06/2000" required/>
                                    </div>    
                                    <div>
                                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                        <input type="number" id="phone" name="phone" onChange={handleChange} value={tempProfileData.phone} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="pass_out_year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pass out Year</label>
                                        <input type="number" id="pass_out_year" name="pass_out_year" onChange={handleChange} value={tempProfileData.pass_out_year} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2019" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                                    </div> 
                                    <div className="mb-2 col-span-2 ">
                                        <label htmlFor="email" className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                        <input type="email" id="email" name="email" onChange={handleChange} value={tempProfileData.email} className="bg-gray-50 border border-primary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
                                    </div> 
                                    <div className="mb-2">
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" id="password"  name="password" onChange={handleChange} value={tempProfileData.password} className={` border-primary   bg-gray-50 border text-sm rounded-lg  block w-full p-2.5  `} placeholder="•••••••••" required/>
                                    </div> 
                                      
                                    <div >
                                            <label htmlFor="branch" className="text-base font-medium text-gray-900"> Branch </label>
                                            <select id="branch" required name="branch"  onChange={handleChange}  value={tempProfileData.branch}  autoComplete="branch-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
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
                                        <input type="text" id="company" name="company" onChange={handleChange} value={tempProfileData.company} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hashinclude Org" required/>
                                    </div>  
                                    
                                    <div>
                                        <label htmlFor="designation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Designation</label>
                                        <input type="text" id="designation" name="designation" onChange={handleChange} value={tempProfileData.designation} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Software Engineer" required/>
                                    </div>
                                   
                                
                                </div>
                              
                                <div className="mb-2">
                                    <label htmlFor="permanent" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Permanent address</label>
                                  <div className="grid gap-2 mb-2 2xl:grid-cols-4 md:grid-cols-2">
                                  <input type="text" id="permanent_street" name="permanent_address.permanent_street" onChange={handleChange} value={tempProfileData.permanent_address.permanent_street}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Street / House No."  required/>
                                    <input type="text" id="permanent_district"  name="permanent_address.permanent_district" onChange={handleChange} value={tempProfileData.permanent_address.permanent_district} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="District" required/>
                                    <input type="text" id="permanent_state" name="permanent_address.permanent_state" onChange={handleChange} value={tempProfileData.permanent_address.permanent_state}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="State" required/>
                                    <input type="text" id="permanent_country" name="permanent_address.permanent_country" onChange={handleChange} value={tempProfileData.permanent_address.permanent_country}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Country" required/>
          
                                  </div>
                                </div> 
                                <div className="mb-2">
                                    <label htmlFor="current_address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current address</label>
                                    <input type="text" id="current_address"  onClick={()=>{setShowMap(1)}} name="current_address"  value={tempProfileData.current_address.display_name}  className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select Location On Map"  required/>
                                </div> 
                                {editProfile?showMap?<SelectLocation position={position}  setPosition={setPosition} setShowMap={setShowMap} setLocation={setLocation} />:null:null}
                               <div className="flex flex-row mt-10 gap-4">
                               <div onClick={()=>{setEditProfile(false)}} className="border-2  w-fit p-1 sm:p-2 sm:border-[1px] rounded-lg border-red-500 hover:border-red-300 text-xl sm:text-base font-semibold text-red-500 hover:cursor-pointer hover:text-red-300">Cancel</div>
                                <div onClick={()=>{setEditProfile(false),handleSaveClick()}} className="border-2 w-fit p-1 sm:p-2 sm:border-[1px] rounded-lg border-primary hover:border-orange-300 text-xl sm:text-base text-primary hover:cursor-pointer hover:text-orange-300">Update</div>
                               </div>
                              </div>  
                                :
                                <div className="grid grid-cols-1">   
                                    {/* cards */}
                                    <div className="flex justify-center mt-2 ml-14 sm:ml-0 sm:mt-20 ">
                                        <div className="w-full">
                                            <div className="block p-6 bg-white shadow-lg rounded-lg ">
                                                <div className="flex flex-row sm:flex-col gap-x-2">
                                                    {/* profile image */}
                                                    <div className="  -ml-20 sm:-ml-0 bg-[#24346D] h-[170px] w-[190px]  shadow-lg flex items-center justify-center rounded-lg  sm:-mt-20 ">
                                                        
                                                        {tempProfileData.photoUrl?
                                                                            <img className="h-[170px] w-[190px] p-1 rounded-lg" src={tempProfileData.photoUrl?tempProfileData.photoUrl:"images/awatar.png"} alt="Large avatar"/>
                                                                            :
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-28 h-28 text-white">
                                                                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                                                                            </svg>
                                                                        }
                                                    
                                                    </div>
                                                    {/* profile body */}
                                                    <div className="grid grid-cols-2 sm:grid-cols-1 w-full items-start justify-start divide-x-[3px] sm:divide-x-0 sm:divide-y-2 divide-primary ml-6 sm:ml-0 ">
                                                        <div className="px-2 sm:px-0 sm:py-2 h-full">
                                                            <p className="font-semibold text-xl my-2  text-[#24346D]">
                                                            {tempProfileData.name.first_name} {tempProfileData.name.middle_name} {tempProfileData.name.last_name}
                                                            </p>
                                                            <p className=" my-2  text-[#24346D] ">
                                                            <span className="font-semibold">  Date Of Birth :</span> {tempProfileData.date_of_birth}
                                                            </p>
                                                            <p className=" my-2  text-[#24346D] ">
                                                            <span className="font-semibold">  Branch :</span> {tempProfileData.branch}
                                                            </p>
                                                            <p className=" my-2  text-[#24346D] ">
                                                            <span className="font-semibold"> Batch Year :</span> {tempProfileData.pass_out_year}
                                                            </p>
                                                        </div>
                                                        <div className="px-2 sm:px-0 sm:py-2 h-full">
                                                            <p className="mb-0 font-semibold text-primary">
                                                            <span className="font-semibold"> Email :</span> {tempProfileData.email}
                                                            </p>
                                                            <p className="mb-0 font-semibold text-primary">
                                                            <span className="font-semibold"> Password :</span> ********
                                                            </p>
                                                            <p className=" my-2  text-[#24346D] ">
                                                            <span className="font-semibold"> Mobile :</span> {tempProfileData.phone}
                                                            </p>
                                                            <p className=" my-2  text-[#24346D] ">
                                                            <span className="font-semibold"> Current organisation :</span> {tempProfileData.company}
                                                            </p>
                                                            <p className=" my-2  text-[#24346D] ">
                                                            <span className="font-semibold">Designation :</span> {tempProfileData.designation}
                                                            </p>
                                                        </div>
                                                    </div>
                                                
                                                </div>
                                                <div className="mt-8 sm:-mt-4">
                                                        <p className=" my-2  text-[#24346D]  ">
                                                        <span className="font-semibold">Permanent address :</span> {tempProfileData.permanent_address.permanent_street}, {tempProfileData.permanent_address.permanent_district}, {tempProfileData.permanent_address.permanent_state}, {tempProfileData.permanent_address.permanent_country}
                                                        </p>
                                                        <p className=" my-2  text-[#24346D]  ">
                                                        <span className="font-semibold">Current address :</span>  {tempProfileData.current_address.display_name}
                                                        </p>                 
                                                </div>                       
                                            </div>
                                        </div>
                                    </div>
                                    {/* cards */}
                                    <div className="mt-8  sm:ml-1 mb-4 sm:mb-2 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit justify-between">
                                            <div className="flex h-fit items-center align-middle">
                                            <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                                Bytes 
                                            </div>
                                    </div>
                                    <div className="w-full  mt-4 bg-white shadow-lg rounded-lg px-3 py-4">                                   
                                        <p className="text-[#24346D]">
                                                {tempProfileData.bytes? tempProfileData.bytes:"--------  "}                                
                                        </p>
                                    </div>
                                </div>
                            }
                            
                        </section>


                        {/* -------------col2--------------- */}
                        <div className="flex flex-col justify-start sm:mx-1"><QuickLinksCard setModalToggle = {setModalToggle} />  </div>


                    </div>
                </section>
                <Footer />
            </div>
            {preLoader?<PreLoader />:null}
        </DefaultLayout>
    )
}

export default CseEngineeringMous
