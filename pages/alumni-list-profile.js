import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/alumni/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"
import React, { useEffect } from "react"
import { useState } from "react"
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router';
import { isUserSignedIn } from "../utils/auth"
import axios from "axios"

const SelectLocation = dynamic(() => import('../components/Map/selectLocation'), {
    ssr: false,
  })
const CseEngineeringMous = () => {

    const router = useRouter();

    const [modalToggle, setModalToggle] = React.useState("");

    const [isSignedIn, setIsSignedIn] = React.useState(false);


    const [tempProfileData,setTempProfileData] = useState({
    "photoUrl":"",
    "name":{
        "first_name":"",
        "middle_name":"",
        "last_name":""
    },
    "permanent_address":{
        "permanent_street":"",
        "permanent_district":"",
        "permanent_state":"",
        "permanent_country":""
    },
   
    "bytes":"",
    "date_of_birth":"",
    "phone":"",
    "pass_out_year":"",
    "branch":"",
    "company":"",
    "designation":"",
    "email":"",
    "password":"",
    });


    useEffect(async ()=>{
        const { id,fullName,current_address,date_of_birth,photoUrl,pass_out_year,branch,company,designation,email,bytes } = router.query;
        let tempObjs = {
            fullName: fullName,
            current_address: current_address,
            date_of_birth:date_of_birth,
            photoUrl: photoUrl,
            pass_out_year:pass_out_year,
            branch: branch,
            company:company,
            designation:designation,
            email:email,
            bytes:bytes
        }
        if(isUserSignedIn()){
            setIsSignedIn(isUserSignedIn())

            try {
                let token = localStorage.getItem('token')
               
                     let response = await axios.post(process.env.SERVER_API+"/api/alumni/profile", { id: id },{
                        headers: {
                          'Authorization': token
                        },
                      });
                    
                     if (response.status === 200) {
                        let tempData = response.data
                        delete tempData.current_address
                        tempData.current_address = current_address
                    
                        tempData.fullName = tempData.name.first_name +" "+  tempData.name.middle_name +" "+ tempData.name.last_name,
                        delete tempData.name

                        setTempProfileData(tempData)
                    } else {
                        console.log('Post request failed');
                    }
                
            } catch (error) {
                console.log("From Profile Error:",error.message)
            }
        }else{
            setTempProfileData(tempObjs)
        }
        
     
        
        
    },[])
    
      


     


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
                            </div>
                            <p className="text-xs mb-9 text-[#24346D] ml-7 sm:ml-4">To see all the contact details please login</p>
                            {/* -------------- */}
                           

                            
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
                                                            {tempProfileData.fullName}
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
                                                            <p className="mb-2 text-primary">
                                                            <span className="font-semibold"> Email :</span> {tempProfileData.email}
                                                            </p>
                                                            
                                                            <p className=" my-2  text-primary ">
                                                            <span className="font-semibold"> Mobile :</span> {isSignedIn?tempProfileData.phone:"**********"}
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
                                                        <span className="font-semibold">Permanent address :</span>{isSignedIn?tempProfileData.permanent_address.permanent_street +" "+tempProfileData.permanent_address.permanent_district+" "+tempProfileData.permanent_address.permanent_state+" "+tempProfileData.permanent_address.permanent_country:"********** ********** ********** **********"}
                                                        </p>
                                                        <p className=" my-2  text-[#24346D]  ">
                                                        <span className="font-semibold">Current address :</span>  {tempProfileData.current_address}
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
                                                {tempProfileData.bytes}                                
                                        </p>
                                    </div>
                                </div>
                            
                            
                        </section>


                        {/* -------------col2--------------- */}
                        <div className="flex flex-col justify-start sm:mx-1"><QuickLinksCard setModalToggle = {setModalToggle} />  </div>


                    </div>
                </section>
                <Footer />
            </div>
        </DefaultLayout>
    )
}

export default CseEngineeringMous
