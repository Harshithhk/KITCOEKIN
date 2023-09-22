import React, { useEffect } from "react";
import ForumComments from "./forumComments";
import ForumCard from "../../../components/ForumCard";
import { getTokenData, isUserSignedIn } from "../../../utils/auth";
import { useRouter } from 'next/router';
import PreLoader from "../../../components/preLoader";
import axios from "axios";

const Forum = (props) =>{
	let ForumList = props.ForumList
	const [readMoreIndex, setReadMoreIndex] = React.useState("");
	const [actionButton, setActionButton] = React.useState(0);
	const [filterButton, setFilterButton] = React.useState(0);
	const [addButton, setAddButton] = React.useState(0);
	const [editButton, setEditButton] = React.useState(0);
	const [isSignedIn, setIsSignedIn] = React.useState(0);
	const router = useRouter();
	const [selectedOption, setSelectedOption] = React.useState('allTopics');
	const [tempForumData, setTempForumData] = React.useState({
        "alumniUid": "",
        "title": "",
        "body": "",
    });
	const [editTempForumData, setEditTempForumData] = React.useState({});
	const [perLoader, setPreloader] = React.useState(0)

	const handleOptionChange = (event) => {
	  setSelectedOption(event.target.value);
	  if(event.target.value == "myTopics"){
		let token = ""
		if (typeof localStorage !== 'undefined') {
			token = localStorage.getItem('token');
		  }
		const alumniUidToFilter =getTokenData(token).id// Alumni UID to filter
		const filteredArray = ForumList.filter((item) => item.alumniUid === alumniUidToFilter);
		props.setForumList(filteredArray)
	  }else{
		props.setForumList(props.forumTopic)
	  }
	};
	
    const handleInput = (e)=>{
		
        const { name, value } = e.target;
        const filterTitle = name.substring(6);
        // setFilters((prevFilters) => ({
        //     ...prevFilters,
        //     [filterName]: value.toLowerCase()
        //   }));
		console.log(name,value)
		  const filteredData = ForumList.filter((row) => {
			const isTopicMatch = value.toLowerCase() ? row.title.toLowerCase().includes(value.toLowerCase()) : true;
			
			return isTopicMatch
		  });
		
		  // Update the filtered data in the state
		  // console.log("filteredData",filteredData)
		  if(value){
			props.setForumList(filteredData);
		  }else{
			props.setForumList(props.forumTopic);
		  }
		  
    }

	const handleChange = (e)=>{
		const { name, value } = e.target;

		setTempForumData((prevState) => ({
			...prevState,
			[name]: value,
		  }));
	}

	const handleSave = async () =>{
		try {
			if(editButton){
				setPreloader(1)
				let token = ""
			if (typeof localStorage !== 'undefined') {
				token = localStorage.getItem('token');
			  }
			await axios.put(process.env.SERVER_API+"/api/alumni/forum", tempForumData,{
				headers: {
				  'Authorization': token
				},
			  }).then((response)=>{
				setPreloader(0)
				setAddButton(false);
				setEditButton(0)
				router.reload(window.location.pathname)
			}).catch((err)=>{
				console.log(err)
			  })
			}else{
				setPreloader(1)
			let token = ""
			if (typeof localStorage !== 'undefined') {
				token = localStorage.getItem('token');
			  }
			await axios.post(process.env.SERVER_API+"/api/alumni/forum", tempForumData,{
				headers: {
				  'Authorization': token
				},
			  }).then((response)=>{
				setPreloader(0)
				setAddButton(false);
				router.reload(window.location.pathname)
			}).catch((err)=>{
				console.log(err)
			  })
			}
		} catch (error) {
			console.log(error)
		}
		


	}
	

	useEffect(()=>{
		setIsSignedIn(isUserSignedIn())
		if(isUserSignedIn()){
			let token = ""
			if (typeof localStorage !== 'undefined') {
				token = localStorage.getItem('token');
			  }
			const alumniUid =getTokenData(token).id
			setTempForumData((prevState) => ({
				...prevState,
				["alumniUid"]: alumniUid,
			  }))
		}
		
	},[])

	const OnEditButtonPress = () =>{
		setAddButton(1)
		setEditButton(1)
		setTempForumData(editTempForumData)
	}

	const OnDeleteButtonPress = async () =>{
		setPreloader(1)
				let token = ""
			if (typeof localStorage !== 'undefined') {
				token = localStorage.getItem('token');
			  }
			  const url = `${process.env.SERVER_API}/api/alumni/forum?email=${encodeURIComponent(editTempForumData.email)}&_id=${encodeURIComponent(editTempForumData._id)}`;
			  await axios.delete(url,{
				headers: {
				  'Authorization': token
				},
			  }).then((response)=>{
				setPreloader(0)
				router.reload(window.location.pathname)
			}).catch((err)=>{
				console.log(err)
			  })
	}
	
    return(
    <>
		<section className="   h-32 my-10 flex items-center">
                              <div className="max-w-screen-xl  mx-auto  w-full">
                                
                                <div className="relative  shadow-md  rounded-lg">
                                  <div className="flex sm:flex-col  items-center justify-between p-4 sm:p-2 sm:space-y-3 flex-row space-y-0 sm:space-x-0 space-x-4">
                                    <div className={`sm:w-full ${isSignedIn?"w-1/2":"w-full"}`}>
                                      <form className="flex items-center">
                                        <label for="simple-search" className="sr-only">Search</label>
                                        <div className="relative w-full">
                                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                            </svg>
                                          </div>
                                          <input type="text" id="simple-search" onEnter onKeyDown={(event)=>{event.key === "Enter"?event.preventDefault():null}} onChange={handleInput} className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" placeholder="Search" required="" />
                                        </div>
                                      </form>
                                    </div>
                                    <div className={` ${isSignedIn?"flex":"hidden"} sm:flex-col sm:items-stretch justify-end flex-shrink-0 sm:w-full sm:space-y-2 sm:space-x-0 w-auto flex-row space-y-0 items-center space-x-3`}>
                                      <button onClick={()=>{setAddButton(1)}} type="button" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-orange-400 hover:bg-primary    ">
										<svg className={`h-5 w-5 mr-2 `} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" >
											<path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
										</svg>

                                        Add Topic
                                      </button>
                                      <div className={`sm:w-full sm:space-x-0 flex sm:grid grid-cols-1  space-x-3 w-auto`}>
                                        <div className={`${!props.readMore || editTempForumData.alumniUid != tempForumData.alumniUid ?"hidden":null}`}>
										<button onClick={()=>{setActionButton(!actionButton)}} id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown" className="flex items-center justify-center sm:w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg w-auto focus:outline-none  hover:text-primary focus:z-10 " type="button">
                                          <svg className={`-ml-1 mr-1.5 w-5 h-5 ${actionButton ? "rotate-180" : null}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                          </svg>
                                          Actions
                                        </button>
                                        <div id="actionsDropdown" onMouseLeave={()=>{setActionButton(0)}} className={`z-10 absolute ${actionButton ? "block" : "hidden"} mt-2  bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                                          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                                            <li>
                                              <div onClick={()=>{OnEditButtonPress()}} className="hover:cursor-pointer block px-4 py-2 font-medium hover:bg-gray-100 ">Edit</div>
                                            </li>
                                          </ul>
                                          <div className="py-1">
                                            <div onClick={()=>{OnDeleteButtonPress()}}  className="hover:cursor-pointer block px-4 py-2 text-sm font-medium text-red-500 hover:bg-gray-100 ">Delete</div>
                                          </div>
                                        </div>
										</div>
                                        <div className={`${props.readMore ?"hidden":null}`}>
										<button onClick={()=>{setFilterButton(!filterButton)}} id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="flex items-center justify-center sm:w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg w-auto focus:outline-none  hover:text-primary focus:z-10 " type="button">
                                          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-4 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                                          </svg>
                                          Filter
                                          <svg className={`-mr-1 ml-1.5 w-5 h-5 ${filterButton ? "rotate-180" : null} `} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                          </svg>
                                        </button>

                                        <div id="filterDropdown" onMouseLeave={()=>{setFilterButton(0)}} className={`z-10 absolute ${filterButton ? "block" : "hidden"} mt-2  w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700`}>
                                          <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                                            Category
                                          </h6>
                                          <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                                            <li className="flex items-center ">
												<div className="flex items-center mb-2 ">
													<input id="default-radio-1" value="allTopics"  checked={selectedOption === 'allTopics'} onChange={handleOptionChange}  type="radio"   name="topics" className=" hover:cursor-pointer w-4 h-4 text-primary bg-gray-100 border-gray-300 " />
													<label for="default-radio-1"   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 hover:cursor-pointer">All Topics</label>
												</div>
                                            </li>
											
                                            <li className="flex items-center ">
												<div className="flex items-center ">
													<input  id="default-radio-2" value="myTopics" checked={selectedOption === 'myTopics'}onChange={handleOptionChange}  type="radio" name="topics" className="hover:cursor-pointer w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 " />
													<label for="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 hover:cursor-pointer">My Topics</label>
												</div>
                                            </li>
                                          
                                          </ul>
                                        </div>
										</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
        </section>	
		{addButton?
		<>
								<div className="my-4">
                                        <label htmlFor="forum_topic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Forum Topic</label>
                                        <input type="text" id="forum_topic"name="title" onChange={handleChange} value={tempForumData.title} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
                                    </div>
								<div className="my-2">
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Forum Description</label>
                                    <textarea id="message" rows="4" name="body" onChange={handleChange} value={tempForumData.body} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                                </div>
						<div className="flex flex-row mt-10 gap-4">
								<div onClick={()=>{setAddButton(false);setTempForumData({"alumniUid":tempForumData.alumniUid}); setEditButton(0)}} className="border-2  w-fit p-1 sm:p-2 sm:border-[1px] rounded-lg border-red-400 hover:border-orange-500 text-xl sm:text-base font-semibold text-red-400 hover:cursor-pointer hover:text-red-500">Cancel</div>
                                <div onClick={()=>{handleSave()}} className="border-2 w-fit p-1 sm:p-2 sm:border-[1px] rounded-lg border-primary hover:border-orange-300 text-xl sm:text-base text-primary hover:cursor-pointer hover:text-orange-300">Save</div>

						</div>
		</>
		:
		<div className={`  overflow-y-auto ${!props.readMore?"h-[900px]":""} text-[#24346D] `}>
			{
				props.readMore ? 	
				<>
					<ForumCard index = {readMoreIndex} setReadMoreIndex ={setReadMoreIndex} ForumData = {ForumList[readMoreIndex]} readMore = {props.readMore}  setReadMore  = {props.setReadMore} setEditTempForumData ={setEditTempForumData}/>
					<ForumComments />
				</>
				:
				ForumList.map((item,index)=>(
					<>
						<ForumCard  index = {index} setReadMoreIndex ={setReadMoreIndex} ForumData = {item} readMore = {props.readMore}  setReadMore  = {props.setReadMore}  setEditTempForumData ={setEditTempForumData}/>
					
					</>
				
				))
			}
			

		
		</div>
		}				
		{perLoader?<PreLoader />:null}
    </>
        )
}

export default Forum