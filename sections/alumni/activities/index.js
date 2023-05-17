import React from "react";
import ForumComments from "./forumComments";
import ActivitiesCard from "../../../components/ActivitiesCard";

const Activity = (props) =>{
	let ActivityList = props.ActivityList
	const [readMore, setReadMore] = React.useState("");
	const [readMoreIndex, setReadMoreIndex] = React.useState("");

    return(
    <>

<div className={`  overflow-y-auto ${!readMore?"h-[900px]":""} text-[#24346D] `}>
	{
		readMore ? 	
		<>
			<ActivitiesCard index = {readMoreIndex} setReadMoreIndex ={setReadMoreIndex} ActivityData = {ActivityList[readMoreIndex]} readMore = {readMore}  setReadMore  = {setReadMore} />
			{/* <ForumComments /> */}
		</>
		:
		ActivityList.map((item,index)=>(
			<div className="">
				<ActivitiesCard  index = {index} setReadMoreIndex ={setReadMoreIndex} ActivityData = {item} readMore = {readMore}  setReadMore  = {setReadMore}  />
				<div className="h-[0.2px] w-full bg-slate-300"></div>
			</div>
		
		))
	}
	

   
</div>

    </>
        )
}

export default Activity